import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import AppRoutes from "./router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BubbleBackground from "./components/layout/BubbleBackground";

const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <BubbleBackground />
      <Navbar />
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <AppRoutes key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
