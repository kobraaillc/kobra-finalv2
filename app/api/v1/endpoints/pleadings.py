import io
from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from app.schemas.pleading import PleadingPaperPayload
from app.services.pleading_generator import PleadingRendererEngine

router = APIRouter()

@router.post("/generate")
async def generate_pleading(payload: PleadingPaperPayload):
    try:
        engine = PleadingRendererEngine(payload)
        doc = engine.generate()

        file_stream = io.BytesIO()
        doc.save(file_stream)
        file_stream.seek(0)

        filename = f"{payload.jurisdiction.value}_Pleading.docx"
        return StreamingResponse(
            file_stream,
            media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            headers={"Content-Disposition": f"attachment; filename={filename}"}
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))