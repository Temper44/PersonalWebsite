import { navItemsFull, socialMedia } from "@/lib/data";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import Form from "../components/Form";
import { useCursor } from "../components/context/CursorContext";

export default function PortfolioFooter() {
  const { setIsCursorHovered } = useCursor();
  const refFooter = useRef<HTMLDivElement>(null);
  const refSocials = useRef<HTMLDivElement>(null);
  const refMenu = useRef<HTMLDivElement>(null);
  const refParagraph = useRef<HTMLDivElement>(null);

  const isInViewParagraph = useInView(refFooter, {
    once: false,
    margin: "0px 0px 0px 0px",
  });

  const isInViewSocials = useInView(refSocials, {
    once: false,
    margin: "0px 0px 0px 0px",
  });
  const isInViewMenu = useInView(refMenu, {
    once: false,
    margin: "0px 0px 0px 0px",
  });
  const isInViewFooter = useInView(refFooter, {
    once: false,
    margin: "0px 0px 0px 0px",
  });

  return (
    <footer
      className="relative min-h-[180dvh] overflow-x-hidden xs:min-h-[115dvh] sm:h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="absolute bottom-0 min-h-[180dvh] w-full xs:min-h-[110dvh] sm:fixed sm:h-screen">
        <div className="flex h-full w-full flex-col items-center justify-center pb-6 pt-32 sm:pt-32">
          <motion.p
            className="text-sm tracking-wide lg:text-base"
            ref={refParagraph}
            initial={{ opacity: 0 }}
            animate={isInViewParagraph ? { opacity: 1 } : {}}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            Thanks for stopping by, want to
          </motion.p>
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
            <motion.div
              ref={refSocials}
              className="max-w-md"
              initial={{ opacity: 0, x: -100 }}
              animate={isInViewSocials ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
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
            </motion.div>
            <motion.div
              className="max-w-md"
              ref={refMenu}
              initial={{ opacity: 0, x: 100 }}
              animate={isInViewMenu ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
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
            </motion.div>
          </div>

          <motion.div
            className="flex w-full max-w-6xl flex-col items-center justify-between px-4 text-[0.65rem] font-light tracking-wide text-zinc-800 dark:text-white sm:flex-row sm:text-xs"
            ref={refFooter}
            initial={{ opacity: 0 }}
            animate={isInViewFooter ? { opacity: 1 } : {}}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <p>@2025 Mathias Ebner</p>
            <p>Made with love and coffee</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
