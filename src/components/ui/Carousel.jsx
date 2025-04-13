import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ images, autoAdvance = false, interval = 8000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    if (autoAdvance) {
      const timer = setInterval(goToNext, interval);
      return () => clearInterval(timer);
    }
  }, [goToNext, autoAdvance, interval]);

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[26rem] md:h-[32rem] lg:h-[36rem] overflow-hidden rounded-xl">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Arrow Controls */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-colors duration-300"
        aria-label="Next slide"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;
