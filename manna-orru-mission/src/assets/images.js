// Local images (recommended). Download images into `public/images/` and keep these filenames.
const IMAGES = {
  hero: '/images/hero.jpg',
  heroMobile: '/images/hero-mobile.jpg',
  about: '/images/about.jpg',
  partnersBg: '/images/partners-bg.jpg',
  missionSaplings: '/images/mission-saplings.jpg',
  services: [
    '/images/services-1.jpg',
    '/images/services-2.jpg',
    '/images/services-3.jpg',
  ],
  // Fallback images (local) used when remote carousel images fail
  carouselFallbacks: [
    '/images/carousel-1.jpg',
    '/images/carousel-9.jpg',
    '/images/carousel-2.jpg'
  ],
  // Carousel images (pinned locally for reliability)
  carousel: [
    '/images/carousel-1.jpg',
    '/images/carousel-2.jpg',
    '/images/carousel-3.jpg',
    '/images/carousel-4.jpg',
    '/images/carousel-5.jpg',
    '/images/carousel-6.jpg',
    '/images/carousel-7.jpg',
    '/images/carousel-8.jpg',
    '/images/carousel-9.jpg',
    '/images/carousel-10.jpg',
    '/images/carousel-11.jpg',
    '/images/carousel-12.jpg'
  ],
  partnersLogos: Array.from({length:12}).map((_,i)=>`/images/logo-${i+1}.svg`),
  gallery: Array.from({length:20}).map((_,i)=>`/images/gallery-${i+1}.jpg`)
  ,
  // user-specified home image (pinned locally)
  homeExtra: '/images/homeExtra.jpg',
  // Optional leaf animation asset (place a GIF/SVG/Lottie JSON in public/images and reference here)
  // Example: '/images/leaf-anim.gif'
  ,leafAnim: '/images/leaf-anim.svg'
}

export default IMAGES
