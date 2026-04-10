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

// Portfolio Modal Logic
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalGrid = document.getElementById('modal-grid');

// Empty for now as requested
const projectData = {
    'Logo Design': [],
    'Graphic Design': [],
    'Video Editing': [],
    'Art Works': []
};

function openProjectFolder(category) {
    if (!modal) return;
    modalTitle.innerText = category;
    modalGrid.innerHTML = ''; 

    const works = projectData[category] || [];
    
    if (works.length === 0) {
        modalGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 100px 0;">
                <i class="fas fa-folder-open" style="font-size: 4rem; color: var(--accent); opacity: 0.2; margin-bottom: 2rem;"></i>
                <p style="font-size: 1.25rem; color: var(--text-light); opacity: 0.6;">This folder is empty for now...</p>
            </div>
        `;
    } else {
        works.forEach(work => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'work-item reveal active'; 
            
            if (work.type === 'img') {
                itemDiv.innerHTML = `<img src="${work.src}" alt="Work" loading="lazy">`;
            } else {
                itemDiv.innerHTML = `<video src="${work.src}" controls muted></video>`;
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

window.onclick = function(event) {
    if (event.target == modal) {
        closeProjectFolder();
    }
}

// Contact Form Submission (Using FormSubmit.co - No API key needed)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = contactForm.querySelector('button');
        const originalBtnHTML = button.innerHTML;

        button.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        button.disabled = true;

        // Collect form data
        const formData = new FormData(contactForm);
        
        // Submit via Fetch
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                button.innerHTML = 'Inquiry Sent! <i class="fas fa-check-circle"></i>';
                button.style.background = '#10B981';
                contactForm.reset();
                setTimeout(() => {
                    button.innerHTML = originalBtnHTML;
                    button.style.background = '';
                    button.disabled = false;
                }, 5000);
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch((err) => {
            console.error('Submission error:', err);
            button.innerHTML = 'Failed — Try Again <i class="fas fa-exclamation-triangle"></i>';
            button.style.background = '#EF4444';
            setTimeout(() => {
                button.innerHTML = originalBtnHTML;
                button.style.background = '';
                button.disabled = false;
            }, 3000);
        });
    });
}
