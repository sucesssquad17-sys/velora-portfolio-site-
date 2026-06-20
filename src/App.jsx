import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Instagram,
  Leaf,
  Menu,
  Minus,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  User,
  X,
} from 'lucide-react';
import { benefits, categories, products, railImages, testimonials } from './data';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Button({ children, variant = 'dark', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-ink/30 focus:ring-offset-2 focus:ring-offset-paper active:scale-[0.98]';
  const variants = {
    dark: 'bg-ink text-white hover:bg-clay shadow-soft',
    light: 'border border-ink/15 bg-white/70 text-ink hover:border-ink hover:bg-white',
    ghost: 'text-ink hover:bg-ink/5',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Header({ cartCount, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ['New Arrivals', 'Collections', 'Best Sellers', 'About'];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-paper/82 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2" aria-label="VELORA home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold text-white transition group-hover:rotate-6">V</span>
          <span className="text-lg font-extrabold tracking-[0.24em] text-ink">VELORA</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted lg:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-ink">
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button className="rounded-full p-3 text-ink transition hover:bg-ink/5" aria-label="Search">
            <Search size={19} />
          </button>
          <button className="rounded-full p-3 text-ink transition hover:bg-ink/5" aria-label="Account">
            <User size={19} />
          </button>
          <button onClick={onCartOpen} className="relative rounded-full p-3 text-ink transition hover:bg-ink/5" aria-label="Open cart">
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-clay px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button onClick={onCartOpen} className="relative rounded-full p-3 text-ink" aria-label="Open cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-clay px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setMenuOpen((value) => !value)} className="rounded-full p-3 text-ink" aria-label="Toggle menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-ink/10 bg-paper px-4 py-4 lg:hidden"
        >
          <nav className="mx-auto grid max-w-7xl gap-2">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-ink/5"
              >
                {link}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}

function AnimatedImageRail({ reverse = false }) {
  const repeated = [...railImages, ...railImages];

  return (
    <div className="hero-mask w-full overflow-hidden py-2">
      <div className={`marquee-track flex w-max gap-4 ${reverse ? 'reverse' : ''}`}>
        {repeated.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`${index % 3 === 0 ? 'h-72 w-48 sm:h-96 sm:w-64' : index % 3 === 1 ? 'h-64 w-44 sm:h-80 sm:w-56' : 'h-80 w-52 sm:h-[26rem] sm:w-72'} overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 shadow-soft`}
          >
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading={index < 4 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
      <div className="absolute right-0 top-16 -z-10 h-72 w-72 rounded-full bg-clay/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/55 px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-clay shadow-sm">
            <Sparkles size={14} /> New Drop 2026
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-balance text-5xl font-black leading-[0.92] tracking-[-0.06em] text-ink sm:text-6xl lg:text-8xl">
            Built for slow mornings, late nights, and everything between.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Premium everyday pieces designed with clean silhouettes, soft textures, and effortless comfort. A portfolio ecommerce build that feels like a real brand.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button>Shop New Arrivals <ArrowRight size={17} /></Button>
            <Button variant="light">View Collection</Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 grid gap-3 text-sm font-medium text-ink sm:grid-cols-3">
            {['Free shipping over ₹2,999', 'Easy 7-day returns', 'Premium cotton blends'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-white/45 px-3 py-3">
                <Check size={16} className="text-olive" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }} className="relative min-w-0">
          <div className="absolute inset-x-10 top-1/2 -z-10 h-44 rounded-full bg-olive/10 blur-3xl" />
          <AnimatedImageRail />
          <div className="mt-4 hidden lg:block">
            <AnimatedImageRail reverse />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CategorySection() {
  return (
    <section id="collections" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-clay">Collections</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-ink sm:text-5xl">Shop by mood.</h2>
          </div>
          <a href="#new-arrivals" className="hidden items-center gap-2 text-sm font-bold text-ink sm:flex">See all <ChevronRight size={17} /></a>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <motion.a variants={fadeUp} href="#new-arrivals" key={category.name} className="group relative overflow-hidden rounded-[1.7rem] bg-white shadow-product sm:rounded-[2rem]">
              <img src={category.image} alt={`${category.name} collection`} className="h-52 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-72" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-5">
                <h3 className="text-xl font-extrabold tracking-[-0.03em]">{category.name}</h3>
                <p className="mt-1 text-sm font-semibold opacity-85">Explore</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }) {
  return (
    <motion.article variants={fadeUp} className="group overflow-hidden rounded-[1.6rem] border border-ink/10 bg-white/60 shadow-product backdrop-blur sm:rounded-[2rem]">
      <div className="relative aspect-[3/4] overflow-hidden bg-sand">
        {product.tag && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink shadow-sm">
            {product.tag}
          </span>
        )}
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button onClick={() => onAdd(product)} className="w-full py-2.5 text-xs sm:text-sm">Quick Add</Button>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-extrabold tracking-[-0.02em] text-ink sm:text-base">{product.name}</h3>
            <p className="mt-1 text-sm font-semibold text-muted">{product.price}</p>
          </div>
          <button onClick={() => onAdd(product)} className="rounded-full border border-ink/10 p-2 text-ink transition hover:bg-ink hover:text-white sm:hidden" aria-label={`Add ${product.name} to cart`}>
            <ShoppingBag size={16} />
          </button>
        </div>
        <div className="mt-4 flex gap-1.5">
          {product.tones.map((tone) => (
            <span key={tone} className="h-4 w-4 rounded-full border border-black/10" style={{ backgroundColor: tone }} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ProductGrid({ onAdd }) {
  return (
    <section id="new-arrivals" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-clay">New Arrivals</p>
            <h2 className="mt-2 text-4xl font-black tracking-[-0.05em] text-ink sm:text-6xl">New season essentials.</h2>
            <p className="mt-3 max-w-xl leading-7 text-muted">Clean staples made for everyday rotation, styled with warm neutrals and sharp silhouettes.</p>
          </div>
          <Button variant="light" className="w-fit">Filter by fit <Minus size={16} /></Button>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EditorialBanner() {
  return (
    <section id="best-sellers" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink text-white shadow-soft sm:rounded-[3rem]">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sand">Editorial</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">Quiet design. Loud comfort.</h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-white/70">Every piece is made to move through your day without trying too hard. Layer it, repeat it, live in it.</p>
            <Button variant="light" className="mt-8 w-fit border-white/20 bg-white text-ink hover:bg-sand">Read Our Story</Button>
          </div>
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[560px]">
            <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1300&q=85" alt="Editorial fashion campaign" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CollectionHighlight() {
  return (
    <section id="about" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="overflow-hidden rounded-[2.4rem] shadow-soft">
          <img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1300&q=85" alt="Neutral edit fashion collection" className="h-[520px] w-full object-cover" loading="lazy" />
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-[2.4rem] border border-ink/10 bg-white/55 p-7 shadow-product sm:p-10 lg:p-12">
          <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-[0.22em] text-clay">The Neutral Edit</motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-black tracking-[-0.05em] text-ink sm:text-6xl">Layerable tones, relaxed fits, timeless staples.</motion.h2>
          <motion.p variants={fadeUp} className="mt-5 leading-8 text-muted">Built around an easy wardrobe: warm colors, breathable textures, and pieces that look good without overthinking.</motion.p>
          <motion.ul variants={fadeUp} className="mt-7 grid gap-3 text-sm font-semibold text-ink sm:grid-cols-2">
            {['Soft heavyweight fabrics', 'Relaxed silhouettes', 'Seasonless colors', 'Built for repeat wear'].map((item) => (
              <li key={item} className="flex items-center gap-2 rounded-2xl bg-paper px-4 py-3">
                <Check size={16} className="text-olive" /> {item}
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp}>
            <Button className="mt-8">Explore The Edit <ArrowRight size={17} /></Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  const icons = [Leaf, PackageCheck, Truck, ShieldCheck];

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {benefits.map(([title, text], index) => {
          const Icon = icons[index];
          return (
            <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-[1.7rem] border border-ink/10 bg-white/55 p-5 shadow-sm">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white">
                <Icon size={19} />
              </div>
              <h3 className="font-extrabold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-clay">Social Proof</p>
          <h2 className="mt-2 text-4xl font-black tracking-[-0.05em] text-ink sm:text-6xl">Looks real. Feels premium.</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map(([name, quote]) => (
            <div key={name} className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-product">
              <div className="mb-5 flex gap-1 text-clay">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
              </div>
              <p className="leading-8 text-ink">“{quote}”</p>
              <p className="mt-6 text-sm font-extrabold text-muted">— {name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-ink/10 bg-white/65 p-6 shadow-soft sm:rounded-[3rem] sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-clay">Get first access</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-ink sm:text-6xl">New drops, early offers, styling notes.</h2>
            <p className="mt-4 leading-8 text-muted">No spam. Just the kind of brand touch that makes the portfolio feel client-ready.</p>
          </div>
          <form className="flex flex-col gap-3 rounded-[1.5rem] bg-paper p-3 sm:flex-row">
            <input type="email" required placeholder="Enter your email" className="min-h-12 flex-1 rounded-full border border-transparent bg-white px-5 text-sm font-medium text-ink outline-none transition focus:border-clay" />
            <Button type="submit">Join List <ArrowRight size={17} /></Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = ['Shop', 'About', 'Contact', 'Shipping', 'Returns', 'Privacy'];
  return (
    <footer className="border-t border-ink/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">V</span>
            <span className="text-lg font-extrabold tracking-[0.24em] text-ink">VELORA</span>
          </div>
          <p className="mt-4 max-w-sm leading-7 text-muted">Everyday luxury streetwear landing page built as a premium ecommerce portfolio project.</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-ink">Links</h3>
          <div className="grid grid-cols-2 gap-3 text-sm font-medium text-muted">
            {links.map((link) => <a key={link} href="#home" className="hover:text-ink">{link}</a>)}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-ink">Social</h3>
          <div className="flex gap-3">
            {['Instagram', 'X', 'Pinterest'].map((item) => (
              <a key={item} href="#home" className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition hover:bg-ink hover:text-white" aria-label={item}>
                {item === 'Instagram' ? <Instagram size={17} /> : item[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-ink/10 pt-6 text-sm text-muted">© 2026 VELORA. Portfolio ecommerce concept.</div>
    </footer>
  );
}

function CartDrawer({ isOpen, items, onClose, onRemove }) {
  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + Number(item.price.replace(/[^0-9]/g, '')), 0);
  }, [items]);

  return (
    <>
      {isOpen && <div onClick={onClose} className="fixed inset-0 z-[70] bg-ink/35 backdrop-blur-sm" />}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 right-0 top-0 z-[80] flex w-full max-w-md flex-col bg-paper shadow-soft"
      >
        <div className="flex items-center justify-between border-b border-ink/10 p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay">Cart</p>
            <h2 className="text-2xl font-black tracking-[-0.04em] text-ink">Quick add preview</h2>
          </div>
          <button onClick={onClose} className="rounded-full p-3 transition hover:bg-ink/5" aria-label="Close cart"><X size={20} /></button>
        </div>
        <div className="flex-1 overflow-auto p-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={42} className="text-muted" />
              <p className="mt-4 font-bold text-ink">Your cart is clean right now.</p>
              <p className="mt-2 text-sm leading-6 text-muted">Add a product to show clients the ecommerce interaction.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {items.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex gap-4 rounded-[1.4rem] bg-white/70 p-3">
                  <img src={item.image} alt={item.name} className="h-24 w-20 rounded-2xl object-cover" />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-ink">{item.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-muted">{item.price}</p>
                    </div>
                    <button onClick={() => onRemove(index)} className="w-fit text-xs font-bold uppercase tracking-[0.16em] text-clay">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border-t border-ink/10 p-5">
          <div className="mb-4 flex items-center justify-between text-sm font-bold text-ink">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <Button className="w-full">Checkout Concept <ArrowRight size={17} /></Button>
        </div>
      </motion.aside>
    </>
  );
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);

  function addToCart(product) {
    setItems((current) => [...current, product]);
    setCartOpen(true);
  }

  function removeFromCart(index) {
    setItems((current) => current.filter((_, itemIndex) => itemIndex !== index));
  }

  return (
    <div className="min-h-screen overflow-x-hidden text-ink">
      <Header cartCount={items.length} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero />
        <CategorySection />
        <ProductGrid onAdd={addToCart} />
        <EditorialBanner />
        <CollectionHighlight />
        <Benefits />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer isOpen={cartOpen} items={items} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />
    </div>
  );
}
