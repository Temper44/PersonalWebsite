"use client";

import { useState, useEffect } from "react";
import { FlipWords } from "./components/ui/FlipWords";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "./components/MobileMenu";
import Spotlights from "./components/Spotlights";
import HeroFooter from "./components/HeroFooter";
import { words } from "@/lib/data";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredPortrait, setIsHoveredPortrait] = useState(false);

  const isSmall = useMediaQuery({ maxWidth: 520 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 520, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // Fix: Initialize state as null to prevent SSR mismatches
  const [randomVideoNum, setRandomVideoNum] = useState<number | null>(null);
  const [randomMaskNum, setRandomMaskNum] = useState<number | null>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setRandomVideoNum(Math.floor(Math.random() * 4) + 1);
    setRandomMaskNum(Math.floor(Math.random() * 2) + 1);
  }, []);

  // Only set video path if `randomVideoNum` is available
  const videoPath =
    randomVideoNum === null
      ? "" // Avoid SSR mismatch by not rendering anything until state is set
      : isSmall
        ? `/videos/${randomVideoNum}_mobile.mp4`
        : isTablet
          ? `/videos/${randomVideoNum}_tablet.mp4`
          : `/videos/${randomVideoNum}.mp4`;

  // Set `isClient` to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Avoid rendering client-dependent components during SSR
    return (
      <main className="relative mx-auto flex h-[100dvh] w-screen flex-col items-center justify-center overflow-hidden"></main>
    );
  }

  return (
    <main className="relative mx-auto flex h-[100dvh] w-screen flex-col items-center justify-center overflow-hidden">
      {isMobile && <MobileMenu displayHome={false} />}
      {isDesktop && <CustomCursor />}
      <Spotlights />

      {/* Background Grid Overlay */}
      <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-grid-black/[0.07] dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,theme(colors.background))] dark:bg-black" />
      </div>

      <div className="container flex flex-col items-center justify-center px-6 sm:flex-row sm:px-11 2xl:justify-start">
        <motion.h1
          className="relative z-10 min-w-[80vw] font-montreal text-4xl font-medium !leading-tight tracking-wide transition-colors duration-500 ease-in-out xs:text-5xl md:text-6xl lg:text-6xl xl:min-w-[70vw] xl:text-7xl 2xl:text-[5.25rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.9,
            type: "tween",
            ease: "easeIn",
          }}
        >
          Hey,{" "}
          <span
            onMouseEnter={() => setIsHoveredPortrait(true)}
            onMouseLeave={() => setIsHoveredPortrait(false)}
          >
            I&apos;m
          </span>{" "}
          a{" "}
          <span
            className="colorEffect font-bold"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Creative
          </span>{" "}
          <br />
          <span className="font-bold">Technologist</span>. <br /> I like to:{" "}
          {isMobile && <br />}{" "}
          <div className="min-h-[60px] md:min-h-[80px] lg:min-h-[105px]">
            <FlipWords words={words} />
          </div>
        </motion.h1>

        {randomVideoNum !== null && (
          <motion.video
            src={videoPath}
            autoPlay
            loop
            muted
            className="bg-video pointer-events-none absolute left-3 top-0 h-screen w-screen object-cover md:left-[11rem]"
            aria-label="Background animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{
              delay: 1,
              duration: 1.5,
              type: "tween",
              ease: "easeIn",
            }}
            style={{
              maskImage: isHovered
                ? "none"
                : `url('/img/mask${randomMaskNum}.svg')`,
              maskRepeat: "no-repeat",
              inset: isHovered ? "0" : "",
              WebkitMaskImage: isHovered
                ? "none"
                : `url('/img/mask${randomMaskNum}.svg')`,
            }}
          />
        )}

        {isHoveredPortrait && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 z-40 flex h-screen w-screen items-center justify-center backdrop-blur-md"
          >
            <motion.img
              src="/img/portrait.webp"
              alt="My Picture"
              className="absolute z-50 max-h-[35vh] max-w-[35vw] overflow-clip rounded-full shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </div>
      <HeroFooter />
    </main>
  );
}
