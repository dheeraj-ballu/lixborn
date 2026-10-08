# Lixbor Auron LLP — Global Commodity Trading Platform

Official corporate web platform for **Lixbor Auron LLP**, an independent international commodities trading and distribution enterprise connecting global markets with essential industrial raw materials, Magnesium Oxide (MgO), agricultural chemicals, fertilizers, and high-performance polymers.

---

## 📌 Project Overview

* **Corporate Heritage:** While established as a modernized global trading entity in **2026**, our industrial foundations trace back to **1989** in the Indian iron & steel manufacturing sector.
* **Core Commodities Traded:**
  * **Flagship — Magnesium Oxide (MgO):** Specialized grades for Agriculture (`MgO-AGRI`), Animal Nutrition/Feed (`MgO-FEED`), and Technical/Industrial (`MgO-TECH`).
  * **Chemicals & Fertilizers:** Urea (Technical, Prilled, Automotive DEF/AdBlue), Granular Sulphur, Melamine, and industrial chemical intermediates.
  * **Polymers:** XLPE Cable Compounds, LDPE, HDPE, ABS, and technical resins.
* **Platform Purpose:** High-trust B2B digital presence showcasing physical supply capabilities, verified sourcing, quality certifications, and handling structured Request for Quote (RFQ) inquiries from international buyers.

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.3.5` (App Router) | React framework with Turbopack, static page generation, and API route handlers |
| **React** | `19.2.8` | Component architecture & modern concurrent rendering |
| **TypeScript** | `^5` | Full static type safety across data layers and UI components |
| **Tailwind CSS** | `^4` | Utility-first styling with custom theme tokens (`@theme`) and glassmorphism utilities |
| **Fonts** | `next/font/google` | Optimized loading of `Inter` (sans) and `Playfair Display` (serif-italic) |

---

## ✨ Key Features

1. **Floating Natural Liquid Glass Navbar:**
   * Full-width transparent resting state over hero imagery with top utility bar.
   * On scroll (`scrollY > 20px`), dynamically morphs into a compact floating rounded pill (`rounded-full`) with a frosted natural liquid glass effect (`backdrop-blur-[24px] saturate-200`).
   * Automatically adapts contrast for dark logo typography and dark action buttons.
   * Responsive mobile drawer with dedicated top bar branding and body scroll lock.

2. **Industrial Product Catalog & MgO Focus:**
   * Detailed specifications, mesh sizes, purities (85%–98%+), and application sectors.
   * Direct anchor navigation to flagship Magnesium Oxide and polymer resin sectors.
   * One-click "Request Quote" buttons that pre-fill commercial inquiries for specific commodities.

3. **Two-Column Interactive FAQ Section:**
   * Two-column split layout with sticky section title (**"Any questions?"**) and commercial inquiry link.
   * Minimalist accordion rows separated by horizontal dividers with left-aligned `+` and `—` state indicators.

4. **RFQ & Commercial Inquiries API:**
   * B2B quote request form with client validation.
   * Next.js server route handler (`POST /api/contact`) returning tracked commercial reference IDs (`LA-QUOTE-XXXXXX`).

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v20.x` or higher
* **npm**: `v10.x` or higher (or `pnpm` / `yarn`)

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Development Server
Run the development server with Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Type Checking & Verification
Check for TypeScript compilation errors without emitting files:
```bash
npx tsc --noEmit
```

### 4. Production Build
Create an optimized production build:
```bash
npm run build
```
Start the production server:
```bash
npm run start
```

---

## 📂 Project Architecture

```
├── app/                              # Next.js App Router routes
│   ├── api/contact/route.ts          # Quote submission API route
│   ├── contact/page.tsx              # Contact & RFQ page
│   ├── faq/page.tsx                  # Dedicated searchable FAQ page
│   ├── privacy-notice/page.tsx       # Privacy notice
│   ├── products/page.tsx             # Products & MgO grades catalog
│   ├── terms-and-conditions/page.tsx # Commercial terms & conditions
│   ├── who-we-are/page.tsx           # Company story & 1989 heritage
│   ├── globals.css                   # Global styles & liquid glass utilities
│   ├── layout.tsx                    # Root layout with Header and Footer
│   └── page.tsx                      # Homepage
├── components/
│   ├── layout/                       # Header & Footer components
│   ├── sections/                     # Page sections (Hero, FAQ, Cards, Forms)
│   └── ui/                           # Atoms (Logo, Icons, Scroll handlers)
├── lib/
│   ├── content/                      # Modular data layer (single source of truth)
│   │   ├── company.ts                # Company details & nav links
│   │   ├── products.ts               # Commodity specifications & grades
│   │   ├── who-we-are.ts             # Story, values, milestones
│   │   ├── faq.ts                    # FAQ list
│   │   └── contact.ts                # Commercial contact fields
│   └── types/                        # TypeScript definitions
└── public/                           # Logos, SVG assets, and static media
```

---

## ✍️ Updating Content

All marketing text, product specifications, company identifiers, and FAQs are decoupled from UI components. To make content updates:

* **Company Info / Office / Identifiers:** Modify [`lib/content/company.ts`](file:///c:/Users/dell/Desktop/lixbor/Lixbor-Auron-LLP-dev/lib/content/company.ts)
* **Products & Specifications:** Modify [`lib/content/products.ts`](file:///c:/Users/dell/Desktop/lixbor/Lixbor-Auron-LLP-dev/lib/content/products.ts)
* **Company Heritage & Values:** Modify [`lib/content/who-we-are.ts`](file:///c:/Users/dell/Desktop/lixbor/Lixbor-Auron-LLP-dev/lib/content/who-we-are.ts)
* **FAQ Q&A Pairs:** Modify [`lib/content/faq.ts`](file:///c:/Users/dell/Desktop/lixbor/Lixbor-Auron-LLP-dev/lib/content/faq.ts)

---

## 🎨 Design System & Colors

* **Dark Navy Base:** `#070e17` (`--color-navy-950`) / `#0b1420` (`--color-navy-900`)
* **Brand Accent:** `#10b981` (Emerald / Teal)
* **Typography:** `Inter` for clean corporate readability + `Playfair Display` (Italic) for editorial accents.
* **Glassmorphism:** Natural liquid glass with `backdrop-filter: blur(24px) saturate(200%)` and specular edge highlights.

