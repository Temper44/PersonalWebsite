import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.scss";
import ThemeContextProvider from "./components/context/ThemeContext";
import ThemeSwitch from "./components/ThemeSwitch";
import { TransitionProvider } from "./components/TransitionProvider";
// import ScrollManager from "./components/ScrollManager";
import ReactLenis from "lenis/react";
import ScrollManager from "./components/ScrollManager";
import { CursorProvider } from "./components/context/CursorContext";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mathias Ebner - Creative Technologist",
  description:
    "Explore the personal website of Mathias Ebner, a creative technologist specializing in web development, and UI/UX. Discover innovative web projects, stunning web designs that combine technology and creativity. Learn more about his interests in technology, photos, poster designs and much more",
  keywords: [
    "Web Developer",
    "Frontend Developer",
    "Creative Technologist",
    "Portfolio",
    "Web Projects",
    "UI/UX",
    "Web Design",
    "Mathias Ebner",
    "Photos",
    "Poster Designs",
    "Technology",
    "Personal Website",
  ],
  openGraph: {
    siteName: "Mathias Ebner - Creative Technologist",
    type: "website",
    locale: "en_AT",
    url: "https://mathiasebner.com",
    title: "Mathias Ebner - Creative Technologist",
    images: [
      {
        url: "icon.png",
        width: 100,
        height: 100,
        alt: "Mathias Ebner - Creative Technologist",
      },
    ],
    description:
      "Explore the personal website of Mathias Ebner, a creative technologist specializing in web development, and UI/UX. Discover innovative web projects, stunning web designs that combine technology and creativity.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} `}>
      <body className={`vsc-initialized font-urbanist antialiased`}>
        <TransitionProvider>
          <ThemeContextProvider>
            {/* <ScrollManager> */}
            <ReactLenis
              root
              options={{
                duration: 2,
                lerp: 0.05,
                // syncTouch: true,
                // syncTouchLerp: 0.1,
                // touchMultiplier: 0,
                // wheelMultiplier: 1.25,
                // syncTouchLerp: 0.99,

                // smoothWheel: true,
              }}
            >
              <CursorProvider>
                <ScrollManager />

                {children}

                <ThemeSwitch />
              </CursorProvider>
            </ReactLenis>
            {/* </ScrollManager> */}
          </ThemeContextProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
