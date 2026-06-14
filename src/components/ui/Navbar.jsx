import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCompassDiscoverFill } from 'react-icons/ri';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Packages', path: '/packages' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force scrolled styles on subpages for readability
  const navbarStyle = (!isHomePage || isScrolled)
    ? 'glass-effect shadow-sm py-4 border-b border-border'
    : 'bg-transparent py-6 border-b border-transparent';

  const textColor = (!isHomePage || isScrolled)
    ? 'text-text-primary'
    : 'text-white';

  const logoColor = (!isHomePage || isScrolled)
    ? 'text-primary'
    : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navbarStyle}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <RiCompassDiscoverFill className={`text-3xl transition-transform duration-500 group-hover:rotate-180 ${logoColor}`} />
          <span className={`font-poppins font-bold text-2xl tracking-wide transition-colors duration-300 ${textColor}`}>
            TOUREST<span className="text-secondary font-black">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-all duration-300 tracking-wide font-inter ${
                  isActive
                    ? 'text-primary font-semibold'
                    : !isHomePage || isScrolled
                    ? 'text-text-secondary hover:text-primary'
                    : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/booking"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-poppins font-medium text-sm rounded-full shadow-md hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Book Now
          </Link>

          {/* 
            MOBILE MENU TOGGLE / मोबाइल मेनू बटन
            =========================================================
            CUSTOMIZATION GUIDE / कस्टमाइज़ेशन गाइड:
            - If you want a background circular frame for the mobile menu button, add back `bg-white/10 hover:bg-white/20` classes below.
              (यदि मोबाइल मेनू बटन के पीछे सर्कल बैकग्राउंड चाहिए, तो नीचे `bg-white/10` जोड़ें।)
          */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            // Removed white glass-effect to ensure high-contrast hamburger lines on dark/light backgrounds
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full focus:outline-none z-50 transition-all duration-300"
            aria-label="Toggle Menu"
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`w-5 h-[2px] rounded-full block ${(!isHomePage || isScrolled || isOpen) ? 'bg-text-primary' : 'bg-white'}`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.1 }}
                className={`w-5 h-[2px] rounded-full block ${(!isHomePage || isScrolled || isOpen) ? 'bg-text-primary' : 'bg-white'}`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`w-5 h-[2px] rounded-full block ${(!isHomePage || isScrolled || isOpen) ? 'bg-text-primary' : 'bg-white'}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* 
        MOBILE MENU PANEL / मोबाइल मेनू पैनल
        =========================================================
        CUSTOMIZATION GUIDE / कस्टमाइज़ेशन गाइड:
        - Change `bg-white` to `bg-slate-900` and text styles to create a dark mode menu.
        - `pt-28` matches the navbar height to prevent the logo/hamburger from overlapping menu items.
        - `overflow-y-auto` ensures all links are reachable even on short screens (like iPhone SE).
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            // Full screen drawer to prevent layout gaps or offsets
            className="fixed inset-0 bg-white z-45 flex flex-col justify-between p-8 pt-28 lg:hidden overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col gap-6 mt-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `font-poppins text-2xl font-semibold tracking-wide block transition-all duration-200 ${
                        isActive ? 'text-primary' : 'text-text-primary hover:text-primary'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-6 pb-12"
            >
              <div className="h-[1px] bg-border w-full" />
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 bg-gradient-to-r from-primary to-secondary text-white font-poppins font-medium text-lg rounded-full shadow-lg"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
