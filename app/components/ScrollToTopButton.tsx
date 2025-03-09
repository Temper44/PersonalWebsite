"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { GoArrowUp } from "react-icons/go";
import { useCursor } from "../components/context/CursorContext";
import MagneticButton from "./MagneticButton";

const ScrollToTopButton = ({
  showOnMobile = true,
}: {
  showOnMobile?: boolean;
}) => {
  const [visible, setVisible] = useState(false);
  const { setIsCursorHovered } = useCursor();
  const { scrollYProgress } = useScroll();

  const [lastScrollY, setLastScrollY] = useState(0); // To track scroll direction

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY - lastScrollY; // Check if we are scrolling up or down

      const isScrollable =
        document.documentElement.scrollHeight > window.innerHeight;

      // Always show the button if scrolling isn't possible
      if (!isScrollable) {
        setVisible(true);
        return;
      }

      // Only start showing the button after reaching 50% of scroll progress
      if (current > 0.5) {
        setVisible(direction < 0); // Show only when scrolling up
      } else {
        setVisible(false); // Hide the button if we're less than 50% scrolled
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <div
          className={`fixed bottom-[4.5rem] right-[4.5rem] z-10 md:bottom-[4.85rem] md:right-20 ${showOnMobile ? "" : "hidden sm:block"}`}
        >
          <MagneticButton>
            <motion.button
              className="flex-center h-[2.5rem] w-[2.5rem] rounded-full bg-black text-white shadow-md dark:bg-white dark:text-black"
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
