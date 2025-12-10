// University Page Dynamic Data Handler

// University data structure
const universityData = {
    'jain-university': {
        name: 'Jain University',
        naacGrade: 'A++',
        nirfRank: 'Top 100',
        showNAAC: true,
        showNIRF: true,
        yearEstablished: '1990',
        type: 'Private',
        keyHighlights: 'Research Excellence, Industry Partnerships',
        programs: [
            {
                id: 'ju-mba-online',
                name: 'MBA - Online',
                mode: 'Online',
                level: 'PG',
                fee: '1,20,000'
            },
            {
                id: 'ju-bba-online',
                name: 'BBA - Online',
                mode: 'Online',
                level: 'UG',
                fee: '90,000'
            },
            {
                id: 'ju-mca-online',
                name: 'MCA - Online',
                mode: 'Online',
                level: 'PG',
                fee: '1,50,000'
            }
        ]
    },
    'andhra-university': {
        name: 'Andhra University',
        naacGrade: 'A+',
        nirfRank: 'Top 50',
        showNAAC: true,
        showNIRF: true,
        yearEstablished: '1926',
        type: 'Government',
        keyHighlights: 'Legacy Institution, Strong Alumni Network',
        programs: [
            {
                id: 'au-mba-odl',
                name: 'MBA - ODL',
                mode: 'ODL',
                level: 'PG',
                fee: '80,000'
            },
            {
                id: 'au-mcom-odl',
                name: 'M.Com - ODL',
                mode: 'ODL',
                level: 'PG',
                fee: '60,000'
            }
        ]
    },
    'ddu-gorakhpur-university': {
        name: 'DDU Gorakhpur University',
        naacGrade: 'A',
        nirfRank: 'Top 150',
        showNAAC: true,
        showNIRF: true,
        yearEstablished: '1957',
        type: 'Government',
        keyHighlights: 'Regional Excellence, Affordable Education',
        programs: [
            {
                id: 'ddu-ma-odl',
                name: 'MA - ODL',
                mode: 'ODL',
                level: 'PG',
                fee: '40,000'
            },
            {
                id: 'ddu-ba-odl',
                name: 'BA - ODL',
                mode: 'ODL',
                level: 'UG',
                fee: '30,000'
            }
        ]
    },
    'iit-patna': {
        name: 'IIT Patna',
        naacGrade: '',
        nirfRank: 'Top 30',
        showNAAC: false,
        showNIRF: true,
        yearEstablished: '2008',
        type: 'Government',
        keyHighlights: 'Premier Technical Institute, Innovation Hub',
        programs: [
            {
                id: 'iitp-exec-pgp',
                name: 'Executive PG Program in AI & ML',
                mode: 'Executive',
                level: 'PG',
                fee: '2,50,000'
            }
        ]
    },
    'iit-bhilai': {
        name: 'IIT Bhilai',
        naacGrade: '',
        nirfRank: 'Top 50',
        showNAAC: false,
        showNIRF: true,
        yearEstablished: '2016',
        type: 'Government',
        keyHighlights: 'New Generation IIT, Modern Infrastructure',
        programs: [
            {
                id: 'iitb-exec-ds',
                name: 'Executive Program in Data Science',
                mode: 'Executive',
                level: 'PG',
                fee: '2,00,000'
            }
        ]
    },
    'iiit-vadodara': {
        name: 'IIIT Vadodara',
        naacGrade: '',
        nirfRank: 'Top 100',
        showNAAC: false,
        showNIRF: true,
        yearEstablished: '2013',
        type: 'Government',
        keyHighlights: 'Technology Focus, Industry Collaboration',
        programs: [
            {
                id: 'iiitv-exec-cyber',
                name: 'Executive Program in Cybersecurity',
                mode: 'Executive',
                level: 'PG',
                fee: '1,80,000'
            }
        ]
    },
    'iim-sambalpur': {
        name: 'IIM Sambalpur',
        naacGrade: '',
        nirfRank: 'Top 40',
        showNAAC: false,
        showNIRF: true,
        yearEstablished: '2015',
        type: 'Government',
        keyHighlights: 'Management Excellence, Leadership Development',
        programs: [
            {
                id: 'iims-exec-mba',
                name: 'Executive MBA',
                mode: 'Executive',
                level: 'PG',
                fee: '3,50,000'
            }
        ]
    },
    'iim-mumbai': {
        name: 'IIM Mumbai',
        naacGrade: '',
        nirfRank: 'Top 20',
        showNAAC: false,
        showNIRF: true,
        yearEstablished: '2023',
        type: 'Government',
        keyHighlights: 'Financial Hub Location, Industry Connect',
        programs: [
            {
                id: 'iimm-exec-fintech',
                name: 'Executive Program in FinTech',
                mode: 'Executive',
                level: 'PG',
                fee: '4,00,000'
            }
        ]
    },
    'iit-delhi': {
        name: 'IIT Delhi',
        naacGrade: '',
        nirfRank: 'Top 5',
        showNAAC: false,
        showNIRF: true,
        yearEstablished: '1961',
        type: 'Government',
        keyHighlights: 'Premier Institute, Global Recognition',
        programs: [
            {
                id: 'iitd-exec-ai',
                name: 'Executive Program in AI & Deep Learning',
                mode: 'Executive',
                level: 'PG',
                fee: '3,00,000'
            },
            {
                id: 'iitd-exec-blockchain',
                name: 'Executive Program in Blockchain',
                mode: 'Executive',
                level: 'PG',
                fee: '2,75,000'
            }
        ]
    }
};

