import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import skills from "../../data/skillsData";
import TechIcon from "../ui/TechIcon";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState([]);

  // Update filtered skills whenever activeCategory changes
  useEffect(() => {
    const category = skills.find((cat) => cat.category === activeCategory);
    if (category && category.items) {
      setFilteredSkills(category.items);
    }
  }, [activeCategory]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-20 bg-blue-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's an overview of my technical expertise and the tools I work
            with to bring ideas to life in the digital realm.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.category
                  ? "bg-cyan-500 text-white"
                  : "bg-blue-800/40 text-gray-300 hover:bg-blue-700/50"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory} // Add key to force re-render when category changes
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          // Remove whileInView to prevent animation issues when switching tabs
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={`${activeCategory}-${skill.name}`} // Unique key combining category and skill
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-900/50 rounded-lg mb-3 hover:bg-blue-800/70 transition-colors duration-300">
                <TechIcon icon={skill.icon} name={skill.name} url={skill.url} />
              </div>
              <h3 className="text-white text-center text-sm">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
