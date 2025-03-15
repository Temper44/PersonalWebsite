"use client";

import React from "react";
// import MobileMenu from "../components/MobileMenu";
// import CustomCursor from "../components/CustomCursor";
// import { useMediaQuery } from "react-responsive";
import Footer from "../components/Footer";
import HeroText from "../components/HeroText";
import FixedBackground from "../components/FixedBackground";
import { subHeadingTexts } from "@/lib/texts";
import PageUtilities from "../components/PageUtilities";

export default function Page() {
  // const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main className="max-screen-center">
      <FixedBackground />
      {/* <MobileMenu isFullPage={true} />
      {isDesktop && <CustomCursor />} */}
      <PageUtilities hide />

      <section className="container-flex-center">
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
