import os
from pathlib import Path
from dotenv import load_dotenv
from pydantic_settings import BaseSettings

BASE_DIR = Path(__file__).resolve().parent.parent.parent
load_dotenv(BASE_DIR / ".env")


DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://postgres@localhost:5432/kobradb"
)

class Settings(BaseSettings):
    PROJECT_NAME: str = "Kobra AI"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"

    AWS_ACCESS_KEY_ID: str
    AWS_SECRET_ACCESS_KEY: str
    AWS_REGION: str = "us-west-1"
    S3_BUCKET_NAME: str

    class Config:
        env_file = BASE_DIR / ".env"
        env_file_encoding = "utf-8"
        extra = "ignore"

settings = Settings()