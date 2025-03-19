"use client";
import React, { useEffect, useRef, useState } from "react";

const ScrollProgressBar = () => {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const animationFrame = useRef<number | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Prevents mismatch by ensuring client-side updates only

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
    };

    const handleScroll = () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      animationFrame.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll);
    updateProgress(); // Ensure progress is updated immediately on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  if (!hydrated) return null; // Prevents hydration mismatch

  return (
    <div
      ref={progressRef}
      className="fixed left-0 top-0 z-20 h-[4px] bg-gradient-to-r from-rose-500 to-purple-500 lg:hidden"
      style={{ width: "0%" }} // Initially hidden before hydration
    />
  );
};

export default ScrollProgressBar;

// "use client";

// import React from "react";
// import { motion, useScroll } from "framer-motion";

// const ScrollProgressBar = () => {
//   const { scrollYProgress } = useScroll(); // Use framer-motion to track scroll progress

//   return (
//     <motion.div
//       className="fixed left-0 top-0 z-20 h-[3px] bg-gradient-to-r from-rose-500 to-purple-500 lg:hidden"
//       style={{
//         scaleX: scrollYProgress, // Use `scaleX` to apply scroll progress
//         transformOrigin: "0%", // Set the origin to left so it scales from the left side
//       }}
//     />
//   );
// };

// export default ScrollProgressBar;
