<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Lixbor Auron LLP — Agent Context & Codebase Guide

This document provides essential context, architectural patterns, design standards, and development rules for any AI agent working on this codebase.

---

## 1. Project Overview & Business Domain

* **Entity:** **Lixbor Auron LLP** (`LIXBOR AURON LLP`)
* **Industry:** International B2B Commodities Trading, Global Sourcing, and Physical Supply Distribution.
* **Heritage:** Leadership roots trace back to **1989** in the Indian iron & steel manufacturing sector; incorporated in **2026** as a modern, globally connected trading platform.
* **Headquarters:** Khanna, Punjab, India.
* **Key Product Lines:**
  * **Flagship — Magnesium Oxide (MgO):** Supplied in Agricultural (`MgO-AGRI`), Animal Nutrition/Feed (`MgO-FEED`), and Technical/Industrial (`MgO-TECH`) grades.
  * **Chemicals & Fertilizers:** Urea (Technical, Prilled, Automotive DEF/AdBlue), Granular Sulphur, Melamine, and industrial chemicals.
  * **Polymers:** Cross-linked Polyethylene (XLPE) compounds, LDPE, HDPE, ABS, and engineering polymers.

---

## 2. Technical Stack

* **Framework:** Next.js 16.3.5 (App Router, Turbopack, React 19)
* **Language:** TypeScript 5 (Strict mode)
* **Styling:** Tailwind CSS v4 (`@import "tailwindcss";` in `app/globals.css` with `@theme` custom tokens)
* **Typography:** `Inter` (sans) and `Playfair_Display` (serif-italic) loaded via `next/font/google` in `app/layout.tsx`
* **Icons:** Custom scalable SVG icon system in `components/ui/Icons.tsx`

---

## 3. Directory Structure & File Map

```
├── app/                              # Next.js App Router routes
│   ├── api/contact/route.ts          # Server POST route for RFQ/contact inquiries
│   ├── contact/page.tsx              # B2B inquiry form & corporate legal details
│   ├── faq/page.tsx                  # Dedicated searchable FAQ page
│   ├── privacy-notice/page.tsx       # Legal privacy documentation
│   ├── products/page.tsx             # Categorized product catalog (MgO focus, chemicals, polymers)
│   ├── terms-and-conditions/page.tsx # Commercial terms & conditions
│   ├── who-we-are/page.tsx           # Company story, 1989 heritage, values, process flow
│   ├── globals.css                   # Tailwind v4 theme tokens & custom glass utility classes
│   ├── layout.tsx                    # Root layout: Header, Footer, font variables, metadata
│   └── page.tsx                      # Homepage (Hero carousel, intro, value cards, FAQ)
├── components/
│   ├── layout/
│   │   ├── Header.tsx                # Sticky floating pill navbar with natural liquid glass on scroll
│   │   └── Footer.tsx                # Corporate footer, PAN/LLPIN details, navigation, legal links
│   ├── sections/
│   │   ├── VeritaseHero.tsx          # Fullscreen responsive background image carousel
│   │   ├── VeritaseCards.tsx         # 4-card tall grid highlighting trade value propositions
│   │   ├── FAQSection.tsx            # Two-column layout with left-aligned sticky title & +/- accordion
│   │   ├── ContactForm.tsx           # Interactive RFQ form with validation & API submission
│   │   ├── ProcessFlow.tsx           # Sourcing and commercial trade lifecycle steps
│   │   ├── TimelineItem.tsx          # Milestone timeline from 1989 foundations to 2026 platform
│   │   ├── ValueCard.tsx             # Corporate core values (Integrity, Reliability, Quality, etc.)
│   │   └── ProductCard.tsx           # Product display card with specifications & RFQ prefill CTA
│   └── ui/
│       ├── Logo.tsx                  # Brand logo symbol + wordmark (supports variant="light"|"dark" and compact)
│       ├── Icons.tsx                 # Centralized SVG icon library
│       └── HashScrollHandler.tsx     # Client utility for smooth anchor linking (#mgo-focus, etc.)
├── lib/
│   ├── content/                      # SINGLE SOURCE OF TRUTH for all content & copy
│   │   ├── company.ts                # Corporate identifiers, address, phone, email, mainNavLinks
│   │   ├── products.ts               # Product catalog, MgO grades, specifications
│   │   ├── who-we-are.ts             # Company history, values, milestones, sourcing steps
│   │   ├── faq.ts                    # FAQ question-and-answer pairs & categories
│   │   └── contact.ts                # Contact field labels and commercial office details
│   └── types/
│       └── index.ts                  # Shared TypeScript interfaces (CompanyDetails, Product, etc.)
└── public/
    ├── logo/                         # Official SVG and PNG logos
    └── images/                       # Local images, hero backgrounds, product visuals
```

---

## 4. Key Architectural Patterns & Behavioral Rules

### A. Content Single Source of Truth
* **Never hardcode static marketing copy, product data, or company details inside components.**
* All content belongs in `lib/content/*.ts` and must adhere to the interfaces in `lib/types/index.ts`.
* If adding new products or FAQs, update `lib/content/products.ts` or `lib/content/faq.ts`.

### B. Header & Navigation Behavior (`components/layout/Header.tsx`)
* **At rest (`!isScrolled`):**
  * Full width, transparent background (`bg-transparent border-transparent`).
  * Top utility bar ("Company Profile") is visible.
  * White typography, white SVG logo (`variant="light"`), and outline "GET QUOTE" button.
* **When scrolled (`isScrolled`, scrollY > 20px):**
  * Morphs into a **floating capsule/pill**: `fixed top-2 sm:top-2.5 px-3 sm:px-5 flex flex-col items-center`.
  * Pill container: `rounded-full`, `bg-white/75`, `backdrop-blur-[24px]`, `border border-white/80`, natural liquid glass specular sheen overlay.
  * Automatic contrast flip: `variant="dark"` for `Logo`, `text-slate-700` for navigation links, and solid dark pill button (`bg-slate-900 text-white`) for "GET QUOTE".
  * Top utility bar smoothly collapses to `max-h-0 opacity-0` with `transition-all duration-300`.
* **Mobile Drawer:**
  * Fullscreen mobile drawer overlay with dedicated top bar containing brand logo + close (`✕`) button.
  * Body scroll lock via `document.body.style.overflow = 'hidden'`.

### C. FAQ Section Pattern (`components/sections/FAQSection.tsx`)
* Implements a **two-column split structure**:
  * **Left Column:** Sticky title (**"Any questions?"** with italic serif accent), section badge, and inquiry link.
  * **Right Column:** Accordion list separated by minimal horizontal divider lines (no rounded card box).
  * **Accordion Indicators:** `+` (collapsed) and `—` (expanded) toggle icons are positioned on the **left side** of each question.
  * **Answer Alignment:** Answers are indented flush under the question text.

### D. React 19 & Next.js Coding Rules
* **Avoid Cascading Renders:** Do NOT call `setState` synchronously within `useEffect` on route/pathname change. Handle state resets during render (`if (prevPathname !== pathname) { ... }`) or in event callbacks.
* **Build Verification:** Always verify changes with `npx tsc --noEmit` and `npm run build` before completing work.

