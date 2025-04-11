import { useRef, useEffect } from "react";

const BubbleBackground = () => {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });

    // Generate more bubbles with improved visibility
    const bubbles = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random() * 100, // Start below viewport
      size: 8 + Math.random() * 35, // Slightly larger bubbles
      speed: 0.3 + Math.random() * 0.7, // Increased speed for more dynamic movement
      opacity: 0.2 + Math.random() * 0.5, // Higher opacity for better visibility
    }));

    // Set canvas dimensions and handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Redistribute bubbles on resize
      bubbles.forEach((bubble) => {
        bubble.x = Math.random() * canvas.width;
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    let lastTime = 0;

    // Optimized animation loop with time delta
    const animate = (timestamp) => {
      // Calculate time delta for smooth animation regardless of frame rate
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      if (!deltaTime) {
        requestIdRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background gradient with slightly more contrast
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#05103b"); // Deep blue at top
      gradient.addColorStop(1, "#061f6c"); // Slightly brighter blue at bottom
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw bubbles with enhanced glow
      for (const bubble of bubbles) {
        // Normalized speed based on delta time for consistent movement
        const moveAmount = bubble.speed * deltaTime * 0.015; // Increased movement multiplier
        bubble.y -= moveAmount;

        // Reset bubble when it goes off-screen
        if (bubble.y < -bubble.size) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
          bubble.size = 8 + Math.random() * 35;
          bubble.speed = 0.3 + Math.random() * 0.7;
        }

        // Draw bubble with enhanced glow
        ctx.beginPath();
        const bubbleGradient = ctx.createRadialGradient(
          bubble.x,
          bubble.y,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        );

        // Brighter center color with higher opacity
        bubbleGradient.addColorStop(
          0,
          `rgba(200, 240, 255, ${bubble.opacity * 1.2})`
        );

        // Middle gradient stop for better glow effect
        bubbleGradient.addColorStop(
          0.6,
          `rgba(150, 220, 255, ${bubble.opacity * 0.7})`
        );

        bubbleGradient.addColorStop(1, `rgba(100, 200, 255, 0)`);

        ctx.fillStyle = bubbleGradient;
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle border to enhance bubble visibility
        ctx.strokeStyle = `rgba(150, 220, 255, ${bubble.opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      requestIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    requestIdRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(requestIdRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default BubbleBackground;
