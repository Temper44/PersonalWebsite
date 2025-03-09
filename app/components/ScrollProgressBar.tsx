"use client";
import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const progress = (scrollTop / docHeight) * 100; // Calculate progress as a percentage
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-20 h-[3px] bg-gradient-to-r from-rose-500 to-purple-500 lg:hidden"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgressBar;
