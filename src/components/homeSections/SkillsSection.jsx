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
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Use more columns but with smaller gap to keep items closer together
  const gridClass =
    "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4";

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

        {/* Skills grid with larger, consistent icon size and tighter spacing */}
        <motion.div
          key={activeCategory}
          className={`grid ${gridClass}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={`${activeCategory}-${skill.name}`}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-blue-900/50 rounded-lg mb-2 hover:bg-blue-800/70 transition-colors duration-300">
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
