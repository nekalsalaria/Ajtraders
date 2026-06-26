import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Weathercoat Long Life 10",
    category: "Exterior",
    warranty: "10 Years",
    finish: "Brilliant Sheen with PU",
    description: "Luxury exterior emulsion using PU & Silicon Technology. First paint to combine both for heavy rainfall areas.",
    usp: ["Silicon Technology protects against heavy rainfall", "PU provides High Sheen", "Withstands extreme weather — Rain, Heat and Dust"],
    dirt: "Superior",
    water: "Excellent",
    antiFungal: "Excellent",
    coverage: "70–75 sq.ft./lt./2 coats",
    color: "from-purple-900 to-purple-700",
    accent: "#7C3AED",
  },
  {
    name: "Weathercoat Long Life 7",
    category: "Exterior",
    warranty: "7 Years",
    finish: "High Sheen",
    description: "Designed to withstand extreme weather. Silicon Technology gives visible water repellency and superior dust repellence.",
    usp: ["Added Silicon helps repel rain water", "High Sheen Finish", "High Dust Repellence"],
    dirt: "Excellent",
    water: "Excellent",
    antiFungal: "Excellent",
    coverage: "70–75 sq.ft./lt./2 coats",
    color: "from-pink-900 to-pink-700",
    accent: "#BE185D",
  },
  {
    name: "Weathercoat Long Life Flexo",
    category: "Exterior",
    warranty: "8 Years",
    finish: "High Sheen",
    description: "High-performance exterior with Elastomeric property covering hairline cracks. Silicon additives for heavy rain protection.",
    usp: ["Elastomeric Film helps cover Hairline Cracks", "Superior Dust Pick-Up Resistance", "Enhanced with Silicon"],
    dirt: "Excellent",
    water: "Excellent",
    antiFungal: "Excellent",
    coverage: "70–75 sq.ft./lt./2 coats",
    color: "from-red-900 to-red-700",
    accent: "#B91C1C",
  },
  {
    name: "Weathercoat Glow",
    category: "Exterior",
    warranty: "5 Years",
    finish: "Mid Sheen",
    description: "100% acrylic exterior emulsion withstanding diverse weather. Stay clean technology washes off dust with every rain.",
    usp: ["Stay Clean Formula", "Rich Sheen finish", "All Weather Protection"],
    dirt: "High",
    water: "Medium",
    antiFungal: "Very High",
    coverage: "60 sq.ft./lt./2 coats",
    color: "from-orange-900 to-orange-700",
    accent: "#C2410C",
  },
  {
    name: "Silk Glamor Dazzle",
    category: "Interior",
    warranty: "—",
    finish: "Super Sheen",
    description: "Super Sheen Interior paint with long-lasting glamorous walls.",
    usp: ["Super Sheen Interior Paint", "Long-lasting Glamorous walls", "Highly Washable"],
    dirt: "—",
    water: "High",
    antiFungal: "—",
    coverage: "—",
    color: "from-yellow-700 to-yellow-500",
    accent: "#B45309",
  },
  {
    name: "Silk Glamor Hi Sheen",
    category: "Interior",
    warranty: "—",
    finish: "Hi Sheen",
    description: "Luxurious & long-lasting Interior Emulsion. Hi-sheen look, highly washable, adds glow to your walls.",
    usp: ["Luxurious & Long-lasting", "Hi-sheen look", "Highly Washable", "Adds glow to your walls"],
    dirt: "—",
    water: "High",
    antiFungal: "—",
    coverage: "—",
    color: "from-violet-800 to-violet-600",
    accent: "#6D28D9",
  },
  {
    name: "Rangoli Rich Matt",
    category: "Interior",
    warranty: "—",
    finish: "Matt",
    description: "Best in class smooth finish with Anti Fungal protection.",
    usp: ["Matt Finish", "Best In Class Smooth Finish", "Anti Fungal"],
    dirt: "—",
    water: "—",
    antiFungal: "Yes",
    coverage: "—",
    color: "from-fuchsia-900 to-fuchsia-700",
    accent: "#86198F",
  },
  {
    name: "Easy Clean",
    category: "Interior",
    warranty: "—",
    finish: "Soft Sheen",
    description: "Best in class washability with Soft Sheen finish.",
    usp: ["Soft Sheen", "Best In Class Washability"],
    dirt: "—",
    water: "High",
    antiFungal: "—",
    coverage: "—",
    color: "from-blue-900 to-blue-700",
    accent: "#1D4ED8",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const taglineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Hero entrance
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Tagline word-by-word
    gsap.fromTo(
      taglineRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );

    // Scroll-triggered cards
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          delay: (i % 2) * 0.15,
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <main className="bg-zinc-950 text-white min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center px-6 py-20">
        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-15 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        </div>

        <div ref={heroRef} className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-sm font-medium tracking-widest uppercase"
          >
            Authorised Berger Paint Dealer
          </motion.span>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="text-white">AJ </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-yellow-400">
              TRADERS
            </span>
          </h1>

          <p
            ref={taglineRef}
            className="text-zinc-400 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Chandwan, Chadwal · Kathua, J&K — Your trusted source for premium
            Berger paints. Colour every wall with confidence.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Explore Products
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="border border-zinc-600 hover:border-yellow-400 text-zinc-300 hover:text-yellow-400 font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Contact Us
            </motion.a>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 text-xs"
        >
          <span>scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="bg-red-700 py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: "Products Available", value: "20+" },
            { label: "Max Warranty", value: "10 Yrs" },
            { label: "Years of Berger Trust", value: "100+" },
            { label: "Happy Customers", value: "500+" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-yellow-300">{s.value}</div>
              <div className="text-red-100 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRODUCT PREVIEW ─── */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="text-red-500 font-semibold uppercase tracking-widest text-sm mb-2">
              Our Product Range
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Premium Berger Paints
            </h2>
            <p className="text-zinc-400 mt-3 max-w-lg mx-auto">
              Interior elegance to exterior armour — we stock the full Berger lineup.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <div
                key={p.name}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-linear-to-r ${p.color}`} />

                <div className="p-5">
                  {/* Category badge */}
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                    style={{
                      background: p.accent + "22",
                      color: p.accent,
                      border: `1px solid ${p.accent}44`,
                    }}
                  >
                    {p.category}
                  </span>

                  <h3 className="font-black text-white text-lg mt-3 leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2 leading-relaxed line-clamp-2">
                    {p.description}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-zinc-800 rounded-lg p-2">
                      <div className="text-zinc-500">Finish</div>
                      <div className="text-white font-semibold mt-0.5">{p.finish}</div>
                    </div>
                    <div className="bg-zinc-800 rounded-lg p-2">
                      <div className="text-zinc-500">Warranty</div>
                      <div className="text-white font-semibold mt-0.5">{p.warranty}</div>
                    </div>
                  </div>

                  <a
                    href="/products"
                    className="mt-4 block text-center text-sm font-semibold py-2 rounded-lg transition-colors"
                    style={{
                      background: p.accent + "18",
                      color: p.accent,
                      border: `1px solid ${p.accent}33`,
                    }}
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/products"
              className="inline-block border border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              View Full Product Catalogue
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="bg-zinc-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-yellow-500 font-semibold uppercase tracking-widest text-sm mb-2">Why Choose Us</p>
            <h2 className="text-4xl font-black text-white">AJ Traders Promise</h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "🎨", title: "Full Berger Range", desc: "Interior, exterior, specialty — we stock it all so you don't have to search elsewhere." },
              { icon: "🤝", title: "Expert Guidance", desc: "Not sure which paint suits your wall? Our team helps you pick the right product every time." },
              { icon: "📍", title: "Local & Reliable", desc: "Serving Chadwal and the Kathua district — fast delivery, no middleman markup." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}