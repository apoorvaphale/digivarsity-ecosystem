// Program Data
const programsData = [
    // B.Com Programs
    { id: 1, name: 'B.Com (Online)', university: 'andhra', universityName: 'Andhra University', mode: 'online', level: 'ug', fee: 45000, duration: '3years', eligibility: '12th', naac: 'A+', nirf: 'Top 100', popular: 95 },
    { id: 2, name: 'B.Com (Online)', university: 'mizoram', universityName: 'Mizoram University', mode: 'online', level: 'ug', fee: 35000, duration: '3years', eligibility: '12th', naac: 'A', nirf: null, popular: 85 },
    { id: 3, name: 'B.Com (ODL)', university: 'jain', universityName: 'Jain University', mode: 'odl', level: 'ug', fee: 48000, duration: '3years', eligibility: '12th', naac: 'A++', nirf: 'Top 100', popular: 98 },
    { id: 4, name: 'B.Com (ODL)', university: 'ddugu', universityName: 'DDU Gorakhpur University', mode: 'odl', level: 'ug', fee: 28000, duration: '3years', eligibility: '12th', naac: 'B++', nirf: null, popular: 75 },
    { id: 5, name: 'B.Com (ODL)', university: 'ccsu', universityName: 'CCS University', mode: 'odl', level: 'ug', fee: 30000, duration: '3years', eligibility: '12th', naac: 'A', nirf: null, popular: 80 },
    { id: 6, name: 'B.Com (Online)', university: 'srinivas', universityName: 'Srinivas University', mode: 'online', level: 'ug', fee: 42000, duration: '3years', eligibility: '12th', naac: 'A', nirf: null, popular: 82 },
    
    // BA Programs
    { id: 7, name: 'BA (Online)', university: 'andhra', universityName: 'Andhra University', mode: 'online', level: 'ug', fee: 40000, duration: '3years', eligibility: '12th', naac: 'A+', nirf: 'Top 100', popular: 88 },
    { id: 8, name: 'BA (Online)', university: 'mizoram', universityName: 'Mizoram University', mode: 'online', level: 'ug', fee: 32000, duration: '3years', eligibility: '12th', naac: 'A', nirf: null, popular: 78 },
    { id: 9, name: 'BA (ODL)', university: 'ccsu', universityName: 'CCS University', mode: 'odl', level: 'ug', fee: 28000, duration: '3years', eligibility: '12th', naac: 'A', nirf: null, popular: 72 },
    { id: 10, name: 'BA (ODL)', university: 'ddugu', universityName: 'DDU Gorakhpur University', mode: 'odl', level: 'ug', fee: 26000, duration: '3years', eligibility: '12th', naac: 'B++', nirf: null, popular: 70 },
    
    // BBA Programs
    { id: 11, name: 'BBA (ODL)', university: 'jain', universityName: 'Jain University', mode: 'odl', level: 'ug', fee: 52000, duration: '3years', eligibility: '12th', naac: 'A++', nirf: 'Top 100', popular: 92 },
    { id: 12, name: 'BBA (Online)', university: 'mizoram', universityName: 'Mizoram University', mode: 'online', level: 'ug', fee: 38000, duration: '3years', eligibility: '12th', naac: 'A', nirf: null, popular: 84 },
    { id: 13, name: 'BBA (Online)', university: 'srinivas', universityName: 'Srinivas University', mode: 'online', level: 'ug', fee: 46000, duration: '3years', eligibility: '12th', naac: 'A', nirf: null, popular: 86 },
    
    // MBA Programs
    { id: 14, name: 'MBA (ODL)', university: 'jain', universityName: 'Jain University', mode: 'odl', level: 'pg', fee: 85000, duration: '3years', eligibility: 'graduate', naac: 'A++', nirf: 'Top 100', popular: 99 },
    { id: 15, name: 'MBA (Online)', university: 'mizoram', universityName: 'Mizoram University', mode: 'online', level: 'pg', fee: 65000, duration: '3years', eligibility: 'graduate', naac: 'A', nirf: null, popular: 90 },
    { id: 16, name: 'MBA (Online)', university: 'ccsu', universityName: 'CCS University', mode: 'online', level: 'pg', fee: 58000, duration: '3years', eligibility: 'graduate', naac: 'A', nirf: null, popular: 85 },
    { id: 17, name: 'MBA (Online)', university: 'srinivas', universityName: 'Srinivas University', mode: 'online', level: 'pg', fee: 72000, duration: '3years', eligibility: 'graduate', naac: 'A', nirf: null, popular: 88 },
    
    // MA Programs
    { id: 18, name: 'MA (Online)', university: 'andhra', universityName: 'Andhra University', mode: 'online', level: 'pg', fee: 42000, duration: '3years', eligibility: 'graduate', naac: 'A+', nirf: 'Top 100', popular: 82 },
    { id: 19, name: 'MA (ODL)', university: 'jain', universityName: 'Jain University', mode: 'odl', level: 'pg', fee: 48000, duration: '3years', eligibility: 'graduate', naac: 'A++', nirf: 'Top 100', popular: 86 },
    { id: 20, name: 'MA (Online)', university: 'mizoram', universityName: 'Mizoram University', mode: 'online', level: 'pg', fee: 38000, duration: '3years', eligibility: 'graduate', naac: 'A', nirf: null, popular: 78 },
    
    // MSc Programs
    { id: 21, name: 'MSc (Online)', university: 'andhra', universityName: 'Andhra University', mode: 'online', level: 'pg', fee: 55000, duration: '3years', eligibility: 'graduate', naac: 'A+', nirf: 'Top 100', popular: 87 },
    { id: 22, name: 'MSc (ODL)', university: 'jain', universityName: 'Jain University', mode: 'odl', level: 'pg', fee: 62000, duration: '3years', eligibility: 'graduate', naac: 'A++', nirf: 'Top 100', popular: 91 },
    { id: 23, name: 'MSc (Online)', university: 'mizoram', universityName: 'Mizoram University', mode: 'online', level: 'pg', fee: 45000, duration: '3years', eligibility: 'graduate', naac: 'A', nirf: null, popular: 80 },
    
    // Diploma Programs
    { id: 24, name: 'Advanced Diploma in Drug Regulatory Affairs (ADDRA)', university: 'jamia', universityName: 'Jamia Hamdard University', mode: 'online', level: 'diploma', fee: 75000, duration: '1year', eligibility: 'graduate', naac: 'A', nirf: 'Top 100', popular: 94 },
];

