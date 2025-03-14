"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { GoArrowUp } from "react-icons/go";
import { useCursor } from "../components/context/CursorContext";
import MagneticButton from "./MagneticButton";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const { setIsCursorHovered } = useCursor();
  const { scrollYProgress } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", () => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY - lastScrollY.current;

    const isScrollable =
      document.documentElement.scrollHeight > window.innerHeight;

    if (!isScrollable) {
      setVisible(true);
      return;
    }

    if (scrollYProgress.get() > 0.5) {
      setVisible(direction < 0); // Show only when scrolling up
    } else {
      setVisible(false);
    }

    lastScrollY.current = currentScrollY;
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-[4.5rem] right-[4.5rem] z-10 md:bottom-[4.85rem] md:right-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }} // Smoother transition
        >
          <MagneticButton>
            <motion.button
              className="flex-center h-[2.5rem] w-[2.5rem] rounded-full bg-black text-white shadow-md dark:bg-white dark:text-black"
              onClick={scrollToTop}
              onMouseEnter={() => setIsCursorHovered(true)}
              onMouseLeave={() => setIsCursorHovered(false)}
              aria-label="Scroll to top"
            >
              <GoArrowUp size={24} />
            </motion.button>
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
