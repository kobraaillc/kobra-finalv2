from pydantic import BaseModel, Field
from typing import Dict, Any, List, Optional
from datetime import date


class LegalEntity(BaseModel):
    name: str = Field(..., description="Name of the person or corporation")
    role: str = Field(..., description="e.g., Plaintiff, Defendant, Cross-Complainant, Counterparty, Petitioner, Respondent, Appellant, Appellee")


class LitigationDamages(BaseModel):
    damage_type: str = Field(..., description="e.g., Medical Bills, Lost Wages, Liquidated Damages, Statutory Penalties")
    amount: float = Field(..., description="The calculated dollar value identified by the AI")


class LegalExtraction(BaseModel):
    summary: str = Field(..., description="The AI-generated executive summary of hte document")


    entities_involved: List[LegalEntity] = Field(default_factory=list)
    key_dates: Dict[str, date] = Field(default_factory=dict, description="e.g., {'breach_date'}: '2026-04-12'}")
    damages_tracked: List[LitigationDamages] = Field(default_factor=List)


    custom_metadata: Dict[str, Any] = Field(default_factory=dict)