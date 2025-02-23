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
      setTimeout(() => setIsTransitioning(false), 800); // Adjusted timing to match animation
    }
  }, [pathname]);

  return (
    <>
      {/* Show the page content only when transition is done */}
      {!isTransitioning && children}

      {/* Fullscreen transition overlay */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key={pathname}
            initial={{
              translateY: "-100%", // Initial position off-screen
              opacity: 1, // Fade in
            }}
            animate={{
              translateY: "0%", // Move into place
              opacity: 1, // Fade in completely
              backgroundImage:
                "linear-gradient(220.55deg, #DD7BFF 0%, #FF6C6C 100%)", // Gradient as backgroundImage
            }}
            exit={{
              translateY: "100%", // Exit the screen
              opacity: 0, // Fade out
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 99999,
              transformOrigin: "top",
              pointerEvents: "none", // Prevents blocking interactions
              willChange: "transform, opacity, backgroundImage", // Ensure backgroundImage is optimized
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
