import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Replace these src values with your actual customer image imports ──
// e.g. import img1 from "../assets/customers/customer1.jpg";
// Then replace the src fields below with: img1, img2, etc.

const customerImages = [
  { id: 1, src: null, name: "Ramesh Kumar", location: "Chadwal", paint: "Weathercoat Long Life 10", review: "Bahut achha paint hai, 2 saal ho gaye — bilkul naya jaisa lag raha hai ghar." },
  { id: 2, src: null, name: "Suresh Sharma", location: "Kathua", paint: "Silk Glamor Dazzle", review: "Interior ke liye best choice. Walls itni shiny hain ki ghar chak chak karta hai!" },
  { id: 3, src: null, name: "Priya Devi", location: "Chandwan", paint: "Easy Clean Fresh", review: "Bachon ke room mein lagaya — anti-bacterial feature se mann ko sukoon mila." },
  { id: 4, src: null, name: "Mohan Lal", location: "Billawar", paint: "Weathercoat Glow", review: "Barish mein bhi rang nahi uthra. AJ Traders ne sahi suggest kiya tha." },
  { id: 5, src: null, name: "Anjali Singh", location: "Chadwal", paint: "Rangoli Rich Matt", review: "Matt finish waali dikhti hai classic — drawing room mein perfect lag rahi hai." },
  { id: 6, src: null, name: "Vikram Thakur", location: "Kathua", paint: "Walmasta Lite", review: "Budget mein best option. Cement paint se kaafi better quality hai." },
  { id: 7, src: null, name: "Deepak Verma", location: "Chandwan", paint: "Bison Emulsion Glow", review: "Value for money — coverage acha hai aur sheen bhi achhi aati hai." },
  { id: 8, src: null, name: "Sunita Rani", location: "Chadwal", paint: "Silk Glamor Matt", review: "Elegant matt finish ne bedroom ko luxury feel de diya. Highly recommended!" },
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "10+", label: "Villages Served" },
  { value: "5★", label: "Avg. Rating" },
  { value: "3+", label: "Years of Service" },
];

// Placeholder avatar when no image is provided
function Avatar({ name, size = "lg" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    "from-red-600 to-orange-500",
    "from-purple-600 to-pink-500",
    "from-blue-600 to-cyan-500",
    "from-yellow-500 to-amber-400",
    "from-green-600 to-teal-500",
    "from-fuchsia-600 to-rose-500",
  ];
  const colorIdx = name.charCodeAt(0) % colors.length;

  const sizeClasses = size === "lg" ? "w-20 h-20 text-2xl" : "w-12 h-12 text-base";

  return (
    <div
      className={`${sizeClasses} rounded-full bg-gradient-to-br ${colors[colorIdx]} flex items-center justify-center font-black text-white shrink-0`}
    >
      {initials}
    </div>
  );
}

