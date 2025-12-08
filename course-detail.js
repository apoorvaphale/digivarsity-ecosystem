// Sticky CTA visibility on scroll
let lastScroll = 0;
const stickyCta = document.querySelector('.sticky-cta');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Show sticky CTA after scrolling 500px
    if (currentScroll > 500) {
        stickyCta?.classList.add('visible');
    } else {
        stickyCta?.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
});

// Chatbot trigger
document.querySelectorAll('.chatbot-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('AI Chatbot "Ask Divya" - Integration pending');
    });
});

// Apply Now buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Apply Now')) {
        btn.addEventListener('click', () => {
            alert('Application form - Integration pending');
        });
    }
});

// Request Callback
document.querySelectorAll('.btn-secondary').forEach(btn => {
    if (btn.textContent.includes('Request Callback')) {
        btn.addEventListener('click', () => {
            alert('Callback request form - Integration pending');
        });
    }
    
    if (btn.textContent.includes('EMI Calculator')) {
        btn.addEventListener('click', () => {
            alert('EMI Calculator - Integration pending');
        });
    }
});

// Download Syllabus
document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Download Syllabus')) {
        btn.addEventListener('click', () => {
            alert('Syllabus download - Integration pending');
        });
    }
});
