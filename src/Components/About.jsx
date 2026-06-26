import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "Founded", title: "AJ Traders Est.", desc: "Started as a small local paint shop serving Chadwal village and nearby areas in Kathua district, J&K." },
  { year: "Berger", title: "Authorised Dealer", desc: "Became an official authorised dealer for Berger Paints — one of India's most trusted paint brands with 100+ years of legacy." },
  { year: "Today", title: "Full Product Range", desc: "Now stocking Berger's complete interior and exterior range, from economy to premium luxury emulsions." },
];

export default function About() {
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: { trigger: lineRef.current, start: "top 80%" },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <main className="bg-zinc-950 text-white min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500 opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-red-500 font-semibold uppercase tracking-widest text-sm mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-black leading-none mb-6"
          >
            We Are{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-yellow-400">
              AJ Traders
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl leading-relaxed"
          >
            Your neighbourhood Berger Paint dealer in Chandwan, Chadwal — Kathua district, J&K. We help homeowners, builders, and contractors choose the right paint for every surface, every budget, and every weather condition.
          </motion.p>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="bg-zinc-900 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-red-500 font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
            <h2 className="text-4xl font-black text-white mb-5 leading-tight">
              Colour Your Walls. <br />
              <span className="text-yellow-400">Protect Your Home.</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              AJ Traders is the go-to paint shop for residents and contractors across the Chadwal–Kathua belt. We supply the complete Berger Paints portfolio — from everyday interior emulsions to high-performance 10-year exterior coatings.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Beyond selling paint, we guide our customers. Whether you are painting a single room or an entire building exterior, we help you pick the right product, calculate quantities, and get the best finish for your money.
            </p>
          </motion.div>

          {/* Feature grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: "🏠", label: "Interior Paints" },
              { icon: "🏗️", label: "Exterior Coatings" },
              { icon: "🧪", label: "Anti-Fungal Range" },
              { icon: "✨", label: "Luxury Emulsions" },
              { icon: "🌧️", label: "Weatherproof Series" },
              { icon: "💰", label: "Economy Options" },
            ].map((f) => (
              <div
                key={f.label}
                className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex items-center gap-3"
              >
                <span className="text-2xl">{f.icon}</span>
                <span className="text-white font-semibold text-sm">{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── BERGER BADGE ─── */}
      <section className="py-16 px-6 bg-red-700">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-5xl mb-4">🎖️</div>
          <h2 className="text-3xl font-black text-white mb-3">Authorised Berger Paints Dealer</h2>
          <p className="text-red-100 leading-relaxed">
            Berger Paints has been trusted by Indian households for over 100 years. As an authorised dealer, we guarantee genuine products, manufacturer warranty, and competitive pricing. You buy direct — no fakes, no inflated margins.
          </p>
        </motion.div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-red-500 font-semibold uppercase tracking-widest text-sm mb-2">Our Journey</p>
            <h2 className="text-4xl font-black text-white">From Neighbours to Trusted Dealers</h2>
          </motion.div>

          <div className="relative">
            {/* Animated vertical line */}
            <div
              ref={lineRef}
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-red-500 via-yellow-400 to-red-500 origin-top"
            />

            <div className="space-y-10 pl-16">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-red-500 border-2 border-zinc-950" />
                  <span className="inline-block text-xs font-bold text-red-400 uppercase tracking-widest mb-1">{m.year}</span>
                  <h3 className="text-white font-black text-xl mb-1">{m.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="bg-zinc-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-yellow-500 font-semibold uppercase tracking-widest text-sm mb-2">Our Values</p>
            <h2 className="text-4xl font-black text-white">Built on Trust</h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Honest Advice", icon: "🤝", desc: "We recommend what's genuinely right for your walls — not what costs the most. Your project's success is our reputation." },
              { title: "Genuine Products", icon: "✅", desc: "Authorised dealer status means every can of Berger paint is genuine, warranty-backed, and properly stored." },
              { title: "Local Commitment", icon: "📍", desc: "Rooted in Chadwal and Kathua, we serve our community first — with fair prices and real after-sales support." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
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
          <h2 className="text-3xl font-black text-white mb-4">Ready to start your project?</h2>
          <p className="text-zinc-400 mb-8">Visit us at Chandwan, Chadwal or call us — we are happy to help.</p>
          <a
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-3 rounded-xl transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>
    </main>
  );
}