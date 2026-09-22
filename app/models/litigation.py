import enum
from sqlalchemy import Column, String, DateTime, ForeignKey, Enum as SQLEnum, Date, Text
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.sql import func
from app.core.database import Base
from app.schemas.document import DocTypeEnum, PrivilegeStatusEnum, PrivilegeBasisEnum


class JurisdictionEnum(str, enum.Enum):
    US = "US"
    UK = "UK"

class CaseModel(Base):
    __tablename__ = "cases"

    id = Column(String, primary_key=True, index=True, server_default=func.gen_random_uuid())
    case_name = Column(String, nullable=False)
    litigation_type = Column(String, nullable=False)
    jurisdiction = Column(String, nullable=False)
    case_number = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class DocumentModel(Base):
    __tablename__ = "documents"

    id = Column(String, primary_key=True, index=True, server_default=func.gen_random_uuid())
    file_name = Column(String, nullable=False)
    s3_storage_url = Column(String, nullable=False)
    document_type = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    jurisdiction = Column(
        SQLEnum(JurisdictionEnum),
        default=JurisdictionEnum.US,
        nullable=False
    )


    case_id = Column(String, ForeignKey("cases.id", ondelete="CASCADE"), nullable=False)
    extracted_payload = Column(JSONB, nullable=True)

class ProductionDocumentModel(Base):
    __tablename__ = "production_documents"

    id = Column(String, primary_key=True, index=True, server_default=func.gen_random_uuid())
    bates_begin = Column(String(50), nullable=False, unique=True, index=True)
    bates_end = Column(String(50), nullable=False, index=True)
    doc_date = Column(Date, nullable=False)
    document_type = Column(SQLEnum(DocTypeEnum, name="doc_type_enum"), nullable=False, default=DocTypeEnum.OTHER)
    custodian = Column(String(255), nullable=False, index=True)
    author_sender = Column(Text, nullable=False)
    recipients = Column(Text, nullable=False)
    copyees_bcc = Column(Text, nullable=False)
    subject_title = Column(Text, nullable=False)
    privilege_status = Column(SQLEnum(PrivilegeStatusEnum, name="privilege_status_enum"), nullable=False, default=PrivilegeStatusEnum.NOT_PRIVILEGED, index=True)
    privilege_basis = Column(SQLEnum(PrivilegeBasisEnum, name="privelege_basis_enum"), nullable=False, default=PrivilegeBasisEnum.NA)
    redaction_description = Column(Text, nullable=True)
    case_id = Column(String, ForeignKey("cases.id", ondelete="CASCADE"), nullable=False, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    extracted_payload = Column(JSONB, nullable=True)