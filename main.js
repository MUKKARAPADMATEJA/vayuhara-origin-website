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
    'Logo Design':    [],  // Coming soon
    'Graphic Design': [],  // Coming soon
    'Video Editing':  [],  // Coming soon
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
            itemDiv.style.cssText = `
                border-radius: 14px;
                overflow: hidden;
                background: #f3f4f6;
                cursor: zoom-in;
                position: relative;
            `;

            if (work.type === 'img') {
                const img = document.createElement('img');
                img.src = work.src;
                img.alt = work.caption || 'Portfolio Work';
                img.loading = 'lazy';
                img.style.cssText = `
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.4s ease;
                `;

                // Caption label
                const label = document.createElement('div');
                label.style.cssText = `
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    background: linear-gradient(transparent, rgba(11,18,32,0.75));
                    color: #fff;
                    font-size: 0.78rem;
                    font-weight: 600;
                    font-family: 'Inter', sans-serif;
                    letter-spacing: 0.5px;
                    padding: 14px 12px 10px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                `;
                label.innerText = work.caption;

                itemDiv.appendChild(img);
                itemDiv.appendChild(label);

                // Hover effects (desktop)
                itemDiv.addEventListener('mouseenter', () => {
                    img.style.transform = 'scale(1.05)';
                    label.style.opacity = '1';
                });
                itemDiv.addEventListener('mouseleave', () => {
                    img.style.transform = 'scale(1)';
                    label.style.opacity = '0';
                });

                // Tap / Click → lightbox zoom
                itemDiv.addEventListener('click', () => openLightbox(work.src, work.caption));

            } else {
                // Video
                const vid = document.createElement('video');
                vid.src = work.src;
                vid.controls = true;
                vid.muted = true;
                vid.playsInline = true;
                vid.style.cssText = 'width:100%; height:100%; object-fit:cover; display:block;';
                itemDiv.appendChild(vid);
            }

            modalGrid.appendChild(itemDiv);
        });
    }

    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

function closeProjectFolder() {
    if (!modal) return;
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// ── LIGHTBOX (Full-screen image tap/click viewer) ──
function openLightbox(src, caption) {
    // Remove existing
    const existing = document.getElementById('vayuhara-lightbox');
    if (existing) existing.remove();

    const lb = document.createElement('div');
    lb.id = 'vayuhara-lightbox';
    lb.style.cssText = `
        position: fixed; inset: 0; z-index: 99999;
        background: rgba(7, 20, 38, 0.97);
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        padding: 20px;
        animation: lbFadeIn 0.25s ease forwards;
    `;

    lb.innerHTML = `
        <style>
            @keyframes lbFadeIn { from { opacity:0; } to { opacity:1; } }
            #vayuhara-lightbox img { max-width:100%; max-height:80vh; object-fit:contain; border-radius:12px; box-shadow:0 20px 80px rgba(0,0,0,0.6); }
            #vayuhara-lightbox .lb-caption { color:#d1d5db; font-size:0.88rem; font-family:'Inter',sans-serif; margin-top:14px; letter-spacing:0.5px; }
            #vayuhara-lightbox .lb-close { position:absolute; top:18px; right:22px; background:none; border:none; color:#fff; font-size:2.4rem; cursor:pointer; line-height:1; z-index:2; }
        </style>
        <button class="lb-close" onclick="closeLightbox()">&#215;</button>
        <img src="${src}" alt="${caption}">
        <p class="lb-caption">${caption}</p>
    `;

    lb.addEventListener('click', (e) => {
        if (e.target === lb) closeLightbox();
    });

    document.body.appendChild(lb);
    document.body.style.overflow = 'hidden';
}

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


/* 
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // ... AJAX disabled for debugging ...
    });
}
*/

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

