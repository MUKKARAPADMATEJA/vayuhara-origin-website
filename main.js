// Sticky Navbar
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    }
});

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileOverlay = document.getElementById('mobile-overlay');
const closeMenuBtn = document.getElementById('close-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileMenuBtn && mobileOverlay && closeMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenuBtn.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Scroll Reveal Logic (Enhanced for Back Animations)
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.9;
        
        if (rect.top < triggerPoint && rect.bottom > 0) {
            el.classList.add('active');
        } else {
            // Symmetrical back-animation removal
            el.classList.remove('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ── WHATSAPP CONTACT FORM ──
function sendViaWhatsApp(e) {
    e.preventDefault();

    const name    = document.getElementById('wa-name').value.trim();
    const service = document.getElementById('wa-service').value;
    const message = document.getElementById('wa-message').value.trim();

    if (!name || !service || !message) return;

    const text = 
        `Hello Vayuhara Origin! 👋\n\n` +
        `*Name:* ${name}\n` +
        `*Service Interested In:* ${service}\n\n` +
        `*Message:*\n${message}\n\n` +
        `— Sent from vayuharaorigin.com`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919063996713?text=${encoded}`, '_blank');

    // Reset form after opening WhatsApp
    document.getElementById('whatsapp-form').reset();
}

// Portfolio Modal Logic — DOM refs
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalGrid = document.getElementById('modal-grid');

// Portfolio Folder Data
const projectData = {
    'Logos & Posters': [
        { type: 'img', src: 'logo_1.jpg', caption: 'Premium Branding 1' },
        { type: 'img', src: 'logo_2.jpg', caption: 'Vayuhara Concept 2' },
        { type: 'img', src: 'logo_3.jpg', caption: 'Digital Poster 3' },
        { type: 'img', src: 'logo_4.jpg', caption: 'Creative Identity 4' },
        { type: 'img', src: 'logo_5.jpg', caption: 'Minimalist Logo 5' },
        { type: 'img', src: 'logo_6.jpg', caption: 'Brand Identity 6' },
        { type: 'img', src: 'logo_7.jpg', caption: 'Graphic Concept 7' },
        { type: 'img', src: 'logo_8.jpg', caption: 'Modern Poster 8' },
        { type: 'img', src: 'logo_9.jpg', caption: 'Premium Art Concept 9' },
        { type: 'img', src: 'logo_10.jpg', caption: 'Social Creative 10' },
        { type: 'img', src: 'logo_11.jpg', caption: 'MAD X Concept 11' },
    ],
    'Graphic Design': [],  // Coming soon
    'Video Editing': [
        { type: 'video', src: 'video_edit_2.mp4', caption: 'Creative Showcase' },
        { type: 'video', src: 'video_edit_3.mp4', caption: 'Cinematic Credits' },
        { type: 'video', src: 'video_edit_4.mp4', caption: 'Production Highlight' },
        { type: 'video', src: 'video_edit_5.mp4', caption: 'Visual Storytelling' },
    ],
    'Art Works': [
        { type: 'img', src: '1000944520.jpg',   caption: 'Art Work 1' },
        { type: 'img', src: '1000944521.jpg',   caption: 'Art Work 2' },
        { type: 'img', src: '1000945619.jpg',   caption: 'Art Work 3' },
        { type: 'img', src: '1000945620.jpg',   caption: 'Art Work 4' },
        { type: 'img', src: '1000945621.jpg',   caption: 'Art Work 5' },
        { type: 'img', src: '1000945622.jpg',   caption: 'Art Work 6' },
        { type: 'img', src: '1000945623.jpg',   caption: 'Art Work 7' },
        { type: 'img', src: '1000945624.jpg',   caption: 'Art Work 8' },
        { type: 'img', src: '1000945627.jpg',   caption: 'Art Work 9' },
        { type: 'img', src: '1000945628.jpg',   caption: 'Art Work 10' },
        { type: 'img', src: '1000945629.jpg',   caption: 'Art Work 11' },
        { type: 'img', src: '1000945631.jpg',   caption: 'Art Work 12' },
        { type: 'img', src: '1000945633.jpg',   caption: 'Art Work 13' },
        { type: 'img', src: '1000945634.jpg',   caption: 'Art Work 14' },
        { type: 'img', src: '1000945635.jpg',   caption: 'Art Work 15' },
        { type: 'img', src: '1000945637.jpg',   caption: 'Art Work 16' },
        { type: 'img', src: '1000945638.jpg',   caption: 'Art Work 17' },
        { type: 'img', src: '1000945639.jpg',   caption: 'Art Work 18' },
        { type: 'img', src: '1000945641.jpg',   caption: 'Art Work 19' },
        { type: 'img', src: '1000945755.jpg',   caption: 'Art Work 20' },
        { type: 'img', src: '1000946402.jpg',   caption: 'Art Work 21' },
        { type: 'img', src: '1000947400.jpg',   caption: 'Art Work 22' },
        { type: 'img', src: '47845.jpg',        caption: 'Art Work 23' },
    ]
};

// Lightbox (tap-to-zoom) state
let lightboxActive = false;

function openProjectFolder(category) {
    if (!modal) return;
    modalTitle.innerText = category;
    modalGrid.innerHTML = '';

    const works = projectData[category] || [];
    currentGallery = works; 

    if (works.length === 0) {
        modalGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 80px 20px; display:flex; flex-direction:column; align-items:center; gap:1.5rem;">
                <i class="fas fa-film" style="font-size: 3.5rem; color: var(--accent); opacity: 0.25;"></i>
                <p style="font-size: 1.1rem; color: var(--text-light); opacity: 0.6; font-family:'Sora',sans-serif;">
                    Coming Soon...<br>
                    <span style="font-size:0.88rem; opacity:0.7;">We're currently curating this portfolio. Check back soon!</span>
                </p>
            </div>
        `;
    } else {
        works.forEach((work, idx) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'work-item';
            itemDiv.style.cssText = `height: 300px; display: flex; align-items: center; border-radius: 14px; overflow: hidden; background: #f9fafb; cursor: zoom-in; position: relative;`;

            if (work.type === 'img') {
                const img = document.createElement('img');
                img.src = work.src;
                img.style.cssText = `width: 100%; height: auto; max-height: 100%; object-fit: contain; display: block; margin: auto; transition: transform 0.4s ease;`;

                const label = document.createElement('div');
                label.style.cssText = `position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(11,18,32,0.75)); color: #fff; font-size: 0.78rem; font-weight: 600; font-family: 'Inter', sans-serif; padding: 14px 12px 10px; opacity: 0; transition: opacity 0.3s ease;`;
                label.innerText = work.caption;

                itemDiv.appendChild(img);
                itemDiv.appendChild(label);
                itemDiv.addEventListener('mouseenter', () => { img.style.transform = 'scale(1.05)'; label.style.opacity = '1'; });
                itemDiv.addEventListener('mouseleave', () => { img.style.transform = 'scale(1)'; label.style.opacity = '0'; });
                itemDiv.addEventListener('click', () => openLightbox(idx));
            } else {
                itemDiv.style.aspectRatio = '16/9';
                const vid = document.createElement('video');
                vid.src = work.src;
                vid.controls = true;
                vid.playsInline = true;
                vid.controlsList = 'nodownload'; 
                vid.oncontextmenu = (e) => e.preventDefault();
                vid.style.cssText = 'width:100%; height:100%; object-fit:cover; display:block;';
                vid.addEventListener('play', () => {
                    const allVids = modalGrid.querySelectorAll('video');
                    allVids.forEach(v => { if(v !== vid) v.pause(); });
                });
                itemDiv.appendChild(vid);
            }
            modalGrid.appendChild(itemDiv);
        });
    }

    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

function closeProjectFolder() {
    if (!modal) return;
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    }, 300);
}

