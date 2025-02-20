import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";

import "./globals.scss";
import { CursorProvider } from "./components/context/CursorContext";
// import NextTopLoader from "nextjs-toploader";
import ThemeContextProvider from "./components/context/ThemeContext";
import ThemeSwitch from "./components/ThemeSwitch";
import { ReactLenis } from "lenis/react";
import PageTransissionAnimation from "./components/PageTransissionAnimation";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const overusedGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/OverusedGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/OverusedGrotesk-Book.woff2",
      weight: "350",
      style: "normal",
    },
    {
      path: "../public/fonts/OverusedGrotesk-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/OverusedGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/OverusedGrotesk-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/OverusedGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/OverusedGrotesk-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/OverusedGrotesk-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-overused-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${raleway.variable} ${overusedGrotesk.variable}`}
    >
      <body className={`vsc-initialized font-nunito antialiased`}>
        <PageTransissionAnimation>
          <ThemeContextProvider>
            <ReactLenis
              root
              options={{
                lerp: 0.05,
                duration: 2,
              }}
            >
              <CursorProvider>
                {/* <NextTopLoader
                  color="#FF4D59"
                  showSpinner={false}
                  height={4}
                  showForHashAnchor={false}
                /> */}
                {children}
                <ThemeSwitch />
              </CursorProvider>
            </ReactLenis>
          </ThemeContextProvider>
        </PageTransissionAnimation>
      </body>
    </html>
  );
}
