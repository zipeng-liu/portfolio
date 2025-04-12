import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/", scrollTo: "intro" },
    { name: "Projects", path: "/", scrollTo: "projects" },
    { name: "Skills", path: "/", scrollTo: "skills" },
    { name: "Contact", path: "/", scrollTo: "contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when changing route
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <Link to="/" className="text-white text-xl md:text-2xl font-bold">
          <span className="text-cyan-400">Zipeng</span>Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) =>
            isHomePage && link.scrollTo ? (
              <ScrollLink
                key={link.name}
                to={link.scrollTo}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-blue-900/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) =>
                isHomePage && link.scrollTo ? (
                  <ScrollLink
                    key={link.name}
                    to={link.scrollTo}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-white hover:text-cyan-400 transition-colors py-2 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-white hover:text-cyan-400 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
