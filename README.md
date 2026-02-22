# 🌐 Web2Desktop – Turn Any Website Into a Portable EXE

Web2Desktop, herhangi bir web sitesini Windows için portable `.exe` masaüstü uygulamasına dönüştürmenizi sağlayan Electron tabanlı bir projedir.

Bu proje ile:

- Herhangi bir URL’yi masaüstü uygulamasına çevirebilirsiniz
- Portable `.exe` üretebilirsiniz
- Kurulum gerektirmeyen uygulamalar oluşturabilirsiniz
- Kendi web projelerinizi masaüstü yazılım gibi dağıtabilirsiniz

---

# 👨‍💻 Developer

Created and maintained by **@efesozz**

Daha fazla açık kaynak proje ve yazılım geliştirme çalışması için:  
👉 https://github.com/efesozz  

Projeyi beğenirseniz ⭐ bırakmayı unutmayın.  
Yeni projeler ve güncellemeler için @efesozz profilini takip edebilirsiniz.

---

# 🚀 Özellikler

- 🌍 Herhangi bir web sitesini masaüstü uygulamasına çevirme
- 📦 Portable Windows EXE üretme
- 🖥️ Chromium tabanlı rendering (Electron)
- 🔒 Menü gizleme desteği
- ⚡ Hızlı build sistemi
- 🧩 Kolay özelleştirilebilir yapı

---

# 🛠️ Gereksinimler

Bilgisayarınızda aşağıdakiler kurulu olmalıdır:

- Node.js
- npm (Node ile birlikte gelir)

Kontrol etmek için:

```bash
node -v
npm -v
```

---

# 📥 Kurulum

1️⃣ Projeyi klonlayın:

```bash
git clone https://github.com/efesozz/web2desktop.git
cd web2desktop
```

2️⃣ Bağımlılıkları yükleyin:

```bash
npm install
```

---

# 🔧 Kullanım

`main.js` dosyasında şu satırı düzenleyin:

```js
win.loadURL("https://example.com")
```

Buraya dönüştürmek istediğiniz web sitesini yazın.

Örnek:

```js
win.loadURL("https://yourwebsite.com")
```

---

# ▶️ Development Modunda Çalıştırma

```bash
npm start
```

---

# 🏗️ Portable EXE Oluşturma

Windows için portable `.exe` üretmek:

```bash
npm run build
```

Oluşturulan dosya:

```
dist/Web2Desktop Portable.exe
```

Bu dosya:
- Kurulum gerektirmez
- Taşınabilir
- Tek dosyadır
- Direkt çalıştırılabilir

---

# ⚠️ Önemli Notlar

- Uygulama internet bağlantısı gerektirir.
- Web sitesinde yapılan değişiklikler uygulamaya yansır.
- Web sitesinin güvenlik politikaları bazı embed işlemlerini engelleyebilir.
- Bu proje bir wrapper uygulamasıdır, site içeriğini kopyalamaz.

---

# 📌 Kimler Kullanmalı?

- Web geliştiriciler
- SaaS sahipleri
- Panel yazılımı geliştirenler
- Admin dashboard dağıtmak isteyenler
- Internal tool yapan ekipler

---

# 🤝 Katkı

Pull request gönderebilir, issue açabilir veya geliştirme önerilerinde bulunabilirsiniz.

Açık kaynak projelerime destek olmak için 👉 @efesozz  
Yeni projeler için GitHub profilimi takip etmeyi unutmayın.
