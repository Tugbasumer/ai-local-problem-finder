import os
import requests
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv

# .env dosyasındaki anahtarı sisteme tanıtır
load_dotenv()

app = FastAPI()

# Müşteriden gelecek verinin yapısı
class ProblemRequest(BaseModel):
    error_log: str
    environment: str

@app.get("/")
def home():
    return {"message": "AI Local Problem Finder Aktif!"}

@app.post("/analyze")
async def analyze_problem(request: ProblemRequest):
    api_key = os.getenv("OPENROUTER_API_KEY")
    
    # Derste anlatılan API isteği yapısı (JSON)
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    # Eğitmenin bahsettiği 'System Prompt' ve 'User Prompt' ayrımı
    payload = {
        "model": "google/gemini-2.0-flash-exp:free", # Ücretsiz ve hızlı model
        "messages": [
            {
                "role": "system", 
                "content": "Sen bir kıdemli DevOps mühendisisin. Kullanıcının yerel ortamındaki hataları analiz edip kısa ve öz çözümler sunarsın."
            },
            {
                "role": "user", 
                "content": f"Ortam: {request.environment}\nHata Mesajı: {request.error_log}"
            }
        ]
    }
    
    response = requests.post(url, headers=headers, json=payload)
    
    # Gelen cevabı (JSON) ayrıştırıyoruz
    if response.status_code == 200:
        result = response.json()
        ai_advice = result['choices'][0]['message']['content']
        return {"status": "success", "analysis": ai_advice}
    else:
        return {"status": "error", "message": "API bağlantı hatası oluştu."}