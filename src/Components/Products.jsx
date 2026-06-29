import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../products/IMG_7596.JPG";
import img2 from "../products/IMG_7598.JPG";
import img3 from "../products/IMG_7599.JPG";
import img4 from "../products/IMG_7600.JPG";
import img5 from "../products/IMG_7603.JPG";
import img6 from "../products/IMG_7606.JPG";
import img7 from "../products/IMG_7608.JPG";
import img8 from "../products/IMG_7611.JPG";
import img9 from "../products/IMG_7614.JPG";
import img10 from "../products/IMG_7615.JPG";
import img11 from "../products/IMG_7616.JPG";
import img12 from "../products/IMG_7617.JPG";
import img13 from "../products/IMG_7618.JPG";
import img14 from "../products/IMG_7619.JPG";

const WHATSAPP_NUMBER = "917889607109";

const products = [
  // ── EXTERIOR ──────────────────────────────────────────────
  {
    id: 1,
    name: "Weathercoat Long Life 10",
    category: "Exterior",
    series: "Weathercoat",
    warranty: "10 Years",
    finish: "Brilliant Sheen with PU",
    coverage: "70–75 sq.ft./lt./2 coats",
    dirtRepellence: "Superior",
    waterRepellence: "Excellent",
    antiFungal: "Excellent",
    description:
      "The crown jewel of the Weathercoat range. Uses PU & Silicon Technology together — a first in its class. Designed for heavy-rainfall regions and extreme weather, it provides unmatched sheen and robust film strength.",
    usp: [
      "Silicon Technology protects against heavy rainfall",
      "PU provides Brilliant High Sheen",
      "Withstands extreme weather — Rain, Heat and Dust",
      "Superior anti-fungal and algal protection",
    ],
    accent: "#7C3AED",
    bg: "from-purple-900/60 to-purple-800/20",
    badge: "bg-purple-600/20 text-purple-400 border-purple-500/30",
    image: img1,
  },
  {
    id: 2,
    name: "Weathercoat Long Life 7",
    category: "Exterior",
    series: "Weathercoat",
    warranty: "7 Years",
    finish: "High Sheen",
    coverage: "70–75 sq.ft./lt./2 coats",
    dirtRepellence: "Excellent",
    waterRepellence: "Excellent",
    antiFungal: "Excellent",
    description:
      "Designed to withstand extreme weather conditions. Its unique Silicon Technology imparts visible water repellency and its polymer composition provides superior dust repellence.",
    usp: [
      "Added Silicon helps repel rain water",
      "High Sheen Finish",
      "High Dust Repellence",
    ],
    accent: "#BE185D",
    bg: "from-pink-900/60 to-pink-800/20",
    badge: "bg-pink-600/20 text-pink-400 border-pink-500/30",
    image: img2,
  },
  {
    id: 3,
    name: "Weathercoat Long Life Flexo",
    category: "Exterior",
    series: "Weathercoat",
    warranty: "8 Years",
    finish: "High Sheen",
    coverage: "70–75 sq.ft./lt./2 coats",
    dirtRepellence: "Excellent",
    waterRepellence: "Excellent",
    antiFungal: "Excellent",
    description:
      "A high-performance exterior paint with Elastomeric property to cover hairline cracks. Silicon additives protect from heavy rains and provide superior dust pick-up resistance.",
    usp: [
      "Elastomeric Film covers Hairline Cracks",
      "Superior Dust Pick-Up Resistance",
      "Enhanced with Silicon",
    ],
    accent: "#B91C1C",
    bg: "from-red-900/60 to-red-800/20",
    badge: "bg-red-600/20 text-red-400 border-red-500/30",
    image: img3,
  },
  {
    id: 4,
    name: "Weathercoat Glow",
    category: "Exterior",
    series: "Weathercoat",
    warranty: "5 Years",
    finish: "Mid Sheen",
    coverage: "60 sq.ft./lt./2 coats",
    dirtRepellence: "High",
    waterRepellence: "Medium",
    antiFungal: "Very High",
    description:
      "100% acrylic exterior emulsion that withstands diverse weather. Its Stay Clean technology washes off dust with every rain and prevents algal and fungal growth.",
    usp: ["Stay Clean Formula", "Rich Sheen finish", "All Weather Protection"],
    accent: "#C2410C",
    bg: "from-orange-900/60 to-orange-800/20",
    badge: "bg-orange-600/20 text-orange-400 border-orange-500/30",
    image: img4,
  },
  {
    id: 5,
    name: "Walmasta Glow",
    category: "Exterior",
    series: "Walmasta",
    warranty: "3 Years",
    finish: "Soft Sheen",
    coverage: "—",
    dirtRepellence: "—",
    waterRepellence: "—",
    antiFungal: "—",
    description:
      "Acrylic exterior emulsion with sheen finish and superior durability compared to regular emulsions. Comes with a 3-year performance warranty.",
    usp: [
      "Soft Sheen Finish",
      "Superior Whiteness and Hiding",
      "Better durability than regular emulsion",
    ],
    accent: "#EA580C",
    bg: "from-orange-900/60 to-amber-800/20",
    badge: "bg-amber-600/20 text-amber-400 border-amber-500/30",
    image: img5,
  },
  {
    id: 6,
    name: "Walmasta",
    category: "Exterior",
    series: "Walmasta",
    warranty: "3 Years",
    finish: "Matt",
    coverage: "—",
    dirtRepellence: "—",
    waterRepellence: "—",
    antiFungal: "Yes",
    description:
      "Water-based acrylic exterior emulsion suitable for dry and less humid climatic conditions. Provides protection against algal and fungal growth.",
    usp: [
      "Excellent Matt Finish Emulsion",
      "Protection against Algal and Fungal Growth",
      "3 Years Warranty",
    ],
    accent: "#D97706",
    bg: "from-yellow-900/60 to-yellow-800/20",
    badge: "bg-yellow-600/20 text-yellow-400 border-yellow-500/30",
    image: img6,
  },
  {
    id: 7,
    name: "Walmasta Lite",
    category: "Exterior",
    series: "Walmasta",
    warranty: "2 Years",
    finish: "Matt",
    coverage: "—",
    dirtRepellence: "—",
    waterRepellence: "—",
    antiFungal: "—",
    description:
      "Economically priced exterior paint with matt finish. Resistant to chalking, flaking, fading and algae. Most economical upgrade from cement paint.",
    usp: [
      "Most Economical Exterior Emulsion",
      "Ideal upgrade from Cement Paints",
      "Resistant to chalking, flaking & fading",
    ],
    accent: "#DC2626",
    bg: "from-red-900/60 to-red-700/20",
    badge: "bg-red-600/20 text-red-300 border-red-500/30",
    image: img7,
  },

  // ── INTERIOR ──────────────────────────────────────────────
  {
    id: 8,
    name: "Silk Glamor Dazzle",
    category: "Interior",
    series: "Silk Glamor",
    warranty: "—",
    finish: "Super Sheen",
    coverage: "—",
    dirtRepellence: "—",
    waterRepellence: "High",
    antiFungal: "—",
    description:
      "Super Sheen Interior paint delivering long-lasting glamorous walls with a smooth high-sheen finish and superior washability.",
    usp: [
      "Super Sheen Interior Paint",
      "Long-lasting Glamorous walls",
      "Smooth Finish",
      "Highly Washable",
    ],
    accent: "#F59E0B",
    bg: "from-yellow-900/60 to-yellow-700/20",
    badge: "bg-yellow-600/20 text-yellow-400 border-yellow-500/30",
    image: img8,
  },
  {
    id: 9,
    name: "Silk Glamor Hi Sheen",
    category: "Interior",
    series: "Silk Glamor",
    warranty: "—",
    finish: "Hi Sheen",
    coverage: "—",
    dirtRepellence: "—",
    waterRepellence: "High",
    antiFungal: "—",
    description:
      "Luxurious & long-lasting Interior Emulsion with hi-sheen look that adds glow to your walls. Highly washable for easy maintenance.",
    usp: [
      "Luxurious & Long-lasting",
      "Hi-sheen look",
      "Highly Washable",
      "Adds glow to your walls",
    ],
    accent: "#6D28D9",
    bg: "from-violet-900/60 to-violet-700/20",
    badge: "bg-violet-600/20 text-violet-400 border-violet-500/30",
    image: img9,
  },
  {
    id: 10,
    name: "Silk Glamor Soft Sheen",
    category: "Interior",
    series: "Silk Glamor",
    warranty: "—",
    finish: "Soft Sheen",
    coverage: "—",
    dirtRepellence: "—",
    waterRepellence: "High",
    antiFungal: "—",
    description:
      "Luxurious Interior Emulsion with soft sheen look. Long-lasting glamorous wall finish that is highly washable.",
    usp: [
      "Luxurious Interior Emulsion",
      "Soft Sheen Look",
      "Highly Washable",
      "Long-lasting & Glamorous wall finish",
    ],
    accent: "#D97706",
    bg: "from-amber-900/60 to-amber-700/20",
    badge: "bg-amber-600/20 text-amber-400 border-amber-500/30",
    image: img10,
  },
  {
    id: 11,
    name: "Silk Glamor Matt",
    category: "Interior",
    series: "Silk Glamor",
    warranty: "—",
    finish: "Elegant Matt",
    coverage: "—",
    dirtRepellence: "—",
    waterRepellence: "High",
    antiFungal: "—",
    description:
      "Elegant matt finish Luxurious Interior Emulsion. Highly washable with long-lasting glamorous wall result.",
    usp: [
      "Elegant Matt Finish",
      "Luxurious Interior Emulsion",
      "Highly Washable",
      "Long-lasting Glamorous walls",
    ],
    accent: "#9333EA",
    bg: "from-purple-900/60 to-purple-700/20",
    badge: "bg-purple-600/20 text-purple-400 border-purple-500/30",
    image: img11,
  },
  {
    id: 12,
    name: "Rangoli Rich Matt",
    category: "Interior",
    series: "Rangoli",
    warranty: "—",
    finish: "Matt",
    coverage: "—",
    dirtRepellence: "—",
    waterRepellence: "—",
    antiFungal: "Yes",
    description:
      "Best in class smooth finish interior paint with anti-fungal properties for a clean, healthy living space.",
    usp: ["Matt Finish", "Best In Class Smooth Finish", "Anti Fungal"],
    accent: "#BE185D",
    bg: "from-fuchsia-900/60 to-fuchsia-700/20",
    badge: "bg-fuchsia-600/20 text-fuchsia-400 border-fuchsia-500/30",
    image: img12,
  },
  {
    id: 13,
    name: "Rangoli Total Care",
    category: "Interior",
    series: "Rangoli",
    warranty: "—",
    finish: "Soft Sheen",
    coverage: "—",
    dirtRepellence: "—",
    waterRepellence: "—",
    antiFungal: "Yes",
    description:
      "Soft sheen smooth finish interior paint with anti-fungal protection for a healthier indoor environment.",
    usp: ["Soft Sheen", "Smooth Finish", "Anti Fungal"],
    accent: "#0D9488",
    bg: "from-teal-900/60 to-teal-700/20",
    badge: "bg-teal-600/20 text-teal-400 border-teal-500/30",
    image: img13,
  },
  {
    id: 14,
    name: "Bison Emulsion",
    category: "Interior",
    series: "Bison",
    warranty: "—",
    finish: "Matt",
    coverage: "—",
    dirtRepellence: "—",
    waterRepellence: "—",
    antiFungal: "—",
    description:
      "Economical interior emulsion offering better coverage and value for money with a clean matt finish.",
    usp: ["Matt Finish", "Better Coverage", "Value For Money"],
    accent: "#EA580C",
    bg: "from-orange-900/60 to-orange-700/20",
    badge: "bg-orange-600/20 text-orange-400 border-orange-500/30",
    image: img14,
  },
  
];

