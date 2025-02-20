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
              scaleY: 0,
              //   borderRadius: "200px", // Rounded corners
              //   backgroundColor: "black",
            }}
            animate={{
              scaleY: 1,
              //   borderRadius: "200px",
              backgroundColor: "black",
            }}
            exit={{
              scaleY: 0,
              //   borderBottomLeftRadius: "200px",
              //   borderBottomRightRadius: "200px",
              transformOrigin: "bottom",

              //   backgroundColor: "black",
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
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
