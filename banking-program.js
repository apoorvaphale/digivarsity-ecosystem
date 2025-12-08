// Banking Program Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length > 0) {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        timelineItems.forEach(item => {
            item.style.animationPlayState = 'paused';
            timelineObserver.observe(item);
        });
    }

    // Sticky mobile CTA visibility
    const stickyMobileCta = document.getElementById('stickyMobileCta');
    const heroSection = document.querySelector('.bp-hero');
    
    if (stickyMobileCta && heroSection) {
        const showStickyAfter = heroSection.offsetTop + heroSection.offsetHeight;
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > showStickyAfter) {
                stickyMobileCta.classList.add('visible');
            } else {
                stickyMobileCta.classList.remove('visible');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(leadForm);
            
            // Here you would typically send the data to your backend
            // For now, show a success message
            alert('Thank you for your interest! Our team will contact you shortly.');
            leadForm.reset();
        });
    }

    // Add animation class when elements come into view
    const animateOnScroll = document.querySelectorAll('.highlight-card, .info-card, .eligibility-item, .admission-step');
    
    if (animateOnScroll.length > 0) {
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animateOnScroll.forEach(el => {
            scrollObserver.observe(el);
        });
    }
});
