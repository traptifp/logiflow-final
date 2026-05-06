## Overview

Extend the Logiflow site into a 5-page website (Home + About, Services, Industries, Contact) while keeping the existing homepage **completely untouched** as the design system reference. All new pages will reuse the existing tokens (`bg-hero-gradient`, `bg-cta-gradient`, `text-gradient-teal`, `shadow-lift`, navy/teal palette, Sora + Inter fonts) and existing components (Navbar, Footer, Button, Card).

**Backend: yes, fully possible.** Lovable Cloud is already enabled on this project, so we can persist contact form submissions to a database and the team can review them later. Details below.

## Routing & Shared Layout

- Convert `src/App.tsx` to add routes: `/`, `/about`, `/services`, `/industries`, `/contact`
- Add `ScrollToTop` helper so page changes scroll to top
- Update `Navbar` links from anchor-hash (`#about`) to `react-router` `Link` to real routes; add a "Contact" CTA button that routes to `/contact`. Mobile menu drawer added.
- `Footer` quick links updated to route to pages
- Navbar + Footer remain identical across every page (already imported from `components/site`)

## New Pages

Each page follows the same rhythm: hero band (using `bg-hero-gradient` like homepage Hero), alternating white / `bg-soft-gradient` sections, card grids with `shadow-soft`/`shadow-lift`, final CTA reusing the `FinalCta` style (or a slimmer shared variant), Footer.

### `/about` — `pages/About.tsx`
Sections: Hero, Who We Are, How Our Model Works (4-point grid), Operational Strength (bullet card), Leadership (2 cards w/ placeholder avatars), Business Philosophy (4 pillars grid), Mission (centered statement), CTA.

### `/services` — `pages/Services.tsx`
Sections: Hero, Overview, Core Services (6 cards w/ lucide icons: Truck, Route, Package, ShoppingCart, Warehouse, Calendar), Execution Model (4-step horizontal flow reusing HowItWorks pattern), Why This Model Works (bullet list), Who We Support (chip/badge row), Operational Commitment, CTA.

### `/industries` — `pages/Industries.tsx`
Sections: Hero, Overview, Industries grid (5 cards: E-commerce, Manufacturers, Wholesalers, Retail, SMEs — lucide icons), How We Support Industries (4 points), Why Industry Alignment Matters (bullet list), CTA.

### `/contact` — `pages/Contact.tsx`
Sections: Hero, Quick Contact Strip (3 cards: phone/email/address with click-to-call `tel:` and `mailto:`), Main Contact Form card (prominent, on `bg-soft-gradient`), What Happens Next (4-step), Why Businesses Reach Out (bullets), Support Note.

## Contact Form (with backend)

Shared component `components/site/ContactForm.tsx` used on `/contact`:
- Fields: Full Name, Phone, Email (optional), Company (optional), Shipment Type (select: B2B/B2C/E-commerce/Bulk), Message (optional)
- Validation: zod schema, react-hook-form, sensible max lengths, phone regex
- WhatsApp CTA button (`https://wa.me/916262762626?text=...`) and click-to-call button alongside submit
- On submit → insert into `contact_submissions` table → toast success

**Database (Lovable Cloud):**
- Table `contact_submissions` with: name, phone, email, company, shipment_type, message, status (default 'new'), timestamps
- RLS: anyone (anon) can `INSERT`; only authenticated admins can `SELECT`. No public read.
- This keeps the form public-submittable without exposing leads.

The homepage's existing 2-field hero form is **not** modified.

## Files Changed / Added

```text
src/App.tsx                      (add routes — minimal edit)
src/components/site/Navbar.tsx   (router links + mobile menu)
src/components/site/Footer.tsx   (router links)
src/components/site/ScrollToTop.tsx          NEW
src/components/site/ContactForm.tsx          NEW
src/components/site/PageHero.tsx             NEW (reusable hero band)
src/pages/About.tsx                          NEW
src/pages/Services.tsx                       NEW
src/pages/Industries.tsx                     NEW
src/pages/Contact.tsx                        NEW
+ DB migration for contact_submissions
```

Homepage files (`Hero`, `WhatIs`, `Services`, `WhyUs`, `HowItWorks`, `Industries`, `Founders`, `FinalCta`, `Index.tsx`, `index.css`, `tailwind.config.ts`) are **not touched**.

## Design Discipline

- No new fonts, colors, or gradients — only existing tokens
- Section spacing matches homepage (`py-24`/`py-28`, `container`, `px-6 lg:px-12`)
- Headings use `font-display` with `text-gradient-teal` accents matching existing pattern
- Animations limited to existing `animate-fade-up` / `animate-pulse-glow` — no new motion
- Mobile-first: grids collapse to single column, navbar gets sheet/drawer menu

## Quick Question

Should I include an **admin login + simple inbox page** to view submissions inside the app, or is database-only (you'd query Lovable Cloud directly) enough for now?
