# Dharma Boutique Roastery

A Vue storefront prototype for **Dharma Boutique Roastery**, a fictionalized boutique coffee experience focused on Indonesian local coffee. Visitors can explore coffee by origin, compare sample tasting notes, choose a bag size and grind, and complete a simulated checkout.

> **Demo notice:** This is a frontend-only prototype. Product names, photos, prices, origins, tasting notes, and brewing information are illustrative sample content—not verified business data. The cart and checkout do not process real payments or fulfill orders.

## Features

- Homepage featuring coffee origins, a sample catalog, and brewing guidance
- Coffee catalog with search, origin and process filters, and sorting
- Product detail pages with size and grind selections
- Dedicated pages for Indonesian coffee origins
- Cart, wishlist, newsletter signup, and simulated orders stored in browser `localStorage`
- Scroll-triggered entrance effects powered by AOS, with reduced-motion support
- Responsive layouts for desktop and mobile

## Tech stack

- Vue 3
- Vite
- Vue Router
- Pinia
- AOS (Animate On Scroll)

## Run locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to a GitHub repository and import it in [Vercel](https://vercel.com/).
2. Select **Vite** as the framework preset.
3. Use these project settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy the project.

The included `vercel.json` rewrite sends route requests to `index.html`, allowing Vue Router history routes (for example, `/shop` and `/origin/gayo`) to load directly and work after refresh.

## Project layout

```text
src/
  data/       Sample product and origin data
  stores/     Pinia cart and wishlist state
  views/      Homepage, catalog, product, cart, checkout, and origin pages
  App.vue     Shared layout and navigation
  main.js     Vue application and AOS initialization
  router.js   Client-side routes
public/
  img/        Static site images
```

## Limitations before a real launch

This app has no backend, authentication, inventory management, shipping integration, or payment processing. Browser-stored demo data is local to each visitor and device. Replace all sample content and imagery with verified business information before presenting the site as a live roastery storefront.
