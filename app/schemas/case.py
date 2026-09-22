from pydantic import BaseModel, Field, datetime
from typing import Optional


class CaseCreate(BaseModel):
    case_name: str = Field(..., description="The title of the lawsuit, e.g., Smith v. Delta Corp")
    litigation_type: str = Field(..., description="The category of law, e.g., Contract, Employment, Tort")
    jurisdiction: str = Field(..., description="The court location, e.g., SDNY, LA County Superior Court")

    
    case_number: Optional[str] = Field(None, description="The official court docket or index number if filed")

    from datetime import datetime


    class CaseResponse(BaseModel):
        id: str = Field(..., description="The unique database ID generated for this case")
        case_name: str
        litigation_type: str
        jurisdiction: str
        case_number: Optional[str] = None
        created_at: datetime = Field(..., description="The exact date and time the case was created")


        model_config = {
            "from_attributes": True
        }