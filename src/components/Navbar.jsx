import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import digitoslogo from "../assets/RGB-Dark.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Career", path: "/career" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-2xl bg-white/90 shadow-xl shadow-black/5 border-b border-black/10 transition-all duration-500"
    >
      <div className="container-grid flex items-center justify-between py-5 lg:py-4">
        {/* Logo */}
        <Link to="/" className="group flex items-center leading-none relative z-10">
          <img
            src={digitoslogo}
            alt="Digitos Logo"
            className="h-12 w-auto object-contain drop-shadow-sm"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-5 py-2.5 font-semibold text-sm transition-all duration-300 rounded-full group ${
                  isActive ? "text-white font-bold" : "text-primary hover:text-accent"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">
                    {item.label}
                  </span>

                  {/* Active background */}
                  {isActive && (
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-accent to-accent/90 rounded-full shadow-md"
                      style={{ pointerEvents: "none" }}
                    />
                  )}

                  {/* Hover underline */}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                      isActive ? "w-0" : "w-0 group-hover:w-3/4"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <div className="relative rounded-full bg-gradient-to-r from-primary to-primary/90 border-2 border-primary px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:shadow-2xl hover:shadow-accent/40 overflow-hidden group cursor-pointer select-none">
            <Link to="/contact" className="relative z-10">
              Let's Talk
            </Link>
            {/* Animated gradient overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
            isScrolled ? "bg-accent/10 text-accent" : "bg-white/20 text-primary backdrop-blur-sm"
          }`}
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div
          className="border-t border-black/10 bg-white/95 backdrop-blur-2xl lg:hidden overflow-hidden shadow-xl"
        >
          <div className="container-grid flex flex-col gap-2 py-8">
            {navItems.map((item) => (
              <div key={item.path} className="">
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-bold transition-all duration-300 hover:text-accent text-primary py-3 px-4 rounded-xl hover:bg-accent/5"
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-full bg-gradient-to-r from-primary to-primary/90 border-2 border-primary px-6 py-4 text-center font-bold uppercase tracking-wider text-white transition-all duration-300 hover:ring-accent/40"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
