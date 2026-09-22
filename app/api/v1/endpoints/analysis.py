import os
from fastapi import APIRouter, File, UploadFile, Form

router = APIRouter(prefix="/analysis", tags=["Analysis"])

def extract_text_from_txt(file_object: UploadFile) -> str:
    """Read raw content from a standard text file."""

    raw_bytes = file_object.file.read()
    return raw_bytes.decode("utf-8")
    
def extract_text_from_pdf(file_object: UploadFile) -> str:
    
    return f"[PlaceHolder] Extracted narrative text from PDF: {file_object.filename}"
    
def extract_text_from_excel(file_object: UploadFile) -> str:
    
    return f"[Placeholder] Extracted structural/financial data from Excel: {file_object.filename}"

@router.post("/analyze")
async def analayze_case(
    jurisdiction: str = Form(...),
    case_file: UploadFile = File(...)
):

    filename = case_file.filename
    _, file_extension = os.path.splitext(case_file.filename)
    clean_extension = file_extension.lower()

    if clean_extension == ".txt":
        extracted_content = extract_text_from_txt(case_file)

    elif clean_extension == ".pdf":
        extracted_content = extract_text_from_pdf(case_file)

    elif clean_extension in [".xlsx", ".xls", ".csv"]:
        extracted_content = extract_text_from_excel(case_file)
    
    else:
        extracted_content = f"Unsupported format '{clean_extension}'. Metadata logged safely."
    
    return {
        "status": "Success",
        "metadata": {
            "filename": case_file.filename,
            "detected_format": clean_extension
        },
        "extracted_parameters": {
            "jurisdiction": jurisdiction
        },
        "raw_text_preview": extracted_content
    }
    
        