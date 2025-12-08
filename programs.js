// Filter functionality
document.getElementById('apply-filters')?.addEventListener('click', () => {
    const mode = document.getElementById('filter-mode').value;
    const eligibility = document.getElementById('filter-eligibility').value;
    const duration = document.getElementById('filter-duration').value;
    const budget = document.getElementById('filter-budget').value;
    const university = document.getElementById('filter-university').value;

    // In production, this would filter the programs
    console.log('Filters applied:', { mode, eligibility, duration, budget, university });
    
    // Show feedback
    alert('Filters applied! In production, this would filter the program list.');
});
