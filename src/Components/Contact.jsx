import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── SHOP DETAILS — edit here if anything changes ──
const SHOP = {
  name: "AJ Traders",
  tagline: "Authorised Berger Paints Dealer",
  phone1: "+91 78896 07109",
  phone2: "",
  email: "Rajputakash6043@gmail.com",
  address: "AJ TRADERS, Near Railway Pul, Chandwan, Chadwal",
  state: "Jammu & Kashmir - 184144",
  instagram: "https://www.instagram.com/aj_traders2200/",
  mapLink: "https://maps.app.goo.gl/cL4jzTrCaiF3umHU9",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107709.03485204163!2d75.19215884335938!3d32.4751701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c13084dedc0e3%3A0xabd349c66f4190ea!2sAJ%20TRADERS!5e0!3m2!1sen!2sin!4v1782712675163!5m2!1sen!2sin",
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
  ],
};

const contactCards = [
  {
    icon: "📞",
    title: "Call Us",
    lines: [SHOP.phone1],
    action: { label: "Call Now", href: `tel:${SHOP.phone1.replace(/\s/g, "")}` },
    accent: "#DC2626",
  },
  {
    icon: "📧",
    title: "Email Us",
    lines: [SHOP.email, "We reply within 24 hours"],
    action: { label: "Send Email", href: `mailto:${SHOP.email}` },
    accent: "#2563EB",
  },
  {
    icon: "📍",
    title: "Visit Us",
    lines: [SHOP.address, SHOP.state],
    action: {
      label: "Get Directions",
      href: SHOP.mapLink,
    },
    accent: "#D97706",
  },
];

function ContactCard({ card, index }) {
  return (
    <motion.a
      href={card.action.href}
      target={card.action.href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group block bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-6 transition-all duration-300"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: card.accent + "22", border: `1px solid ${card.accent}44` }}
      >
        {card.icon}
      </div>
      <h3 className="text-white font-black text-xl mb-3">{card.title}</h3>
      {card.lines.map((line, i) => (
        <p key={i} className={i === 0 ? "text-white font-semibold" : "text-zinc-500 text-sm mt-1"}>
          {line}
        </p>
      ))}
      <div
        className="mt-5 inline-flex items-center gap-2 text-sm font-bold rounded-xl px-4 py-2 transition-colors"
        style={{ background: card.accent + "18", color: card.accent, border: `1px solid ${card.accent}33` }}
      >
        {card.action.label}
        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </div>
    </motion.a>
  );
}

// Simple enquiry form (frontend-only — connect to EmailJS or Formspree)
function EnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
const handleChange = (e) => {
  setForm((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};
 const handleSubmit = (e) => {
  e.preventDefault();

  const text = `Hello AJ Traders,

Name: ${form.name}
Phone: ${form.phone}

Message:
${form.message}`;

  window.open(
    `https://wa.me/917889607109?text=${encodeURIComponent(text)}`,
    "_blank"
  );

  setForm({
    name: "",
    phone: "",
    message: "",
  });
};


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider block mb-1.5">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Ramesh Kumar"
          className="w-full bg-zinc-800 border border-zinc-700 focus:border-red-500 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 outline-none transition-colors"
        />
      </div>
      <div>
        <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider block mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 98765 XXXXX"
          className="w-full bg-zinc-800 border border-zinc-700 focus:border-red-500 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 outline-none transition-colors"
        />
      </div>
      <div>
        <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider block mb-1.5">
          Your Message
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Kaun sa paint chahiye? Kitne square feet? Koi sawaal?"
          className="w-full bg-zinc-800 border border-zinc-700 focus:border-red-500 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 outline-none transition-colors resize-none"
        />
      </div>
      <motion.button
        type="submit"
        disabled={false}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full bg-red-600 hover:bg-red-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
      >
      </motion.button>
      <p className="text-zinc-600 text-xs text-center">
        Ya seedha WhatsApp karein — hum jaldi reply karte hain 😊
      </p>
    </form>
  );
}

export default function Contact() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="bg-zinc-950 min-h-screen text-white">
      {/* ─── HERO ─── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-500 opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        <div ref={heroRef} className="max-w-3xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-red-500 font-semibold uppercase tracking-widest text-sm mb-3"
          >
            Get In Touch
          </motion.p>
          <h1 className="text-5xl sm:text-6xl font-black leading-none mb-5">
            Talk to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
              AJ Traders
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
            Koi bhi sawaal ho — paint selection, quantity estimate, ya delivery — hum yahaan hain. Chandwan, Chadwal mein milein ya call karein.
          </p>
        </div>
      </section>

      {/* ─── CONTACT CARDS ─── */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contactCards.map((card, i) => (
            <ContactCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </section>

      {/* ─── MAP + FORM ─── */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-black text-white mb-5">Find Us Here</h2>

            {/* Google Map embed — replace mapSrc with real embed URL from maps.google.com */}
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video">
              <iframe
                src={SHOP.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AJ Traders Location"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>

            {/* Address card */}
            <div className="mt-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <div className="flex gap-4 items-start">
                <div className="text-3xl">📍</div>
                <div>
                  <div className="text-white font-black text-lg">{SHOP.name}</div>
                  <div className="text-zinc-400 text-sm mt-1">{SHOP.address}</div>
                  <div className="text-zinc-500 text-sm">{SHOP.state}</div>
                  <a
                    href={`https://maps.app.goo.gl/cL4jzTrCaiF3umHU9`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-red-400 hover:text-red-300 text-sm font-semibold underline underline-offset-2"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
           <section className="bg-zinc-900 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-yellow-500 font-semibold uppercase tracking-widest text-sm mb-2">
              Store Hours
            </p>
            <h2 className="text-3xl font-black text-white mb-8">When to Visit Us</h2>
            <div className="inline-flex flex-col gap-3 text-left">
              {SHOP.hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between gap-12 bg-zinc-800 rounded-xl px-6 py-3 border border-zinc-700"
                >
                  <span className="text-zinc-300 font-medium">{h.day}</span>
                  <span className="text-white font-black">{h.time}</span>
                </div>
              ))}
            </div>
            <p className="text-zinc-600 text-sm mt-6">
              Holidays pe timing alag ho sakti hai — call karke confirm karlein.
            </p>
          </motion.div>
        </div>
      </section>
        </div>
      </section>


      {/* ─── WHATSAPP FLOAT BUTTON ─── */}
      <motion.a
        href={`https://wa.me/91${SHOP.phone1.replace(/\D/g, "").slice(-10)}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl transition-colors"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.103 1.509 5.833L.057 23.57a.75.75 0 00.921.921l5.737-1.452A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.934 0-3.742-.52-5.29-1.427l-.38-.225-3.936.996.997-3.936-.225-.38A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </motion.a>
    </main>
  );
}