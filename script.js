// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const menuOverlay = document.getElementById('menuOverlay');
    
    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function openMenu() {
        hamburger.classList.add('active');
        navLinks.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    if (hamburger && navLinks && menuOverlay) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });
        
        // Close menu when clicking overlay
        menuOverlay.addEventListener('click', () => {
            closeMenu();
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                closeMenu();
            }
        });
        
        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                closeMenu();
            }
        });
    }
    
    // Duplicate carousel items for seamless loop
    const carousel = document.querySelector('.institutions-carousel');
    if (carousel) {
        const items = carousel.innerHTML;
        carousel.innerHTML += items; // Duplicate for seamless loop
    }
    
    // Observe counters
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => observer.observe(counter));
});

// Animated Counter
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 1500;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger counter animation
            if (entry.target.classList.contains('counter')) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Smooth scroll for anchor links
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

// Chatbot trigger
document.querySelector('.chatbot-trigger')?.addEventListener('click', () => {
    alert('AI Chatbot "Ask Divya" - Integration pending');
});
// ========================================
// HOMEPAGE REDESIGN FUNCTIONALITY - MOBILE-FIRST
// ========================================

// Mobile Search Overlay Functions
function openSearchOverlay() {
    const overlay = document.getElementById('searchOverlay');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Focus on mobile search input
        setTimeout(() => {
            const mobileInput = document.getElementById('mobileSearchInput');
            if (mobileInput) mobileInput.focus();
        }, 100);
    }
}

function closeSearchOverlay() {
    const overlay = document.getElementById('searchOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function performMobileSearch() {
    const searchInput = document.getElementById('mobileSearchInput');
    const query = searchInput.value.trim();
    
    if (query) {
        window.location.href = `programs.html?search=${encodeURIComponent(query)}`;
    }
}

// Desktop Search functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query) {
        window.location.href = `programs.html?search=${encodeURIComponent(query)}`;
    }
}

// Program Tabs Functionality
function switchTab(tabName) {
    // Remove active class from all tabs and rails
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.program-rail').forEach(rail => rail.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding rail
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    const activeRail = document.getElementById(`rail-${tabName}`);
    
    if (activeTab) activeTab.classList.add('active');
    if (activeRail) activeRail.classList.add('active');
}

// Initialize homepage functionality
document.addEventListener('DOMContentLoaded', () => {
    // Desktop search enter key
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Mobile search enter key
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performMobileSearch();
            }
        });
    }
    
    // Tab switching functionality
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
    
    // Close search overlay on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSearchOverlay();
        }
    });
    
    // Close search overlay when clicking outside
    const searchOverlay = document.getElementById('searchOverlay');
    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                closeSearchOverlay();
            }
        });
    }
});