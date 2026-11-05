# 🤖 Yapay Zeka Geliştirme Günlüğü (AI_LOG.md)

Bu dosya, **Eğitim & Akademi Portfolyosu** projesinin geliştirilme sürecinde kullanıcı (**Beyza Kaya**) tarafından verilen talimatları ve Yapay Zeka Asistanı (**Antigravity**) tarafından yapılan teknik düzenlemeleri soru-cevap / diyalog formatında kronolojik olarak kayıt altına almaktadır.

---

### 💬 1. Adım: Projenin Profesyonelleştirilmesi

> **👤 Kullanıcı:**  
> *"bu kodu daha profosyonel yap"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* **Mevcut Durum Analizi:** Klasörde boş kalmış `.txt` uzantılı sahte dosyalar (`index.html.txt`, `style.css.txt`, `script.js.txt`) tespit edildi ve temizlendi.
* **Modern Mimari Kurulumu:** 
  * Standart HTML5, CSS3 ve Vanilla JS dosyaları oluşturuldu.
  * Kartlar için modern koyu tema (Dark SaaS) ve CSS ile 180° dönebilen gerçek **3D Kart Çevirme (Flip)** animasyonu eklendi.
  * Kartları çalıştırmak ve test etmek için odaklanmış bir "Çalışma Modu" ve arama/filtreleme sistemi kuruldu.

---

### 💬 2. Adım: Sahte Bilgilerin Temizlenmesi & Web Odaklı Kategori

> **👤 Kullanıcı:**  
> *"random bilgileri çıkar bu proje html script css kodlaar olcak ve öğrenmemiz gereknleri biz elden manuel ekleyelim"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* Rastgele gelen tüm genel teknik terimler (Docker, SQL vb.) projeden tamamen kaldırıldı.
* Kategoriler doğrudan web geliştirmeye uyarlandı: `HTML`, `CSS`, `JavaScript` ve `Web Genel`.
* Kullanıcının kendi kartlarını elden ekleyebileceği ve tarayıcı hafızasına (`localStorage`) kaydeden altyapı oluşturuldu.

---

### 💬 3. Adım: Kart Ekleme Formunun Anlaşılır Kılınması

> **👤 Kullanıcı:** *(Eski formun ekran görüntüsünü paylaşarak)*  
> *"bu kısmı daha anlaşılır yap"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* Form, kartın mantığına uygun olarak **1. Ön Yüz (Görünen Kod)** ve **2. Arka Yüz (Çevrilince Çıkacak Açıklama)** şeklinde iki net bölüme ayrıldı.
* Kullanıcının yazdıkça kartın nasıl görüneceğini görebileceği canlı bir önizleme mekanizması ve örnek şablon butonları tasarlandı.

---

### 💬 4. Adım: Üst Bardaki İstatistik ve Ses Butonunun Silinmesi

> **👤 Kullanıcı:** *(Hedef/istatistik hapı ve ses butonunun ekran görüntüsünü paylaşarak)*  
> *"bu kısmı sil"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* Üst menüde yer alan `🎯 0 / 0 (%0)` ilerleme sayacı ve `🔊` ses butonu tamamen silindi.
* Üst çubuk sadeleştirilerek sadece başlık ve aksiyon butonları bırakıldı.

---

### 💬 5. Adım: Formun Hazır Dolu Gelmesi & Kod Kısmının Sadeleştirilmesi

> **👤 Kullanıcı:**  
> *"tarayıcadaki kart ekle kısmının içini doldur ve kod kısmını sadeleştir"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* Kart ekleme penceresi açıldığında kullanıcıyı boş bir form yerine doğrudan örnek bir `<button>` etiketi ve açıklamasıyla **hazır doldurulmuş** olarak karşılaması sağlandı.
* Çok satırlı karmaşık kod alanı yerine tek satırlık, temiz ve monospace yazı tipli sade bir girdi alanı (`input`) eklendi.

---

### 💬 6. Adım: "Projenin Amacı" Metninin Arayüze Entegre Edilmesi

> **👤 Kullanıcı:**  
> *"1. Projenin Amacı: Yazılım öğrenme sürecinde sıkça karşılaşılan teknik terimlerin, kod parçacıklarının ve kavramların hızlıca tekrar edilmesini ve kalıcı öğrenmenin sağlanmasını kolaylaştırmak. Aynı zamanda geliştiricinin kendi bilgi kartlarını oluşturabileceği kişiselleştirilmiş dijital bir çalışma ortamı sunmak. tarayıcı kısmını bu yazdıklarıma göre düzenle"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* Kullanıcının belirttiği amaç doğrultusunda sayfanın üst kısmına özel **"🎯 Projenin Amacı"** bilgi kartı eklendi.
* Arama kutusu ipuçları, sayfa başlığı, boş durum metinleri ve footer bu amaç metni ile birebir uyumlu hale getirildi.

---

