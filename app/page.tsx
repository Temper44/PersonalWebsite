"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "./components/MobileMenu";
import HeroFooter from "./components/HeroFooter";
import CustomCursor from "./components/CustomCursor";
// import { BackgroundBeams } from "./components/ui/BackgroundBeams";
import FixedBackground from "./components/FixedBackground";

export default function Home() {
  // const [isHovered, setIsHovered] = useState(false);
  const [isHoveredPortrait, setIsHoveredPortrait] = useState(false);

  const isSmall = useMediaQuery({ maxWidth: 640 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [isClient, setIsClient] = useState(false);

  // Set `isClient` to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <main className="relative mx-auto flex h-dvh w-screen flex-col items-center justify-center overflow-hidden"></main>
    );
  }

  return (
    <main className="relative mx-auto flex h-dvh w-screen flex-col items-center justify-center overflow-hidden">
      {isMobile && <MobileMenu displayHome={false} />}
      {isDesktop && <CustomCursor />}

      <FixedBackground />
      {/* {isTablet && <BackgroundBeams />} */}
      <section className="textShadow container flex flex-col items-center justify-center px-6 sm:flex-row sm:px-11">
        <motion.h1 className="relative z-10 mt-[-6rem] text-left !leading-none transition-colors duration-500 ease-in-out ~text-[6rem]/[12rem] max-xs:text-6xl">
          <motion.span
            className="mb-3 block text-center font-light ~text-2xl/4xl sm:mb-2 sm:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.9,
              ease: "easeIn",
            }}
          >
            Hey! I&apos;m{" "}
            <span
              onMouseEnter={() => setIsHoveredPortrait(true)}
              onMouseLeave={() => setIsHoveredPortrait(false)}
              className="font-normal underline"
            >
              Mathias
            </span>
            , a
          </motion.span>
          <motion.div
            className="marquee-forward"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.9,
              ease: "easeIn",
            }}
          >
            <span
              className="colorEffect font-bold"
              // onMouseEnter={() => setIsHovered(true)}
              // onMouseLeave={() => setIsHovered(false)}
            >
              Creative
            </span>
            {isSmall && (
              <>
                {" "}
                <span aria-hidden className="colorEffect font-bold">
                  -Creative
                </span>
                <span aria-hidden className="colorEffect font-bold">
                  -Creative
                </span>
                <span aria-hidden className="colorEffect font-bold">
                  -Creative
                </span>
              </>
            )}
          </motion.div>
          <motion.div
            className="marquee-backward mt-4 sm:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.9,
              ease: "easeIn",
            }}
          >
            <span className="font-normal">Technologist</span>
            {isSmall && (
              <>
                {" "}
                <span aria-hidden className="pb-4 font-normal tracking-tight">
                  Technologist-
                </span>
                <span aria-hidden className="pb-4 font-normal tracking-tight">
                  Technologist-
                </span>
                <span aria-hidden className="pb-4 font-normal tracking-tight">
                  Technologist-
                </span>
              </>
            )}
          </motion.div>
        </motion.h1>

        {isHoveredPortrait && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 z-[100] flex h-screen w-screen items-center justify-center backdrop-blur-md"
          >
            <motion.img
              src="/img/portrait_home.jpg"
              alt="My Picture"
              className="absolute z-[100] max-h-[35vh] max-w-[35vw] overflow-clip rounded-full shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </section>
      <HeroFooter />
    </main>
  );
}
