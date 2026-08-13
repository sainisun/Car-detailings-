# Shree Sanwaliya Car Detailing & Service — Design Direction

## Three Initial Directions

### Theme Name: Midnight Gold Atelier
**Very Brief Intro:** A dark, premium automotive atelier with brushed-metal accents, sharp editorial typography, and fluid gold motion lines. It turns a local workshop into a confident, high-trust service brand.
**Probability:** 0.07

### Theme Name: Clean Roadside Studio
**Very Brief Intro:** A bright, approachable service brand built around warm white space, cobalt blue, and candid workshop photography. It feels practical, transparent, and easy for families to choose.
**Probability:** 0.03

### Theme Name: Rally Motion Lab
**Very Brief Intro:** A high-energy motorsport-inspired direction with graphite surfaces, red signal accents, and kinetic route-map graphics. It makes every service feel fast, capable, and performance-minded.
**Probability:** 0.09

## Chosen Approach: Midnight Gold Atelier

### Design Movement
Luxury automotive editorial design blended with industrial Swiss typography and the controlled drama of a premium detailing bay at night.

### Core Principles
1. **Dark material, bright precision:** Use charcoal, black glass, brushed-metal textures, and concentrated gold accents to make the work feel exact and valuable.
2. **Editorial asymmetry:** Avoid generic centered blocks. Use offset panels, oversized numerals, diagonal lines, and staggered content to create a sense of movement.
3. **Proof through clarity:** Every service, promise, and contact action should be readable in a glance, with no invented ratings, reviews, or testimonials.
4. **Motion with purpose:** Animation should resemble a vehicle entering a service bay: smooth, deliberate, and responsive rather than flashy for its own sake.

### Color Philosophy
The foundation is near-black graphite because it echoes the workshop poster and gives polished cars visual depth. **Sanwaliya Gold** is reserved for action, craftsmanship, and directional lines; it should feel like a reflection across a clean bonnet, not a general-purpose yellow fill. Soft warm silver and muted stone support legibility without weakening the premium contrast.

### Layout Paradigm
An asymmetric, scroll-led service journey: a pinned vertical brand rail on desktop, offset hero copy beside a car-detailing visual, diagonal section transitions, and a split service matrix that alternates density. On mobile, the rail becomes a compact top bar and the layout collapses into a clear single-column sequence.

### Signature Elements
1. Fine gold arc lines inspired by a car silhouette and the workshop poster’s sweeping graphic strokes.
2. Small uppercase service labels with numbered editorial markers and compact technical captions.
3. Black-glass panels with subtle metallic gradients, grain, and luminous edge highlights.

### Interaction Philosophy
Interactions should feel tactile and mechanical: buttons compress slightly on press, service cards lift with a narrow gold edge, and navigation highlights slide along a route line. Phone and directions actions remain obvious and reachable, especially on small screens.

### Animation
Use short, GPU-friendly transitions for hover and focus. Let the hero’s gold route line draw in on load, reveal the main heading in two staggered lines, and float a soft reflection over the hero visual. Services can reveal in a 40–70ms stagger. Respect `prefers-reduced-motion` by disabling non-essential reveals and keeping content immediately visible.

### Typography System
Use **Bebas Neue** for display headlines and oversized service numerals, with **Manrope** for body copy, navigation, labels, and buttons. Headlines should be uppercase with tight tracking; body text should use generous line-height and a warm-white color for sustained reading. Gold is an emphasis color, never the only carrier of meaning.

### Brand Essence
**Positioning:** A dependable car detailing and multi-service workshop for car and pickup owners in Dadi, Rajasthan, combining hands-on care with modern service presentation.

**Personality:** Precise, energetic, trustworthy.

### Brand Voice
Headlines are confident and concise. CTAs are direct and useful. Microcopy is warm, practical, and free of inflated claims.

Example lines:

> Restore the finish. Keep the drive.

> Bring your car in. We’ll take care of the details.

### Wordmark & Logo
Use a bold graphic symbol rather than plain text: an abstract black shield with a flowing gold car contour and a small star-like highlight, paired with a custom two-line wordmark lockup in the website UI. The supplied poster remains the reference for the business name and gold/black identity, but the website mark should be simpler and more scalable.

### Signature Brand Color
**Sanwaliya Gold — `#F5C400`**. Use it for primary actions, active states, route lines, service numerals, and key highlights against graphite backgrounds.

## English Business Details From the Supplied Poster and Client Brief

| Field | English detail | Publishing note |
|---|---|---|
| Business name | **Shree Sanwaliya Car Detailing & Service** | Use as the primary website title. |
| Business type | Car detailing, car washing, vehicle service, and workshop | Client also specified mechanical work as part of the broader service offering. |
| Service 01 | Foam Washing | Listed on the supplied poster. |
| Service 02 | Deep Cleaning | Listed on the supplied poster. |
| Service 03 | Dry Cleaning | Listed on the supplied poster. |
| Service 04 | Light Buffing | English interpretation of the poster’s “Light Buffing” service. |
| Service 05 | Rubbing | Listed on the supplied poster. |
| Service 06 | Polishing | Listed on the supplied poster. |
| Additional service | Mechanical Work | Supplied in the client’s message; exact mechanical sub-services are not yet specified. |
| Vehicle coverage | Cars and pickups of all types | Based on the poster statement. |
| Brand promise | “Your car’s care, our responsibility.” | English adaptation of the Hindi tagline. |
| Quality cues | Excellent quality, experienced team, modern equipment, customer satisfaction | Present as brand promises, not as third-party reviews or ratings. |
| Phone | **8947880552** | Use as a click-to-call action. |
| Address | Before HP Petrol Pump, Main Neemkathana Road, Dadi, Rajasthan | Locality spelling should be confirmed by the client before final public launch. |

## Content Guardrails

The website must not invent customer reviews, star ratings, years in business, pricing, opening hours, certifications, or before-and-after statistics. It should use the confirmed information above and make the phone number the primary conversion action. A directions link can point to a Google Maps search for the supplied address without claiming an exact map pin until the location is confirmed.

## Style Decisions

- The primary brand placement now combines the generated emblem asset with a visible inline shield-and-car-contour fallback so the mark remains ownable even while generated assets are loading.
- The services section uses staggered cards and a gold route arc to carry the editorial asymmetry beyond the hero.
- The contact section stays conversion-focused but shifts from plain cream to a warm brushed-silver industrial surface with dark-glass card treatment and black/gold linework.
- The unverified “24/7” availability cue was removed. Contact language now points only to calling the workshop and opening directions.
