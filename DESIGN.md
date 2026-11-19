---
name: Dharma Boutique Roastery
description: A local coffee storefront organized as a tasting scorecard and origin guide.
colors:
  forest: "#133a32"
  forest-deep: "#0e2a25"
  paper: "#f3ecdf"
  paper-light: "#faf7ef"
  coral: "#ec7352"
  harvest-yellow: "#e9c864"
  muted-green: "#718078"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(2.9rem, 5.5vw, 4.75rem)"
    fontWeight: 500
    lineHeight: 0.93
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Onest, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  sm: "2px"
  pill: "999px"
spacing:
  section: "96px"
  content-gutter: "8%"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.forest-deep}"
    rounded: "{rounded.sm}"
    padding: "13px 17px"
  button-secondary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "13px 17px"
  filter-chip:
    backgroundColor: "{colors.paper-light}"
    textColor: "{colors.muted-green}"
    rounded: "{rounded.pill}"
    padding: "8px 13px"
---

# Design System: Dharma Boutique Roastery

## Overview

**Creative North Star: "The Cupping Scorecard"**

This storefront turns a coffee tasting into a practical buying aid. A coffee's origin, process, roast, flavor notes and bag controls belong to one clear tasting decision instead of being scattered across generic cards. Visitors can move from the place a coffee grows to its sensory character and then directly to a demo add-to-bag action.

The visual language borrows the useful order of a cupping sheet—labels, measured profile, small observations—without pretending demo flavor values are certified scores. Deep forest green carries the featured tasting surface; paper-colored product areas support reading; coral and harvest yellow mark choice and flavor. Organic coffee imagery and a restrained package illustration connect the catalog to the physical product. Sample product details and prices are illustrative placeholders, not verified business information.

**Key Characteristics:**
- A full-bleed tasting surface with product and purchase action together.
- Indonesian origins and flavor notes are prominent catalog information.
- Paper-like backgrounds and measured hairline rules.
- Clear, direct controls with explicit selected and feedback states.

## Colors

The palette pairs forest greens with warm, mineral paper; coral calls attention to an action and yellow marks a tasting cue.

### Primary
- **Deep Roastery Forest** (`#133a32`): The featured scorecard background and strongest brand surface.
- **Roastery Ink** (`#0e2a25`): Footer and deepest text-bearing surfaces.
- **Roast Coral** (`#ec7352`): Primary purchase action, selected accents, and small sensory highlights.

### Secondary
- **Harvest Yellow** (`#e9c864`): Small tasting markers and emphasis against dark green.
- **Muted Green** (`#718078`): Supporting labels and secondary information on paper surfaces.

### Neutral
- **Cupping Paper** (`#f3ecdf`): Main page background.
- **Light Tasting Paper** (`#faf7ef`): Product, form, and card surfaces.

## Typography

**Display Font:** Bodoni Moda (with Georgia fallback)
**Body Font:** Onest (with sans-serif fallback)

**Character:** Bodoni Moda provides a high-contrast, editorial product voice; Onest keeps controls, notes, and data compact and readable.

### Hierarchy
- **Display** (500, responsive 2.9–4.75rem, 0.93 line height): Featured bean and landing-page statements.
- **Headline** (500, responsive 2.2–3.5rem): Section and page headings.
- **Title** (500, 1.2–1.5rem): Product names and short editorial labels.
- **Body** (400, 0.875rem, 1.7 line height): Descriptions and supporting text.
- **Label** (600, 0.45–0.6rem, tracked uppercase): Origin, process, and roast annotations.

## Layout

The home page starts with a full-width tasting table, followed by a wide origin feature and a four-column catalog on desktop. Catalog filters move above a two-column product grid on mobile; the origin map also provides text buttons so the illustrated regions are not the sole navigation. Product detail becomes a single-column mobile page. Section gutters use fluid percentages at wide widths and compact fixed gutters on phones. Tight groups use less space than the separation between editorial sections.

## Elevation & Depth

The interface is primarily flat: tonal backgrounds and thin borders establish structure. A soft, offset shadow lifts the package illustration and the cart drawer from their surroundings. Hover movement is restrained; no glowing halo is used as a decorative depth substitute.

## Shapes

Most controls and content edges are square or very slightly rounded, reinforcing a printed scorecard and catalog character. Small note chips use pill shapes to distinguish descriptive flavor labels from purchase controls. The brand mark and map pins are circular.

## Components

### Buttons
- **Shape:** Nearly square corners (2px).
- **Primary:** Roast Coral background with deep-green text; compact 13px × 17px padding.
- **Hover / Focus:** Primary action lightens and lifts slightly; keyboard focus uses a high-contrast coral outline.
- **Secondary:** Deep Roastery Forest background with Cupping Paper text.

### Chips
- **Style:** Flavor notes are compact paper-toned or outlined labels; filter chips are rounded outline controls.
- **State:** Selected filters use a forest fill and light text. Flavor notes are descriptive and not interactive unless explicitly presented as a filter.

### Cards / Containers
- **Corner Style:** Square to subtly rounded.
- **Background:** Light Tasting Paper or a warm tonal surface.
- **Shadow Strategy:** Flat by default; offset soft shadows only for overlays and the package illustration.
- **Border:** Hairline rules define scorecard areas and product metadata.
- **Internal Padding:** Compact in catalog items; generous within feature sections.

### Inputs / Fields
- **Style:** Paper background, thin muted border, nearly square corners.
- **Focus:** Visible 3px coral outline with offset.
- **Error / Disabled:** Errors name the problem; disabled controls must not rely on color alone.

### Navigation
- **Style:** Compact Onest links on light paper, forest brand mark, and an always-visible cart action.
- **Hover / Active:** Coral link emphasis; mobile navigation opens as a simple stacked list.

### Signature Component: Tasting Profile
A small labeled flavor diagram supports the origin notes and variant selection. It is explicitly presented as an illustrative demo profile, not a lab measurement or certified cupping score.

## Do's and Don'ts

### Do:
- **Do** keep product identity, origin, sensory description, price, and next purchase action easy to find.
- **Do** label demo products, prices, and flavor profiles as illustrative wherever they could be mistaken for verified business information.
- **Do** provide text alternatives for interactive map regions.
- **Do** keep mobile purchasing controls visible and comfortably operable.

### Don't:
- **Don't** imply payments, delivery, inventory, or order fulfillment are real.
- **Don't** present invented sensory numbers as a certified cupping score.
- **Don't** let maps, texture, or package decoration replace readable origin and product details.
