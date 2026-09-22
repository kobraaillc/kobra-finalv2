from app.services.storage import StorageService

def run_test():
    try:
        print("Connection to S3...")
        storage = StorageService()

        print("Uploading test payload...")
        key = storage.upload_file_bytes(
            file_bytes=b"Kobra AI S3 Test",
            destination_key="test/hello.txt",
            content_type="text/plain"
        )
        print(f"Success! Key: [key]")

        url = storage.generate_presigned_url(key)
        print(f"\nDownload URL: \n{url}")

    except Exception as e:
        print(f"\nError: {e}")

if __name__ == "__main__":
    run_test()