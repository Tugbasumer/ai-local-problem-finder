# AI Local Problem Finder

### Şehir Problemlerini Anlamlandırma ve Önceliklendirme Platformu

---

##  Proje Hakkında

Bu proje, şehirlerde karşılaşılan problemlerin daha sistematik bir şekilde ele alınmasını hedeflemektedir. Problemlerin daha anlaşılır hale getirilmesi ve önem derecesine göre önceliklendirilmesi amaçlanmaktadır.


---

##  Çözülen Problem

Şehirlerde karşılaşılan problemler farklı platformlarda dile getirilse de, bu veriler genellikle dağınık kalmakta ve sistematik bir şekilde analiz edilmemektedir. Bu durum, hangi problemlerin daha öncelikli olduğu ve hangi konuların daha fazla kişiyi etkilediği gibi soruların net şekilde yanıtlanmasını zorlaştırmaktadır.

---

##  Çözüm

Bu platform, kullanıcıların bildirdiği problemlerin daha anlaşılır hale getirilmesini ve önem derecesine göre sıralanmasını sağlayarak daha düzenli ve anlamlı bir veri yapısı oluşturmayı hedefler.

---

##  Hedef Kitle ve Kullanım Senaryosu

Platform, şehirde yaşayan bireyler ve yerel yönetimler için tasarlanmıştır.

* **Bireysel kullanıcılar**, yaşadıkları çevrede karşılaştıkları problemleri kolayca sisteme bildirerek görünür hale getirebilir.
* **Kurumlar**, bu veriler üzerinden hangi problemlerin daha kritik olduğunu analiz edebilir.

İlk aşamada (MVP), uygulama belirli bir bölge üzerinde test edilerek kullanıcı davranışları ve veri akışı gözlemlenecektir.

---

##  MVP Kapsamı

* Problem bildirme (metin + isteğe bağlı görsel)
* Problemlerin kategorize edilmesi
* Öncelik sırasına göre değerlendirilmesi
* Problem listeleme ve görüntüleme

---

##  Yaklaşım

Bu proje, yapay zekanın sonradan eklenen bir özellik değil, sistemin temel bir parçası olduğu bir yaklaşımla tasarlanmıştır. Amaç, kullanıcıdan gelen veriyi doğrudan daha anlamlı ve kullanılabilir hale getirmektir.

---

##  Temel Özellikler

* **Problem Bildirme:** Kullanıcılar karşılaştıkları problemleri sisteme ekleyebilir
* **Kategori Belirleme:** Problemler belirli kategoriler altında toplanır
* **Önceliklendirme:** Problemler önem derecesine göre sıralanır
* **Listeleme:** Tüm problemler kullanıcıya liste halinde sunulur
* **Detay Görüntüleme:** Her problem için detaylı bilgi görüntülenebilir

---

##  Kullanım Senaryosu

1. Kullanıcı uygulamayı açar
2. Problem bildirme ekranına gider
3. Problemi açıklayarak sisteme ekler
4. Sistem veriyi işler ve sınıflandırır
5. Problem listeye eklenir
6. Diğer kullanıcılar ve kurumlar bu problemi görüntüleyebilir

---

##  Kullanılan Teknolojiler

* FastAPI
* PostgreSQL
* Swift
* LLM API

---

##  Dokümanlar

* MVP Dokümanı: docs/mvp.md
* PRD Dokümanı: docs/prd.md

---

##  Gelecek Geliştirmeler

* Görsel analiz desteği
* Benzer problemlerin gruplanması
* Yönetim paneli

---