const CATEGORIES = ["All", "Interior", "Exterior"];

function buildWhatsappLink(product) {
  const text = `Hello AJ Traders, I'm interested in ${product.name}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function ProductCard({ product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-zinc-800 hover:border-zinc-600 bg-zinc-900 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
    >
      {/* Accent bar */}
      <div className="h-1" style={{ background: product.accent }} />

      {/* Product image */}
      <div className="w-full aspect-square bg-white">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-3"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400 text-sm">
            Image coming soon
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-3 grow">
        <h3 className="text-white font-bold text-base leading-tight text-center">
          {product.name}
        </h3>

        <a
          href={buildWhatsappLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block w-full text-center text-sm font-bold py-3 rounded-xl text-white transition-colors"
          style={{ background: product.accent }}
        >
          Buy This Product
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.series.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="bg-zinc-950 min-h-screen text-white">
      {/* ─── HEADER ─── */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 font-semibold uppercase tracking-widest text-sm mb-3"
          >
            Product Catalogue
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black leading-none mb-4"
          >
            Berger{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-yellow-400">
              Paints
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-lg mx-auto"
          >
            {products.length} products across interior and exterior ranges. Click any product for full details.
          </motion.p>
        </div>
      </section>

      {/* ─── FILTERS ─── */}
      <section className="sticky top-0 z-30 bg-zinc-950/95 backdrop-blur border-b border-zinc-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Category tabs */}
          <div className="flex gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-all ${
                  activeCategory === cat
                    ? "bg-red-600 border-red-600 text-white"
                    : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 w-full sm:w-56"
          />
        </div>
      </section>

      {/* ─── GRID ─── */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-zinc-600 text-sm mb-6">
            Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence>
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-zinc-600">
              <div className="text-5xl mb-4">🔍</div>
              <p>No products found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}