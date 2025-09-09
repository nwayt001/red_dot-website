// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for background opacity
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - navbar.offsetHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('stat-number')) {
                animateValue(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.feature-card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
});

document.querySelectorAll('.step').forEach(step => {
    step.classList.add('fade-in');
    observer.observe(step);
});

document.querySelectorAll('.stat-number').forEach(stat => {
    observer.observe(stat);
});

// Animate statistics counter
function animateValue(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Parallax effect for hero section
const heroSection = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add mobile menu styles dynamically
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 60px;
            right: -100%;
            width: 100%;
            height: calc(100vh - 60px);
            background-color: var(--bg-primary);
            transition: right 0.3s ease;
            display: block;
        }
        
        .nav-menu.active {
            right: 0;
        }
        
        .nav-links {
            flex-direction: column;
            padding: 2rem;
            gap: 2rem;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`;
document.head.appendChild(style);

// Add floating animation to alert cards
const alertCards = document.querySelectorAll('.alert-card');
alertCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 2}s`;
});

// Lazy load images (placeholder for actual implementation)
const images = document.querySelectorAll('img[data-src]');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
}, imageOptions);

images.forEach(img => imageObserver.observe(img));

// Add hover effect to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Form submission (placeholder for future implementation)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted');
        // Add form handling logic here
    });
});

// Donation-related functions
function toggleCryptoAddresses() {
    const cryptoAddresses = document.getElementById('crypto-addresses');
    const cryptoBtn = document.querySelector('.crypto-btn');
    
    if (cryptoAddresses.style.display === 'none' || cryptoAddresses.style.display === '') {
        cryptoAddresses.style.display = 'block';
        cryptoBtn.textContent = 'Hide Crypto Addresses';
    } else {
        cryptoAddresses.style.display = 'none';
        cryptoBtn.textContent = 'Show Crypto Addresses';
    }
}

// Copy to clipboard functionality
function copyToClipboard(element) {
    const text = element.textContent;
    
    // Create temporary textarea to copy text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    // Visual feedback
    const originalText = element.textContent;
    element.textContent = 'Copied!';
    element.style.background = 'var(--primary-color)';
    element.style.color = 'white';
    
    setTimeout(() => {
        element.textContent = originalText;
        element.style.background = '';
        element.style.color = '';
    }, 2000);
}

// Observe support section for animations
const supportSection = document.querySelector('.support-section');
if (supportSection) {
    const supportElements = supportSection.querySelectorAll('.support-info, .donation-options');
    supportElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Thank You Modal functions
function showThankYouModal() {
    const modal = document.getElementById('thankYouModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeThankYouModal() {
    const modal = document.getElementById('thankYouModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Check URL parameters for thank you redirect
function checkForThankYou() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('thankyou') === 'true') {
        showThankYouModal();
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Red Dot website loaded');
    
    // Add click handlers for crypto addresses
    document.querySelectorAll('.address').forEach(address => {
        address.addEventListener('click', function() {
            copyToClipboard(this);
        });
    });
    
    // Check if we should show thank you modal
    checkForThankYou();
});