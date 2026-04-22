# Plan — AI Local Problem Finder

## 1. Backend Setup (✔)

* FastAPI projesi oluştur
* Virtual environment kur
* fastapi, uvicorn paketlerini yükle
* main.py oluştur
* /health endpoint oluştur ve test et

---

## 2. Frontend Setup (✔)

* React projesi oluştur (Vite)
* Proje klasör yapısını oluştur
* Ana sayfa componenti oluştur
* Basit UI render testi yap

---

## 3. Database Setup

### 3.1 Database kurulumu

* PostgreSQL kur
* Veritabanı oluştur

### 3.2 Tables oluştur

* Users tablosu oluştur
* Problems tablosu oluştur

  * id
  * title
  * description
  * category
  * priority_score
  * created_at

---

## 4. Core AI Logic

### 4.1 API bağlantısı

* OpenRouter API key al
* API bağlantısını backend'e ekle

### 4.2 Prompt Design

* Kategori belirleme promptu oluştur
* Priority score hesaplama promptu oluştur

### 4.3 AI Response Handling

* AI'dan gelen response'u parse et
* category ve score değerlerini extract et

---

## 5. Backend API Development

### 5.1 Create Problem Endpoint

* POST /problems endpoint oluştur
* Request body:

  * title (string)
  * description (string)
* Input validation ekle

### 5.2 AI Processing

* Description inputunu AI modeline gönder
* Kategori belirlemek için prompt çalıştır
* Priority score hesapla
* Response'u parse et

### 5.3 Save Problem

* category ve priority_score değerlerini al
* Database'e kaydet

### 5.4 Get Problems Endpoint

* GET /problems endpoint oluştur
* Tüm problemleri listele

### 5.5 Get Top Problems

* GET /problems/top endpoint oluştur
* Priority score'a göre sıralama yap

---

## 6. Frontend Development

### 6.1 Problem List Page

* Backend'den problem verisini çek
* Liste componenti oluştur
* Problem kartlarını göster

### 6.2 Add Problem Page

* Form oluştur (title + description)
* API'ye POST isteği gönder

### 6.3 Problem Detail Page

* Seçilen problem detayını göster
* Category ve score bilgisini göster

---

## 7. Integration

### 7.1 API Integration

* Frontend → Backend bağlantısını kur
* Axios veya fetch ile istek at

### 7.2 Data Flow

* Problem ekleme sonrası listeyi güncelle
* API response'ları kontrol et

---

## 8. Testing & Improvements

### 8.1 Testing

* Endpoint testleri yap
* Frontend akışını test et

### 8.2 Improvements

* UI iyileştirmeleri yap
* Error handling ekle

---

## 9. AI Context & Prompt Design

### 9.1 Persona Definition

* Model için bir "analist" persona tanımla
* Amaç: Kullanıcıdan gelen problemleri analiz eden uzman gibi davranması

### 9.2 Context Design

* Input:

  * Kullanıcının problem açıklaması
* Ek bağlam:

  * Şehir problemleri kategorileri (trafik, altyapı, güvenlik vb.)
  * Öncelik belirleme kriterleri (etkilenen kişi sayısı, aciliyet)

### 9.3 Prompt Structure

#### Kategori Promptu:

* Görev: Verilen metni uygun kategoriye ata
* Output formatı: sadece kategori ismi

#### Priority Score Promptu:

* Görev: Problemin önem derecesini 0-1 arasında skorla
* Output formatı: float sayı

### 9.4 Response Constraints

* Model çıktısı JSON formatında olmalı
* Örnek:
  {
  "category": "infrastructure",
  "priority_score": 0.82
  }

### 9.5 Token Optimization

* Prompt uzunluğunu minimumda tut
* Gereksiz açıklamalardan kaçın
* Sadece gerekli bağlamı ver

