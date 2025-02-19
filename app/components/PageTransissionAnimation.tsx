"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransitionAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  useEffect(() => {
    if (!isFirstLoad) {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 800); // Match transition duration
    }
  }, [pathname]);

  return (
    <>
      {/* Content - This ensures the page only updates AFTER the animation completes */}
      {!isTransitioning && children}

      {/* Fullscreen transition overlay */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key={pathname}
            initial={{
              clipPath: "inset(0% 0% 100% 0%)",
              //   backgroundColor: "white",
            }} // Starts hidden
            animate={{
              clipPath: "inset(0% 0% 0% 0%)",
              backgroundColor: "black",
            }} // Reveals page
            exit={{
              clipPath: "inset(100% 0% 0% 0%)",
              //   backgroundColor: "black",
            }} // Covers page
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 99999,
              pointerEvents: "none", // Ensures it doesn't block interactions
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
