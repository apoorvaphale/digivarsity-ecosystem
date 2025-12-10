# University Logos Implementation Guide

## Overview
The Featured Institutions section on the homepage now uses actual logo images instead of text placeholders. This guide explains the implementation and how to add/update logo files.

## Logo File Structure

### Directory
All university logos should be placed in:
```
assets/university-logos/
```

### File Naming Convention
Logo files must follow this exact naming pattern:
```
{university-slug}.png
```

Examples:
- `jain-university.png`
- `andhra-university.png`
- `iit-patna.png`
- `iim-mumbai.png`

## Required Logo Files

The following 9 logo files are needed for the Featured Institutions carousel:

1. **jain-university.png** - Jain University
2. **andhra-university.png** - Andhra University
3. **ddu-gorakhpur-university.png** - DDU Gorakhpur University
4. **iit-patna.png** - IIT Patna
5. **iit-bhilai.png** - IIT Bhilai
6. **iiit-vadodara.png** - IIIT Vadodara
7. **iim-sambalpur.png** - IIM Sambalpur
8. **iim-mumbai.png** - IIM Mumbai
9. **iit-delhi.png** - IIT Delhi

## Logo Specifications

### Format
- **Primary**: PNG with transparent background
- **Alternative**: SVG (update file extension in HTML)
- **Fallback**: JPG/JPEG (not recommended due to background)

### Dimensions
- **Max Height**: 80px (desktop), 60px (tablet), 50px (mobile)
- **Max Width**: Auto-scaled to maintain aspect ratio
- **Recommended**: 200-300px width at 2x resolution for retina displays

### Quality Guidelines
- **Resolution**: 2x for retina displays (e.g., 400px wide for 200px display)
- **File Size**: Keep under 50KB per logo for optimal loading
- **Background**: Transparent or white
- **Format**: High-quality PNG or vector SVG

### Design Considerations
- Logos should be clear and legible at small sizes
- Prefer horizontal/landscape orientation over vertical
- Ensure sufficient contrast against white background
- Remove any excessive padding/whitespace around logo

## Fallback System

The implementation includes an automatic fallback system:

### How It Works
1. **Primary**: Attempts to load logo image from `assets/university-logos/`
2. **Fallback**: If image fails to load, displays university name as text
3. **Automatic**: Uses `onerror` attribute to handle missing images gracefully

### Example
```html
<img src="assets/university-logos/jain-university.png" 
     alt="Jain University" 
     class="institution-logo-img" 
     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
<div class="institution-logo-fallback">Jain University</div>
```

## Adding New Universities

### Step 1: Add Logo File
Place the logo file in `assets/university-logos/` with correct naming:
```
assets/university-logos/{university-slug}.png
```

### Step 2: Update HTML
Add a new institution card in `index.html`:
```html
<a href="/university/{university-slug}" class="institution-card">
    <img src="assets/university-logos/{university-slug}.png" 
         alt="{University Name}" 
         class="institution-logo-img" 
         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div class="institution-logo-fallback">{University Name}</div>
</a>
```

### Step 3: Test
1. Verify logo displays correctly
2. Test hover effects
3. Check responsive behavior on mobile
4. Confirm fallback works if logo is missing

## Using SVG Logos

If you prefer SVG format for better scalability:

### Update HTML
Change file extension from `.png` to `.svg`:
```html
<img src="assets/university-logos/jain-university.svg" 
     alt="Jain University" 
     class="institution-logo-img">
```

### Benefits of SVG
- Infinitely scalable without quality loss
- Smaller file sizes
- Better for retina displays
- Can be styled with CSS

## Optimization Tips

### Image Compression
- Use tools like TinyPNG or ImageOptim
- Target: 20-50KB per logo
- Maintain quality while reducing file size

### Lazy Loading (Optional)
For better performance, add lazy loading:
```html
<img src="assets/university-logos/jain-university.png" 
     alt="Jain University" 
     class="institution-logo-img"
     loading="lazy">
```

### CDN Hosting (Recommended for Production)
Consider hosting logos on a CDN:
```html
<img src="https://cdn.digivarsity.com/logos/jain-university.png" 
     alt="Jain University" 
     class="institution-logo-img">
```

## CSS Classes Reference

### `.institution-card`
- Container for each logo
- Size: 280x160px (desktop)
- Hover: Scales to 1.05x with shadow
- Border: 2px blue on hover

### `.institution-logo-img`
- The actual logo image
- Max height: 80px (desktop), 60px (tablet), 50px (mobile)
- Object-fit: contain
- Auto-scaled width

### `.institution-logo-fallback`
- Text fallback when image fails
- Hidden by default
- Displays only when image errors
- Same styling as original text placeholders

## Troubleshooting

### Logo Not Displaying
1. Check file path: `assets/university-logos/{slug}.png`
2. Verify file name matches exactly (case-sensitive)
3. Ensure file format is correct (PNG/SVG)
4. Check browser console for 404 errors

### Logo Too Large/Small
1. Check source image dimensions
2. Verify max-height CSS is applied
3. Ensure aspect ratio is maintained
4. Consider using SVG for better scaling

### Logo Quality Issues
1. Use 2x resolution images (retina)
2. Ensure PNG has transparent background
3. Check for compression artifacts
4. Consider vector SVG format

### Fallback Not Working
1. Verify `onerror` attribute is present
2. Check `.institution-logo-fallback` CSS
3. Ensure fallback div follows img tag
4. Test with intentionally broken image path

## Current Status

### Implemented
✅ HTML structure with image tags
✅ Fallback system for missing images
✅ Responsive sizing (desktop/tablet/mobile)
✅ Hover effects maintained
✅ Auto-scaling carousel
✅ Proper alt text for accessibility

### Pending
⏳ Actual logo image files (to be added by you)
⏳ Optional: CDN hosting setup
⏳ Optional: Lazy loading implementation

## Quick Start Checklist

To add logos right now:

1. [ ] Create folder: `assets/university-logos/`
2. [ ] Add 9 logo files with correct names
3. [ ] Verify each logo is:
   - PNG format with transparent background
   - 200-400px wide
   - Under 50KB file size
4. [ ] Test on homepage
5. [ ] Check mobile responsiveness
6. [ ] Verify hover effects work

## Example Logo Sources

When sourcing logos:
- Official university websites
- University brand guidelines
- Wikipedia (check licensing)
- Official press kits
- Direct contact with university marketing departments

**Important**: Ensure you have proper rights/permissions to use university logos.

---

**Last Updated**: December 9, 2025
**Status**: Ready for logo files
**Location**: `index.html` - Featured Institutions section
