"use client";

import React from "react";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import { useMediaQuery } from "react-responsive";
import { ImagesSlider } from "../components/ui/ImagesSlider";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";
import { ParallaxScroll } from "../components/ui/ParallaxScroll";
import ScrollToTopButton from "../components/ScrollToTopButton";
import GridGallery from "../components/GridGallery";
import Footer from "../components/Footer";
import { loadParallaxImages, loadSliderImages } from "../../lib/loadImages";

export default function Page() {
  // const isSmall = useMediaQuery({ maxWidth: 520 });
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const landscapeImages = loadSliderImages();
  const parallaxImages = loadParallaxImages();

  const words = `No matter where I am, I’m always looking for that perfect moment, whether in nature or the city. At least I try to..`;

  return (
    <main className="max-w-screen relative mx-auto flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden">
      <div className="bg-grain fixed inset-0 z-0 h-screen w-screen"></div>
      <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-dot-black/[0.2] dark:bg-dot-white/[0.1]">
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,theme(colors.background))] dark:bg-black" />
      </div>

      <MobileMenu isFullPage={true} />
      {isDesktop && <CustomCursor />}
      <ScrollToTopButton />

      <div className="container flex min-h-screen flex-col items-center justify-center p-6">
        <h1 className="font-grain font-montreal text-[10rem] font-bold capitalize">
          Photos
        </h1>
        <TextGenerateEffect words={words} className="px-[10rem]" />
      </div>

      <div className="container flex flex-col items-center">
        <ImagesSlider
          className="aspect-[3/2] w-screen md:w-[80vw] 2xl:w-full"
          images={landscapeImages}
          overlay={false}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col items-center justify-center p-3"
          ></motion.div>
        </ImagesSlider>

        <GridGallery />

        <ParallaxScroll images={parallaxImages} />
      </div>

      <Footer />
    </main>
  );
}
