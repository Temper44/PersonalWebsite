import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowUp } from "react-icons/go";
import { useCursor } from "../components/context/CursorContext";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setIsCursorHovered } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const halfway = totalHeight * 0.5;

      if (scrollPosition > halfway) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-10 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-black text-white shadow-md dark:bg-white dark:text-black"
          onClick={scrollToTop}
          onMouseEnter={() => setIsCursorHovered(true)}
          onMouseLeave={() => setIsCursorHovered(false)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
        >
          <GoArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
