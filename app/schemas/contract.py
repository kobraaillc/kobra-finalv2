from datetime import date
from enum import Enum
from pydantic import BaseModel, Field

class ContractTypeEnum(str, Enum):
    NDA = "Non-Disclosure Agreement"
    SERVICES_AGREEMENT = "Master Services Agreement"
    CONSULTING_AGREEMENT = "Consulting Agreement"
    INDEPENDENT_CONTRACTOR = "Independent Contractor Agreement"

class EntityTypeEnum(str, Enum):
    DELAWARE_LLC = "Delaware Limited Liability Company"
    DELAWARE_CORP = "Delaware Corporation"
    CA_LLC = "California Limited Liability Company"
    CA_CORP = "California Corporation"
    FL_LLC = "Florida Limited Liability Company"
    FL_CORP = "Florida Corporation"
    INDIVIDUAL = "Individual"

class CorporateParty(BaseModel):
    legal_name: str = Field(..., description="e.g., Kobra AI Technology Inc")
    entity_type: str = Field(default=EntityTypeEnum.DELAWARE_CORP)
    address_line1: str = Field(..., description="Street Address")
    city_state_zip: str = Field(...,description="city, state, zip")
    signor_name: str = Field(..., description="Full name of authorized signor")
    signor_title: str = Field(..., description="e.g., Chief Executive Officer")

class ContractTerms(BaseModel):
    effective_date: date = Field(..., description="YYYY-MM-DD")
    term_months: int = Field(default=12, description="Duration of agreement in months")
    governing_law_state: str = Field(default="Delaware", description="State governing law")
    jurisdiction_venue: str = Field(default="County of Orange, State of California")
    confidentiality_years: int = Field(default=12, description="Surviving confidentiality period")

class ContractPayload(BaseModel):
    contract_type: ContractTypeEnum = Field(default=ContractTypeEnum.NDA)
    diclosing_party: CorporateParty
    receiving_party: CorporateParty
    terms: ContractTerms
    purpose_description: str = Field(..., description="Brief statement of purpose/scope of work")