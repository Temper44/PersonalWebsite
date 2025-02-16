"use client";

import React from "react";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import { useMediaQuery } from "react-responsive";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import ScrollProgressBar from "../components/ScrollProgressBar";
import HeroText from "../components/HeroText";

export default function Page() {
  // const isSmall = useMediaQuery({ maxWidth: 520 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const words = `Exploring form and function through 3D designs—experimenting with shapes, materials, and techniques to bring small-scale ideas to life`;

  return (
    <main className="max-w-screen relative mx-auto flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden">
      <div className="bg-grain fixed inset-0 z-0 h-screen w-screen"></div>
      <div className="fixed left-0 top-0 z-[-10] flex h-screen w-screen items-center justify-center bg-dot-black/[0.2] dark:bg-dot-white/[0.1]">
        <div className="bg-gradient pointer-events-none fixed inset-0 z-[-10] flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,theme(colors.background))] dark:bg-black" />
      </div>

      {isMobile && <ScrollProgressBar />}
      <MobileMenu isFullPage={true} />
      {isDesktop && <CustomCursor />}
      <ScrollToTopButton />

      <section className="container flex min-h-screen flex-col items-center justify-center p-6">
        <HeroText
          heading="3D-Models"
          subheading={words}
          infoText="Coming soon.."
        />
      </section>

      <section className="container flex flex-col items-center"></section>
      <Footer />
    </main>
  );
}
