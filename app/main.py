import os
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1.endpoints import status, analysis, pleadings, contracts
from pypdf import PdfReader
from app.core.database import Base, engine
from app.models import litigation

print("Initializing Kobra AI Database Tables...")
Base.metadata.create_all(bind=engine)
print("Database Tables Initialized Successfully.")

app = FastAPI(title="Kobra AI Backend Engine")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://wwww.localhost:3000",
        "https://wwww.getkobraai.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "Kobra AI Engine is Live and Operational"}

app.include_router(status.router, prefix="/api/v1/status", tags=["status"])
app.include_router(pleadings.router, prefix="/api/v1/pleadings", tags=["pleadings"])
app.include_router(contracts.router, prefix="/api/v1/contracts", tags=["contracts"])
app.include_router(analysis.router, prefix="/api/v1/analysis", tags=["analsysi"])