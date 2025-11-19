# Design Guidelines: Hypotheek & Financieel Adviesbedrijf

## Design Approach
**Reference-Based Approach**: Drawing inspiration from trustworthy financial services websites like ING, ABN AMRO, and modern fintech interfaces. Focus on clean layouts, professional credibility, and user-friendly navigation.

## Core Design Elements

### Typography
- **Headings**: Inter or Poppins (Bold/SemiBold) - Professional and modern
  - H1: 3xl to 5xl (responsive)
  - H2: 2xl to 4xl
  - H3: xl to 2xl
- **Body Text**: Inter (Regular/Medium) - Excellent readability
  - Base: text-base to text-lg
  - Small: text-sm

### Layout System
**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component spacing: gap-6, gap-8, gap-12
- Container: max-w-7xl for main content areas

### Component Library

**Navigation**
- Fixed header with logo left, navigation links center/right
- Sticky on scroll with subtle shadow
- Mobile: Hamburger menu with slide-in drawer
- Links: Hypotheekadvies, Financieel Advies, Over Ons, Contact

**Hero Section (Homepage)**
- Full-width section with background image (professional office/home imagery)
- Centered content with max-w-3xl container
- Hero title + subtitle + two prominent CTA buttons
- Buttons with blurred backgrounds when placed over imagery
- Height: 70-80vh for impact

**Interactive Slider Component** (Critical Feature)
- Horizontal carousel showing max 3 cards simultaneously
- Cards: Aspect ratio 4:3 or 16:9, with background images
- Inactive cards (outside main 3): opacity-50 with scale-95 transform
- Active/center cards: Full opacity, scale-100
- Each card: Background image overlay, title (text-xl/2xl), 2-line description (text-sm/base)
- Navigation: Left/right arrow buttons + dot indicators
- Smooth CSS transitions (300-400ms)
- Touch/swipe enabled for mobile

**Service Cards** (For Slider Tiles)
- 6 tiles per category (Hypotheekadvies & Financieel Advies)
- Background: Full-cover images with dark gradient overlay (for text readability)
- Content: Centered text over image
- Padding: p-6 to p-8
- Rounded corners: rounded-lg to rounded-xl

**Team/Advisor Cards** (Over Ons)
- Profile photo (circular or rounded square)
- Name, role/title
- Brief bio (3-4 lines)
- Layout: 2-column grid (desktop), single column (mobile)

**Contact Form**
- Fields: Naam, Email, Telefoon, Onderwerp, Bericht
- Clean input styling with border focus states
- Submit button: Primary style, full-width on mobile
- Form validation indicators

**Footer**
- Multi-column layout: Bedrijfsinformatie, Snelle Links, Contactgegevens
- Social media icons
- Copyright notice

### Page-Specific Layouts

**Homepage**
1. Hero section with background image
2. Services overview (2 columns: Hypotheekadvies & Financieel Advies preview)
3. Why choose us section
4. CTA section

**Hypotheekadvies & Financieel Advies Pages**
1. Page hero (smaller, 40-50vh) with page title
2. Interactive slider section (main feature)
3. Additional information/benefits section
4. CTA to contact

**Over Ons**
1. Company introduction section
2. Advisors grid (photos + bios)
3. Mission/vision section with icons
4. Values/approach section

**Contact**
1. Two-column layout: Form (left) + Contact info/map (right)
2. Embedded Google Maps
3. Contact details with icons

## Images

**Homepage Hero**: Professional office environment or happy family in new home - conveys trust and success (1920x1080 minimum)

**Slider Backgrounds** (12 unique images needed):
- Eerste huis kopen: Young couple with keys
- Volgend huis kopen: Family moving to larger home
- Verbouwen: Home renovation/modern interior
- Overwaarde opnemen: Financial planning/calculator imagery
- Oversluiten: Documents/handshake
- Hypotheekscan: Professional advisor with client
- Aanvullend pensioen: Elderly couple relaxed/happy
- Eerder stoppen met werken: Person enjoying early retirement
- Sparen voor later: Piggy bank/savings concept
- Mee- of tegenvaller: Life moments/celebration
- Wijzigingen in situatie: Life transitions
- Overlijden: Family security/protection imagery

**Over Ons**: High-quality professional headshots of advisors (square format)

All images should have professional quality, warm tones, and convey trustworthiness.

## Accessibility
- Sufficient contrast ratios for text over images
- Keyboard navigation for slider
- ARIA labels for interactive elements
- Form labels properly associated

## Animations
- Slider transitions: Smooth 400ms ease-in-out
- Button hover: Subtle scale or brightness change
- Scroll reveals: Fade-in on scroll (minimal, not overdone)
- Navigation: Smooth mobile menu slide