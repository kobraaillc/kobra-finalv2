import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent.parent))

from app.services.storage import StorageService

def test_s3_connection():
    try:
        print("Connecting to S3...")
        storage = StorageService()

        test_content = b"KobraAI S3 Cloud Storage Integration Active."
        test_key = "test/hello_kobra.txt"

        print(f"Uploading test payload to key: {test_key}...")
        storage.upload_file_bytes(
            file_bytes=test_content,
            destination_key=test_key,
            content_type="text/plain"
        )
        print("Upload successful!")

        url = storage.generate_presigned_url(test_key)
        print("\nPre-Signed Download URL:")
        print(url)
        print("\nS3 Cloud Bridge is fully operational!")

    except Exception as e:
        print(f"\nConnection Error: {str(e)}")

if __name__ == "__main__":
    test_s3_connection()