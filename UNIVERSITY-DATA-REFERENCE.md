# University Data Reference

Quick reference for all featured universities and their metadata.

## Featured Universities List

### 1. Jain University
- **Slug**: `jain-university`
- **Type**: Private
- **Established**: 1990
- **NAAC**: A++
- **NIRF**: Top 100
- **Strengths**: Research Excellence, Industry Partnerships
- **URL**: `/university/jain-university`

### 2. Andhra University
- **Slug**: `andhra-university`
- **Type**: Government
- **Established**: 1926
- **NAAC**: A+
- **NIRF**: Top 50
- **Strengths**: Legacy Institution, Strong Alumni Network
- **URL**: `/university/andhra-university`

### 3. DDU Gorakhpur University
- **Slug**: `ddu-gorakhpur-university`
- **Type**: Government
- **Established**: 1957
- **NAAC**: A
- **NIRF**: Top 150
- **Strengths**: Regional Excellence, Affordable Education
- **URL**: `/university/ddu-gorakhpur-university`

### 4. IIT Patna
- **Slug**: `iit-patna`
- **Type**: Government
- **Established**: 2008
- **NAAC**: N/A (IIT)
- **NIRF**: Top 30
- **Strengths**: Premier Technical Institute, Innovation Hub
- **URL**: `/university/iit-patna`

### 5. IIT Bhilai
- **Slug**: `iit-bhilai`
- **Type**: Government
- **Established**: 2016
- **NAAC**: N/A (IIT)
- **NIRF**: Top 50
- **Strengths**: New Generation IIT, Modern Infrastructure
- **URL**: `/university/iit-bhilai`

### 6. IIIT Vadodara
- **Slug**: `iiit-vadodara`
- **Type**: Government
- **Established**: 2013
- **NAAC**: N/A (IIIT)
- **NIRF**: Top 100
- **Strengths**: Technology Focus, Industry Collaboration
- **URL**: `/university/iiit-vadodara`

### 7. IIM Sambalpur
- **Slug**: `iim-sambalpur`
- **Type**: Government
- **Established**: 2015
- **NAAC**: N/A (IIM)
- **NIRF**: Top 40
- **Strengths**: Management Excellence, Leadership Development
- **URL**: `/university/iim-sambalpur`

### 8. IIM Mumbai
- **Slug**: `iim-mumbai`
- **Type**: Government
- **Established**: 2023
- **NIRF**: Top 20
- **NAAC**: N/A (IIM)
- **Strengths**: Financial Hub Location, Industry Connect
- **URL**: `/university/iim-mumbai`

### 9. IIT Delhi
- **Slug**: `iit-delhi`
- **Type**: Government
- **Established**: 1961
- **NAAC**: N/A (IIT)
- **NIRF**: Top 5
- **Strengths**: Premier Institute, Global Recognition
- **URL**: `/university/iit-delhi`

## Sample Programs by University

### Jain University Programs
1. MBA - Online (PG, ₹1,20,000)
2. BBA - Online (UG, ₹90,000)
3. MCA - Online (PG, ₹1,50,000)

### Andhra University Programs
1. MBA - ODL (PG, ₹80,000)
2. M.Com - ODL (PG, ₹60,000)

### DDU Gorakhpur University Programs
1. MA - ODL (PG, ₹40,000)
2. BA - ODL (UG, ₹30,000)

### IIT Patna Programs
1. Executive PG Program in AI & ML (PG, ₹2,50,000)

### IIT Bhilai Programs
1. Executive Program in Data Science (PG, ₹2,00,000)

### IIIT Vadodara Programs
1. Executive Program in Cybersecurity (PG, ₹1,80,000)

### IIM Sambalpur Programs
1. Executive MBA (PG, ₹3,50,000)

### IIM Mumbai Programs
1. Executive Program in FinTech (PG, ₹4,00,000)

### IIT Delhi Programs
1. Executive Program in AI & Deep Learning (PG, ₹3,00,000)
2. Executive Program in Blockchain (PG, ₹2,75,000)

## Program Mode Categories

### Online
- Fully online delivery
- Self-paced learning
- Digital assessments
- Universities: Jain University

### ODL (Open Distance Learning)
- Flexible learning schedule
- Minimal campus visits
- UGC-DEB approved
- Universities: Andhra University, DDU Gorakhpur University

### Executive
- For working professionals
- Weekend/evening classes
- Industry-focused curriculum
- Universities: IITs, IIMs, IIITs

## Updating University Data

To add or modify university information, edit the `universityData` object in `university.js`:

```javascript
'university-slug': {
    name: 'University Name',
    naacGrade: 'A++',
    nirfRank: 'Top X',
    showNAAC: true/false,
    showNIRF: true/false,
    yearEstablished: 'YYYY',
    type: 'Government/Private',
    keyHighlights: 'Comma, Separated, Strengths',
    programs: [
        {
            id: 'unique-program-id',
            name: 'Program Name',
            mode: 'Online/ODL/Executive',
            level: 'UG/PG/Diploma',
            fee: 'X,XX,XXX'
        }
    ]
}
```

## Logo Asset Naming Convention

When adding actual logo files, use this naming pattern:
- `logo-jain-university.svg`
- `logo-iit-patna.svg`
- `logo-iim-mumbai.svg`

Store in: `/assets/university-logos/`

## Notes

- **NAAC Grading**: IITs, IIMs, and IIITs typically don't have NAAC grades
- **NIRF Rankings**: Update annually (current data is illustrative)
- **Fees**: Listed fees are total program fees, not per semester
- **Program IDs**: Must be unique across all universities
- **Slugs**: Use lowercase with hyphens, no special characters
