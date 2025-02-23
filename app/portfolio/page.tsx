"use client";

import React from "react";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import { useMediaQuery } from "react-responsive";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import ScrollProgressBar from "../components/ScrollProgressBar";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HeroParallax } from "../components/ui/HeroParallax";
import { products } from "@/lib/data";
// import { SpotlightNew } from "../components/ui/SpotlightNew";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  // const isSmall = useMediaQuery({ maxWidth: 520 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main className="max-w-screen relative mx-auto overflow-hidden">
      <div className="bg-grain fixed inset-0 z-[-10] h-screen w-screen" />

      {isMobile && <ScrollProgressBar />}
      <MobileMenu isFullPage={true} />
      {isDesktop && <CustomCursor />}
      <ScrollToTopButton />

      <HeroParallax products={products} />
      {/* <section className="container flex flex-col items-center"></section> */}
      <Footer />
    </main>
  );
}
