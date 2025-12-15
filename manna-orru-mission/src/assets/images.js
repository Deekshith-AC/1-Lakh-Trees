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
    'https://cdn.pixabay.com/photo/2021/07/11/18/31/seedling-6404598_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/06/07/05/10/gardening-7247509_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/04/05/05/17/child-8676542_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/04/05/05/17/child-8676531_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/05/14/23/35/seed-8762302_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/04/18/21/15/seedling-2240442_1280.jpg'
  ],
  partnersLogos: Array.from({length:12}).map((_,i)=>`/images/logo-${i+1}.svg`),
  gallery: Array.from({length:20}).map((_,i)=>`/images/gallery-${i+1}.jpg`),
  // user-specified home image (pinned locally)
  homeExtra: '/images/homeExtra.jpg',
  // Optional leaf animation asset (place a GIF/SVG/Lottie JSON in public/images and reference here)
  // Example: '/images/leaf-anim.gif'
  leafAnim: '/images/leaf-anim.svg'  
}

export default IMAGES