// ── LIGHTBOX (Full-screen gallery viewer) ──
let currentGallery = [];
let currentGalleryIdx = 0;

function openLightbox(idx) {
    currentGalleryIdx = idx;
    const work = currentGallery[idx];
    if (!work || work.type !== 'img') return;

    // Remove existing
    const existing = document.getElementById('vayuhara-lightbox');
    if (existing) existing.remove();

    const lb = document.createElement('div');
    lb.id = 'vayuhara-lightbox';
    lb.style.cssText = `
        position: fixed; inset: 0; z-index: 99999;
        background: rgba(7, 20, 38, 0.98);
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        padding: 20px;
        animation: lbFadeIn 0.3s ease-out forwards;
    `;

    lb.innerHTML = `
        <style>
            @keyframes lbFadeIn { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }
            #vayuhara-lightbox img { max-width:90%; max-height:75vh; object-fit:contain; border-radius:12px; box-shadow:0 30px 100px rgba(0,0,0,0.8); transition: transform 0.3s ease; }
            .lb-nav { position:absolute; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.05); color:#fff; border:none; width:60px; height:60px; border-radius:50%; font-size:1.5rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.3s; z-index:100; }
            .lb-nav:hover { background:var(--accent); transform:translateY(-50%) scale(1.1); }
            .lb-prev { left:30px; }
            .lb-next { right:30px; }
            .lb-count { position:absolute; top:20px; left:50%; transform:translateX(-50%); color:rgba(255,255,255,0.5); font-size:0.9rem; font-family:'Inter',sans-serif; }
            #vayuhara-lightbox .lb-close { position:absolute; top:18px; right:22px; background:none; border:none; color:#fff; font-size:2.4rem; cursor:pointer; line-height:1; z-index:101; opacity:0.6; transition:opacity 0.3s; }
            #vayuhara-lightbox .lb-close:hover { opacity:1; }
        </style>
        <div class="lb-count">${idx + 1} / ${currentGallery.length}</div>
        <button class="lb-close" onclick="closeLightbox()">&#215;</button>
        <button class="lb-nav lb-prev" onclick="changeLightbox(-1)"><i class="fas fa-chevron-left"></i></button>
        <img id="lb-img" src="${work.src}" alt="${work.caption}">
        <p class="lb-caption" id="lb-caption" style="color:white; margin-top:15px; font-family:'Inter'">${work.caption}</p>
        <button class="lb-nav lb-next" onclick="changeLightbox(1)"><i class="fas fa-chevron-right"></i></button>
    `;

    lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
    document.body.appendChild(lb);
    document.body.style.overflow = 'hidden';
}

