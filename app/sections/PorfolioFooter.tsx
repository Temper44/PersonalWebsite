import { navItemsFull, socialMedia } from "@/lib/data";
import { motion } from "motion/react";
import React from "react";
import Form from "../components/Form";
import { useCursor } from "../components/context/CursorContext";

export default function PortfolioFooter() {
  const { setIsCursorHovered } = useCursor();

  return (
    <footer
      className="relative min-h-[180dvh] xs:min-h-[110dvh] sm:h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="absolute bottom-0 min-h-[180dvh] w-full xs:min-h-[110dvh] sm:fixed sm:h-screen">
        <div className="flex h-full w-full flex-col items-center justify-center pb-6 pt-32 sm:pt-32">
          <p className="text-sm tracking-wide lg:text-base">
            Thanks for stopping by, want to
          </p>
          <motion.div
            className="marquee-forward-desktop py-8 text-6xl sm:py-10 sm:text-7xl md:text-8xl lg:py-20 lg:text-9xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.9,
              ease: "easeIn",
            }}
          >
            <span className="font-bold">Say Hello?</span>
            <span aria-hidden className="font-bold">
              -Say Hello?
            </span>
            <span aria-hidden className="font-bold">
              -Say Hello?
            </span>
            <span aria-hidden className="font-bold">
              -Say Hello?
            </span>
            <span aria-hidden className="font-bold">
              -Say Hello?
            </span>
            <span aria-hidden className="font-bold">
              -Say Hello?
            </span>
            <span aria-hidden className="font-bold">
              -Say Hello?
            </span>
            <span aria-hidden className="font-bold">
              -Say Hello?
            </span>
          </motion.div>
          <div className="w-full max-w-xl p-4">
            <Form />
          </div>
          <div className="grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-4 sm:grid-cols-2 sm:gap-4 sm:py-12">
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold tracking-wide">Socials</h3>
              <div className="my-2 h-[1px] w-full bg-zinc-900 dark:bg-zinc-300" />
              <ul className="mt-2 grid grid-cols-2 gap-2">
                {socialMedia.map(
                  (item, index) =>
                    index < 4 && (
                      <li
                        key={item.id}
                        className="flex items-center gap-2 tracking-wide text-zinc-800 dark:text-zinc-100"
                      >
                        {item.icon}
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          onMouseEnter={() => setIsCursorHovered(true)}
                          onMouseLeave={() => setIsCursorHovered(false)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ),
                )}
              </ul>
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold tracking-wide">Menu</h3>
              <div className="my-2 h-[1px] w-full bg-zinc-900 dark:bg-zinc-300" />
              <ul className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                {navItemsFull.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 tracking-wide text-zinc-800 dark:text-zinc-100"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => setIsCursorHovered(true)}
                      onMouseLeave={() => setIsCursorHovered(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex w-full max-w-6xl flex-col items-center justify-between px-4 text-xs font-light tracking-wide text-zinc-800 dark:text-white sm:flex-row">
            <p>@2025 Mathias Ebner</p>
            <p>Made with love and coffee</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
