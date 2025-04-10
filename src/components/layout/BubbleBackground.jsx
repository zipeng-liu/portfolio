import { useRef, useEffect } from "react";

const BubbleBackground = () => {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });

    // Generate bubbles once and reuse them
    const bubbles = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random() * 100, // Start below viewport
      size: 5 + Math.random() * 30,
      speed: 0.1 + Math.random() * 0.4, // Reduced speed for less lag
      opacity: 0.1 + Math.random() * 0.4,
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

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#05103b"); // Deep blue at top
      gradient.addColorStop(1, "#061c5c"); // Slightly lighter blue at bottom
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw bubbles with reduced operations
      for (const bubble of bubbles) {
        // Normalized speed based on delta time for consistent movement
        const moveAmount = bubble.speed * deltaTime * 0.01;
        bubble.y -= moveAmount;

        // Reset bubble when it goes off-screen
        if (bubble.y < -bubble.size) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
        }

        // Draw bubble - simplified with fewer gradient stops
        ctx.beginPath();
        const bubbleGradient = ctx.createRadialGradient(
          bubble.x,
          bubble.y,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        );
        bubbleGradient.addColorStop(
          0,
          `rgba(173, 216, 230, ${bubble.opacity})`
        );
        bubbleGradient.addColorStop(1, `rgba(135, 206, 235, 0)`);

        ctx.fillStyle = bubbleGradient;
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fill();
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
