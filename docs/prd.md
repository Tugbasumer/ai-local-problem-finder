# Ürün Gereksinim Dokümanı (PRD)

## Ürün Tanımı

AI Local Problem Finder, kullanıcıların yaşadıkları şehirde karşılaştıkları problemleri bildirebildiği ve bu problemlerin analiz edilerek kategorize edilip öncelik sırasına konulmasına yardımcı olan bir platformdur.

---

## Sistem Mimarisi

* Mobil Uygulama: Swift
* Backend: FastAPI
* Yapay Zeka Entegrasyonu: LLM API (OpenAI / Gemini)
* Veritabanı: PostgreSQL

---

## Veritabanı Tasarımı

### Kullanıcılar (Users)

* id (UUID)
* name (string)
* email (string)

### Problemler (Problems)

* id (UUID)
* user_id (UUID)
* title (string)
* description (text)
* image_url (string)
* category (string)
* priority_score (float)
* created_at (timestamp)

---

## API Endpointleri

### POST /problems

Yeni problem oluşturur ve analiz sürecini başlatır

### GET /problems

Tüm problemleri listeler

### GET /problems/{id}

Belirli bir problemin detayını getirir

### GET /problems/top

En yüksek öncelikli problemleri listeler

---

## Kullanıcı Akışı

1. Kullanıcı uygulamayı açar
2. Problem bildirme ekranına gider
3. Açıklama girer
4. Sistem bu veriyi işler
5. Problem listeye eklenir

---

## Ekranlar

* Ana Sayfa (problem listesi)
* Problem Bildirme Ekranı
* Problem Detay Ekranı
* Öncelikli Problemler Ekranı

---

## Analiz Süreci

### Girdi:

* Kullanıcının yazdığı problem açıklaması

### Çıktı:

* Kategori
* Öncelik skoru

---

## Gelecek Geliştirmeler

* Görsel analiz
* Benzer problemleri gruplayan yapı
* Yönetim paneli
