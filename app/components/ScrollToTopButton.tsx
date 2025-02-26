import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowUp } from "react-icons/go";
import { useCursor } from "../components/context/CursorContext";
import MagneticButton from "./MagneticButton";

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
        <div className="fixed bottom-[4.5rem] right-[4.5rem] z-10 md:bottom-20 md:right-20">
          <MagneticButton>
            <motion.button
              className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-black text-white shadow-md dark:bg-white dark:text-black"
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
          </MagneticButton>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
