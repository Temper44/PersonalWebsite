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
import SvgContainer from "../components/SvgContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathias Ebner - Web Developer Portfolio",
  description:
    "Explore the portfolio of Mathias Ebner, a creative technologist specializing in web development, and UI/UX. Discover innovative web projects, stunning web designs that combine technology and creativity. Learn more about his skills and passions.",
  keywords: [
    "Web Developer",
    "Frontend Developer",
    "Creative Technologist",
    "Portfolio",
    "Software Engineer Portfolio",
    "Web Projects",
    "Web Design",
    "Mathias Ebner",
    "Technology",
  ],
  openGraph: {
    siteName: "Mathias Ebner - Web Developer Portfolio",
    type: "website",
    locale: "en_AT",
    url: "http://personal-website-iota-neon-25.vercel.app/portfolio",
    title: "Mathias Ebner - Web Developer Portfolio",
    countryName: "Austria",
    images: [
      {
        url: "/img/icon_1200_portfolio.png",
        width: 1200,
        height: 630,
        alt: "Mathias Ebner - Creative Technologist",
      },
    ],
    description:
      "Explore the portfolio of Mathias Ebner, a creative technologist specializing in web development, and UI/UX. Discover innovative web projects, stunning web designs that combine technology and creativity.",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
};

export default function Page() {
  return (
    <ActiveSectionContextProvider>
      <main className="relative-center">
        <FixedBackground />
        <PageUtilities hide={true} />
        <FloatingNav />
        <HeroParallax products={products} />
        <SvgContainer
          width="492"
          height="406"
          viewBox="0 0 492 406"
          svgClassName="portfolioSvg"
        >
          <>
            <path
              d="M317.14 405.221H174.861C172.359 405.221 171.33 402.226 173.373 400.877L187.65 391.431C190.335 389.654 192.058 386.879 192.373 383.828L197.033 338.664H294.968L299.628 383.828C299.943 386.879 301.666 389.654 304.351 391.431L318.628 400.877C320.67 402.225 319.641 405.221 317.14 405.221Z"
              fill="white"
              stroke="#030303"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M491 13.2897V326.335C491 332.855 485.707 338.14 479.176 338.14H13.6852C7.15533 338.14 1.8623 332.855 1.8623 326.335V13.2897C1.8623 6.76956 7.15533 1.48438 13.6852 1.48438H479.177C485.707 1.48366 491 6.76956 491 13.2897Z"
              fill="white"
              stroke="#030303"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M491 321V333.547C491 334.679 489.875 335.713 488.021 336.498C485.855 337.42 482.687 338 479.156 338H12.8445C9.31315 338 6.14541 337.42 3.97911 336.498C2.12455 335.713 1 334.679 1 333.547V321H491Z"
              fill="white"
              stroke="#030303"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M479 15H16V303H479V15Z"
              fill="white"
              stroke="#030303"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38 32H88V50.3824M38 32L88 50.3824M38 32V50.3824H88"
              stroke="black"
            />
            <path
              d="M320 43.9789L322.708 38.4033L325.416 43.9789L328.124 38.4033L330.833 43.9789L333.541 38.4033L336.249 43.9789L338.957 38.4033L341.665 43.9789L344.373 38.4033L347.081 43.9789"
              stroke="black"
            />
            <path
              d="M356.64 43.9789L359.348 38.4033L362.056 43.9789L364.764 38.4033L367.472 43.9789L370.18 38.4033L372.888 43.9789L375.597 38.4033L378.305 43.9789L381.013 38.4033L383.721 43.9789"
              stroke="black"
            />
            <path
              d="M393.279 43.9789L395.987 38.4033L398.696 43.9789L401.404 38.4033L404.112 43.9789L406.82 38.4033L409.528 43.9789L412.236 38.4033L414.944 43.9789L417.653 38.4033L420.361 43.9789"
              stroke="black"
            />
            <path
              d="M429.919 43.9789L432.627 38.4033L435.335 43.9789L438.043 38.4033L440.752 43.9789L443.46 38.4033L446.168 43.9789L448.876 38.4033L451.584 43.9789L454.292 38.4033L457 43.9789"
              stroke="black"
            />
            <path
              d="M281 226V106H445V226H281Z"
              stroke="black"
              strokeWidth="1.10519"
            />
            <path
              d="M329.5 79.5C329.5 89.4166 321.019 97.5 310.5 97.5C299.981 97.5 291.5 89.4166 291.5 79.5C291.5 69.5834 299.981 61.5 310.5 61.5C321.019 61.5 329.5 69.5834 329.5 79.5Z"
              stroke="black"
            />
            <path
              d="M366.5 110C366.5 127.915 350.865 142.5 331.5 142.5C312.135 142.5 296.5 127.915 296.5 110C296.5 92.0845 312.135 77.5 331.5 77.5C350.865 77.5 366.5 92.0845 366.5 110Z"
              stroke="black"
            />
            <path
              d="M52 124L62.6875 103L73.375 124L84.0625 103L94.75 124L105.437 103L116.125 124L126.812 103L137.5 124L148.187 103L158.875 124L169.562 103L180.25 124L190.937 103L201.625 124L212.312 103L223 124"
              stroke="black"
              strokeWidth="1.13333"
            />
            <path
              d="M52 157L59.6875 148L67.375 157L75.0625 148L82.75 157L90.4375 148L98.125 157L105.813 148L113.5 157L121.188 148L128.875 157L136.563 148L144.25 157L151.938 148L159.625 157L167.313 148L175 157"
              stroke="black"
            />
            <path
              d="M52 169L59.6875 160L67.375 169L75.0625 160L82.75 169L90.4375 160L98.125 169L105.813 160L113.5 169L121.188 160L128.875 169L136.563 160L144.25 169L151.938 160L159.625 169L167.313 160L175 169"
              stroke="black"
            />
            <path
              d="M52 181L59.6875 173L67.375 181L75.0625 173L82.75 181L90.4375 173L98.125 181L105.813 173L113.5 181L121.188 173L128.875 181L136.563 173L144.25 181L151.938 173L159.625 181L167.313 173L175 181"
              stroke="black"
            />
            <path
              d="M52 193L59.6875 185L67.375 193L75.0625 185L82.75 193L90.4375 185L98.125 193L105.813 185L113.5 193L121.188 185L128.875 193L136.563 185L144.25 193L151.938 185L159.625 193L167.313 185L175 193"
              stroke="black"
            />
            <path
              d="M52 222.471V217.529C52 215.58 53.5802 214 55.5294 214H83.4706C85.4198 214 87 215.58 87 217.529V222.471C87 224.42 85.4198 226 83.4706 226H55.5294C53.5802 226 52 224.42 52 222.471Z"
              stroke="black"
              strokeWidth="0.705882"
            />
            <path
              d="M57 222.453L60.0882 218.235L63.1765 222.453L66.2647 218.235L69.3529 222.453L72.4412 218.235L75.5294 222.453L78.6176 218.235L81.7059 222.453"
              stroke="black"
              strokeWidth="0.636691"
            />
            <path
              d="M98 222.471V217.529C98 215.58 99.5802 214 101.529 214H136.118C138.067 214 139.647 215.58 139.647 217.529V222.471C139.647 224.42 138.067 226 136.118 226H101.529C99.5802 226 98 224.42 98 222.471Z"
              stroke="black"
              strokeWidth="0.705882"
            />
            <path
              d="M102.235 222.453L105.324 218.235L108.412 222.453L111.5 218.235L114.588 222.453L117.677 218.235L120.765 222.453L123.853 218.235L126.941 222.453"
              stroke="black"
              strokeWidth="0.636691"
            />
            <path
              d="M135.661 220.594C135.799 220.456 135.799 220.233 135.661 220.095L133.415 217.849C133.277 217.711 133.054 217.711 132.916 217.849C132.778 217.987 132.778 218.21 132.916 218.348L134.913 220.345L132.916 222.341C132.778 222.479 132.778 222.703 132.916 222.84C133.054 222.978 133.277 222.978 133.415 222.84L135.661 220.594ZM129.765 220.698H135.412V219.992H129.765V220.698Z"
              fill="black"
            />
            <path d="M406 226L445 187M389 226L445 170" stroke="black" />
          </>
        </SvgContainer>
        <About />
        <Skills />
        <Projects />
        <ParallaxScrollGallery />
        <Contact />
      </main>
    </ActiveSectionContextProvider>
  );
}
