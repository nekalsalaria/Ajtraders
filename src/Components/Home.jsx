import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import aj1 from "../assets/aj1.png";
import aj2 from "../assets/aj2.png";
import aj3 from "../assets/aj3.png";
import aj4 from "../assets/aj4.png";

gsap.registerPlugin(ScrollTrigger);

// ── Slideshow images ──
const BG_IMAGES = [aj1, aj2, aj3, aj4];


export default function Home() {
  const heroRef  = useRef(null);
  const taglineRef = useRef(null);
  const cardsRef   = useRef([]);

  // ── Slideshow state ──
  const [current, setCurrent] = useState(0);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BG_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // ── GSAP animations ──
  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(taglineRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(card,
        { opacity: 0, y: 80 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
          delay: (i % 2) * 0.15,
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-zinc-950 text-white min-h-screen">

      {/* ══════════════════════════════════════
          HERO — full-screen slideshow
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center px-6 py-20">

        {/* ── SLIDESHOW BACKGROUND ── */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${BG_IMAGES[current]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </AnimatePresence>

          {/* Multi-layer dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>

        {/* ── SLIDESHOW DOTS ── */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {BG_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width:  i === current ? "24px" : "8px",
                height: "8px",
                background: i === current ? "#ef4444" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>

        {/* ── SLIDE COUNTER (top-right) ── */}
        <div className="absolute top-24 right-6 z-20 text-xs text-white/40 font-mono">
          {String(current + 1).padStart(2,"0")} / {String(BG_IMAGES.length).padStart(2,"0")}
        </div>

        {/* ── HERO CONTENT ── */}
        <div ref={heroRef} className="relative z-10 text-center max-w-4xl mx-auto">

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm"
          >
            ✦ Authorised Berger Paint Dealer ✦
          </motion.span>

          {/* Shop name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight leading-none mb-4"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
          >
            <span className="text-white">AJ </span>
            <span
              style={{
                background: "linear-gradient(90deg,#ef4444,#f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              TRADERS
            </span>
          </motion.h1>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mb-6 h-0.5 w-32 origin-center"
            style={{ background: "linear-gradient(90deg,#ef4444,#f59e0b)" }}
          />

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-3 leading-relaxed font-medium"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            Chandwan, Chadwal · Kathua, J&K
          </p>
          <p className="text-white/50 text-base max-w-lg mx-auto mb-10">
            Your trusted source for premium Berger paints. Colour every wall with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#products"
              onClick={(e) => handleNavClick(e, "#products")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-red-900/40"
            >
              🎨 Explore Products
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
            >
              📞 Contact Us
            </motion.a>
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/30 text-xs"
        >
          <span>scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <section className="bg-red-700 py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: "Products Available", value: "20+" },
            { label: "Max Warranty",        value: "10 Yrs" },
            { label: "Years of Berger Trust",value: "100+" },
            { label: "Happy Customers",     value: "500+" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-yellow-300">{s.value}</div>
              <div className="text-red-100 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY US
      ══════════════════════════════════════ */}
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
              { icon: "🎨", title: "Full Berger Range",  desc: "Interior, exterior, specialty — we stock it all so you don't have to search elsewhere." },
              { icon: "🤝", title: "Expert Guidance",    desc: "Not sure which paint suits your wall? Our team helps you pick the right product every time." },
              { icon: "📍", title: "Local & Reliable",   desc: "Serving Chadwal and the Kathua district — fast delivery, no middleman markup." },
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