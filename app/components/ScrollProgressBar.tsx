"use client";
import React, { useEffect, useRef } from "react";

const ScrollProgressBar = () => {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current); // Cancel previous frame request
      }

      animationFrame.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;

        if (progressRef.current) {
          progressRef.current.style.width = `${progress}%`; // Update width directly
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed left-0 top-0 z-20 h-[3px] bg-gradient-to-r from-rose-500 to-purple-500 lg:hidden"
      style={{ width: "0%" }} // Start with no width
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
