from fastapi import FastAPI
from pydantic import BaseModel # JSON veri kalıbı için gerekli

app = FastAPI()

# Müşterinin (Frontend) göndereceği verinin formatını belirliyoruz
class ProblemRequest(BaseModel):
    error_log: str
    environment: str  # Örn: Docker, Windows, Local Python vb.

@app.get("/")
def read_root():
    return {"status": "AI Local Problem Finder is running!"}

# İşte burası asıl "işi" yapacak olan kısım (POST metodu)
@app.post("/analyze")
async def analyze_problem(request: ProblemRequest):
    # Kullanıcıdan gelen JSON verisini burada yakalıyoruz
    return {
        "message": "Hata başarıyla alındı",
        "details": {
            "error": request.error_log,
            "env": request.environment
        },
        "solution": "Yapay zeka analizi çok yakında burada olacak!"
    }