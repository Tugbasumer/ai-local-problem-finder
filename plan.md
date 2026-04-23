#  Proje Uygulama Planı: AI Local Problem Finder

Bu döküman, projenin adım adım geliştirilme sürecini ve yapay zeka entegrasyon stratejisini tanımlar. Her aşama, Cursor/LLM gibi araçların bağlamı (context) doğru anlayabilmesi için atomik görevlere bölünmüştür.

##  1. Aşama: Teknik Altyapı ve Ortam Kurulumu
- [x] **1.1. Proje Yapılandırması:** `backend/` (FastAPI) ve `frontend/` (Swift) dizinlerinin oluşturularak servislerin birbirinden izole edilmesi.
- [x] **1.2. Backend Ortamı:** Python sanal ortamının (venv) kurulması ve `requirements.txt` (fastapi, uvicorn, sqlmodel, python-dotenv, openai) dosyasının hazırlanması.
- [x] **1.3. Güvenlik ve Yapılandırma:** `.env` dosyasının oluşturulması; `OPENROUTER_API_KEY` ve veritabanı erişim bilgilerinin tanımlanması.
- [X] **1.4. Frontend Başlangıç:** Swift projesinin başlatılması ve temel MVVM (Model-View-ViewModel) klasör yapısının kurulması.

##  2. Aşama: Veritabanı Tasarımı ve Veri Modelleri
- [ ] **2.1. Veri Şeması:** `SQLModel` kullanılarak `Problem` tablosunun (id, başlık, açıklama, kategori, öncelik_skoru, yapay_zeka_gerekçesi) tanımlanması.
- [ ] **2.2. Veritabanı Bağlantısı:** SQLAlchemy motorunun kurulması ve FastAPI Dependency Injection yapısı ile veritabanı oturum yönetiminin sağlanması.

##  3. Aşama: Core AI ve Prompt Mühendisliği
- [ ] **3.1. OpenRouter Entegrasyonu:** OpenRouter API üzerinden LLM (GPT-4o-mini veya Gemini Flash) çağrılarını yönetecek asenkron servis katmanının yazılması.
- [ ] **3.2. Sistem Promptu Tasarımı:** Kullanıcı metnini analiz eden, "Akıllı Şehir Planlamacısı" rolünü üstlenen ve çıktı olarak kesin JSON formatı (Structured Output) veren promptun optimize edilmesi.
- [ ] **3.3. Çıktı Doğrulama:** Yapay zekadan gelen verinin Pydantic modelleri ile tip kontrolünün yapılması ve hatalı formatların ayıklanması.

##  4. Aşama: Backend API Geliştirme
- [ ] **4.1. Problem Oluşturma (POST):** Kullanıcı şikayetini alan, AI analizini tetikleyen ve analiz sonuçlarıyla birlikte veritabanına kaydeden uç noktanın (endpoint) kodlanması.
- [ ] **4.2. Liste ve Detay Servisleri (GET):** Tüm problemleri listeleyen ve belirli bir problemin detaylarını (AI gerekçesiyle birlikte) getiren servislerin yazılması.
- [ ] **4.3. Öncelik Filtreleme:** En yüksek skorlu problemleri "Acil" etiketiyle getiren özel sorgu mantığının kurulması.

##  5. Aşama: Frontend Geliştirme ve Entegrasyon
- [ ] **5.1. Network Katmanı:** Swift `URLSession` kullanarak backend API ile asenkron haberleşen servis sınıfının yazılması.
- [ ] **5.2. UI Uygulama:** SwiftUI ile dinamik problem bildirme formu ve analiz sonuçlarını içeren liste ekranlarının tasarlanması.
- [ ] **5.3. Uçtan Uca Test:** Bir problemin girilmesinden, AI tarafından puanlanıp listede görünmesine kadar olan tüm akışın test edilmesi.