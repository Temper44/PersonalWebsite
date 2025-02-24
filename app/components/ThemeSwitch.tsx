"use client";

import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "./context/ThemeContext";
import { useCursor } from "../components/context/CursorContext";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const { setIsCursorHovered } = useCursor();

  return (
    <div className="fixed left-8 top-8 z-50">
      {/* Wrap MagneticButton inside a div to prevent it from affecting positioning */}
      <MagneticButton>
        <motion.button
          className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border border-black border-opacity-40 bg-opacity-80 shadow-md backdrop-blur-[0.4rem] transition-all hover:scale-110 active:scale-105 dark:border-white"
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
    </div>
  );
}
