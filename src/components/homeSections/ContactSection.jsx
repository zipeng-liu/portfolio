import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com",
      label: "GitHub",
      color: "bg-gray-800",
    },
    {
      icon: FaLinkedinIn,
      url: "https://linkedin.com",
      label: "LinkedIn",
      color: "bg-blue-700",
    },
    {
      icon: FaEnvelope,
      url: "mailto:hello@example.com",
      label: "Email",
      color: "bg-red-600",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration
            opportunities? I'd love to hear from you. Let's create something
            amazing together.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-blue-900/20 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Connect With Me
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} p-4 rounded-lg text-white flex items-center justify-center gap-3 hover:opacity-90 transition-all hover:scale-105`}
                >
                  <link.icon className="text-2xl" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            <p className="text-center text-gray-300 mt-8">
              Feel free to reach out through any of these platforms. I'm always
              open to discussing new projects, creative ideas, or opportunities
              to collaborate.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