window.changeLightbox = function(delta) {
    let nextIdx = currentGalleryIdx + delta;
    if (nextIdx < 0) nextIdx = currentGallery.length - 1;
    if (nextIdx >= currentGallery.length) nextIdx = 0;
    
    // If next item is video, skip it
    if (currentGallery[nextIdx].type !== 'img') {
        currentGalleryIdx = nextIdx;
        changeLightbox(delta);
        return;
    }
    
    currentGalleryIdx = nextIdx;
    const work = currentGallery[nextIdx];
    document.getElementById('lb-img').src = work.src;
    document.getElementById('lb-caption').innerText = work.caption;
    document.querySelector('.lb-count').innerText = `${nextIdx + 1} / ${currentGallery.length}`;
};

// Keyboard Arrow Support
window.addEventListener('keydown', (e) => {
    const lb = document.getElementById('vayuhara-lightbox');
    if (!lb) return;
    if (e.key === 'ArrowRight') changeLightbox(1);
    if (e.key === 'ArrowLeft') changeLightbox(-1);
    if (e.key === 'Escape') closeLightbox();
});

function closeLightbox() {
    const lb = document.getElementById('vayuhara-lightbox');
    if (lb) lb.remove();
    // Keep body locked if modal is still open
    if (!modal || !modal.classList.contains('active')) {
        document.body.style.overflow = 'auto';
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeProjectFolder();
    }
}

// -- SCROLL TO TOP LOGIC --
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ── VAYUHARA AI SYSTEM (MULTILINGUAL v3.1) ──
const aiToggle = document.getElementById('ai-toggle');
const aiClose = document.getElementById('ai-close');
const aiWindow = document.getElementById('ai-window');
const aiInput = document.getElementById('ai-input');
const aiSend = document.getElementById('ai-send');
const aiMessages = document.getElementById('ai-messages');

let currentAILang = 'en';

