import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
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
            className="h-14 w-auto object-contain drop-shadow-sm"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item, index) => (
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
                  <Motion.span className="relative z-10" whileTap={{ scale: 0.95 }}>
                    {item.label}
                  </Motion.span>

                  {/* Active background */}
                  {isActive && (
                    <Motion.div
                      layoutId="navBackground"
                      className="absolute inset-0 bg-gradient-to-r from-accent to-accent/90 rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover underline */}
                  <Motion.span
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
          <Motion.div
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/contact"
              className="relative rounded-full bg-gradient-to-r from-primary to-primary/90 border-2 border-primary px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:shadow-2xl hover:shadow-accent/40 overflow-hidden group"
            >
              <span className="relative z-10">Let's Talk</span>

              {/* Animated gradient overlay */}
              <Motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                initial={false}
              />
            </Link>
          </Motion.div>
        </div>

        {/* Mobile Menu Button */}
        <Motion.button
          whileTap={{ scale: 0.9 }}
          className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
            isScrolled ? "bg-accent/10 text-accent" : "bg-white/20 text-primary backdrop-blur-sm"
          }`}
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <Motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={26} strokeWidth={2.5} />
              </Motion.div>
            ) : (
              <Motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={26} strokeWidth={2.5} />
              </Motion.div>
            )}
          </AnimatePresence>
        </Motion.button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-black/10 bg-white/95 backdrop-blur-2xl lg:hidden overflow-hidden shadow-xl"
          >
            <div className="container-grid flex flex-col gap-2 py-8">
              {navItems.map((item, index) => (
                <Motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-bold transition-all duration-300 hover:text-accent text-primary py-3 px-4 rounded-xl hover:bg-accent/5"
                  >
                    {item.label}
                  </Link>
                </Motion.div>
              ))}

              <Motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.08, duration: 0.3 }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-full bg-gradient-to-r from-primary to-primary/90 border-2 border-primary px-6 py-4 text-center font-bold uppercase tracking-wider text-white transition-all duration-300 hover:ring-accent/40"
                >
                  Let's Talk
                </Link>
              </Motion.div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
