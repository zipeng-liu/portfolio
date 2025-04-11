import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TechIcon from "./TechIcon";

const ProjectCard = ({ project }) => {
  const { id, title, description, coverImage, techIcons } = project;

  return (
    <motion.div
      className="bg-gradient-to-b from-blue-900/40 to-blue-900/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/project/${id}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
        </div>

        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-cyan-100/80 mb-4 line-clamp-2">{description}</p>
        </div>
      </Link>

      {/* Tech icons section outside the Link to prevent event bubbling */}
      <div className="px-6 pb-6 flex flex-wrap gap-4 mt-auto">
        {techIcons.slice(0, 7).map((tech, index) => (
          <TechIcon
            key={index}
            icon={tech.icon}
            name={tech.name}
            url={tech.url}
          />
        ))}
        {techIcons.length > 7 && (
          <div className="inline-flex items-center justify-center text-cyan-300">
            +{techIcons.length - 7}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
