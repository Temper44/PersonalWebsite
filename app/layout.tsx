import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.scss";
import ThemeContextProvider from "./components/context/ThemeContext";
import { TransitionProvider } from "./components/TransitionProvider";
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
    url: "http://personal-website-iota-neon-25.vercel.app/",
    title: "Mathias Ebner - Creative Technologist",
    countryName: "Austria",

    images: [
      {
        url: "https://personal-website-iota-neon-25.vercel.app/img/icon_1200.png",
        width: 1200,
        height: 630,
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
            <ReactLenis
              root
              options={{
                lerp: 0.12,
                wheelMultiplier: 1.4,
              }}
            >
              <CursorProvider>
                <ScrollManager />

                {children}
              </CursorProvider>
            </ReactLenis>
          </ThemeContextProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
