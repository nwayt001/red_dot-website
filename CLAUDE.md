# Red Dot Website Documentation

## Project Overview
Red Dot is a community-driven anonymous reporting system for real-time safety alerts. The website showcases this cross-platform mobile application with a modern, dark-themed design featuring red accents and professional animations.

## Tech Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Vanilla JavaScript** - Animations and interactions
- **Font**: Inter (Google Fonts)
- **Hosting**: TBD (Netlify/Vercel recommended)
- **Domain**: TBD (reddotapp.com suggested)

## Color Scheme
```css
--primary-color: #DC2626;      /* Red */
--primary-hover: #B91C1C;      /* Darker red */
--primary-light: #EF4444;      /* Light red */
--accent-color: #F87171;       /* Light red accent */
--text-primary: #F3F4F6;       /* Light gray text */
--text-secondary: #D1D5DB;     /* Medium gray text */
--text-tertiary: #9CA3AF;      /* Dark gray text */
--bg-primary: #0A0A0A;         /* Near black background */
--bg-secondary: #111111;       /* Slightly lighter black */
--bg-tertiary: #1A1A1A;        /* Card backgrounds */
```

## Project Structure
```
red_dot-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styling
├── js/
│   └── main.js           # Animations & interactions
├── images/
│   ├── favicon.png        # Site favicon (to be added)
│   ├── app-mockup.png     # Phone mockup (to be added)
│   ├── app-store-badge.png   # iOS badge (to be added)
│   └── google-play-badge.png  # Android badge (to be added)
├── sitemap.xml           # SEO sitemap
├── robots.txt            # Search engine directives
└── CLAUDE.md            # This file
```

## Key Design Patterns

### Logo Implementation
- Simple text logo with red dot (•) as accent
- Hover effect transitions text to red color
- Consistent across navigation and footer

### Section Structure
Each major section follows this pattern:
```html
<section id="section-name" class="section-name">
    <div class="container">
        <div class="section-header">
            <h2>Section Title</h2>
            <p>Section subtitle</p>
        </div>
        <!-- Section content -->
    </div>
</section>
```

### Animation Patterns
1. **Fade-in on scroll** - Applied to feature cards and steps
2. **Floating animation** - Alert cards with staggered 6s loops
3. **Counter animation** - Stats count up over 2 seconds
4. **Parallax scrolling** - Hero section with opacity fade

### Typography Scale
- Hero title: 3.5rem
- Section headers: 2.5rem
- Card titles: 1.5rem / 1.25rem
- Body text: 1.125rem
- Small text: 0.95rem / 0.875rem

## JavaScript Features

### Smooth Scrolling
All anchor links use smooth scrolling with offset for fixed navbar.

### Navbar Effects
- Background opacity changes on scroll (0.95 → 0.98)
- Mobile menu toggle with animated hamburger icon

### Stat Counter Animation
```javascript
animateValue(element)
```
Animates numbers from 0 to target value when scrolled into view.

### Intersection Observer
Used for:
- Fade-in animations on scroll
- Triggering stat counter animations
- Lazy loading images (prepared for implementation)

## SEO Implementation

### Meta Tags
- Description, keywords, author
- Open Graph tags for social sharing
- Twitter Card tags
- Placeholder canonical URL

### Search Engine Files
- `sitemap.xml` - Lists main page sections
- `robots.txt` - Allows all crawlers

## Responsive Design
- Mobile breakpoint: 768px
- Mobile navigation: Full-screen overlay menu
- Grid layouts collapse to single column
- Hero section stacks vertically on mobile
- Floating alerts hidden on mobile for clarity

## Custom Components

### Floating Alert Cards
Three animated alerts showcasing real-time notification concept with emoji icons.

### Feature Cards
6 cards with hover effects highlighting:
- Anonymous Reporting
- Real-Time Alerts
- Location-Based
- Community Driven
- Verified Reports
- Cross-Platform

### Safety Stats
Animated counters showing:
- 50,000 Active Users
- 10,000 Reports Submitted
- 95% User Satisfaction
- 24/7 Monitoring

## Deployment Notes
- Ready for static hosting (Netlify, Vercel, GitHub Pages)
- No backend required for current version
- SSL certificate recommended
- Domain suggestion: reddotapp.com

## Required Assets
The following images need to be added:
1. `favicon.png` - Red dot icon for browser tab
2. `app-mockup.png` - Phone mockup showing app interface
3. `app-store-badge.png` - Official App Store download badge
4. `google-play-badge.png` - Official Google Play download badge
5. `og-image.png` - Social media preview image (1200x630px)

## Future Considerations
- Add actual app store links when available
- Implement contact form with backend
- Add privacy policy and terms of service pages
- Consider adding user testimonials section
- Add analytics tracking (Google Analytics/Plausible)
- Implement actual lazy loading for images
- Add more app screenshots/feature demonstrations

## Common Tasks

### Update Stats
Edit the numbers in `.stat-number` elements' `data-target` attributes in index.html

### Change Colors
Modify CSS variables in `:root` section of styles.css

### Add New Section
1. Add HTML section following existing pattern
2. Add corresponding CSS in styles.css
3. Add to observer in main.js for animations

### Update App Store Links
Replace `#` in download links with actual store URLs when available

### Add Screenshots
Place images in `/images/` folder and update `src` attributes in HTML