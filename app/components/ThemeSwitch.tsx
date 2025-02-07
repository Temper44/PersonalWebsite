"use client";

import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "./context/ThemeContext";
import { useCursor } from "../components/context/CursorContext";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const { setIsCursorHovered } = useCursor();

  return (
    <button
      className="fixed left-5 top-5 flex h-[2.5rem] w-[2.5rem] cursor-none items-center justify-center rounded-full border border-black border-opacity-40 bg-opacity-80 backdrop-blur-[0.5rem] transition-all hover:scale-[1.15rem] active:scale-105 dark:border-white dark:bg-gray-950 md:left-8 md:top-8"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      onMouseEnter={() => setIsCursorHovered(true)}
      onMouseLeave={() => setIsCursorHovered(false)}
    >
      {theme === "light" ? <BsSun color="black" /> : <BsMoon />}
    </button>
  );
}