### 💬 7. Adım: Boş Kart Alanının Doldurulması & Aşırı Uzun Kodların Sadeleştirilmesi

> **👤 Kullanıcı:** *(Boş ekran görüntüsünü paylaşarak)*  
> *"kısmıda doldur"*  
> *"kodum çok uzun sadeleştir"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* **Kart Alanı:** Ekranın boş kalmaması için en temel 6 web geliştirme kartı listeye yüklendi.
* **Kod Sadeleştirmesi:** 2.100 satırı aşan proje kodları (1140 satır CSS, 860 satır JS) radikal şekilde temizlenerek:
  * `index.html`: ~87 satıra,
  * `script.js`: ~180 satıra,
  * `style.css`: ~330 satıra indirildi (Toplamda %70'in üzerinde kod tasarrufu ve temizlik sağlandı).

---

### 💬 8. Adım: "Projenin Amacı" Kutusunun Kaldırılması

> **👤 Kullanıcı:**  
> *"projenin amacını tarayıcıdan sil"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* Kullanıcının talebiyle arayüzün üstünde yer alan büyük "Projenin Amacı" kutusu HTML ve CSS'ten tamamen kaldırıldı. Sayfa doğrudan arama çubuğu ve kartlarla başlayacak şekilde ferahlatıldı.

---

### 💬 9. Adım: Eğitim & Sertifika Portfolyosu Konseptine Geçiş

> **👤 Kullanıcı:**  
> *"çeşitli sitelerden sertifika yada eitim aldığım bilgileri içersin ona göre düzenleme yap random bilgiler olmasın"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* Konsept genel terim kartlarından **Online Eğitim & Sertifika Portfolyosu**na dönüştürüldü.
* BTK Akademi, Udemy, freeCodeCamp, Turkcell Geleceği Yazanlar, Coursera ve Patika gibi gerçek platformlara uygun rozetler ve veri alanları eklendi.

---

### 💬 10. Adım: Doğrudan Kurs Linki (URL) Yönlendirmesi

> **👤 Kullanıcı:**  
> *"bunları ben ekliyim urlde ekleyim o sitenin o dersine yönlendirsin"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* Forma **"Ders / Kurs Linki (URL) 🔗"** alanı eklendi (kullanıcı `https://` yazmasa bile sistemin bunu otomatik tamamlaması sağlandı).
* Kartların üzerine **`🔗 Derse Git ↗`** butonu eklendi. Bu butona tıklandığında kart çevrilmeden yeni sekmede doğrudan o kursun sayfasına gidilmesi sağlandı (`target="_blank"`, `event.stopPropagation()`).

---

### 💬 11. Adım: Hazır Derslerin Kaldırılması (Kullanıcının Kendisinin Eklemesi)

> **👤 Kullanıcı:**  
> *"dersleri ben eklicem"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* Sistemdeki tüm örnek/varsayılan kartlar temizlendi.
* Sayfa ilk açıldığında tertemiz bir ekran ve ortada **"➕ İlk Eğitimini Ekle"** butonuyla kullanıcının kendi derslerini ekleyebileceği bir yapı kuruldu.

---

### 💬 12. Adım: Başlığın Eğitime Uygun Hale Getirilmesi

> **👤 Kullanıcı:** *(DevCert başlığının ekran görüntüsünü paylaşarak)*  
> *"eğitim lee alakalı bir başlık olsun"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* Yabancı ve sadece sertifika çağrışımı yapan "DevCert" yerine doğrudan eğitime odaklı:
  * **Ana Başlık:** `Eğitim & Akademi`
  * **Rozet:** `PORTAL`
  * **Alt Başlık:** `Kayıtlı Kurslarım, Sertifikalarım & Ders Linklerim`
  olarak güncellendi.

---

### 💬 13. Adım: Gereksiz `.vs` Klasörünün Kontrolü ve Silinmesi

> **👤 Kullanıcı:**  
> *"@[.vs] gereklimi bu değilse sil"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* `.vs` klasörünün Visual Studio tarafından oluşturulan geçici bir yerel önbellek olduğu, web sitesinin çalışması için hiçbir gerekliliğinin bulunmadığı açıklandı.
* Talimat doğrultusunda `.vs` klasörü kalıcı olarak silindi.

---

### 💬 14. Adım: Dokümantasyon Dosyalarının Oluşturulması

> **👤 Kullanıcı:**  
> *"al log md ve readme dosyası oluştur"*  
> *"ai log md dosyası benim sorduğum senin cevapladığın şeklinde"*

**🤖 Yapay Zeka Yanıtı ve Yapılan İşlemler:**
* Proje tanıtımı ve kullanım kılavuzu için `README.md` hazırlandı.
* Kullanıcı ve yapay zeka arasındaki tüm soru-cevap ve gelişim sürecini belgeleyen `AI_LOG.md` (bu dosya) eksiksiz olarak oluşturuldu.

