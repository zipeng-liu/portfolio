import { motion } from "framer-motion";

const TechIcon = ({ icon: Icon, name, url }) => {
  return (
    <motion.div
      className="relative inline-flex items-center justify-center"
      whileHover={{ scale: 1.2 }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-300 hover:text-white-100 transition-colors duration-300"
        aria-label={name}
        onClick={(e) => {
          if (!url || url === "#") {
            e.preventDefault();
          }
        }}
      >
        <Icon className="text-3xl md:text-4xl" />
      </a>
    </motion.div>
  );
};

export default TechIcon;
