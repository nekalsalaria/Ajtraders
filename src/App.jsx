import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Customer from "./Components/Customer";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="bg-zinc-950">
      {/* Sticky navbar — always on top */}
      <Navbar />

      {/* Each section gets an id that matches the navbar href */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="customers">
        <Customer />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-8 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-white font-black text-xl mb-1">
            AJ{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-yellow-400">
              TRADERS
            </span>
          </div>
          <p className="text-zinc-500 text-sm mb-1">
            Authorised Berger Paints Dealer
          </p>
          <p className="text-zinc-600 text-xs mb-5">
            Chandwan, Chadwal, Kathua — Jammu & Kashmir
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-zinc-500 mb-6">
            {["Home", "About", "Products", "Customers", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${label.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="border-t border-zinc-800 pt-5 text-zinc-700 text-xs">
            © {new Date().getFullYear()} AJ Traders · All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;