import { motion } from "framer-motion";
import { useState } from "react";
import skills from "../../data/skillsData";
import TechIcon from "../ui/TechIcon";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

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

  // Filter skills based on active category
  const filteredSkills =
    skills.find((category) => category.category === activeCategory)?.items ||
    [];

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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skills.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-900/50 rounded-lg mb-4">
                <TechIcon icon={skill.icon} name={skill.name} url={skill.url} />
              </div>
              <h3 className="text-white text-lg font-medium mb-2">
                {skill.name}
              </h3>

              {/* Proficiency bar */}
              <div className="w-full bg-blue-900/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                />
              </div>
              <span className="text-cyan-300 text-sm mt-1">
                {skill.proficiency}%
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
