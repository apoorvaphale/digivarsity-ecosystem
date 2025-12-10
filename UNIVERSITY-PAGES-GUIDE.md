# University Pages Implementation Guide

## Overview
This guide explains the new Featured Institutions section and University Page template system added to Digivarsity.

## 1. Featured Institutions Section (Homepage)

### Location
Added immediately after the "Choose How You Want to Learn" section on `index.html`

### Features
- **Horizontal auto-scrolling carousel** of university logos
- **9 featured universities** in exact order:
  1. Jain University
  2. Andhra University
  3. DDU Gorakhpur University
  4. IIT Patna
  5. IIT Bhilai
  6. IIIT Vadodara
  7. IIM Sambalpur
  8. IIM Mumbai
  9. IIT Delhi

### Design Elements
- White background cards with soft shadows
- Smooth auto-scroll animation (30s loop)
- Pauses on hover for user interaction
- Hover effects: scale up + shadow enhancement
- Fully responsive for mobile devices
- Each logo links to `/university/{university-slug}`

### Customization
To replace placeholder text with actual logos:
1. Add logo images to your assets folder
2. Replace the `.institution-logo` div content with:
   ```html
   <img src="/path/to/logo.png" alt="University Name">
   ```

## 2. University Page Template

### Files Created
1. **university-template.html** - Dynamic template with placeholders
2. **university.css** - Complete styling for university pages
3. **university.js** - JavaScript for dynamic data population
4. **university-jain-university.html** - Example implementation

### URL Pattern
`/university/{university-slug}`

Examples:
- `/university/jain-university`
- `/university/iit-patna`
- `/university/iim-mumbai`

### Page Structure

#### 1. Hero Section
- Large university logo (200x200px, centered)
- University name as H1
- One-line descriptor
- Animated gradient background with floating shapes

#### 2. Accreditation & Ranking
Three highlight tiles:
- **NAAC Grade** (auto-hides for IITs/IIMs)
- **NIRF Ranking**
- **UGC Status**

Tiles feature hover animations and color transitions.

#### 3. About University
- Academic profile paragraph
- Three highlight chips:
  - Established year
  - University type (Govt/Private)
  - Key strengths

#### 4. Programs Offered
- Responsive grid (3 columns desktop, 1 column mobile)
- Each program card shows:
  - Mode badge (Online/ODL/Executive)
  - Program name
  - Degree level (UG/PG/Diploma)
  - Fee
  - "View Details" CTA linking to course page

#### 5. Why Partner Institutions Choose Digivarsity
Three benefit tiles:
- End-to-end digital learning infrastructure
- Industry-linked program design
- India's largest employability ecosystem

#### 6. CTA Banner
- Full-width gradient banner
- Dynamic text with university name
- "Browse Programs" button linking to filtered programs page

## 3. Adding New Universities

### Method 1: Using the Dynamic Template (Recommended)

Add university data to `university.js`:

```javascript
'new-university-slug': {
    name: 'New University Name',
    naacGrade: 'A+',
    nirfRank: 'Top 50',
    showNAAC: true,  // Set false for IITs/IIMs
    showNIRF: true,
    yearEstablished: '2000',
    type: 'Government', // or 'Private'
    keyHighlights: 'Key strengths here',
    programs: [
        {
            id: 'program-id',
            name: 'Program Name',
            mode: 'Online', // or 'ODL', 'Executive'
            level: 'PG', // or 'UG', 'Diploma'
            fee: '1,00,000'
        }
    ]
}
```

The page will automatically populate when accessed at `/university/new-university-slug`

### Method 2: Creating Static Pages

Copy `university-jain-university.html` and replace all placeholders:
- `{UniversityName}` → Actual university name
- `{NAACGrade}` → NAAC grade
- `{NIRFRank}` → NIRF ranking
- `{YearEstablished}` → Year
- `{GovtOrPrivate}` → Type
- `{KeyHighlights}` → Strengths
- Program cards with actual data

## 4. Design System

### Colors
- Primary Blue: `#0057B7`
- Green: `#4DAE8A`
- Red: `#E93B47`
- Orange: `#FF6B35`
- Purple: `#6C5CE7`

### Animations
- **Hover scale**: Cards scale to 1.05 on hover
- **Float animation**: Hero background shapes
- **Carousel scroll**: 30s linear infinite loop
- **Smooth transitions**: 0.3s ease on all interactive elements

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px
- Small mobile: < 480px

## 5. Integration with Existing Pages

### Homepage
The Featured Institutions carousel is now live on the homepage. Update the carousel items in `index.html` when you have actual logo images.

### Programs Page
Filter programs by university using:
```
/programs.html?university={university-slug}
```

### Course Detail Page
Link from program cards to:
```
/course-detail.html?id={program-id}
```

## 6. Best Practices

### Logo Guidelines
- **Format**: SVG preferred, PNG acceptable
- **Size**: Max height 80px, auto-scale width
- **Background**: Transparent or white
- **Quality**: Retina-ready (2x resolution)

### Content Guidelines
- Keep university descriptions concise (2-3 sentences)
- Use official NAAC/NIRF data
- Update program fees annually
- Maintain consistent tone across all pages

### Performance
- Lazy load university logos
- Optimize images (compress PNGs, use SVG when possible)
- Consider CDN for logo assets
- Cache university data in localStorage

## 7. Testing Checklist

- [ ] Homepage carousel scrolls smoothly
- [ ] All university links work correctly
- [ ] Mobile responsive on all screen sizes
- [ ] Hover effects work on desktop
- [ ] Touch/swipe works on mobile
- [ ] NAAC tiles hide correctly for IITs/IIMs
- [ ] Program cards link to correct course pages
- [ ] CTA buttons link to filtered programs
- [ ] Navigation menu works on all pages
- [ ] Footer links are correct

## 8. Future Enhancements

### Suggested Improvements
1. Add search/filter for universities
2. Implement actual logo image management system
3. Add university comparison feature
4. Include student testimonials per university
5. Add virtual campus tours
6. Integrate with CMS for easy content updates
7. Add analytics tracking for university page visits
8. Implement A/B testing for CTA buttons

### API Integration
Consider creating a REST API endpoint:
```
GET /api/universities/{slug}
```
Returns university data in JSON format for dynamic loading.

## Support

For questions or issues with the university pages system, refer to:
- `university-template.html` - Template structure
- `university.css` - Styling reference
- `university.js` - Data structure and logic
- `university-jain-university.html` - Working example
