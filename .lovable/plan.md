# Nucleown Technologies — Agency Website

A single-page, dark-themed, conversion-focused marketing site for Nucleown Technologies, built around your logo and brand palette.

## Brand & Visual Direction

- **Logo**: Your uploaded logo saved to `src/assets/nucleown-logo.png`. Used in the navbar (small, transparent), as a hero brand mark (full orb version), and in the footer
- **Palette**: Dark navy `#0A1F2E` (page background), Deep teal `#0D3348` (cards/surfaces), Bright cyan-teal accent tuned to match the logo's nucleus (CTAs, glow, borders), White `#FFFFFF` (text)
- **Mood**: Bold, modern, tech-forward. Soft cyan glow on key elements, radial gradient mesh in the hero echoing the logo's orb, thin cyan accent borders on cards
- **Typography**: Space Grotesk for headings, DM Sans for body (Google Fonts)
- **Motion**: Light-touch only — fade/slide-in on scroll, hover lift on cards, cyan glow on buttons, pulse on the "Coming Soon" badge and WhatsApp button

## Page Structure (single scroll, all on `/`)

1. **Sticky Nav** — Logo left; Services / Work / About / Contact links right; cyan "Get a Free Quote" button. Translucent dark background that solidifies on scroll. Mobile: hamburger → slide-down menu
2. **Hero** — Large logo brand mark, headline + subheadline + two CTAs ("Get a Free Consultation" cyan primary → contact; "See Our Work" outlined → portfolio). Animated radial gradient mesh background with subtle floating particles
3. **Services** — 2 cards: Web Design & Development (active, feature list, CTA), Cybersecurity (dimmed with glowing cyan "Coming Soon" badge)
4. **Why Nucleown** — 2×2 grid of value props with cyan Lucide icons (Users, Palette, Zap, Globe)
5. **Portfolio** — 3 dark cards with cyan accent borders, gradient image placeholders, type tag, "View Project" button, hover lift. Trailing line: "More projects coming soon. Currently accepting 2 free project partnerships."
6. **About / Founder** — Two columns: copy left, circular placeholder photo right with cyan glow ring. Trust line below
7. **Testimonials** — 3 cards with 5-star rating, quote, name + business type. Marked as placeholders in code
8. **Contact** — Form (Name, Email, WhatsApp, Project Type dropdown, Message, Submit). Client-side validation + toast confirmation (no backend). Below form: WhatsApp / Instagram / LinkedIn icon row
9. **Footer** — Logo + tagline, quick links, copyright, "Based in Pakistan 🇵🇰 — Working Globally"

## Always-on Elements

- **Floating WhatsApp button** — fixed bottom-right, green circle with WhatsApp icon, "Chat With Us" label that expands on hover, gentle pulse ring. Links to `https://wa.me/XXXXXXXXXX` (placeholder constant at top of file for easy swap)
- **Smooth scroll** between sections via anchor IDs

## Technical Plan

- TanStack Start, single route `src/routes/index.tsx` replacing the placeholder
- Section components in `src/components/sections/` (Nav, Hero, Services, WhyUs, Portfolio, About, Testimonials, Contact, Footer, WhatsAppFAB)
- Logo copied to `src/assets/nucleown-logo.png`, imported as ES module
- Brand colors and fonts wired into `src/styles.css` as CSS variables + `@theme inline` tokens (`--color-brand-navy`, `--color-brand-teal`, `--color-brand-cyan`); default theme switched to dark navy palette
- Google Fonts (Space Grotesk + DM Sans) added via `<link>` in `__root.tsx` head; SEO meta updated for Nucleown
- Reuse existing shadcn components — `button`, `input`, `textarea`, `select`, `card`, `sonner` (toast). No new deps
- Lucide icons throughout (Code2, Shield, Users, Palette, Zap, Globe, Star, Send, Instagram, Linkedin, MessageCircle, Menu, X)
- Fully responsive (mobile-first), no heavy animation libs, fast load

## Placeholders Clearly Marked

Phone number, Instagram handle, LinkedIn URL, founder photo, portfolio images, and testimonials are flagged with `TODO:` comments for easy replacement.
