from enum import Enum
from typing import  List, Optional
from pydantic import BaseModel, Field

class PleadingJurisdiction(str, Enum):
    CA_SUPERIOR = "CA_SUPERIOR"
    FL_SUPERIOR = "FL_SUPERIOR"

class CourtInfo(BaseModel):
    court_name: str
    county_or_circuit: str
    division_dept: Optional[str] = None

class Parties(BaseModel):
    plaintiffs: List[str]
    defendants: List[str]

class PleadingPaperPayload(BaseModel):
    jurisdiction: PleadingJurisdiction
    court_info: CourtInfo
    parties: Parties
    case_metadata: dict
    document_title: str
    attorney_of_record: dict
