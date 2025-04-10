import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";
import Button from "../ui/Button";

const IntroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full text-sm inline-block mb-4">
              Frontend Developer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Dive into my <span className="text-cyan-400">creative ocean</span>{" "}
            of web development
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 mb-10 md:px-8"
          >
            I craft responsive and interactive web experiences with modern
            technologies. My focus is on creating clean, efficient, and
            user-friendly interfaces that make a splash in the digital world.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Button variant="primary" size="lg">
                View My Work
              </Button>
            </ScrollLink>

            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </ScrollLink>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-white/50 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <FaArrowDown className="text-2xl" />
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
