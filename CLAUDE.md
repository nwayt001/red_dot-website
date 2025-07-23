# COA-GPT Website Documentation

## Project Overview
COA-GPT is a tech startup website for an AI-powered military planning solution. The site features a modern, dark-themed design with golden accents and professional animations.

## Tech Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Vanilla JavaScript** - Animations and interactions
- **Font**: Inter (Google Fonts)
- **Hosting**: Netlify
- **Domain**: coa-gpt.com (via Squarespace)

## Color Scheme
```css
--primary-color: #E6B41A;      /* Golden yellow */
--secondary-color: #B38F14;    /* Darker gold for hover */
--accent-color: #F0C64D;       /* Light gold accent */
--text-primary: #f3f4f6;       /* Light gray text */
--text-secondary: #d1d5db;     /* Medium gray text */
--bg-primary: #0a0a0a;         /* Near black background */
--bg-secondary: #111111;       /* Slightly lighter black */
--bg-tertiary: #1a1a1a;        /* Card backgrounds */
```

## Project Structure
```
coa-gpt-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styling
├── js/
│   └── main.js           # Animations & interactions
├── images/
│   ├── favicon_white.png  # Site favicon
│   ├── coa-gpt_logo_dark.png  # Main logo
│   └── UI_shots_so.png   # Product mockup
├── sitemap.xml           # SEO sitemap
├── robots.txt            # Search engine directives
└── CLAUDE.md            # This file
```

## Key Design Patterns

### Logo Implementation
- Navigation and footer use a combined logo (icon + text)
- Icon appears AFTER text logo (reversed from typical order)
- Both elements fade on hover together

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
1. **Fade-in on scroll** - Applied to cards and sections
2. **Floating animation** - Tech cards with 6s infinite loop
3. **Counter animation** - Stats count up over 1 second
4. **Parallax scrolling** - Hero section elements

### Typography Scale
- Hero title: 3.5rem
- Section headers: 2.5rem  
- Card titles: 1.5rem
- Body text: 1.125rem
- Small text: 0.95rem

## JavaScript Features

### Smooth Scrolling
All anchor links use smooth scrolling behavior.

### Navbar Effects
- Background opacity changes on scroll (0.95 → 0.98)
- Mobile menu toggle with hamburger animation

### Stat Counter Animation
```javascript
animateStat(element, duration = 1000)
```
Animates numbers from 0 to target value when scrolled into view.

### Intersection Observer
Used for:
- Fade-in animations on scroll
- Triggering stat counter animations
- Performance-optimized (only animates visible elements)

## SEO Implementation

### Meta Tags
- Description, keywords, author
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URL
- Structured data (Schema.org)

### Search Engine Files
- `sitemap.xml` - Lists all pages
- `robots.txt` - Allows all crawlers

## Responsive Design
- Mobile breakpoint: 768px
- Mobile navigation: Hamburger menu
- Grid layouts collapse to single column
- Product showcase reorders (image first on mobile)

## Custom Components

### Floating Cards
Used in hero section with staggered animations and continuous float effect.

### Tech Stats Cards
Centered layout with animated counters showing "10x" and "25x" metrics.

### Showcase Section
Split layout with text on left, tilted product mockup on right (-15deg → 0deg on hover).

## Deployment Notes
- Hosted on Netlify
- Auto-deploys from GitHub
- SSL certificate provided by Netlify
- DNS: A record pointing to 75.2.60.5

## Future Considerations
- Add blog functionality for content marketing
- Implement contact form backend
- Add more product screenshots/demos
- Consider adding customer testimonials section
- Add analytics tracking (Google Analytics)

## Common Tasks

### Update Stats
Edit the numbers in `.tech-stat h3` elements in index.html

### Change Colors
Modify CSS variables in `:root` section of styles.css

### Add New Section
1. Add HTML section following existing pattern
2. Add corresponding CSS in styles.css
3. Add to observer in main.js for animations

### Update SEO
- Meta descriptions in `<head>`
- Update sitemap.xml with new pages
- Modify structured data as needed