import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const socialLinks = [
    { icon: SiLeetcode, url: "https://leetcode.com", label: "LeetCode" },
    { icon: FaHackerrank, url: "https://hackerrank.com", label: "HackerRank" },
  ];

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/", scrollTo: "intro" },
    { name: "Projects", path: "/", scrollTo: "projects" },
    { name: "Skills", path: "/", scrollTo: "skills" },
    { name: "Contact", path: "/", scrollTo: "contact" },
  ];

  return (
    <footer className="relative z-10 bg-blue-950/70 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-white text-xl font-bold">
              <span className="text-cyan-400">Zipeng</span>Portfolio
            </Link>
            <p className="text-gray-400 mt-2 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label={link.label}
                title={link.label}
              >
                <link.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation and Extra info */}
        <div className="mt-8 pt-8 border-t border-blue-800/50 flex flex-col md:flex-row justify-between">
          <nav className="flex flex-wrap gap-4 md:gap-8 mb-4 md:mb-0">
            {navLinks.map((link) =>
              isHomePage && link.scrollTo ? (
                <ScrollLink
                  key={link.name}
                  to={link.scrollTo}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-400 hover:text-white text-sm cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          <p className="text-gray-500 text-sm">
            Made with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
