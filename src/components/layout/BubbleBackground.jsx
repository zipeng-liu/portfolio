import { useRef, useEffect } from "react";

const BubbleBackground = () => {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const scrollFactorRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });

    // bubbles setup
    const bubbles = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random() * 100,
      size: 8 + Math.random() * 35,
      speed: 0.5 + Math.random() * 1.0,
      opacity: 0.2 + Math.random() * 0.5,
    }));

    // handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      bubbles.forEach((b) => (b.x = Math.random() * canvas.width));
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // track scroll without rerunning effect
    window.addEventListener("scroll", () => {
      scrollFactorRef.current = Math.min(
        window.scrollY / window.innerHeight,
        1
      );
    });

    let lastTime = 0;
    const SPEED_MULTIPLIER = 0.025;

    const animate = (timestamp) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      if (!deltaTime) {
        requestIdRef.current = requestAnimationFrame(animate);
        return;
      }

      // clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // subtle sky gradient with a brighter top
      const factor = scrollFactorRef.current;
      const topAlpha = 1 - factor * 0.2; // from 1 → 0.8 on scroll
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      // Brighter blue at the top:
      grad.addColorStop(0, `rgba(12,57,111,${topAlpha})`);
      // Deep navy at the bottom:
      grad.addColorStop(1, "#05103b");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // draw bubbles
      for (const bubble of bubbles) {
        bubble.y -= bubble.speed * deltaTime * SPEED_MULTIPLIER;
        if (bubble.y < -bubble.size) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
          bubble.size = 8 + Math.random() * 35;
          bubble.speed = 0.5 + Math.random() * 1.0;
        }

        const glow = ctx.createRadialGradient(
          bubble.x,
          bubble.y,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        );
        glow.addColorStop(0, `rgba(200,240,255,${bubble.opacity * 1.2})`);
        glow.addColorStop(0.6, `rgba(150,220,255,${bubble.opacity * 0.7})`);
        glow.addColorStop(1, `rgba(100,200,255,0)`);

        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(150,220,255,${bubble.opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      requestIdRef.current = requestAnimationFrame(animate);
    };

    requestIdRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestIdRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", () => {});
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
