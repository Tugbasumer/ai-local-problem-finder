# AI Local Problem Finder

### Şehir Problemlerini Anlamlandırma ve Önceliklendirme Platformu

---

## 1. Proje Hakkında

Bu proje, şehirlerde karşılaşılan problemlerin daha sistematik bir şekilde ele alınmasını hedeflemektedir. Problemlerin daha anlaşılır hale getirilmesi ve önem derecesine göre önceliklendirilmesi amaçlanmaktadır.




##  Çözülen Problem

Şehirlerde karşılaşılan problemler farklı platformlarda dile getirilse de, bu veriler genellikle dağınık kalmakta ve sistematik bir şekilde analiz edilmemektedir. Bu durum, hangi problemlerin daha öncelikli olduğu ve hangi konuların daha fazla kişiyi etkilediği gibi soruların net şekilde yanıtlanmasını zorlaştırmaktadır.



##  Çözüm

Bu platform, kullanıcıların bildirdiği problemlerin daha anlaşılır hale getirilmesini ve önem derecesine göre sıralanmasını sağlayarak daha düzenli ve anlamlı bir veri yapısı oluşturmayı hedefler.

---

## 2. Hedef Kitle ve Kullanım Senaryosu

Platform, şehirde yaşayan bireyler ve yerel yönetimler için tasarlanmıştır.

* **Bireysel kullanıcılar**, yaşadıkları çevrede karşılaştıkları problemleri kolayca sisteme bildirerek görünür hale getirebilir.
* **Kurumlar**, bu veriler üzerinden hangi problemlerin daha kritik olduğunu analiz edebilir.

İlk aşamada (MVP), uygulama belirli bir bölge üzerinde test edilerek kullanıcı davranışları ve veri akışı gözlemlenecektir.

---

## 3. MVP Kapsamı

* Problem bildirme (metin + isteğe bağlı görsel)
* Problemlerin kategorize edilmesi
* Öncelik sırasına göre değerlendirilmesi
* Problem listeleme ve görüntüleme

---

## 4. Yaklaşım

Bu proje, yapay zekanın sonradan eklenen bir özellik değil, sistemin temel bir parçası olduğu bir yaklaşımla tasarlanmıştır. Amaç, kullanıcıdan gelen veriyi doğrudan daha anlamlı ve kullanılabilir hale getirmektir.

---

## 5. Temel Özellikler

* **Problem Bildirme:** Kullanıcılar karşılaştıkları problemleri sisteme ekleyebilir
* **Kategori Belirleme:** Problemler belirli kategoriler altında toplanır
* **Önceliklendirme:** Problemler önem derecesine göre sıralanır
* **Listeleme:** Tüm problemler kullanıcıya liste halinde sunulur
* **Detay Görüntüleme:** Her problem için detaylı bilgi görüntülenebilir

---

## 6. Kullanım Senaryosu

1. Kullanıcı uygulamayı açar
2. Problem bildirme ekranına gider
3. Problemi açıklayarak sisteme ekler
4. Sistem veriyi işler ve sınıflandırır
5. Problem listeye eklenir
6. Diğer kullanıcılar ve kurumlar bu problemi görüntüleyebilir

---

## 7. Kullanılan Teknolojiler

* FastAPI
* PostgreSQL
* Swift
* LLM API

---

## 8. Dokümanlar

* MVP Dokümanı: docs/mvp.md
* PRD Dokümanı: docs/prd.md
* Uygulama Planı (plan.md)

---

## 9. Dizin Yapısı

```text
ai-local-problem-finder/
├── backend/            # API Servisi ve AI Mantığı
├── frontend/           # iOS Mobil Uygulama Klasörleri
├── docs/               # MVP ve PRD Dokümanları
└── plan.md             # Geliştirme Yol Haritası

----

Bu proje, Future Talent 301 YZ ile Ürün Geliştirme Bootcamp kapsamında geliştirilmekte olup, yapay zeka destekli bir sosyal dayanışma ağı sunmayı amaçlamaktadır.

