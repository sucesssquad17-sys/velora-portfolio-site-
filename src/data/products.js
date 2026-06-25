export const products = [
  {
    id: 1,
    name: 'Oversized Heavy Hoodie',
    slug: 'oversized-heavy-hoodie',
    categorySlug: 'hoodies',
    price: 2499,
    tag: 'Best Seller',
    isFeatured: true,
    isBestSeller: true,
    fit: 'Oversized',
    description: 'A heavyweight, premium cotton fleece hoodie designed with dropped shoulders, a double-lined hood without drawcords for a clean aesthetic, and dense ribbed cuffs.',
    features: [
      '450 GSM Heavyweight Organic Cotton Fleece',
      'Dropped shoulder slouchy shape',
      'Double-lined hood with no drawcords',
      'Preshrunk for stable fit wash after wash'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Warm Cream', code: '#F5F2EB' },
      { name: 'Stone Beige', code: '#E3DCCE' },
      { name: 'Pitch Black', code: '#1A1A1A' }
    ],
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 2,
    name: 'Soft Knit Sweatshirt',
    slug: 'soft-knit-sweatshirt',
    categorySlug: 'hoodies',
    price: 1899,
    tag: null,
    isFeatured: false,
    isBestSeller: false,
    fit: 'Relaxed',
    description: 'A luxurious boucle knit sweatshirt engineered with a soft cotton blend, crewneck profile, and neat flatlock stitching across panel lines.',
    features: [
      '380 GSM Cotton-Boucle blend',
      'Brushed interior lining for ultimate softness',
      'Relaxed body block with structured sleeve line',
      'Ribbed collar insert'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Olive Drab', code: '#4D5D4E' },
      { name: 'Clay Tan', code: '#C4B29E' }
    ],
    image: 'https://images.unsplash.com/photo-1434389673922-921c1692ceb9?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1434389673922-921c1692ceb9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550614000-4b95d415d183?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 3,
    name: 'Utility Overshirt',
    slug: 'utility-overshirt',
    categorySlug: 'overshirts',
    price: 2899,
    tag: 'Trending',
    isFeatured: true,
    isBestSeller: false,
    fit: 'Structured',
    description: 'A heavyweight cotton twill overshirt referencing clean military tailoring. Featuring double chest pockets, minimal press buttons, and a clean flat hem.',
    features: [
      '100% Cotton heavy canvas twill',
      'Matte black metal hardware buttons',
      'Two oversized chest pockets with flap closure',
      'Straight cut side slits'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Forest Olive', code: '#3C473A' },
      { name: 'Off-Black', code: '#242424' }
    ],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 4,
    name: 'Corduroy Work Shirt',
    slug: 'corduroy-work-shirt',
    categorySlug: 'overshirts',
    price: 2699,
    tag: null,
    isFeatured: false,
    isBestSeller: true,
    fit: 'Relaxed',
    description: 'An elegant wide-wale corduroy shirt that doubles as an outer layer. Velvety rib texture offering natural depth of color and superior drape.',
    features: [
      '8-wale premium soft corduroy',
      'Horn button closure',
      'Pleated cuffs and back yoke',
      'Curved hem for comfortable wear'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Clay Ochre', code: '#9E7756' },
      { name: 'Warm Charcoal', code: '#3D3D3C' }
    ],
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 5,
    name: 'Relaxed Cotton Tee',
    slug: 'relaxed-cotton-tee',
    categorySlug: 't-shirts',
    price: 999,
    tag: 'Must-Have',
    isFeatured: true,
    isBestSeller: true,
    fit: 'Relaxed',
    description: 'The foundation of the modern capsule wardrobe. A soft-touch organic cotton jersey crewneck shirt tailored for an easy, effortless drape.',
    features: [
      '220 GSM Organic Cotton Jersey',
      'Clean binded neckline collar',
      'Breathable, pre-shrunk cotton fabric',
      'Minimal stitching details'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Milk White', code: '#FAFAFA' },
      { name: 'Fossil Gray', code: '#A3A3A3' },
      { name: 'Sand Brown', code: '#D9C7B6' }
    ],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 6,
    name: 'Heavyweight Pocket Tee',
    slug: 'heavyweight-pocket-tee',
    categorySlug: 't-shirts',
    price: 1199,
    tag: null,
    isFeatured: false,
    isBestSeller: false,
    fit: 'Structured',
    description: 'Crafted from high-density carded cotton yarn, this dry-touch heavy pocket tee maintains its sharp boxy structure and has clean seam margins.',
    features: [
      '280 GSM Heavy Combed Cotton',
      'Structured boxy drop with neat front patch pocket',
      'High rib neckband to prevent warping',
      'Clean side-seam-less appearance'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Washed Earth', code: '#736B60' },
      { name: 'Chalk White', code: '#F2F2F2' }
    ],
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 7,
    name: 'Wide-Leg Trousers',
    slug: 'wide-leg-trousers',
    categorySlug: 'trousers',
    price: 2199,
    tag: 'Trending',
    isFeatured: true,
    isBestSeller: false,
    fit: 'Oversized',
    description: 'Modern wide trousers cut from sturdy, midweight cotton gabardine. Designed with neat single front pleats, hidden side seam pockets, and an elasticated back waistband.',
    features: [
      'Midweight 100% Cotton Gabardine',
      'Single front pleats for natural clean line drape',
      'YKK zip fly and hook-and-bar closure',
      'Comfort-fit rear elasticated band'
    ],
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Khaki Clay', code: '#C4B59D' },
      { name: 'Raven Black', code: '#1E1E1E' }
    ],
    image: 'https://images.unsplash.com/photo-1550639524-a6f58345a278?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1550639524-a6f58345a278?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 8,
    name: 'Everyday Cargo Pants',
    slug: 'everyday-cargo-pants',
    categorySlug: 'trousers',
    price: 2599,
    tag: null,
    isFeatured: false,
    isBestSeller: true,
    fit: 'Structured',
    description: 'Clean utilitarian pants with low-profile side cargo pockets to avoid bulkiness. Cut from heavy cotton ripstop that softens with wash and wear.',
    features: [
      'Durable Cotton Ripstop fabric',
      'Low-profile side pockets with flap inserts',
      'Reinforced knee panels for extended wear',
      'Hem drawcords to toggle leg shape (straight/tapered)'
    ],
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Olive Green', code: '#424C3D' },
      { name: 'Raw Umber', code: '#5C5449' }
    ],
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550639524-a6f58345a278?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 9,
    name: 'Canvas Tote Bag',
    slug: 'canvas-tote-bag',
    categorySlug: 'accessories',
    price: 699,
    tag: 'Essentials',
    isFeatured: true,
    isBestSeller: false,
    fit: 'Regular',
    description: 'An architectural carryall in heavy raw cotton canvas. Styled with reinforced twin handle lengths for dual hand or shoulder carry and an internal zip organizer pocket.',
    features: [
      '18oz Ultra-dense Raw Cotton Canvas',
      'Reinforced box x-stitch at handle attachments',
      'Inner zip sleeve for safe key and wallet storage',
      'Structured rectangular flat-bottom format'
    ],
    sizes: ['One Size'],
    colors: [
      { name: 'Natural Ecru', code: '#EFEFEA' },
      { name: 'Coffee Brown', code: '#4E3E33' }
    ],
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 10,
    name: 'Wool Blend Beanie',
    slug: 'wool-blend-beanie',
    categorySlug: 'accessories',
    price: 499,
    tag: null,
    isFeatured: false,
    isBestSeller: true,
    fit: 'Regular',
    description: 'A chunky ribbed watch cap beanie crafted from a warming merino wool blend. Features a customizable double-fold cuff.',
    features: [
      'Merino Wool and Recycled Polyester blend',
      'Chunky fisherman 2x2 rib stitch',
      'Stretch-resistant shape recovery',
      'Clean crown sewing structure'
    ],
    sizes: ['One Size'],
    colors: [
      { name: 'Stone Grey', code: '#787878' },
      { name: 'Beige Marl', code: '#D4CDC3' }
    ],
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 11,
    name: 'Minimal Zip Jacket',
    slug: 'minimal-zip-jacket',
    categorySlug: 'outerwear',
    price: 3499,
    tag: 'New Drop',
    isFeatured: true,
    isBestSeller: false,
    fit: 'Structured',
    description: 'A clean, boxy blouson jacket with a covered two-way silver front zip. Built with dense twill weave shell lining to cut the wind.',
    features: [
      'Premium heavy cotton-poly twill fabric',
      'Sleek two-way metal silver YKK zippers',
      'Clean side welt hand warmer pockets',
      'Elastic panels at rear waist hem for modern blouson silhouette'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Warm Clay', code: '#8F7A65' },
      { name: 'Classic Black', code: '#141414' }
    ],
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542475094-1a3b934bfcc1?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 12,
    name: 'Puffer Vest',
    slug: 'puffer-vest',
    categorySlug: 'outerwear',
    price: 2999,
    tag: 'Limited Edition',
    isFeatured: false,
    isBestSeller: true,
    fit: 'Oversized',
    description: 'An architectural down-filled puffer vest featuring side pockets and drawcords at the hem for a customizable cocoon fit.',
    features: [
      'Waterproof nylon matte shell',
      '80/20 premium light synthetic down fill',
      'High-rise neck collar for complete neck cover',
      'Concealed cord toggles at interior hem'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Sand Dune', code: '#D1C6B8' },
      { name: 'Army Olive', code: '#3E453A' }
    ],
    image: 'https://images.unsplash.com/photo-1542475094-1a3b934bfcc1?auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542475094-1a3b934bfcc1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80'
    ]
  }
];
