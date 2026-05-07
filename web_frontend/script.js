document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            const target = item.getAttribute('data-target');
            views.forEach(v => {
                if (v.id === target) v.classList.add('active');
                else v.classList.remove('active');
            });
        });
    });

    // Mock Data
    let mockData = [
        {
            id: '1A98-XR',
            desc: "Cumhuriyet caddesindeki orta refüj peyzaj sulama sistemi patlamış, su yola akıp trafiği tehlikeye atıyor.",
            cat: "Altyapı",
            pri: "Acil",
            ai_advice: "Sulama hortumunda rüptür tespit edildi. Suyun yola akması kaza riski taşıdığı için Fen İşleri Acil Müdahale ekibine lokasyon iletildi.",
            date: "12 Dk"
        },
        {
            id: '2B14-YZ',
            desc: "Millet bahçesi 2. kapı girişindeki çöp konteynerleri 3 gündür alınmıyor, etrafa koku yayılmış.",
            cat: "Çevre",
            pri: "Orta",
            ai_advice: "Çevre kirliliği algoritması tarafından onaylandı. İlgili temizlik görevli aracının rotasına öncelikli 'Toplama' durağı olarak eklendi.",
            date: "4 Saat"
        }
    ];

    const feedContainer = document.getElementById('feed-container');
    const modal = document.getElementById('ai-modal');
    const cloBtn = document.querySelector('.close-modal');
    const mDesc = document.getElementById('m-desc');
    const mAi = document.getElementById('m-ai');
    const mTags = document.getElementById('m-tags');
    const mRef = document.getElementById('ref-id');
    const activeIssues = document.getElementById('active-issues');

    function updateActiveCount() {
        activeIssues.innerText = mockData.length + 16; // mock starting count
    }

    function generateTags(c, p) {
        let pk = p === 'Acil' ? 'aci' : p === 'Orta' ? 'ort' : 'dus';
        let ck = c === 'Altyapı' ? 'alt' : c === 'Çevre' ? 'cev' : 'alt';
        return `<span class="tag ${ck}">${c}</span><span class="tag ${pk}">${p}</span>`;
    }

    function renderFeed() {
        feedContainer.innerHTML = '';
        mockData.forEach(d => {
            let tr = document.createElement('div');
            tr.className = 'f-card';
            tr.innerHTML = `
                <div class="f-top">${generateTags(d.cat, d.pri)}</div>
                <p>${d.desc}</p>
                <div class="f-bot">
                    <span>#URB-${d.id}</span>
                    <span>${d.date} Önce</span>
                </div>
            `;
            tr.addEventListener('click', () => {
                mDesc.innerText = `"${d.desc}"`;
                mAi.innerText = d.ai_advice;
                mRef.innerText = d.id;
                mTags.innerHTML = generateTags(d.cat, d.pri);
                modal.classList.remove('hidden');
            });
            feedContainer.appendChild(tr);
        });
        updateActiveCount();
    }

    cloBtn.addEventListener('click', () => modal.classList.add('hidden'));

    renderFeed();

    // Submit Logic
    const subBtn = document.getElementById('submit-report');
    const inp = document.getElementById('problem-input');
    const toast = document.getElementById('toast');

    subBtn.addEventListener('click', async () => {
        let val = inp.value.trim();
        if (!val) return alert("Lütfen detayı girin.");

        let ot = subBtn.innerHTML;
        subBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> AI İşleniyor...';
        subBtn.disabled = true;

        await new Promise(r => setTimeout(r, 1500));

        let rp = "Düşük"; let rc = "Bağlı Birim"; let rad = "Konu belediye sistemine rutin talep olarak aktarıldı.";
        let textL = val.toLowerCase();

        if (textL.includes("su") || textL.includes("boru") || textL.includes("elektrik") || textL.includes("yol")) {
            rp = "Acil"; rc = "Altyapı"; rad = "Kritik altyapı riski algılandı, Acil Müdahale ekiplerine anında SMS / Push bildirimi yapıldı.";
        } else if (textL.includes("çöp") || textL.includes("park") || textL.includes("köpek") || textL.includes("koku")) {
            rp = "Orta"; rc = "Çevre"; rad = "Çevre refahını düşüren bu etmen analiz edildi. Temizlik ekiplerinin günlük rotasına manuel olarak PIN'lendi.";
        }

        mockData.unshift({
            id: Math.random().toString(36).substring(2, 8).toUpperCase(),
            desc: val,
            cat: rc,
            pri: rp,
            ai_advice: rad,
            date: "1 Dk"
        });

        inp.value = '';
        subBtn.innerHTML = ot;
        subBtn.disabled = false;

        renderFeed();

        // Show Toast
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3500);

        // Go to feed
        navItems[2].click();
    });
});
