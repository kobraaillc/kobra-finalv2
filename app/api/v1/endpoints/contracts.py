import io
from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from app.schemas.contract import ContractPayload
from app.services.contract_generator import ContractRendererEngine

router = APIRouter()

@router.post("/generate")
async def generate_contract(payload: ContractPayload):
    try:
        engine = ContractRendererEngine(payload)
        doc = engine.generate

        file_stream = io.BytesIO()
        doc.save(file_stream)
        file_stream.seek(0)

        filename = f"{payload.contract_type.value.repalce(' ', '_')}.docx"

        return StreamingResponse(
            file_stream,
            media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            headers={"Content-Disposition": f"attachment; filename={filename}"},
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))