import { ParallaxScrollPhoto } from "../components/ui/ParallaxScrollPhoto";
import GridGallery from "../components/GridGallery";
import Footer from "../components/Footer";
import { loadParallaxImages, loadSliderImages } from "../../lib/loadImages";
import HeroText from "../components/HeroText";
import MarqueeText from "../components/MarqueeText";
import { Carousel } from "../components/ui/Carousel";
import FixedBackground from "../components/FixedBackground";
import { subHeadingTexts } from "@/lib/texts";
import PhotoSvg from "../components/svg/PhotoSvg";
import PageUtilities from "../components/PageUtilities";

export default function Page() {
  const landscapeImages = loadSliderImages();
  const parallaxImages = loadParallaxImages();

  return (
    <main className="max-screen-center">
      <FixedBackground />
      <PageUtilities />

      <section className="container-flex-center">
        <HeroText
          heading="Photos"
          subheading={subHeadingTexts.photos}
          anchor="images"
        />
      </section>

      <PhotoSvg />

      <section className="container-flex-center" id="images">
        <MarqueeText text="landscape shots" />
        <div className="relative w-screen overflow-hidden pb-20">
          <Carousel slides={landscapeImages} />
        </div>
        <MarqueeText text="selected work" />

        <div className="container-flex-center">
          <GridGallery />
        </div>
        <MarqueeText text="street collection" />
        <ParallaxScrollPhoto images={parallaxImages} />
      </section>
      <Footer />
    </main>
  );
}
