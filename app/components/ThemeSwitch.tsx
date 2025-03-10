"use client";

import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "./context/ThemeContext";
import { useCursor } from "../components/context/CursorContext";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const { setIsCursorHovered } = useCursor();

  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      // 🔥 Check if the page is scrollable
      const isScrollable =
        document.documentElement.scrollHeight > window.innerHeight;

      if (!isScrollable) {
        setVisible(true); // Always show the menu if scrolling isn't possible
        return;
      }

      if (scrollYProgress.get() < 0.12) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <motion.div
      className="fixed left-8 top-8"
      initial={{
        opacity: 1,
        y: -100,
      }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <MagneticButton>
        <motion.button
          className="flex-center h-[2.5rem] w-[2.5rem] rounded-full border border-black border-opacity-40 bg-opacity-80 shadow-md backdrop-blur-[0.4rem] transition-all hover:scale-[1.15rem] active:scale-105 dark:border-white md:left-8 md:top-8"
          aria-label="Toggle Theme"
          onClick={toggleTheme}
          onMouseEnter={() => setIsCursorHovered(true)}
          onMouseLeave={() => setIsCursorHovered(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          {theme === "light" ? <BsSun color="black" /> : <BsMoon />}
        </motion.button>
      </MagneticButton>
    </motion.div>
  );
}
