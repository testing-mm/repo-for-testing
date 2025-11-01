// Smooth scrolling for hash links (same page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Set active navigation link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all feature cards and model cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card, .model-card, .spec-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add animation class
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Model selection interaction
const modelCards = document.querySelectorAll('.model-card');
modelCards.forEach(card => {
    const button = card.querySelector('.btn-primary');
    button.addEventListener('click', () => {
        const modelSize = card.dataset.model;
        const modelName = card.querySelector('h3').textContent;

        // Remove active class from all cards
        modelCards.forEach(c => c.classList.remove('selected'));

        // Add active class to clicked card
        card.classList.add('selected');

        // Show selection feedback
        showNotification(`${modelName} selected! ${modelSize}-inch model`);
    });
});

// Add selected state styling
const selectedStyle = document.createElement('style');
selectedStyle.textContent = `
    .model-card.selected {
        border: 3px solid #0071e3;
        box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.1);
    }
`;
document.head.appendChild(selectedStyle);

// Notification system
function showNotification(message) {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Add notification styles
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        .notification {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #1d1d1f;
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 2000;
            animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;

    if (!document.querySelector('style[data-notification]')) {
        notificationStyle.setAttribute('data-notification', 'true');
        document.head.appendChild(notificationStyle);
    }

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Page transition feedback for CTAs
document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.tagName === 'A') {
        btn.addEventListener('click', (e) => {
            // Only show notification for "Buy Now" type buttons
            if (btn.textContent.includes('Buy') || btn.textContent.includes('Select')) {
                showNotification('Loading...');
            }
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Navbar background change on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// Add a subtle cursor follower effect for premium feel
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        const cursorEl = document.createElement('div');
        cursorEl.className = 'custom-cursor';
        document.body.appendChild(cursorEl);

        const cursorStyle = document.createElement('style');
        cursorStyle.textContent = `
            .custom-cursor {
                width: 20px;
                height: 20px;
                border: 2px solid #0071e3;
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.2s ease;
                display: none;
            }

            @media (min-width: 1024px) {
                .custom-cursor {
                    display: block;
                }
            }
        `;
        document.head.appendChild(cursorStyle);
    }
});

// Log page load completion
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
console.log(`MacBook Pro ${currentPage} loaded successfully!`);
console.log('Interactive features enabled: animations, model selection, page transitions');
