import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: FaGithub,
      name: "GitHub",
      description:
        "Check out my code repositories and open source contributions",
      link: "https://github.com/zipeng-liu",
      buttonText: "View GitHub Profile",
      color: "from-gray-900 to-gray-700",
      iconClass: "bg-gray-800",
    },
    {
      icon: FaLinkedinIn,
      name: "LinkedIn",
      description: "Connect with me professionally and view my experience",
      link: "https://www.linkedin.com/in/zipeng-liu/",
      buttonText: "Connect on LinkedIn",
      color: "from-blue-800 to-blue-600",
      iconClass: "bg-blue-700",
    },
    {
      icon: FaEnvelope,
      name: "Email",
      description: "Reach out directly for collaboration or inquiries",
      link: "mailto:zipeng.liu.mail@gmail.com",
      buttonText: "Send Email",
      color: "from-cyan-700 to-cyan-500",
      iconClass: "bg-cyan-600",
    },
  ];

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
    <section id="contact" className="py-20 relative">
      {/* Ocean-themed decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in working together or have a question? Feel free to
            reach out through any of these platforms.
          </p>
        </motion.div>

        {/* Contact Methods Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative bg-gradient-to-br ${method.color} rounded-xl overflow-hidden shadow-lg`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-blue-950 opacity-80"></div>
              <div className="p-6 relative z-10">
                <div
                  className={`w-16 h-16 ${method.iconClass} rounded-full flex items-center justify-center mb-4 mx-auto`}
                >
                  <method.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {method.name}
                </h3>
                <p className="text-gray-300 text-center mb-6 text-sm">
                  {method.description}
                </p>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center bg-blue-950/60 hover:bg-blue-900/80 text-white rounded-lg transition-colors duration-300"
                >
                  {method.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-12 text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>
            Looking forward to connecting and exploring how we can collaborate
            on your next project.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
