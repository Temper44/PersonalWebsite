"use client";

import React from "react";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import { useMediaQuery } from "react-responsive";
import Footer from "../components/Footer";
import HeroText from "../components/HeroText";
import FixedBackground from "../components/FixedBackground";
import { subHeadingTexts } from "@/lib/texts";

export default function Page() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main className="max-w-screen relative mx-auto flex min-h-dvh flex-col items-center justify-center overflow-hidden">
      <FixedBackground />
      <MobileMenu isFullPage={true} />
      {isDesktop && <CustomCursor />}

      <section className="container flex flex-col items-center justify-center p-6">
        <HeroText
          heading="Blog"
          subheading={subHeadingTexts.blog}
          infoText="Coming soon.."
        />
      </section>

      <Footer />
    </main>
  );
}
