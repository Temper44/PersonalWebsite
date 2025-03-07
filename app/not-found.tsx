"use client";

import MobileMenu from "./components/MobileMenu";
import CustomCursor from "./components/CustomCursor";
import { useMediaQuery } from "react-responsive";
import HeroText from "./components/HeroText";
import FixedBackground from "./components/FixedBackground";
import HeroFooter from "./components/HeroFooter";

export default function NotFound() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const words = `Sorry, the page you are looking for does not exist!`;

  return (
    <main className="max-screen-center">
      <FixedBackground />
      <MobileMenu isFullPage={true} />
      {isDesktop && <CustomCursor />}

      <section className="container-flex-center">
        <HeroText
          heading="404 - Not Found"
          subheading={words}
          infoText="Please navigate to a different page"
        />
      </section>
      <HeroFooter />
    </main>
  );
}
