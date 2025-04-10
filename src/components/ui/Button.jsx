import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300";

  // Size classes
  const sizeClasses = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  // Variant classes
  const variantClasses = {
    primary:
      "bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-cyan-500/50",
    secondary:
      "bg-blue-700 hover:bg-blue-800 text-white shadow-lg hover:shadow-blue-700/50",
    outline:
      "bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
    ghost: "bg-transparent hover:bg-white/10 text-white",
  };

  const allClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const buttonContent = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );

  // Render as Link if 'to' prop is provided
  if (to) {
    return (
      <Link to={to} className={allClasses} {...props}>
        {buttonContent}
      </Link>
    );
  }

  // Render as external link if 'href' prop is provided
  if (href) {
    return (
      <a
        href={href}
        className={allClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  // Render as button otherwise
  return (
    <button className={allClasses} onClick={onClick} {...props}>
      {buttonContent}
    </button>
  );
};

export default Button;
