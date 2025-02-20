"use client";

import React from "react";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import { useMediaQuery } from "react-responsive";
// import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
// import ScrollProgressBar from "../components/ScrollProgressBar";
import HeroText from "../components/HeroText";
import FixedBackground from "../components/FixedBackground";

export default function Page() {
  // const isSmall = useMediaQuery({ maxWidth: 520 });
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const words = `A collection of thoughts and insights from technical stuff to personal experiences`;

  return (
    <main className="max-w-screen relative mx-auto flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden">
      <FixedBackground />

      {/* {isMobile && <ScrollProgressBar />} */}
      <MobileMenu isFullPage={true} />
      {isDesktop && <CustomCursor />}
      {/* <ScrollToTopButton /> */}

      <section className="container flex flex-col items-center justify-center p-6">
        <HeroText heading="Blog" subheading={words} infoText="Coming soon.." />
      </section>

      <Footer />
    </main>
  );
}
