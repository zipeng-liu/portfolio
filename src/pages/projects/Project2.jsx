import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import projects from "../../data/projectsData";
import Carousel from "../../components/ui/Carousel";
import TechIcon from "../../components/ui/TechIcon";
import Button from "../../components/ui/Button";

const Project2 = () => {
  const project = projects[1]; // Using the second project from our data

  // Page transition animation
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>

        <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl p-6 md:p-8">
          {/* Project header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-cyan-100/80 mb-6">
              {project.description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <Button href={project.githubUrl} variant="secondary">
                <FaGithub className="mr-2" /> View Code
              </Button>
              <Button href={project.demoUrl} variant="primary">
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </Button>
            </div>
          </div>

          {/* Project carousel */}
          <div className="mb-12">
            <Carousel images={project.images} />
          </div>

          {/* Tech stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-6 p-6 bg-blue-950/50 rounded-lg">
              {project.techIcons.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 flex items-center justify-center bg-blue-900/50 rounded-lg">
                    <TechIcon
                      icon={tech.icon}
                      name={tech.name}
                      url={tech.url}
                    />
                  </div>
                  <span className="text-sm text-cyan-100">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {/* <h2 className="text-2xl font-bold text-white mb-4">Motivation</h2> */}
              <p className="text-gray-300 mb-8">{project.motivation}</p>

              {/* <h2 className="text-2xl font-bold text-white mb-4">
                Target Market
              </h2> */}
              <p className="text-gray-300 mb-4">{project.targetMarket}</p>

              <h2 className="text-2xl font-bold text-white mb-4">
                Learning Objectives
              </h2>
              <ul className="list-disc pl-5 text-gray-300 mb-8 space-y-2">
                {project.objectives.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Key Features
              </h2>
              <ul className="list-disc pl-5 text-gray-300 mb-8 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
              <p className="text-gray-300">{project.conclusion}</p>
            </div>
          </div>

          {/* Next/Prev Project Navigation */}
          <div className="mt-12 pt-8 border-t border-blue-800">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <Button to="/project/1" variant="ghost" className="mb-4 sm:mb-0">
                &larr; Previous Project
              </Button>

              <Button to="/project/3" variant="ghost">
                Next Project &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project2;
