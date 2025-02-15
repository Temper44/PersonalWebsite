import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { CursorProvider } from "./components/context/CursorContext";
import NextTopLoader from "nextjs-toploader";
import ThemeContextProvider from "./components/context/ThemeContext";
import ThemeSwitch from "./components/ThemeSwitch";
import { ReactLenis } from "lenis/react";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/NeueMontreal-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
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
      className={`${nunitoSans.variable} ${neueMontreal.variable}`}
    >
      <body className={`vsc-initialized font-nunito antialiased`}>
        <ThemeContextProvider>
          <ReactLenis
            root
            options={{
              lerp: 0.05,
              duration: 2,
            }}
          >
            <CursorProvider>
              <NextTopLoader color="#FF4D59" showSpinner={false} height={4} />
              {children}
              <ThemeSwitch />
            </CursorProvider>
          </ReactLenis>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
