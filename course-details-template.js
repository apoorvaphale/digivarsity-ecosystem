// Course Details Template JavaScript

// Sample course data structure - this would be populated dynamically
const courseData = {
    courseName: "B.Com",
    universityName: "Andhra University",
    mode: "Online",
    duration: "3 Years",
    eligibility: "12th Pass",
    universityType: "Government University",
    naacGrade: "A+",
    nirfRank: "Top 100",
    totalFee: 40000,
    fees: [
        { semester: "Semester 1", fee: 6667 },
        { semester: "Semester 2", fee: 6667 },
        { semester: "Semester 3", fee: 6667 },
        { semester: "Semester 4", fee: 6667 },
        { semester: "Semester 5", fee: 6667 },
        { semester: "Semester 6", fee: 6665 }
    ],
    skills: [
        "Accounting Basics",
        "Financial Management",
        "Business Communication",
        "Taxation Fundamentals",
        "Corporate Law",
        "Economics",
        "Business Statistics",
        "Marketing Principles",
        "E-Commerce",
        "Entrepreneurship"
    ],
    curriculum: [
        {
            title: "Semester 1",
            subjects: [
                "Financial Accounting - I",
                "Business Organization and Management",
                "Business Economics - I",
                "Business Communication",
                "Computer Applications in Business",
                "Environmental Studies"
            ]
        },
        {
            title: "Semester 2",
            subjects: [
                "Financial Accounting - II",
                "Corporate Accounting",
                "Business Economics - II",
                "Business Statistics",
                "Company Law",
                "Business Mathematics"
            ]
        },
        {
            title: "Semester 3",
            subjects: [
                "Cost Accounting",
                "Income Tax Law and Practice - I",
                "Management Accounting",
                "Banking and Insurance",
                "E-Commerce",
                "Business Regulatory Framework"
            ]
        },
        {
            title: "Semester 4",
            subjects: [
                "Corporate Accounting - II",
                "Income Tax Law and Practice - II",
                "Auditing",
                "Financial Management",
                "Marketing Management",
                "Human Resource Management"
            ]
        },
        {
            title: "Semester 5",
            subjects: [
                "Advanced Accounting",
                "Goods and Services Tax (GST)",
                "Financial Markets and Services",
                "Entrepreneurship Development",
                "Business Ethics and Corporate Governance",
                "Elective - I"
            ]
        },
        {
            title: "Semester 6",
            subjects: [
                "Management Information Systems",
                "International Business",
                "Project Work",
                "Elective - II",
                "Elective - III",
                "Comprehensive Viva"
            ]
        }
    ],
    jobRoles: [
        "Accountant",
        "Tax Consultant",
        "Financial Analyst",
        "Auditor",
        "Banking Officer",
        "Business Analyst",
        "Accounts Manager",
        "Finance Executive"
    ],
    salaryRange: "₹3-8 LPA",
    eligibilityCriteria: [
        "Must be 12th Pass from a recognized board",
        "Valid government-issued ID (Aadhaar/PAN/Passport)",
        "Minimum 45% marks in 12th (40% for reserved categories)",
        "Age: 17 years or above"
    ],
    testimonials: [
        {
            name: "Priya S.",
            initials: "PS",
            course: "B.Com (Online)",
            rating: 5,
            text: "The flexibility of online learning allowed me to work while completing my degree. The faculty support was excellent!"
        },
        {
            name: "Rahul M.",
            initials: "RM",
            course: "B.Com (Online)",
            rating: 5,
            text: "Great curriculum and well-structured content. The degree helped me get a job in a top accounting firm."
        },
        {
            name: "Anjali K.",
            initials: "AK",
            course: "B.Com (Online)",
            rating: 4,
            text: "Affordable fees and recognized degree. Perfect for working professionals like me who want to upskill."
        }
    ],
    faqs: [
        {
            question: "Is this degree UGC-approved?",
            answer: "Yes, this is a UGC-entitled degree from a recognized university. It holds the same value as a regular degree and is accepted for all government and private jobs."
        },
        {
            question: "Is this valid for government jobs?",
            answer: "Absolutely! This UGC-entitled online/ODL degree is valid for all government job applications, competitive exams, and higher education."
        },
        {
            question: "How are exams conducted?",
            answer: "Exams are conducted online at the end of each semester. You can take exams from the comfort of your home with proper proctoring."
        },
        {
            question: "Can working professionals join?",
            answer: "Yes! This program is specifically designed for working professionals. The flexible schedule allows you to balance work and studies effectively."
        },
        {
            question: "What is the learning format?",
            answer: "The program includes live online classes, recorded sessions for revision, digital study materials, and online assessments. You get access to a comprehensive Learning Management System (LMS)."
        },
        {
            question: "Are EMI options available?",
            answer: "Yes, we offer flexible EMI payment options. You can pay semester-wise or opt for monthly installments. Contact our counsellor for details."
        }
    ]
};

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    populateSkills();
    populateCurriculum();
    populateFeeTable();
    populateJobRoles();
    populateEligibility();
    populateTestimonials();
    populateFAQs();
    setupAccordions();
    setupStickyBar();
    setupFormSubmission();
});

// Populate Skills
function populateSkills() {
    const skillsContainer = document.getElementById('skillsTags');
    if (!skillsContainer) return;
    
    courseData.skills.forEach(skill => {
        const tag = document.createElement('div');
        tag.className = 'skill-tag';
        tag.textContent = skill;
        skillsContainer.appendChild(tag);
    });
}

