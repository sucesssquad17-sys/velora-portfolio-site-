import beigeHoodie from './assets/beige_hoodie.png';
import blackJacket from './assets/black_jacket.png';
import foldedTshirts from './assets/folded_tshirts.png';
import woolOvershirt from './assets/wool_overshirt.png';
import blackTrousers from './assets/black_trousers.png';
import creamSweatshirt from './assets/cream_sweatshirt.png';
import oversizedCoat from './assets/oversized_coat.png';
import accessoriesFlatlay from './assets/accessories_flatlay.png';

export const railImages = [
  {
    src: beigeHoodie,
    alt: 'VELORA premium beige hoodie flatlay',
  },
  {
    src: blackJacket,
    alt: 'VELORA minimal zip jacket in black',
  },
  {
    src: foldedTshirts,
    alt: 'VELORA soft organic folded cotton tees',
  },
  {
    src: woolOvershirt,
    alt: 'VELORA heavyweight utility wool overshirt',
  },
  {
    src: blackTrousers,
    alt: 'VELORA structured wide-leg black trousers',
  },
  {
    src: creamSweatshirt,
    alt: 'VELORA premium cream crewneck sweatshirt',
  },
];

export const categories = [
  {
    name: 'Hoodies',
    image: beigeHoodie,
  },
  {
    name: 'Overshirts',
    image: woolOvershirt,
  },
  {
    name: 'T-Shirts',
    image: foldedTshirts,
  },
  {
    name: 'Trousers',
    image: blackTrousers,
  },
];

export const products = [
  {
    id: 1,
    name: 'Oversized Heavy Hoodie',
    price: '₹2,499',
    tag: 'Best Seller',
    image: beigeHoodie,
    tones: ['#E6DFD3', '#121212', '#4B5320'],
  },
  {
    id: 2,
    name: 'Relaxed Cotton Tee',
    price: '₹999',
    image: foldedTshirts,
    tones: ['#FAF9F6', '#121212', '#7E7A70'],
  },
  {
    id: 3,
    name: 'Utility Overshirt',
    price: '₹2,899',
    image: woolOvershirt,
    tones: ['#5C4033', '#121212', '#2F4F4F'],
  },
  {
    id: 4,
    name: 'Wide-Leg Trousers',
    price: '₹2,199',
    image: blackTrousers,
    tones: ['#121212', '#DCD7C9', '#3D3D3D'],
  },
  {
    id: 5,
    name: 'Minimal Zip Jacket',
    price: '₹3,499',
    tag: 'New Drop',
    image: blackJacket,
    tones: ['#121212', '#2F4F4F'],
  },
  {
    id: 6,
    name: 'Soft Knit Sweatshirt',
    price: '₹1,899',
    image: creamSweatshirt,
    tones: ['#F5F5DC', '#121212'],
  },
  {
    id: 7,
    name: 'Everyday Cargo Pants',
    price: '₹2,599',
    image: oversizedCoat,
    tones: ['#3D4A3E', '#121212', '#5C4033'],
  },
  {
    id: 8,
    name: 'Canvas Tote Bag',
    price: '₹699',
    image: accessoriesFlatlay,
    tones: ['#FAF9F6', '#121212'],
  },
];

export const benefits = [
  ['Premium Materials', 'Heavyweight cotton blends, soft touch finishes, and clean construction.'],
  ['Easy Returns', 'Simple 7-day returns so every fit feels risk-free.'],
  ['Fast Delivery', 'Clean packaging and reliable delivery across India.'],
  ['Secure Checkout', 'Modern checkout flow with protected payment experience.'],
];

export const testimonials = [
  ['Aarav', 'The hoodie feels premium without being overpriced. The landing page makes the brand feel real.'],
  ['Meera', 'Finally found basics that actually look styled. The mobile shopping flow feels super clean.'],
  ['Kabir', 'The fit is relaxed but still sharp. I love how editorial the whole brand presentation feels.'],
];
