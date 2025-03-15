import HeroText from "./components/HeroText";
import FixedBackground from "./components/FixedBackground";
import HeroFooter from "./components/HeroFooter";
import PageUtilities from "./components/PageUtilities";
import { subHeadingTexts } from "@/lib/texts";

export default function NotFound() {
  return (
    <main className="max-screen-center">
      <FixedBackground />
      <PageUtilities />

      <section className="container-flex-center">
        <HeroText
          heading="404 - Not Found"
          subheading={subHeadingTexts.notFound}
          infoText="Please navigate to a different page"
        />
      </section>
      <HeroFooter />
    </main>
  );
}
