"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroFooter from "./components/HeroFooter";
// import FixedBackground from "./components/FixedBackground";
import PageUtilities from "./components/PageUtilities";
import { useBetterMediaQuery } from "@/lib/hooks";

export default function Home() {
  const [isHoveredPortrait, setIsHoveredPortrait] = useState(false);
  const isSmall = useBetterMediaQuery("(max-width: 640px)");

  return (
    <main className="flex-col-center relative-center h-svh w-screen overflow-hidden">
      <PageUtilities hide menuDisplayHome={false} menuFullPage={false} />

      <section className="container-flex-center sm:flex-row sm:px-11">
        <motion.h1 className="relative z-10 mt-[-6rem] text-left !leading-none transition-colors duration-500 ease-in-out ~text-[6rem]/[11rem] max-xs:text-6xl">
          <motion.span
            className="mb-3 block text-center font-normal ~text-[1.5rem]/[2rem] sm:mb-2 sm:text-left"
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
              className="font-medium underline decoration-2 underline-offset-4"
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
            <span className="colorEffect font-bold">Creative</span>
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
            className="marquee-backward mt-4 font-medium sm:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.9,
              ease: "easeIn",
            }}
          >
            <span>Technologist</span>
            {isSmall && (
              <>
                {" "}
                <span aria-hidden className="pb-4 tracking-tight">
                  Technologist-
                </span>
                <span aria-hidden className="pb-4 tracking-tight">
                  Technologist-
                </span>
                <span aria-hidden className="pb-4 tracking-tight">
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
            className="flex-center pointer-events-none absolute inset-0 z-[100] h-svh w-screen backdrop-blur-md"
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
