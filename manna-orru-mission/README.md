# Manna Orru Manna Bhadhyatha — Static Frontend

This repository contains a 100% static React + Tailwind site scaffold for the "Manna Orru Manna Bhadhyatha" 1 Lakh Trees mission. It's built for pixel-perfect UI/UX similar to the requested reference and filled with free images (Unsplash/Pexels-style queries).

Features:
- React 18 + Vite
- Tailwind CSS
- Framer Motion, GSAP, ScrollMagic for animations
- Owl Carousel for slides
- 25+ free images loaded from Unsplash query endpoints

Local dev:

```powershell
cd "C:/Users/DeekshithAC/Downloads/1 Lakh Trees/manna-orru-mission"
npm install
npm run dev
```

Build:

```powershell
npm run build
```

One-click Netlify deploy:
- Push the repo to GitHub.
- In Netlify, create a new site from Git and set the build command to `npm run build` and publish directory to `dist`.

Notes & next steps:
- Replace Unsplash query URLs in `src/assets/images.js` with specific Pexels/Pixabay/Freepik URLs if you want fixed images.
- Add real partner logos to `src/assets/` and update `Partners.jsx`.
- This scaffold is 100% static and ready for Netlify / Vercel / GitHub Pages.
