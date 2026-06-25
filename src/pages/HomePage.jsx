import { motion } from 'framer-motion';
import { ArrowRight, Check, PackageCheck, ShieldCheck, Star, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedImageRail } from '../components/AnimatedImageRail';
import { ProductGrid } from '../components/ProductGrid';
import { railImages, categories, products, benefits, testimonials } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function HomePage({ onAddToCart }) {
  // Only show the first 8 products as "Featured" on home
  const featuredProducts = products.slice(0, 8);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-paper pb-20 pt-32 lg:pt-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={stagger} className="mx-auto max-w-3xl text-center">
            <motion.div variants={fadeUp} className="mb-6 flex items-center justify-center gap-2">
              <span className="rounded-full bg-clay/10 px-3 py-1 text-xs font-bold tracking-widest text-clay">AW24 COLLECTION</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Elevated essentials.<br />Designed for reality.
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Premium heavyweight fabrics, relaxed silhouettes, and a neutral palette. Clothing that speaks softly but carries weight.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button onClick={() => document.getElementById('collections').scrollIntoView({ behavior: 'smooth' })}>
                Explore Collection
              </Button>
              <Button variant="ghost">
                View Lookbook <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <AnimatedImageRail images={railImages} />
      </section>

      {/* Categories Grid */}
      <section id="collections" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="The Core Rotation" 
            subtitle="Build your wardrobe with our meticulously crafted foundational pieces."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3"
          >
            {categories.map((category) => (
              <motion.div key={category.slug} variants={fadeUp}>
                <Link to={`/category/${category.slug}`} className="group relative block aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink/5">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">{category.name}</h3>
                    <p className="mt-2 text-sm text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-base">
                      {category.tagline}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="new-arrivals" className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Featured Objects" 
            subtitle="Our latest arrivals, engineered for structure and comfort." 
          />
          <ProductGrid products={featuredProducts} onAddToCart={onAddToCart} />
          
          <div className="mt-16 text-center">
            <Button variant="light" onClick={() => window.location.href = '#collections'}>
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink">
            <div className="aspect-[4/3] w-full md:aspect-[21/9]">
              <img 
                src="https://images.unsplash.com/photo-1489987707023-afc152d5d8f8?auto=format&fit=crop&w=1600&q=80" 
                alt="Editorial Campaign" 
                className="h-full w-full object-cover opacity-60" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center p-8 sm:p-16 lg:p-24">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  Form follows function.
                </h2>
                <p className="mt-6 text-lg text-white/70">
                  Every stitch, seam, and fabric choice is intentional. We don't believe in fast fashion. We believe in creating pieces you'll wear for the next decade.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button variant="light">Read Our Story</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-ink/5 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: benefits[0][0], desc: benefits[0][1] },
              { icon: PackageCheck, title: benefits[1][0], desc: benefits[1][1] },
              { icon: Truck, title: benefits[2][0], desc: benefits[2][1] },
              { icon: ShieldCheck, title: benefits[3][0], desc: benefits[3][1] }
            ].map((benefit, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink/5 sm:mx-0">
                  <benefit.icon className="text-ink" size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Testimonials */}
      <section id="about" className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                The Neutral Edit.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-muted">
                We design for the modern wardrobe. No loud logos, no passing trends. Just premium heavyweight cottons, structured silhouettes, and earth-toned palettes that work together effortlessly.
              </motion.p>
              
              <div className="mt-12 space-y-8">
                {testimonials.map((test, i) => (
                  <motion.div key={i} variants={fadeUp} className="rounded-[1.5rem] bg-white p-6 shadow-soft md:p-8">
                    <div className="flex gap-1 text-clay">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <p className="mt-4 font-medium italic text-ink sm:text-lg">"{test.quote}"</p>
                    <p className="mt-4 text-sm font-semibold tracking-wider text-muted uppercase">— {test.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem]"
            >
              <img
                src="https://images.unsplash.com/photo-1550614000-4b95d415d183?auto=format&fit=crop&w=1200&q=80"
                alt="VELORA Brand Philosophy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Join the inner circle.</h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Subscribe for early access to limited drops, exclusive pricing, and styling notes.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-full border border-ink/10 bg-paper px-6 py-3 text-sm focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="mt-4 text-xs text-muted">By subscribing, you agree to our Privacy Policy.</p>
        </div>
      </section>
    </main>
  );
}
