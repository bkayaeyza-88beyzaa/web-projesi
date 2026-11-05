# 🎓 Eğitim & Akademi Portfolyosu

Yazılım geliştiricilerin çeşitli platformlardan (BTK Akademi, Udemy, Coursera, freeCodeCamp, YouTube, Turkcell vb.) aldıkları eğitimleri, sertifikaları ve doğrudan ders bağlantılarını arşivleyebilecekleri, takip edebilecekleri ve hızlıca tekrar edebilecekleri **kişiselleştirilmiş dijital çalışma ortamı**.

---

## 🎯 Projenin Amacı

Yazılım öğrenme sürecinde sıkça karşılaşılan **teknik terimlerin**, **kod parçacıklarının** ve **kavramların** hızlıca tekrar edilmesini ve kalıcı öğrenmenin sağlanmasını kolaylaştırmak. Aynı zamanda geliştiricinin kendi bilgi kartlarını oluşturabileceği, aldığı eğitim ve sertifikaları doğrudan ders linkleriyle arşivleyebileceği **kişiselleştirilmiş dijital bir çalışma ortamı** sunmak.

---

## 🚀 Öne Çıkan Özellikler

* **🔗 Doğrudan Ders Sayfasına Yönlendirme:** Kartların üzerindeki `🔗 Derse Git ↗` butonu sayesinde yeni bir sekmede doğrudan o kursun web adresine gidilebilir.
* **🔄 3D Çevirmeli Kart Deneyimi:** Kartın ön yüzünde eğitim adı, kurum rozeti ve ders linki yer alırken; tıklandığında dönen arka yüzünde kazanılan beceriler, ders notları ve sertifika/süre bilgileri görüntülenir.
* **🏷️ Platform Filtreleme & Canlı Arama:** BTK Akademi, Udemy, freeCodeCamp, Turkcell, Coursera ve YouTube platformlarına göre tek tıkla filtreleme ve anlık metin araması.
* **➕ Kişiselleştirilmiş Eğitim Ekleme:** Kullanıcı dilediği eğitimi, platformu, URL bağlantısını ve ders notlarını modal penceresi üzerinden kolayca ekleyebilir ve dilediğinde silebilir (`🗑️`).
* **💾 Yerel Kalıcı Depolama (LocalStorage):** Harici veritabanına gerek kalmadan, eklenen tüm eğitimler ve linkler tarayıcı hafızasında saklanır; sayfa kapansa da kaybolmaz.
* **⚡ Sıfır Dış Bağımlılık (Pure Web):** Harici framework veya paket yöneticisi (npm, node vb.) gerektirmez; standart HTML5, CSS3 ve Vanilla JS ile çalışır.
* **📱 Responsive & Koyu Tema (Dark UI):** Mobil, tablet ve masaüstü ekran boyutlarına tam uyumlu modern SaaS tasarımı.

---

## 📁 Proje Dosya Yapısı

```text
wep arayüz/
│
├── index.html     # Semantik sayfa iskeleti, arama/filtre çubuğu ve modal formu (~100 satır)
├── style.css      # Modern koyu tema, 3D flip animasyonları ve responsive grid (~400 satır)
├── script.js      # LocalStorage, kart filtreleme, URL doğrulama ve modal kontrolü (~175 satır)
├── README.md      # Proje genel tanıtımı, özellikleri ve kurulum kılavuzu
└── LOG.md         # Projenin adım adım geliştirme ve sürüm günlüğü
```

---

## 🛠️ Kullanılan Teknolojiler

* **HTML5:** Semantik etiketleme (`<header>`, `<main>`, `<footer>`, `<dialog>/modal`).
* **CSS3:** Modern CSS Değişkenleri (Variables), 3D Transform (`rotateY`, `preserve-3d`), CSS Grid & Flexbox, Glassmorphism.
* **JavaScript (ES6+):** Vanilla JS, LocalStorage Web API, XSS Koruması (HTML escaping), Event Delegation.
* **Google Fonts:** Tipografi için [Inter](https://fonts.google.com/specimen/Inter) ve kod/belge alanları için [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono).

---

## 💻 Kurulum ve Çalıştırma

Projeyi çalıştırmak için herhangi bir sunucu veya derleme aracına ihtiyaç yoktur:

1. Proje klasörünü bilgisayarınıza indirin veya açın.
2. `index.html` dosyasına çift tıklayarak herhangi bir modern web tarayıcısında (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari) doğrudan açın.
3. Sağ üstteki **"➕ Yeni Eğitim Ekle"** butonuna basarak ilk dersinizi ve linkinizi ekleyin!

---

## 👤 Geliştirici

* **Proje Sahibi:** Beyza Kaya
* **Lisans:** MIT — Açık kaynaklı ve serbestçe geliştirilebilir.

