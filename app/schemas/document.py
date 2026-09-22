from enum import Enum
from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional

class DocTypeEnum(str, Enum):
    EMAIL = "Email"
    CONTRACT = "Contract"
    PLEADING = "Pleading"
    MEMORANDUM = "Memorandum"
    SPREADSHEET = "Spreadsheet"
    PDF = "PDF"
    OTHER = "Other"

class PrivilegeStatusEnum(str, Enum):
    NOT_PRIVILEGED = "Not Privileged"
    REDACTED = "Redacted"
    WITHELD = "Witheld in Full"

class PrivilegeBasisEnum(str, Enum):
    NA = "N/A"
    ATTORNEY_CLIENT = "Attorney-Client"
    WORK_PRODUCT = "Work Product"
    COMMON_INTEREST = "Common Interest"

class Jurisdiction(str, Enum):
    US = "US"
    UK = "UK"

class DocumentUpload(BaseModel):
    file_name: str = Field(..., description="The exact name of the PDF, e.g., Complaint_Final.pdf")
    s3_storage_url: str = Field(..., description="The secure cloud storage address where the raw file is saved")
    document_type: str = Field(..., description="The category: Pleading, Motion, Discovery, or Exhibit")
    case_id: str = Field(..., description="The ID linking this document back to its specific lawsuit")

    jurisdiction: Jurisdiction = Field(default=Jurisdiction.US, description="The legal jurisdiction of hte document (US or UK)")

class DocumentResponse(BaseModel):
    id: str = Field(..., description="The unique database ID for this specific file")
    file_name: str
    s3_storage_url: str
    document_type: str
    cases_id: str
    created_at: datetime
    jurisdiction: Jurisdiction

    model_config = {
        "from attributes": True
    }
class DocumentProductionCreate(BaseModel):
    bates_begin: str = Field(..., description="Starting Bates stamp, e.g., KOBRA-000001")
    bates_end: str = Field(..., description="Ending Bates stamp, e.g., KOBRA-000005")
    doc_date: str = Field(..., description="Document date YYYY-MM-DD")
    document_type: DocTypeEnum = Field(default=DocTypeEnum.OTHER)
    custodian: str = Field(..., description="Person or entity from whome document was collected")
    author_sender: str = Field(...,description="Author or email sender")
    recipients: str = Field(..., description="Direct recipients")
    copyees_bcc: Optional[str] = Field(None, description="CC or BCC recipients")
    subject_title: str = Field(..., description="Subject line or document title")
    privilege_status: PrivilegeStatusEnum = Field(default=PrivilegeStatusEnum.NOT_PRIVILEGED)
    privilege_basis: PrivilegeBasisEnum = Field(default=PrivilegeBasisEnum.NA)
    redaction_description: Optional[str] = Field(None, description="Privilege or redaction justification")
    case_id: str = Field(..., description="Lawsuit ID linking this entry")

class DocumentProductionResponse(DocumentProductionCreate):
    id: str = Field(..., description="Unique database record ID")
    created_at: datetime
