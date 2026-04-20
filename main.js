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
            el.classList.remove('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

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

// -- WHATSAPP CONTACT FORM --
function sendViaWhatsApp(e) {
    e.preventDefault();

    const name    = document.getElementById('wa-name').value.trim();
    const service = document.getElementById('wa-service').value;
    const message = document.getElementById('wa-message').value.trim();

    if (!name || !service || !message) return;

    const text = 
        `Hello Vayuhara Origin! ðŸ‘‹\n\n` +
        `*Name:* ${name}\n` +
        `*Service Interested In:* ${service}\n\n` +
        `*Message:*\n${message}\n\n` +
        `â€” Sent from vayuharaorigin.com`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919063996713?text=${encoded}`, '_blank');
    document.getElementById('whatsapp-form').reset();
}

// Portfolio Modal Logic
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalGrid = document.getElementById('modal-grid');

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
    'Graphic Design': [],
    'Video Editing': [
        { type: 'video', src: 'video_edit_2.mp4', caption: 'Creative Showcase' },
        { type: 'video', src: 'video_edit_3.mp4', caption: 'Cinematic Credits' },
        { type: 'video', src: 'video_edit_4.mp4', caption: 'Production Highlight' },
        { type: 'video', src: 'video_edit_5.mp4', caption: 'Visual Storytelling' },
    ],
    'Art Works': [
        { type: 'img', src: '1000944520.jpg', caption: 'Art Work 1' },
        { type: 'img', src: '1000944521.jpg', caption: 'Art Work 2' },
        { type: 'img', src: '1000945619.jpg', caption: 'Art Work 3' },
        { type: 'img', src: '1000945620.jpg', caption: 'Art Work 4' },
        { type: 'img', src: '1000945621.jpg', caption: 'Art Work 5' },
        { type: 'img', src: '1000945622.jpg', caption: 'Art Work 6' },
        { type: 'img', src: '1000945623.jpg', caption: 'Art Work 7' },
        { type: 'img', src: '1000945624.jpg', caption: 'Art Work 8' },
        { type: 'img', src: '1000945627.jpg', caption: 'Art Work 9' },
        { type: 'img', src: '1000945628.jpg', caption: 'Art Work 10' },
        { type: 'img', src: '1000945629.jpg', caption: 'Art Work 11' },
        { type: 'img', src: '1000945631.jpg', caption: 'Art Work 12' },
        { type: 'img', src: '1000945633.jpg', caption: 'Art Work 13' },
        { type: 'img', src: '1000945634.jpg', caption: 'Art Work 14' },
        { type: 'img', src: '1000945635.jpg', caption: 'Art Work 15' },
        { type: 'img', src: '1000945637.jpg', caption: 'Art Work 16' },
        { type: 'img', src: '1000945638.jpg', caption: 'Art Work 17' },
        { type: 'img', src: '1000945639.jpg', caption: 'Art Work 18' },
        { type: 'img', src: '1000945641.jpg', caption: 'Art Work 19' },
        { type: 'img', src: '1000945755.jpg', caption: 'Art Work 20' },
        { type: 'img', src: '1000946402.jpg', caption: 'Art Work 21' },
        { type: 'img', src: '1000947400.jpg', caption: 'Art Work 22' },
        { type: 'img', src: '47845.jpg', caption: 'Art Work 23' },
    ],
    'Harsha Vardhan': [],
    'Rohith': [],
    'Narasimha': []
};

let currentGallery = [];
let currentGalleryIdx = 0;

function openProjectFolder(category) {
    if (!modal) return;
    modalTitle.innerText = category;
    modalGrid.innerHTML = '';

    const works = projectData[category] || [];
    currentGallery = works; 

    if (works.length === 0) {
        modalGrid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 80px 20px; color: var(--text-light);">Coming Soon...</div>`;
    } else {
        works.forEach((work, idx) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'work-item';
            itemDiv.style.cssText = `height: 300px; display: flex; align-items: center; border-radius: 14px; overflow: hidden; background: #f9fafb; cursor: zoom-in; position: relative; border: 1px solid rgba(0,0,0,0.05);`;

            if (work.type === 'img') {
                const img = document.createElement('img');
                img.src = work.src;
                img.style.cssText = `width: 100%; height: auto; max-height: 100%; object-fit: contain; display: block; margin: auto; transition: transform 0.4s ease;`;
                itemDiv.appendChild(img);
                itemDiv.addEventListener('mouseenter', () => img.style.transform = 'scale(1.05)');
                itemDiv.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
                itemDiv.addEventListener('click', () => openLightbox(idx));
            } else {
                const vid = document.createElement('video');
                vid.src = work.src;
                vid.controls = true;
                vid.playsInline = true; vid.preload = 'metadata';
                vid.controlsList = 'nodownload';
                vid.style.cssText = 'width:100%; height:100%; object-fit:cover;';
                itemDiv.appendChild(vid);
                itemDiv.addEventListener('click', (e) => {
                    if (e.target === vid) return;
                    openLightbox(idx);
                });
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

function openLightbox(idx) {
    currentGalleryIdx = idx;
    const work = currentGallery[idx];
    if (!work) return;

    const lb = document.createElement('div');
    lb.id = 'vayuhara-lightbox';
    lb.style.cssText = `position: fixed; inset: 0; z-index: 99999; background: rgba(7, 20, 38, 0.99); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px;`;
    
    lb.innerHTML = `
        <style>
            .lb-content-container { position:relative; max-width:90%; max-height:80vh; display:flex; flex-direction:column; align-items:center; }
            .lb-content-container img, .lb-content-container video { max-width:100%; max-height:75vh; border-radius:12px; }
            .lb-nav { position:absolute; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.1); color:#fff; border:none; width:50px; height:50px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; }
            .lb-prev { left:-70px; } .lb-next { right:-70px; }
            .lb-count { position:absolute; top:20px; color:rgba(255,255,255,0.5); font-size:0.9rem; }
            .lb-close { position:absolute; top:20px; right:20px; background:none; border:none; color:#fff; font-size:2rem; cursor:pointer; }
            @media (max-width: 768px) { .lb-prev { left:10px; } .lb-next { right:10px; } }
        </style>
        <div class="lb-count">${idx + 1} / ${currentGallery.length}</div>
        <button class="lb-close" onclick="closeLightbox()">&times;</button>
        <div class="lb-content-container">
            <button class="lb-nav lb-prev" onclick="changeLightbox(-1)"><i class="fas fa-chevron-left"></i></button>
            <div id="lb-media-target"></div>
            <p id="lb-caption" style="color:white; margin-top:20px; font-family:'Inter'; text-align:center;">${work.caption}</p>
            <button class="lb-nav lb-next" onclick="changeLightbox(1)"><i class="fas fa-chevron-right"></i></button>
        </div>
    `;

    document.body.appendChild(lb);
    renderMediaInLightbox(work);
    document.body.style.overflow = 'hidden';
}

function renderMediaInLightbox(work) {
    const target = document.getElementById('lb-media-target');
    target.innerHTML = '';
    if (work.type === 'video') {
        const vid = document.createElement('video');
        vid.src = work.src; vid.controls = true; vid.autoplay = true; vid.preload = 'auto'; vid.controlsList = 'nodownload'; vid.style.cssText = 'max-width:100%; max-height:75vh; border-radius:12px;';
        target.appendChild(vid);
    } else {
        const img = document.createElement('img');
        img.src = work.src; img.style.cssText = 'max-width:100%; max-height:75vh; border-radius:12px;';
        target.appendChild(img);
    }
}

window.changeLightbox = function(delta) {
    currentGalleryIdx = (currentGalleryIdx + delta + currentGallery.length) % currentGallery.length;
    const work = currentGallery[currentGalleryIdx];
    renderMediaInLightbox(work);
    document.getElementById('lb-caption').innerText = work.caption;
    document.querySelector('.lb-count').innerText = `${currentGalleryIdx + 1} / ${currentGallery.length}`;
};

window.closeLightbox = function() {
    const lb = document.getElementById('vayuhara-lightbox');
    if (lb) lb.remove();
    if (!modal || !modal.classList.contains('active')) document.body.style.overflow = 'auto';
};

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') changeLightbox(1);
    if (e.key === 'ArrowLeft') changeLightbox(-1);
    if (e.key === 'Escape') closeLightbox();
});

window.onclick = function(event) {
    if (event.target == modal) closeProjectFolder();
};

// Premium Enhancements Logic

// 1. Custom Cursor (Dot + Ring)
const cursor = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.cursor-dot');

if (cursor && cursorDot) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Dot follows instantly
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    // Ring follows with a smooth delay
    const animateCursor = () => {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.15;
        cursorY += dy * 0.15;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const hoverables = document.querySelectorAll('a, button, .portfolio-card, .work-item, .creator-card, .cta-group .btn');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorDot.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorDot.classList.remove('hover');
        });
    });
}

// 2. Scroll Progress & Back to Top
const progress = document.getElementById('scroll-progress');
const btt = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (window.scrollY / totalHeight) * 100;
    
    if (progress) progress.style.width = scrollPercent + '%';
    
    if (btt) {
        if (window.scrollY > 500) {
            btt.classList.add('visible');
        } else {
            btt.classList.remove('visible');
        }
    }
});

if (btt) {
    btt.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 3. Parallax Effect (Subtle)
window.addEventListener('scroll', () => {
    const muggus = document.querySelectorAll('.muggu-bg');
    muggus.forEach(m => {
        const speed = 0.2;
        m.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});
