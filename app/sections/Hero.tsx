"use client";

import { useState, useEffect } from "react";
import { FlipWords } from "../components/ui/FlipWords";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "../components/MobileMenu";
import Spotlights from "../components/Spotlights";
import Footer from "../components/Footer";
import { words } from "@/lib/data";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredPortrait, setIsHoveredPortrait] = useState(false);

  const isSmall = useMediaQuery({ maxWidth: 520 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 520, maxWidth: 1024 });

  const [randomVideo, setRandomVideo] = useState("/videos/1.mp4");
  const [randomVideoNum, setRandomVideoNum] = useState(1);
  const [randomMaskNum, setRandomMaskNum] = useState(1);

  useEffect(() => {
    setRandomVideoNum(Math.floor(Math.random() * 6) + 1);
    setRandomMaskNum(Math.floor(Math.random() * 2) + 1);
  }, []);

  useEffect(() => {
    const videoPath = isSmall
      ? `/videos/${randomVideoNum}_mobile.mp4`
      : isTablet
        ? `/videos/${randomVideoNum}_tablet.mp4`
        : `/videos/${randomVideoNum}.mp4`;
    setRandomVideo(videoPath);
  }, [isSmall, isTablet, randomVideoNum]);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center p-8 md:p-10">
      <MobileMenu />
      <Spotlights />
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-grid-black/[0.07] dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,theme(colors.background))] dark:bg-black" />
      </div>
      <div className="container flex flex-col items-center justify-center sm:flex-row 2xl:justify-start">
        <motion.h1
          className="relative z-10 min-w-[80vw] font-montreal text-4xl font-medium capitalize !leading-tight tracking-wide transition-colors duration-500 ease-in-out xs:text-5xl md:text-6xl lg:text-6xl xl:min-w-[70vw] xl:text-7xl 2xl:text-[5.25rem]"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: -36 }}
          transition={{
            delay: 0.2,
            duration: 0.2,
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
            creative
          </span>{" "}
          <br />
          <span className="font-bold">technologist</span>. <br /> I like to:{" "}
          {isMobile && <br />} <FlipWords words={words} />
        </motion.h1>
        <motion.video
          src={randomVideo}
          autoPlay
          loop
          muted
          className="bg-video absolute left-14 top-[0] h-screen w-screen object-cover md:left-[11rem] md:top-0"
          aria-label="Background animation"
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
        {isHoveredPortrait && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 z-40 flex h-screen w-screen items-center justify-center backdrop-blur-md"
          >
            <motion.img
              src="/img/portrait.jpg" // Replace with your image
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
      <Footer />
    </section>
  );
};

export default Hero;
