import boto3
from botocore.exceptions import ClientError
from app.core.config import settings

class StorageService:
    def __init__(self):
        self.s3_client = boto3.client(
            "s3",
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
            region_name=settings.AWS_REGION
        )
        self.bucket_name = settings.S3_BUCKET_NAME

    def upload_file_bytes(self, file_bytes: bytes, destination_key: str, content_type: str = "application/octet-stream") -> str:
        """Uploads raw byte data to S3 and returns the S3 object key."""
        try:
            self.s3_client.put_object(
                Bucket=self.bucket_name,
                Key=destination_key,
                Body=file_bytes,
                ContentType=content_type
            )
            return destination_key
        except ClientError as e:
            raise Exception(f"S3 Upload failed: {str(e)}")

    def generate_presigned_url(self, object_key: str, expiration: int = 3600) -> str:
        """Generates a secure, temporary download link for client access."""
        try:
            return self.s3_client.generate_presigned_url(
                "get_object",
                Params={"Bucket": self.bucket_name, "Key": object_key},
                ExpiresIn=expiration
            )
        except ClientError as e:
            raise Exception(f"Failed to genrate pre-signed URL: {str(e)}")