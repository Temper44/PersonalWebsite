import Footer from "../components/Footer";
import HeroText from "../components/HeroText";
import FixedBackground from "../components/FixedBackground";
import MarqueeText from "../components/MarqueeText";
import { loadParallaxPoster } from "@/lib/loadImages";
import { ParallaxScrollPoster } from "../components/ui/ParallaxScrollPoster";
import PageUtilities from "../components/PageUtilities";
import { subHeadingTexts } from "@/lib/texts";
import PosterSvg from "../components/svg/PosterSvg";

export default function Page() {
  const parallaxPoster = loadParallaxPoster();

  return (
    <main className="max-screen-center">
      <FixedBackground />
      <PageUtilities />
      <section className="container-flex-center">
        <HeroText heading="Posters" subheading={subHeadingTexts.posters} />
      </section>
      <PosterSvg />
      <section className="container-flex-center" id="posters">
        <MarqueeText text="selected work" />
        <ParallaxScrollPoster images={parallaxPoster} />
      </section>
      <Footer />
    </main>
  );
}
