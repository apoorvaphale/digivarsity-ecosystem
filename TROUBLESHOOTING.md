# Troubleshooting Guide - Digivarsity 3.0

## Issue: Logo Not Showing

### Solution:
1. **Logo files available:**
   - `logo.svg` - SVG version (preferred)
   - `logo.png` - PNG fallback

2. **Automatic fallback added:**
   - If logo.svg fails to load, it automatically switches to logo.png
   - Check browser console for any errors

3. **Replace with your logo:**
   - Replace `logo.svg` or `logo.png` with your actual Digivarsity logo
   - Recommended size: 200x50px or similar aspect ratio
   - SVG format preferred for crisp display on all screens

## Issue: Hamburger Menu Not Visible

### Understanding the Behavior:
The hamburger menu is **intentionally hidden on desktop** and only appears on mobile devices.

### When Hamburger Shows:
- ✅ Screen width ≤ 768px (mobile/tablet)
- ✅ When you resize browser window to mobile size
- ✅ On actual mobile devices

### When Hamburger is Hidden:
- ❌ Screen width > 768px (desktop)
- ❌ Full browser window on desktop/laptop

### How to Test:

#### Method 1: Resize Browser Window
1. Open the website in your browser
2. Make the browser window narrower
3. When width reaches 768px or less, hamburger will appear
4. Desktop navigation links will disappear

#### Method 2: Use Browser DevTools
1. Open browser DevTools (F12 or Right-click → Inspect)
2. Click the device toolbar icon (or press Ctrl+Shift+M / Cmd+Shift+M)
3. Select a mobile device (iPhone, Android, etc.)
4. You should now see the hamburger menu

#### Method 3: Use Test Page
1. Open `test-mobile.html` in your browser
2. This page shows:
   - Current viewport width
   - Hamburger status
   - Logo status
   - Button to force-show hamburger for testing

#### Method 4: Test on Actual Mobile Device
1. Host the website on a local server or deploy it
2. Open on your phone/tablet
3. Hamburger menu should be visible

### Hamburger Menu Features:
- **Click hamburger:** Menu slides in from right
- **Click link:** Menu closes automatically
- **Click outside:** Menu closes automatically
- **Animated icon:** Transforms into X when open

## Issue: Navigation Links Not Working

### Check:
1. All internal links use relative paths:
   - ✅ `href="programs.html"`
   - ✅ `href="index.html"`
   - ❌ `href="/programs"` (needs server)

2. Files exist in the same directory:
   - index.html
   - programs.html
   - course-detail.html
   - partners-universities.html
   - partners-employers.html
   - partners-csr.html

## Issue: Styles Not Applied

### Check:
1. **CSS files linked correctly:**
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

2. **Files in same directory:**
   - styles.css
   - programs.css (for programs.html)
   - course-detail.css (for course-detail.html)
   - partners.css (for partner pages)

3. **Clear browser cache:**
   - Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

## Issue: JavaScript Not Working

### Check:
1. **Script linked correctly:**
   ```html
   <script src="script.js"></script>
   ```

2. **Check browser console:**
   - Open DevTools (F12)
   - Go to Console tab
   - Look for any error messages

3. **Verify IDs match:**
   - HTML: `id="hamburger"` and `id="navLinks"`
   - JavaScript: `getElementById('hamburger')` and `getElementById('navLinks')`

## Quick Fixes

### Logo Not Showing:
```html
<!-- Use PNG directly if SVG has issues -->
<img src="logo.png" alt="Digivarsity Logo" class="logo-img">
```

### Force Hamburger to Show (for testing only):
```css
/* Add to styles.css temporarily */
.hamburger {
    display: flex !important;
}
```

### Check if JavaScript is Running:
```javascript
// Add to script.js temporarily
console.log('Script loaded!');
console.log('Hamburger:', document.getElementById('hamburger'));
console.log('NavLinks:', document.getElementById('navLinks'));
```

## Browser Compatibility

### Tested On:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

### Mobile Browsers:
- ✅ Safari iOS
- ✅ Chrome Android
- ✅ Samsung Internet

## Common Questions

### Q: Why don't I see the hamburger menu on my laptop?
**A:** The hamburger menu only appears on screens ≤768px wide. Resize your browser window to see it.

### Q: Can I make the hamburger always visible?
**A:** Yes, but not recommended. Remove `display: none;` from `.hamburger` in styles.css.

### Q: How do I change the breakpoint?
**A:** Edit the media query in styles.css:
```css
@media (max-width: 768px) { /* Change 768px to your preferred width */
```

### Q: The logo is too big/small
**A:** Adjust in styles.css:
```css
.logo-img {
    height: 50px; /* Change this value */
}
```

### Q: Menu doesn't close when clicking links
**A:** Make sure script.js is loaded after the HTML content (before `</body>`).

## Need More Help?

1. Open `test-mobile.html` to diagnose issues
2. Check browser console for errors (F12 → Console)
3. Verify all files are in the same directory
4. Clear browser cache and hard refresh
5. Test in different browsers

## File Checklist

Make sure you have all these files:
- [ ] index.html
- [ ] programs.html
- [ ] course-detail.html
- [ ] partners-universities.html
- [ ] partners-employers.html
- [ ] partners-csr.html
- [ ] styles.css
- [ ] programs.css
- [ ] course-detail.css
- [ ] partners.css
- [ ] script.js
- [ ] programs.js
- [ ] course-detail.js
- [ ] logo.svg (or logo.png)
- [ ] test-mobile.html (for testing)