let filteredPrograms = [...programsData];
let compareMode = false;
let selectedPrograms = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPrograms();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Filter controls
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
    
    // Sort
    document.getElementById('sortBy').addEventListener('change', (e) => {
        sortPrograms(e.target.value);
    });
    
    // Compare toggle
    document.getElementById('compareToggle').addEventListener('click', (e) => {
        compareMode = e.target.checked;
        toggleCompareMode();
    });
    
    // Mobile filter button
    const mobileFilterBtn = document.getElementById('mobileFilterBtn');
    const filtersSidebar = document.getElementById('filtersSidebar');
    
    if (mobileFilterBtn) {
        mobileFilterBtn.addEventListener('click', () => {
            filtersSidebar.classList.add('active');
            showFilterOverlay();
        });
    }
    
    // View comparison
    document.getElementById('viewComparison').addEventListener('click', showComparison);
    document.getElementById('closeComparison').addEventListener('click', closeComparison);
    
    // Close modal on outside click
    document.getElementById('comparisonModal').addEventListener('click', (e) => {
        if (e.target.id === 'comparisonModal') {
            closeComparison();
        }
    });
}

// Show/Hide Filter Overlay
function showFilterOverlay() {
    let overlay = document.querySelector('.filter-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'filter-overlay';
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => {
            document.getElementById('filtersSidebar').classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    overlay.classList.add('active');
}

// Apply Filters
function applyFilters() {
    const programType = document.getElementById('filterProgramType').value;
    const mode = document.getElementById('filterMode').value;
    const universitySelect = document.getElementById('filterUniversity');
    const selectedUniversities = Array.from(universitySelect.selectedOptions)
        .map(opt => opt.value)
        .filter(val => val !== '');
    const eligibility = document.getElementById('filterEligibility').value;
    const duration = document.getElementById('filterDuration').value;
    const budget = document.getElementById('filterBudget').value;
    
    filteredPrograms = programsData.filter(program => {
        if (programType && program.level !== programType) return false;
        if (mode && program.mode !== mode) return false;
        if (selectedUniversities.length > 0 && !selectedUniversities.includes(program.university)) return false;
        if (eligibility && program.eligibility !== eligibility) return false;
        if (duration && program.duration !== duration) return false;
        
        if (budget) {
            const yearlyFee = program.fee / (program.duration === '3years' ? 3 : program.duration === '1year' ? 1 : 0.5);
            if (budget === 'below25k' && yearlyFee >= 25000) return false;
            if (budget === '25k-50k' && (yearlyFee < 25000 || yearlyFee > 50000)) return false;
            if (budget === 'above50k' && yearlyFee <= 50000) return false;
        }
        
        return true;
    });
    
    renderPrograms();
    
    // Close mobile filter
    const filtersSidebar = document.getElementById('filtersSidebar');
    if (filtersSidebar.classList.contains('active')) {
        filtersSidebar.classList.remove('active');
        document.querySelector('.filter-overlay')?.classList.remove('active');
    }
}

// Clear Filters
function clearFilters() {
    document.getElementById('filterProgramType').value = '';
    document.getElementById('filterMode').value = '';
    document.getElementById('filterUniversity').selectedIndex = 0;
    document.getElementById('filterEligibility').value = '';
    document.getElementById('filterDuration').value = '';
    document.getElementById('filterBudget').value = '';
    
    filteredPrograms = [...programsData];
    renderPrograms();
}

// Sort Programs
function sortPrograms(sortBy) {
    switch(sortBy) {
        case 'popular':
            filteredPrograms.sort((a, b) => b.popular - a.popular);
            break;
        case 'fee-low':
            filteredPrograms.sort((a, b) => a.fee - b.fee);
            break;
        case 'fee-high':
            filteredPrograms.sort((a, b) => b.fee - a.fee);
            break;
        case 'alpha':
            filteredPrograms.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    renderPrograms();
}

// Toggle Compare Mode
function toggleCompareMode() {
    const checkboxes = document.querySelectorAll('.compare-checkbox');
    checkboxes.forEach(cb => {
        if (compareMode) {
            cb.classList.add('active');
        } else {
            cb.classList.remove('active');
        }
    });
    
    if (!compareMode) {
        selectedPrograms = [];
        updateCompareBar();
    }
}

// Render Programs
function renderPrograms() {
    const grid = document.getElementById('programsGrid');
    grid.innerHTML = '';
    
    if (filteredPrograms.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">No programs found matching your filters.</p>';
        return;
    }
    
    filteredPrograms.forEach(program => {
        const card = createProgramCard(program);
        grid.appendChild(card);
    });
}

// Create Program Card
function createProgramCard(program) {
    const card = document.createElement('div');
    card.className = 'program-card';
    
    const modeClass = program.level === 'diploma' ? 'diploma' : program.mode;
    const modeText = program.level === 'diploma' ? 'Diploma' : program.mode === 'online' ? 'Online' : 'ODL';
    const levelText = program.level === 'ug' ? 'UG Degree' : program.level === 'pg' ? 'PG Degree' : 'Diploma';
    const durationText = program.duration === '3years' ? '3 Years' : program.duration === '1year' ? '1 Year' : '6 Months';
    
    card.innerHTML = `
        <div class="program-card-header">
            <h3>${program.name}</h3>
            <span class="mode-tag ${modeClass}">${modeText}</span>
        </div>
        
        <div class="university-info">
            <div class="university-logo"></div>
            <span class="university-name">${program.universityName}</span>
        </div>
        
        <div class="program-info">
            <div class="info-row"><strong>Level:</strong> ${levelText}</div>
            <div class="info-row"><strong>Fee:</strong> ₹${program.fee.toLocaleString('en-IN')} (total)</div>
            <div class="info-row"><strong>Duration:</strong> ${durationText}</div>
        </div>
        
        <div class="accreditation-badges">
            ${program.naac ? `<span class="badge naac">NAAC ${program.naac}</span>` : ''}
            ${program.nirf ? `<span class="badge nirf">NIRF ${program.nirf}</span>` : ''}
        </div>
        
        <div class="program-card-footer">
            <button class="view-details-btn" onclick="viewProgramDetails(${program.id})">View Details</button>
        </div>
        
        <div class="compare-checkbox ${compareMode ? 'active' : ''}">
            <input type="checkbox" id="compare-${program.id}" onchange="toggleCompare(${program.id})">
            <label for="compare-${program.id}">Add to Compare</label>
        </div>
    `;
    
    return card;
}

// Toggle Compare
function toggleCompare(programId) {
    const checkbox = document.getElementById(`compare-${programId}`);
    
    if (checkbox.checked) {
        if (selectedPrograms.length >= 3) {
            checkbox.checked = false;
            alert('You can compare up to 3 programs only.');
            return;
        }
        selectedPrograms.push(programId);
    } else {
        selectedPrograms = selectedPrograms.filter(id => id !== programId);
    }
    
    updateCompareBar();
}

// Update Compare Bar
function updateCompareBar() {
    const compareBar = document.getElementById('compareBar');
    const compareCount = document.getElementById('compareCount');
    
    if (selectedPrograms.length > 0) {
        compareBar.style.display = 'block';
        compareCount.textContent = `Comparing ${selectedPrograms.length}/3 programs`;
    } else {
        compareBar.style.display = 'none';
    }
}

// Show Comparison
function showComparison() {
    if (selectedPrograms.length < 2) {
        alert('Please select at least 2 programs to compare.');
        return;
    }
    
    const modal = document.getElementById('comparisonModal');
    const table = document.getElementById('comparisonTable');
    
    const programs = selectedPrograms.map(id => programsData.find(p => p.id === id));
    
    table.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(${programs.length}, 1fr); gap: 20px;">
            ${programs.map(program => `
                <div class="comparison-program">
                    <h3>${program.name}</h3>
                    <div class="comparison-detail">
                        <strong>University</strong>
                        <div>${program.universityName}</div>
                    </div>
                    <div class="comparison-detail">
                        <strong>Mode</strong>
                        <div>${program.mode === 'online' ? 'Online' : 'ODL'}</div>
                    </div>
                    <div class="comparison-detail">
                        <strong>Level</strong>
                        <div>${program.level === 'ug' ? 'UG Degree' : program.level === 'pg' ? 'PG Degree' : 'Diploma'}</div>
                    </div>
                    <div class="comparison-detail">
                        <strong>Fee (Total)</strong>
                        <div>₹${program.fee.toLocaleString('en-IN')}</div>
                    </div>
                    <div class="comparison-detail">
                        <strong>Duration</strong>
                        <div>${program.duration === '3years' ? '3 Years' : program.duration === '1year' ? '1 Year' : '6 Months'}</div>
                    </div>
                    <div class="comparison-detail">
                        <strong>NAAC Grade</strong>
                        <div>${program.naac || 'N/A'}</div>
                    </div>
                    <div class="comparison-detail">
                        <strong>NIRF Ranking</strong>
                        <div>${program.nirf || 'N/A'}</div>
                    </div>
                    <button class="view-details-btn" onclick="viewProgramDetails(${program.id})">View Program Details</button>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.classList.add('active');
}

// Close Comparison
function closeComparison() {
    document.getElementById('comparisonModal').classList.remove('active');
}

// View Program Details
function viewProgramDetails(programId) {
    const program = programsData.find(p => p.id === programId);
    if (program) {
        // For now, redirect to the template page
        // In production, this would be a dynamic page with the program ID
        window.location.href = `course-details-template.html?id=${programId}`;
    }
}
