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

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      const isScrollable =
        document.documentElement.scrollHeight > window.innerHeight;

      if (!isScrollable) {
        setVisible(true);
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
      className="fixed left-8 top-8 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <MagneticButton>
        <motion.button
          className="flex-center customFocusOutline h-[2.5rem] w-[2.5rem] rounded-full border border-black border-opacity-40 shadow-md transition-all duration-1000 active:scale-110 dark:border-white md:left-8 md:top-8"
          aria-label="Toggle Theme"
          onClick={visible ? toggleTheme : undefined}
          onMouseEnter={() => visible && setIsCursorHovered(true)}
          onMouseLeave={() => visible && setIsCursorHovered(false)}
          animate={{
            backdropFilter: visible
              ? "blur(6px) opacity(1)"
              : "blur(0px) opacity(0)",
            WebkitBackdropFilter: visible
              ? "blur(6px) opacity(1)"
              : "blur(0px) opacity(0)",
          }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          {theme === "light" ? <BsSun color="black" /> : <BsMoon />}
        </motion.button>
      </MagneticButton>
    </motion.div>
  );
}