const aiKnowledgeBase = {
    'en': {
        'greetings': 'Hello! I am the **VAYUHARA AI** 🤖. How can I assist you in English today? ✨',
        'services': 'We offer a full creative suite: **Logo Design** 🎨, **Graphic Design** ✍️, **Poster Design** 📄, **Video Editing** 🎬, **Web Development** 💻, and **Digital Artworks** 💎.',
        'contact': 'Reach our team at vayuharaorigin@gmail.com ✉️ or WhatsApp: **+91 9063996713** 📞 (Msgs/Calls only). We respond instantly! ⚡',
        'founder': 'Padma Teja Mukkara is our Founder 👑 and the creative visionary behind every masterpiece 🚀.',
        'price': 'Our pricing is project-based and very competitive 💰. To get an exact quote for your project, reach out on WhatsApp! 📲',
        'default': 'That is an interesting vision! 🌟 To give you the most accurate details for your project, let\'s chat on WhatsApp: +91 9063996713 💬'
    },
    'hi': {
        'greetings': 'नमस्ते! मैं **VAYUHARA AI** 🤖 हूँ। मैं आपकी कैसे मदद कर सकता हूँ? ✨',
        'services': 'हम आपको ये सेवाएं देते हैं: **लोगो डिजाइन** 🎨, **ग्राफिक डिजाइन** ✍️, **पोस्टर डिजाइन** 📄, **वीडियो एडिटिंग** 🎬 और **वेबसाइट डेवलपमेंट** 💻।',
        'contact': 'हमसे vayuharaorigin@gmail.com ✉️ या व्हाट्सएप: **+91 9063996713** 📞 पर संपर्क करें। ⚡',
        'founder': 'पद्म तेजा मुक्कारा हमारे संस्थापक (Founder) 👑 और विजनरी लीडर हैं 🚀।',
        'price': 'हमारी कीमतें आपके प्रोजेक्ट के हिसाब से अनुकूलित होती हैं 💰। व्हाट्सएप पर संपर्क करें! 📲',
        'default': 'यह एक शानदार विचार है! 🌟 विस्तृत जानकारी के लिए कृपया व्हाट्सएप पर हमसे जुड़ें: +91 9063996713 💬'
    },
    'te': {
        'greetings': 'నమస్కారం! నేను **VAYUHARA AI** 🤖. మీకు ఎలా సహాయపడగలను? ✨',
        'services': 'మేము **లోగో డిజైన్** 🎨, **గ్రాఫిక్ డిజైన్** ✍️, **పోస్టర్ డిజైన్** 📄, **వీడియో ఎడిటింగ్** 🎬 మరియు **వెబ్‌సైట్ డెవలప్‌మెంట్** 💻 సేవలను అందిస్తాము.',
        'contact': 'మమ్మల్ని vayuharaorigin@gmail.com ✉️ లేదా వాట్సాప్: **+91 9063996713** 📞 లో సంప్రదించండి. ⚡',
        'founder': 'పద్మ తేజ ముక్కార మా వ్యవస్థాపకుడు (Founder) 👑 మరియు మా క్రియేటివ్ విజన్ 🚀.',
        'price': 'ప్రాజెక్ట్ ఆధారంగా మా ధరలు ఉంటాయి 💰. వివరాల కోసం మాకు వాట్సాప్ చేయండి! 📲',
        'default': 'ఇది చాలా మంచి ఆలోచన! 🌟 మరిన్ని వివరాల కోసం దయచేసి వాట్సాప్‌లో చాట్ చేయండి: +91 9063996713 💬'
    }
};

function toggleAI() { aiWindow.classList.toggle('active'); }
if(aiToggle) aiToggle.addEventListener('click', toggleAI);
if(aiClose) aiClose.addEventListener('click', toggleAI);

function addMessage(text, type) {
    const msg = document.createElement('div');
    msg.className = `message ${type}-msg`;
    msg.innerHTML = text;
    aiMessages.appendChild(msg);
    aiMessages.scrollTop = aiMessages.scrollHeight;
}

function setAILang(lang) {
    currentAILang = lang;
    document.querySelectorAll('.ai-lang-selector button').forEach(btn => btn.classList.remove('active'));
    setTimeout(() => addMessage(aiKnowledgeBase[lang]['greetings'], 'bot'), 300);
}

function processAI(query) {
    const q = query.toLowerCase().trim();
    const lang = currentAILang;
    let response = aiKnowledgeBase[lang]['default'];

    if (q.match(/hi|hello|hey|नमस्ते|నమస్కారం/)) response = aiKnowledgeBase[lang]['greetings'];
    else if (q.match(/service|offer|do you do|काम|काम|పని|సేవలు/)) response = aiKnowledgeBase[lang]['services'];
    else if (q.match(/contact|phone|number|reach|नंबर|సంప్రదించండి|ఫోన్/)) response = aiKnowledgeBase[lang]['contact'];
    else if (q.match(/founder|boss|owner|padma|teja|స్థాపకుడు|సంస్థాపకుడు/)) response = aiKnowledgeBase[lang]['founder'];
    else if (q.match(/price|cost|quote|कितना|ధర|డబ్బులు/)) response = aiKnowledgeBase[lang]['price'];

    setTimeout(() => { 
        const typingMsg = document.createElement('div');
        typingMsg.className = 'message bot-msg typing-indicator';
        typingMsg.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
        aiMessages.appendChild(typingMsg);
        aiMessages.scrollTop = aiMessages.scrollHeight;

        const thinkTime = 1000 + Math.random() * 800;
        setTimeout(() => {
            typingMsg.remove();
            addMessage(response, 'bot');
        }, thinkTime);
    }, 200);
}

function handleSend() {
    const text = aiInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    aiInput.value = '';
    processAI(text);
}

if(aiSend) aiSend.addEventListener('click', handleSend);
if(aiInput) aiInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSend(); });

window.askAI = function(query) {
    if (!aiWindow.classList.contains('active')) toggleAI();
    addMessage(query, 'user');
    processAI(query);
};
