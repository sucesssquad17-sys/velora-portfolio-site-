import beigeHoodie from '../assets/beige_hoodie.png';
import blackJacket from '../assets/black_jacket.png';
import foldedTshirts from '../assets/folded_tshirts.png';
import woolOvershirt from '../assets/wool_overshirt.png';
import blackTrousers from '../assets/black_trousers.png';
import creamSweatshirt from '../assets/cream_sweatshirt.png';
import oversizedCoat from '../assets/oversized_coat.png';
import accessoriesFlatlay from '../assets/accessories_flatlay.png';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'hoodies',
    name: 'Hoodies',
    image: beigeHoodie,
    count: '12 Items'
  },
  {
    id: 'overshirts',
    name: 'Overshirts',
    image: woolOvershirt,
    count: '8 Items'
  },
  {
    id: 't-shirts',
    name: 'T-Shirts',
    image: foldedTshirts,
    count: '15 Items'
  },
  {
    id: 'trousers',
    name: 'Trousers',
    image: blackTrousers,
    count: '10 Items'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Oversized Heavy Hoodie',
    price: 2499,
    image: beigeHoodie,
    category: 'hoodies',
    colors: ['#E6DFD3', '#121212', '#4B5320'],
    isBestSeller: true,
    description: '450GSM heavy cotton fleece with a relaxed double-lined hood and drop-shoulder silhouette.'
  },
  {
    id: '2',
    name: 'Relaxed Cotton Tee',
    price: 999,
    image: foldedTshirts,
    category: 't-shirts',
    colors: ['#FAF9F6', '#121212', '#7E7A70'],
    isNew: true,
    description: 'Midweight combed cotton t-shirt with a structured rib collar and vintage wash finish.'
  },
  {
    id: '3',
    name: 'Utility Overshirt',
    price: 2899,
    image: woolOvershirt,
    category: 'overshirts',
    colors: ['#5C4033', '#121212', '#2F4F4F'],
    description: 'Heavy wool blend button-down with utility chest pockets and relaxed tailoring.'
  },
  {
    id: '4',
    name: 'Wide-Leg Trousers',
    price: 2199,
    image: blackTrousers,
    category: 'trousers',
    colors: ['#121212', '#DCD7C9', '#3D3D3D'],
    description: 'Relaxed drape trousers featuring front pleats and adjustable side waist tabs.'
  },
  {
    id: '5',
    name: 'Minimal Zip Jacket',
    price: 3499,
    image: blackJacket,
    category: 'overshirts',
    colors: ['#121212', '#2F4F4F'],
    isBestSeller: true,
    description: 'Sleek tech jacket featuring metal hardware, water-repellent shell, and inner lining.'
  },
  {
    id: '6',
    name: 'Soft Knit Sweatshirt',
    price: 1899,
    image: creamSweatshirt,
    category: 'hoodies',
    colors: ['#F5F5DC', '#121212'],
    description: 'Fine-loop French terry sweatshirt designed for clean layering and ultimate softness.'
  },
  {
    id: '7',
    name: 'Everyday Cargo Pants',
    price: 2599,
    image: oversizedCoat, // Using campaign style coat/cargo representation
    category: 'trousers',
    colors: ['#3D4A3E', '#121212', '#5C4033'],
    isNew: true,
    description: 'Relaxed-fit cargo pants built with heavy cotton twill, articulated knees, and drawcords.'
  },
  {
    id: '8',
    name: 'Canvas Tote Bag',
    price: 699,
    image: accessoriesFlatlay,
    category: 'accessories',
    colors: ['#FAF9F6', '#121212'],
    description: 'Reinforced 16oz cotton canvas tote with dual handles, zip pocket, and signature branding.'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote: "The hoodie feels premium without being overpriced. It has that perfect heavy drape that holds its shape.",
    author: "Aarav S.",
    role: "Verified Buyer"
  },
  {
    id: '2',
    quote: "Finally found basics that actually look styled. You can wear the overshirt all day and it doesn't crease easily.",
    author: "Meera K.",
    role: "Creator"
  },
  {
    id: '3',
    quote: "The fit is relaxed but still sharp. The trousers have a beautiful flow that works with both sneakers and boots.",
    author: "Kabir M.",
    role: "Stylist"
  }
];

export const BENEFITS = [
  {
    id: '1',
    title: 'Premium Materials',
    description: 'Using long-staple organic cotton, heavy wool, and custom weaves designed to last.'
  },
  {
    id: '2',
    title: 'Easy Returns',
    description: 'Hassle-free 7-day returns with pick-up from your doorstep. Shop with confidence.'
  },
  {
    id: '3',
    title: 'Fast Delivery',
    description: 'Free shipping over ₹2,999 with carbon-neutral courier partners.'
  },
  {
    id: '4',
    title: 'Secure Checkout',
    description: 'Fully encrypted transaction processing supporting UPI, cards, and net banking.'
  }
];
