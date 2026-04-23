#  AI Local Problem Finder - Frontend (iOS)

Bu dizin, projenin mobil uygulama katmanını barındırmaktadır. Uygulama, modern iOS geliştirme standartlarına uygun olarak **SwiftUI** framework'ü ile geliştirilmektedir.

##  Mimari Yapı (MVVM)
Proje, sürdürülebilirlik ve test edilebilirlik için **Model-View-ViewModel (MVVM)** mimarisi üzerine inşa edilmiştir:

- **Models:** Uygulamanın veri yapılarını ve Backend'den gelen JSON yanıtlarının karşılıklarını barındırır.
- **Views:** Kullanıcı arayüzü bileşenlerini (SwiftUI Views) içerir.
- **ViewModels:** İş mantığını yönetir ve View ile Model arasındaki iletişimi sağlar.
- **Services:** Backend API (FastAPI) ile asenkron haberleşmeyi (Network Layer) yönetir.

##  Kullanılan Teknolojiler
- **Dil:** Swift 6.0
- **Framework:** SwiftUI
- **Asenkron Yapı:** Swift Concurrency (Async/Await)
- **Veri Formatı:** JSON (Codable protocol)

##  Mevcut Durum (Aşama 1)
İlk aşama kapsamında projenin iskelet yapısı kurulmuş, MVVM klasör hiyerarşisi oluşturulmuş ve temel veri modelleri tanımlanmıştır. Bir sonraki adımda Backend API entegrasyonu gerçekleştirilecektir.

##  Geliştirme Notları
Uygulama, yerel yönetimler ve vatandaşlar arasında köprü kurmayı hedefleyen AI-Native bir yaklaşım sergilemektedir.

---

##  Kaynaklar ve Dökümantasyon
- [Swift Language Guide](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/) - Swift dilinin temel mantığı ve sözdizimi rehberi.
- [Design Patterns in Swift](https://refactoring.guru/design-patterns/swift) - Projede uygulanan MVVM ve diğer yazılım mimarileri üzerine teknik kaynak.
- [Future Talent Program](https://www.upschool.io/) - Bu proje Citi, YGA ve UP School iş birliğiyle geliştirilmektedir.