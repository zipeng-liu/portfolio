import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import Button from "../ui/Button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
      icon: FaTwitter,
      url: "https://twitter.com",
      label: "Twitter",
      color: "bg-blue-500",
    },
    {
      icon: FaEnvelope,
      url: "mailto:hello@example.com",
      label: "Email",
      color: "bg-red-600",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {submitSuccess ? (
                <div className="bg-green-600/20 border border-green-500 text-green-200 px-4 py-3 rounded mb-6">
                  Thank you for your message! I'll get back to you soon.
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-blue-950/50 border border-blue-800 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-blue-950/50 border border-blue-800 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-blue-950/50 border border-blue-800 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-blue-900/20 backdrop-blur-sm p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:hello@example.com"
                    className="text-cyan-400 hover:underline"
                  >
                    hello@example.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 mb-1">Location</p>
                  <p className="text-white">San Francisco, CA</p>
                </div>

                <div>
                  <p className="text-gray-400 mb-1">Available for</p>
                  <p className="text-white">
                    Full-time positions, freelance projects, collaborations
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-blue-900/20 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} p-4 rounded-lg text-white flex items-center gap-3 hover:opacity-90 transition-all`}
                  >
                    <link.icon className="text-2xl" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
