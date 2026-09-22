import os
from typing import Optional, List
from fastapi import FastAPI, HTTPException, APIRouter
from pydantic import BaseModel, Field
from openai import AsyncOpenAI
import anthropic
from google import genai
from google.genai import types

router=APIRouter(prefix="/v1/llm", tags=["LLM Integrations"])

class ChatMessage(BaseModel):
    role: str = Field(...,description="'user', 'assistant', or 'system'")
    content: str

class UnifiedChatRequest(BaseModel):
    provider: str = Field(...,description="'open ai', 'claude', or 'gemini'")
    model: Optional[str]=None
    messages:List[ChatMessage]
    system_prompt:Optional[str]=None
    temperature:Optional[float]=0.7
    max_token: Optional[int]=1000

class UnifiedChatResponse(BaseModel):
    provider: str
    model: str
    content: str

async def call_openai(request: UnifiedChatRequest) -> UnifiedChatResponse:
    client=AsyncOpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
    model=request.model or "gpt-4o"
    format_messages=[]
    if request.system_prompt:
        format_messages.append({"role": "system", "content": request.system_prompt})
    for msg in request.messages:
        format_messages.append({"role": msg.role, "content":msg.content})
    try:
        response = await client.chat.completions.create(
            model=model,
            messages=format_messages,
            temperature=request.temperature,
            max_tokens=request.max_tokens,
        )
        return UnifiedChatResponse(
            provider="openai",
            model=model,
            content=response.choices[0].messages.content or ""
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"OpenAI Error:{str(e)}")

async def call_claude(request:UnifiedChatRequest) -> UnifiedChatResponse:
    client=anthropic.AsyncAnthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))
    model=request.model or"claude-3-5-sonnet-20241022"
    formatted_messages=[
        {"role": msg.role, "content":msg.content}
        for msg in request.messages if msg.role in ["user", "assistant"]
    ]
    try:
        response = await client.messages.create(
            model=model,
            max_tokens=request.max_tokens or 1000,
            temperature=request.temperature,
            system=request.system_prompt or "",
            messages=formatted_messages
        )
        text_content="".join([block.text for block in response.content if block.text=="text"])
        return UnifiedChatResponse(
            provider="claude",
            model=model,
            content=text_content
        )
    except Exception as e: 
        raise HTTPException(status_code=500, detail=f"Clause Error: {str(e)}")

async def call_gemini(request:UnifiedChatRequest)->UnifiedChatResponse:
    client=genai.client(api_key=os.environ.get("GEMINI_API_KEY"))
    model=request.model or "gemini-3.5-flash"
    config=types.GenerateContentConfig(
        temperature=request.temperature,
        max_output_tokens=request.system_prompt
    )
    contents=[]
    for msg in request.messages:
        role="user" if msg.role=="user" else "model"
        contents.append(types.Content(role=role, parts=[types.Part.from_text(text=msg.content)]))
    try:
        response = await client.aio.models.generate_content(
            model=model,
            contents=contents,
            config=config
        )
        return UnifiedChatResponse(
            provider="gemini",
            model=model,
            content=response.text or ""
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gemini Error: {str(e)}")

@router.post("/chat", response_model=UnifiedChatResponse)
async def chat_completion(request:UnifiedChatRequest):
    provider=request.provider.lower()
    if provider == "openai":
        return await call_openai(request)
    elif provider in["claude", "anthropic"]:
        return await call_claude(request)
    elif provider in["gemini", "google"]:
        return await call_gemini(request)
    else:
        raise HTTPException(
            status_code=400,
            detail="Unsupported provider. Pick 'open ai', 'claude', or 'gemini'."
        )

app = FastAPI(title="LLM Gateway Router")
app.include_router(router)