import { HeroParallax } from "../components/ui/HeroParallax";
import { products } from "@/lib/data";
import Contact from "../sections/Contact";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import PageUtilities from "../components/PageUtilities";
import FloatingNav from "../components/FloatingNav";
import ActiveSectionContextProvider from "../components/context/active-section-context";
import ParallaxScrollGallery from "../components/ParallaxScrollGallery";
import FixedBackground from "../components/FixedBackground";
import PortfolioSvg from "../components/svg/PortfolioSvg";

export default function Page() {
  return (
    <ActiveSectionContextProvider>
      <main className="relative-center">
        <FixedBackground />
        <PageUtilities hide={true} />
        <FloatingNav />
        <HeroParallax products={products} />
        <PortfolioSvg />
        <About />
        <Skills />
        <Projects />
        <ParallaxScrollGallery />
        <Contact />
      </main>
    </ActiveSectionContextProvider>
  );
}
