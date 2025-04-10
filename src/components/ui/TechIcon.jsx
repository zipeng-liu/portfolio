import { motion } from "framer-motion";
import { useState } from "react";

const TechIcon = ({ icon: Icon, name, url }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      className="relative inline-flex items-center justify-center"
      whileHover={{ scale: 1.2 }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300"
        aria-label={name}
      >
        <Icon className="text-2xl md:text-3xl" />
      </a>

      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-50"
        >
          {name}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TechIcon;
