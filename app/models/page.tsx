import Footer from "../components/Footer";
import HeroText from "../components/HeroText";
import { subHeadingTexts } from "@/lib/texts";
import PageUtilities from "../components/PageUtilities";

export default function Page() {
  return (
    <main className="max-screen-center">
      <PageUtilities hide />
      <section className="container-flex-center">
        <HeroText
          heading="Models"
          subheading={subHeadingTexts.models}
          infoText="Coming soon.."
        />
      </section>
      <Footer />
    </main>
  );
}
