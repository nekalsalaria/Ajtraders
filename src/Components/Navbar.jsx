import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
const NAV_LINKS = [
  { label: "Home",      href: "#home",      icon: "🏠" },
  { label: "About",     href: "#about",     icon: "ℹ️" },
  { label: "Products",  href: "#products",  icon: "🎨" },
  { label: "Customers", href: "#customers", icon: "👥" },
  { label: "Contact",   href: "#contact",   icon: "📞" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]           = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef(null);

  /* ── scroll → glass effect ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── IntersectionObserver → active link ── */
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  /* ── smooth scroll ── */
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ══════════ MAIN NAV ══════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 9999,
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          background: scrolled ? "rgba(9,9,11,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(63,63,70,0.6)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 20px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >

          {/* ── LOGO ── */}
         <a
  href="#home"
  onClick={(e) => handleNavClick(e, "#home")}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    flexShrink: 0,
  }}
>
  <div
    style={{
      width: "38px",
      height: "38px",
      borderRadius: "10px",
      background: "linear-gradient(135deg,#dc2626,#991b1b)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(220,38,38,0.35)",
      flexShrink: 0,
      overflow: "hidden",
    }}
  >
    <img
      src={logo}
      alt="AJ Traders Logo"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    />
  </div>

  <div style={{ lineHeight: 1 }}>
    <div
      style={{
        fontSize: "17px",
        fontWeight: 900,
        letterSpacing: "-0.5px",
        color: "white",
      }}
    >
      AJ{" "}
      <span
        style={{
          background: "linear-gradient(90deg,#ef4444,#f59e0b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        TRADERS
      </span>
    </div>

    <div
      style={{
        fontSize: "10px",
        color: "#71717a",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginTop: "2px",
      }}
    >
      Berger Paint Dealer
    </div>
  </div>
</a>
          {/* ── DESKTOP LINKS ── */}
          <ul className="nav-desktop-links" style={{ display: "flex", alignItems: "center", gap: "2px", listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    style={{
                      display: "block",
                      padding: "6px 14px",
                      borderRadius: "10px",
                      fontSize: "14px",
                      fontWeight: 600,
                      textDecoration: "none",
                      color: isActive ? "white" : "#a1a1aa",
                      background: isActive ? "rgba(39,39,42,0.9)" : "transparent",
                      border: isActive ? "1px solid rgba(63,63,70,0.8)" : "1px solid transparent",
                      transition: "color 0.2s, background 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "white"; }}
                    onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "#a1a1aa"; }}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── RIGHT: CTA + Hamburger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            {/* Call Us — desktop */}
            <a
              href="tel:+91 788 960 7109"
              className="nav-cta-btn"
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                background: "#dc2626", color: "white",
                fontSize: "13px", fontWeight: 700,
                padding: "8px 16px", borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 3px 10px rgba(220,38,38,0.3)",
                transition: "background 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#b91c1c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#dc2626")}
            >
              📞 Call Us
            </a>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="nav-hamburger"
              style={{
                display: "none",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "38px", height: "38px",
                background: "rgba(39,39,42,0.9)",
                border: "1px solid rgba(63,63,70,0.8)",
                borderRadius: "10px",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {[0,1,2].map((i) => (
                <span key={i} style={{
                  display: "block",
                  width: "18px", height: "2px",
                  background: "white",
                  borderRadius: "2px",
                  transition: "all 0.3s",
                  transform:
                    menuOpen && i === 0 ? "rotate(45deg) translate(5px,5px)" :
                    menuOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════ MOBILE DRAWER ══════════ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 9999,
                width: "280px", background: "#09090b",
                borderLeft: "1px solid rgba(63,63,70,0.6)",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Header */}
              <div style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", borderBottom: "1px solid rgba(63,63,70,0.6)" }}>
                <div style={{ fontSize: "16px", fontWeight: 900, color: "white" }}>
                  AJ <span style={{ background: "linear-gradient(90deg,#ef4444,#f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>TRADERS</span>
                </div>
                <button onClick={() => setMenuOpen(false)} style={{ width: "32px", height: "32px", background: "rgba(39,39,42,0.9)", border: "1px solid rgba(63,63,70,0.8)", borderRadius: "8px", color: "#a1a1aa", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
              </div>

              {/* Links */}
              <nav style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                {NAV_LINKS.map(({ label, href, icon }, i) => {
                  const isActive = activeSection === href.slice(1);
                  return (
                    <motion.a
                      key={href}
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      style={{
                        display: "flex", alignItems: "center", gap: "12px",
                        padding: "12px 16px", borderRadius: "12px",
                        textDecoration: "none", fontSize: "14px", fontWeight: 600,
                        color: isActive ? "white" : "#a1a1aa",
                        background: isActive ? "rgba(39,39,42,0.9)" : "transparent",
                        border: isActive ? "1px solid rgba(63,63,70,0.8)" : "1px solid transparent",
                      }}
                    >
                      <span style={{ fontSize: "18px" }}>{icon}</span>
                      {label}
                      {isActive && <span style={{ marginLeft: "auto", width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444" }} />}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Footer */}
              <div style={{ padding: "16px 16px 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href="tel:+917889607109" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#dc2626", color: "white", fontWeight: 700, padding: "12px", borderRadius: "12px", textDecoration: "none", fontSize: "14px" }}>📞 Call Now</a>
                <a href="https://wa.me/917889607109" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#16a34a", color: "white", fontWeight: 700, padding: "12px", borderRadius: "12px", textDecoration: "none", fontSize: "14px" }}>💬 WhatsApp</a>
                <p style={{ color: "#52525b", fontSize: "11px", textAlign: "center", margin: 0 }}>Chandwan, Chadwal · Kathua, J&K</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ══════════ RESPONSIVE CSS ══════════ */}
      <style>{`
        @media (min-width: 768px) {
          .nav-desktop-links { display: flex !important; }
          .nav-cta-btn       { display: flex !important; }
          .nav-hamburger     { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta-btn       { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }
      `}</style>
    </>
  );
}