// Get university slug from URL
function getUniversitySlug() {
    const path = window.location.pathname;
    const match = path.match(/\/university\/([^\/]+)/);
    return match ? match[1] : null;
}

// Populate university page with data
function populateUniversityPage() {
    const slug = getUniversitySlug();
    if (!slug || !universityData[slug]) {
        console.error('University not found');
        return;
    }

    const data = universityData[slug];

    // Update page title
    document.title = `${data.name} - Digivarsity Partner University`;

    // Update all instances of {UniversityName}
    document.querySelectorAll('.university-name, .university-logo-large').forEach(el => {
        el.textContent = data.name;
    });

    // Update accreditation tiles
    const naacTile = document.querySelector('.accreditation-tile[data-show]');
    if (naacTile) {
        naacTile.setAttribute('data-show', data.showNAAC);
        naacTile.querySelector('.accreditation-value').textContent = data.naacGrade;
    }

    const nirfTile = document.querySelectorAll('.accreditation-tile')[1];
    if (nirfTile) {
        nirfTile.setAttribute('data-show', data.showNIRF);
        nirfTile.querySelector('.accreditation-value').textContent = data.nirfRank;
    }

    // Update about section
    document.querySelector('.about-description').innerHTML = 
        `${data.name} is one of India's respected higher education institutions known for academic excellence, 
        research contributions, and student-centric learning. Through Digivarsity, the university offers flexible 
        Online and ODL programs designed to build future-ready talent.`;

    // Update highlight chips
    const chips = document.querySelectorAll('.chip-value');
    if (chips.length >= 3) {
        chips[0].textContent = data.yearEstablished;
        chips[1].textContent = data.type;
        chips[2].textContent = data.keyHighlights;
    }

    // Populate programs
    const programsGrid = document.getElementById('programsGrid');
    if (programsGrid && data.programs) {
        programsGrid.innerHTML = data.programs.map(program => `
            <div class="program-card">
                <div class="program-badge">${program.mode}</div>
                <h3 class="program-name">${program.name}</h3>
                <div class="program-details">
                    <span class="program-level">${program.level}</span>
                    <span class="program-fee">₹${program.fee}</span>
                </div>
                <a href="/course-detail.html?id=${program.id}" class="program-cta">View Details →</a>
            </div>
        `).join('');
    }

    // Update CTA banner
    document.querySelector('.cta-banner-content h2').innerHTML = 
        `Explore programs from ${data.name} and accelerate your career journey.`;
    
    document.querySelector('.cta-banner-content .btn').href = 
        `/programs.html?university=${slug}`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    populateUniversityPage();
});