// Populate Curriculum
function populateCurriculum() {
    const curriculumContainer = document.getElementById('curriculumAccordion');
    if (!curriculumContainer) return;
    
    courseData.curriculum.forEach((semester, index) => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        
        const subjectsList = semester.subjects.map(subject => 
            `<li>${subject}</li>`
        ).join('');
        
        item.innerHTML = `
            <div class="accordion-header">
                <h3>${semester.title}</h3>
                <span class="accordion-icon">▼</span>
            </div>
            <div class="accordion-content">
                <div class="accordion-body">
                    <ul class="subject-list">
                        ${subjectsList}
                    </ul>
                </div>
            </div>
        `;
        
        curriculumContainer.appendChild(item);
    });
}

// Populate Fee Table
function populateFeeTable() {
    const feeTableBody = document.querySelector('#feeTable tbody');
    if (!feeTableBody) return;
    
    courseData.fees.forEach(feeItem => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${feeItem.semester}</td>
            <td>₹${feeItem.fee.toLocaleString('en-IN')}</td>
        `;
        feeTableBody.appendChild(row);
    });
}

// Populate Job Roles
function populateJobRoles() {
    const jobRolesList = document.getElementById('jobRolesList');
    if (!jobRolesList) return;
    
    courseData.jobRoles.forEach(role => {
        const card = document.createElement('div');
        card.className = 'job-role-card';
        card.textContent = role;
        jobRolesList.appendChild(card);
    });
    
    // Update salary range
    const salaryRange = document.getElementById('salaryRange');
    if (salaryRange) {
        salaryRange.textContent = courseData.salaryRange;
    }
}

// Populate Eligibility
function populateEligibility() {
    const eligibilityGrid = document.getElementById('eligibilityList');
    if (!eligibilityGrid) return;
    
    courseData.eligibilityCriteria.forEach(criteria => {
        const card = document.createElement('div');
        card.className = 'eligibility-card';
        card.innerHTML = `
            <div class="eligibility-icon">✓</div>
            <div class="eligibility-text">${criteria}</div>
        `;
        eligibilityGrid.appendChild(card);
    });
}

// Populate Testimonials
function populateTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;
    
    courseData.testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        
        const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
        
        card.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-avatar">${testimonial.initials}</div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p class="testimonial-course">${testimonial.course}</p>
                </div>
            </div>
            <div class="testimonial-rating">${stars}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
        `;
        
        testimonialsGrid.appendChild(card);
    });
}

// Populate FAQs
function populateFAQs() {
    const faqAccordion = document.getElementById('faqAccordion');
    if (!faqAccordion) return;
    
    courseData.faqs.forEach(faq => {
        const item = document.createElement('div');
        item.className = 'faq-item';
        
        item.innerHTML = `
            <div class="faq-question">
                <h3>${faq.question}</h3>
                <span class="faq-icon">▼</span>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-content">
                    <p>${faq.answer}</p>
                </div>
            </div>
        `;
        
        faqAccordion.appendChild(item);
    });
}

// Setup Accordions
function setupAccordions() {
    // Curriculum accordion
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const wasActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });
    
    // FAQ accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const wasActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });
}

// Setup Sticky Bar
function setupStickyBar() {
    const stickyBar = document.getElementById('stickyCTABar');
    if (!stickyBar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 800) {
            stickyBar.style.display = 'block';
        } else {
            stickyBar.style.display = 'none';
        }
    });
}

// Start Application
function startApplication() {
    alert('Application form will open. This would redirect to the application page or open a modal.');
    // In production, this would:
    // window.location.href = '/apply?course=' + courseData.courseName;
    // or open a modal with the application form
}

// Scroll to Form (legacy support)
function scrollToForm() {
    startApplication();
}

// Download Brochure
function downloadBrochure() {
    // Create a temporary link element to open in new tab
    const link = document.createElement('a');
    link.href = 'au-brochure.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Download Syllabus
function downloadSyllabus() {
    alert('Syllabus download will be implemented. This would trigger a PDF download.');
    // In production, this would download an actual PDF
    // window.location.href = '/syllabus/course-syllabus.pdf';
}

// Open Chatbot
function openChatbot() {
    alert('Chatbot "Ask Divya" will be implemented. This would open a chat interface.');
    // In production, this would open a chatbot widget
}

// Scroll to Next Section
function scrollToNextSection() {
    const highlightsSection = document.querySelector('.highlights-bar');
    if (highlightsSection) {
        highlightsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Setup Form Submission
function setupFormSubmission() {
    const form = document.getElementById('leadCaptureForm');
    if (form) {
        // Auto-select current course in dropdown
        const courseSelect = document.getElementById('leadCourse');
        if (courseSelect && courseData.courseName) {
            const options = courseSelect.options;
            for (let i = 0; i < options.length; i++) {
                if (options[i].value === courseData.courseName) {
                    options[i].selected = true;
                    break;
                }
            }
        }
    }
}

// Handle Lead Form Submission
function handleLeadFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = {
        name: document.getElementById('leadName').value,
        email: document.getElementById('leadEmail').value,
        mobile: document.getElementById('leadMobile').value,
        course: document.getElementById('leadCourse').value,
        city: document.getElementById('leadCity').value,
        timestamp: new Date().toISOString(),
        source: window.location.href
    };
    
    // Validate mobile number
    if (!/^[0-9]{10}$/.test(formData.mobile)) {
        alert('Please enter a valid 10-digit mobile number');
        return;
    }
    
    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Submitting...</span>';
    submitBtn.disabled = true;
    
    // Simulate API call (replace with actual API endpoint)
    setTimeout(() => {
        console.log('Lead captured:', formData);
        
        // Show success state
        const formContainer = document.querySelector('.lead-form-container');
        formContainer.classList.add('success');
        formContainer.innerHTML = `
            <div class="success-icon">✅</div>
            <h3>Thank You!</h3>
            <p>Our counsellor will contact you shortly.</p>
        `;
        
        // In production, send to actual API:
        // fetch('/api/leads', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });
    }, 1000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
