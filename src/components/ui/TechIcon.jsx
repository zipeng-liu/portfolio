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
        className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300"
        aria-label={name}
      >
        <Icon className="text-2xl md:text-3xl" />
      </a>
    </motion.div>
  );
};

export default TechIcon;