// Lightbox for actual images
function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-lg w-full bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-700"
        >
          {image.src ? (
            <img src={image.src} alt={image.name} className="w-full object-cover max-h-80" />
          ) : (
            <div className="h-56 flex items-center justify-center bg-zinc-800">
              <Avatar name={image.name} size="lg" />
            </div>
          )}

          <div className="p-6">
            <div className="flex items-center gap-1 mb-3">
              {[1,2,3,4,5].map(s => (
                <span key={s} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4 italic">"{image.review}"</p>
            <div className="flex items-center gap-3">
              <Avatar name={image.name} size="sm" />
              <div>
                <div className="text-white font-bold">{image.name}</div>
                <div className="text-zinc-500 text-xs">{image.location} · {image.paint}</div>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center text-xl leading-none hover:bg-black transition-colors"
          >
            ×
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Customers() {
  const [selected, setSelected] = useState(null);
  const statsRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    statsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          delay: i * 0.1,
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <main className="bg-zinc-950 min-h-screen text-white">
      {/* ─── HERO ─── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 opacity-10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600 opacity-10 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
        </div>

        <div ref={headingRef} className="max-w-3xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-red-500 font-semibold uppercase tracking-widest text-sm mb-3"
          >
            Our Customers
          </motion.p>
          <h1 className="text-5xl sm:text-6xl font-black leading-none mb-5">
            Walls They{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
              Love
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
            From Chadwal to Kathua — real customers, real homes, real results. Here's what our neighbours say about their experience with AJ Traders.
          </p>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-red-700 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={s.label} ref={(el) => (statsRef.current[i] = el)}>
              <div className="text-4xl font-black text-yellow-300">{s.value}</div>
              <div className="text-red-100 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PHOTO GALLERY GRID ─── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-yellow-500 font-semibold uppercase tracking-widest text-sm mb-2">
              Customer Gallery
            </p>
            <h2 className="text-4xl font-black text-white">
              Happy Homes, Happy Customers
            </h2>
            <p className="text-zinc-500 text-sm mt-2">
              Click any card to read the full review
            </p>
          </motion.div>

          {/* 
            TO ADD YOUR REAL CUSTOMER IMAGES:
            1. Place images in src/assets/customers/
            2. Import them at the top of this file
            3. Replace src: null with src: yourImportedImage
            The cards below will automatically show them.
          */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {customerImages.map((customer, i) => (
              <motion.div
                key={customer.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                onClick={() => setSelected(customer)}
                className="group cursor-pointer bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image area */}
                <div className="relative h-48 bg-zinc-800 flex items-center justify-center overflow-hidden">
                  {customer.src ? (
                    <img
                      src={customer.src}
                      alt={customer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
                      <Avatar name={customer.name} size="lg" />
                      <span className="text-zinc-500 text-xs">Add customer photo</span>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold">View Review →</span>
                  </div>

                  {/* Stars badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5 text-yellow-400 text-xs font-bold flex items-center gap-1">
                    ★ 5.0
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div>
                      <div className="text-white font-bold text-sm">{customer.name}</div>
                      <div className="text-zinc-500 text-xs">{customer.location}</div>
                    </div>
                  </div>
                  <div className="inline-block text-xs bg-red-600/20 text-red-400 border border-red-500/30 rounded-full px-2 py-0.5 mb-2">
                    {customer.paint}
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2 italic">
                    "{customer.review}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add more photos CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-zinc-900 border border-zinc-700 rounded-2xl px-8 py-6 max-w-md">
              <div className="text-4xl mb-3">📸</div>
              <h3 className="text-white font-bold text-lg mb-2">Share Your Experience</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Painted your home with our products? We'd love to feature your walls here!
              </p>
              <a
                href="/contact"
                className="inline-block bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                Contact Us to Share
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS MARQUEE STRIP ─── */}
      <section className="py-12 bg-zinc-900 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-yellow-500 font-semibold uppercase tracking-widest text-sm">
            What They Say
          </p>
        </motion.div>

        {/* Scrolling quotes */}
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 w-max"
          >
            {[...customerImages, ...customerImages].map((c, i) => (
              <div
                key={i}
                className="bg-zinc-800 rounded-2xl p-5 w-72 shrink-0 border border-zinc-700"
              >
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed italic mb-4 line-clamp-3">
                  "{c.review}"
                </p>
                <div className="flex items-center gap-2">
                  <Avatar name={c.name} size="sm" />
                  <div>
                    <div className="text-white font-semibold text-xs">{c.name}</div>
                    <div className="text-zinc-500 text-xs">{c.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-white mb-3">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-zinc-400 mb-8">
            Visit AJ Traders at Chandwan, Chadwal and let us help you find the perfect Berger paint.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/products"
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Browse Products
            </a>
            <a
              href="/contact"
              className="border border-zinc-600 hover:border-yellow-400 text-zinc-300 hover:text-yellow-400 font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      {selected && <Lightbox image={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}