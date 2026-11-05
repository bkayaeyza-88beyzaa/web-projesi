/**
 * DevCert - Eğitim & Sertifika Portfolyosu (URL Yönlendirmeli)
 * Kullanıcının kendi eğitim ve sertifikalarını manuel olarak eklediği sistem.
 */

// Uygulama Durumu (Tüm eğitimleri kullanıcı elden ekler)
let cards = loadCertificates();
let activeFilter = 'all';
let searchQuery = '';

// DOM Elemanları
const cardGrid = document.getElementById('cardGrid');
const cardCountText = document.getElementById('cardCountText');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const cardModal = document.getElementById('cardModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelBtn = document.getElementById('cancelBtn');
const cardForm = document.getElementById('cardForm');
const termInput = document.getElementById('termInput');
const catInput = document.getElementById('catInput');
const urlInput = document.getElementById('urlInput');
const defInput = document.getElementById('defInput');
const codeInput = document.getElementById('codeInput');

// Kullanıcının Kendi Eklediği Sertifikaları Yükle
function loadCertificates() {
    try {
        const saved = localStorage.getItem('devcert_user_self_added_v1');
        if (!saved) return [];
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        return [];
    }
}

// Kaydet
function saveCertificates() {
    localStorage.setItem('devcert_user_self_added_v1', JSON.stringify(cards));
}

// Kartları Ekrana Çiz (Render)
function renderCards() {
    const filtered = cards.filter(card => {
        const matchCat = activeFilter === 'all' || card.category === activeFilter;
        const q = searchQuery.toLowerCase();
        const matchSearch = card.term.toLowerCase().includes(q) || 
                            card.category.toLowerCase().includes(q) || 
                            card.def.toLowerCase().includes(q);
        return matchCat && matchSearch;
    });

    cardCountText.textContent = `Toplam: ${cards.length} eğitim / sertifika`;

    // Henüz kart eklenmediyse kullanıcıyı karşılayan kutu
    if (filtered.length === 0) {
        if (cards.length === 0) {
            cardGrid.innerHTML = `
                <div class="empty-box">
                    <span class="empty-icon">📚</span>
                    <h3>Henüz Bir Eğitim / Sertifika Eklenmedi</h3>
                    <p>Aldığınız veya takip ettiğiniz kursları, sertifikaları ve web sitesi linklerini eklemeye hemen başlayın.</p>
                    <button class="btn btn-primary" onclick="openModal()">➕ İlk Eğitimini Ekle</button>
                </div>
            `;
        } else {
            cardGrid.innerHTML = `
                <div class="empty-box">
                    <span class="empty-icon">🔍</span>
                    <h3>Aramanıza Uygun Eğitim Bulunamadı</h3>
                    <p>Farklı bir anahtar kelime deneyebilir veya platform filtresini "Tümü" yapabilirsiniz.</p>
                </div>
            `;
        }
        return;
    }

    cardGrid.innerHTML = filtered.map(card => `
        <div class="card" onclick="this.classList.toggle('flipped')">
            <div class="card-inner">
                <!-- Ön Yüz -->
                <div class="card-face card-front">
                    <div class="card-top">
                        <span class="card-badge" data-cat="${card.category}">${card.category}</span>
                        <span class="card-status">${card.status || '🎓 Sertifikalı'}</span>
                    </div>
                    <h3 class="card-title">${escapeHTML(card.term)}</h3>
                    <div class="card-bottom">
                        ${card.url ? `
                            <a href="${escapeHTML(card.url)}" target="_blank" rel="noopener noreferrer" class="btn-link" onclick="event.stopPropagation()" title="Yeni sekmede doğrudan derse git">
                                🔗 Derse Git ↗
                            </a>
                        ` : '<span>🔄 Çevirmek için tıkla</span>'}
                        <button class="btn-del" onclick="event.stopPropagation(); deleteCard('${card.id}')" title="Sil">🗑️</button>
                    </div>
                </div>

                <!-- Arka Yüz -->
                <div class="card-face card-back">
                    <div class="card-top">
                        <span class="card-badge" data-cat="${card.category}">${card.category}</span>
                        ${card.url ? `
                            <a href="${escapeHTML(card.url)}" target="_blank" rel="noopener noreferrer" class="btn-link" onclick="event.stopPropagation()">
                                🔗 Derse Git ↗
                            </a>
                        ` : ''}
                    </div>
                    <p class="card-desc">${escapeHTML(card.def)}</p>
                    ${card.code ? `<div class="code-box"><code>${escapeHTML(card.code)}</code></div>` : ''}
                    <div class="card-bottom">
                        <span>🔄 Ön yüze dön</span>
                        <button class="btn-del" onclick="event.stopPropagation(); deleteCard('${card.id}')" title="Sil">🗑️</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Kart Sil
function deleteCard(id) {
    if (confirm('Bu eğitimi / sertifikayı listenizden silmek istediğinize emin misiniz?')) {
        cards = cards.filter(c => c.id !== id);
        saveCertificates();
        renderCards();
    }
}

// Yeni Eğitim / Kurs Ekle
cardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let url = urlInput.value.trim();
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    const newCard = {
        id: Date.now().toString(),
        term: termInput.value.trim(),
        category: catInput.value,
        url: url,
        status: '🎓 Sertifikalı',
        def: defInput.value.trim(),
        code: codeInput.value.trim()
    };

    if (newCard.term && newCard.def) {
        cards.unshift(newCard);
        saveCertificates();
        renderCards();
        cardModal.classList.add('hidden');
        cardForm.reset();
    }
});

// Arama Girişi
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderCards();
});

// Kategori Filtre Butonları
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.cat;
        renderCards();
    });
});

// Modal Aç / Kapat Fonksiyonları
function openModal() {
    cardForm.reset();
    cardModal.classList.remove('hidden');
    setTimeout(() => termInput.focus(), 50);
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', () => cardModal.classList.add('hidden'));
cancelBtn.addEventListener('click', () => cardModal.classList.add('hidden'));
cardModal.addEventListener('click', (e) => {
    if (e.target === cardModal) cardModal.classList.add('hidden');
});

// XSS Koruması
function escapeHTML(str) {
    return str ? str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[tag] || tag)) : '';
}

// İlk Çalıştırma
renderCards();
