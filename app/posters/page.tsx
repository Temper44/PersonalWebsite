import Footer from "../components/Footer";
import HeroText from "../components/HeroText";
import FixedBackground from "../components/FixedBackground";
import MarqueeText from "../components/MarqueeText";
import { loadParallaxPoster } from "@/lib/loadImages";
import { ParallaxScrollPoster } from "../components/ui/ParallaxScrollPoster";
import PageUtilities from "../components/PageUtilities";
import { subHeadingTexts } from "@/lib/texts";
import SvgContainer from "../components/SvgContainer";

export default function Page() {
  const parallaxPoster = loadParallaxPoster();

  return (
    <main className="max-screen-center">
      <FixedBackground />
      <PageUtilities />
      <section className="container-flex-center">
        <HeroText heading="Posters" subheading={subHeadingTexts.posters} />
      </section>
      <SvgContainer
        width="504"
        height="716"
        viewBox="0 0 504 716"
        svgClassName="posterSvg"
      >
        <>
          <path d="M1 676V1.15527H503V676H1Z" stroke="black" />
          <path
            d="M73 122.975V28.2256C73 28.2256 43.6517 30.1317 29.4774 51.5528M73 122.975C73 122.975 19.9033 119.519 22.0642 75.4561C22.5489 65.5728 25.3788 57.747 29.4774 51.5528M73 122.975L29.4774 51.5528"
            stroke="black"
          />
          <path
            d="M40.5 345.83L126.75 265.043M309 285.415L233.5 165.055L164.25 229.919M367 460.101L349.645 432.002M46 238.114L72 213.761M349.645 432.002L424.237 362.689M349.645 432.002L337.496 412.332M424.237 362.689L486 460.101H199L340.5 230.621L400.185 324.755M424.237 362.689L413.547 345.83M337.496 412.332L413.547 345.83M337.496 412.332L325.637 393.131M413.547 345.83L400.185 324.755M325.637 393.131L162.5 128.994L109.5 178.637M325.637 393.131L400.185 324.755M29 531.287L58 504.124L87 531.287L116 504.124L145 531.287L174 504.124L199 527.54L224 504.124L249 527.54L274 504.124L299 527.54L324 504.124L349 527.54L374 504.124L399 527.54L424 504.124L449 527.54M72 213.761L126.75 265.043M72 213.761L90.25 196.667M126.75 265.043L145 247.949M145 247.949L90.25 196.667M145 247.949L164.25 229.919M90.25 196.667L109.5 178.637M109.5 178.637L164.25 229.919"
            stroke="black"
          />
          <path
            d="M29 558.918L56.5 533.16L84 558.918L111.5 533.16L139 558.918L166.5 533.16L194 558.918L221.5 533.16L249 558.918L276.5 533.16L304 558.918L331.5 533.16L359 558.918L386.5 533.16L414 558.918L441.5 533.16L469 558.918"
            stroke="black"
          />
          <path
            d="M318.829 28.2256L464 159.953M351.367 28.2256L464 130.428M386.409 28.2256L464 98.6316M420.949 28.2256L464 67.2896M448.482 28.2256L464 42.3068M40 576.03H464L40 601.921H464L40 627.813H464L40 652.795H464"
            stroke="black"
          />
          <path
            d="M115.5 371.588C115.5 383.697 105.01 393.568 92 393.568C78.99 393.568 68.5 383.697 68.5 371.588C68.5 359.479 78.99 349.608 92 349.608C105.01 349.608 115.5 359.479 115.5 371.588Z"
            stroke="black"
          />
          <path
            d="M166.5 409.054C166.5 433.061 145.713 452.577 120 452.577C94.2874 452.577 73.5 433.061 73.5 409.054C73.5 385.047 94.2874 365.531 120 365.531C145.713 365.531 166.5 385.047 166.5 409.054Z"
            stroke="black"
          />
          <path d="M291.5 619.8V469.467H397.5V619.8H291.5Z" stroke="black" />
        </>
      </SvgContainer>

      <section className="container-flex-center" id="posters">
        <MarqueeText text="selected work" />
        <ParallaxScrollPoster images={parallaxPoster} />
      </section>
      <Footer />
    </main>
  );
}
