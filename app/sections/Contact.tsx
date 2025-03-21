"use client";

import { navItemsFull, socialMedia } from "@/lib/data";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import Form from "../components/Form";
import { useCursor } from "../components/context/CursorContext";
import { footerText } from "@/lib/texts";
import { useSectionInView } from "@/lib/hooks";
import MaskText from "../components/MaskText";

export default function Contact() {
  const { setIsCursorHovered } = useCursor();
  const refFooter = useRef<HTMLDivElement>(null);
  const refSocials = useRef<HTMLDivElement>(null);
  const refMenu = useRef<HTMLDivElement>(null);

  const isInViewSocials = useInView(refSocials, {
    once: true,
  });
  const isInViewMenu = useInView(refMenu, {
    once: true,
  });
  const isInViewFooter = useInView(refFooter, {
    once: true,
  });

  const { ref } = useSectionInView("Contact");

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative h-[210svh] overflow-x-hidden xs:h-[170svh] sm:h-svh"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="absolute bottom-0 h-[200svh] w-full xs:h-[160svh] sm:fixed sm:h-svh">
        <div className="full-size flex flex-col items-center justify-evenly p-6">
          <MaskText
            containerClassName="textShort"
            viewInMargin={{
              margin: "10px",
              once: true,
            }}
            text={[footerText]}
          />

          <motion.div
            className="marquee-forward-desktop mt-[-2rem] font-bold ~text-[3.75rem]/[9rem] sm:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.9,
              ease: "easeIn",
            }}
          >
            <span>Say Hello?</span>
            <span aria-hidden>-Say Hello?</span>
            <span aria-hidden>-Say Hello?</span>
            <span aria-hidden>-Say Hello?</span>
            <span aria-hidden>-Say Hello?</span>
            <span aria-hidden>-Say Hello?</span>
            <span aria-hidden>-Say Hello?</span>
            <span aria-hidden>-Say Hello?</span>
          </motion.div>
          <div className="w-full max-w-2xl py-4">
            <Form />
          </div>
          <div className="mb-[2rem] grid w-full max-w-7xl grid-cols-1 justify-items-center gap-10 sm:mb-0 sm:grid-cols-2 sm:gap-4 sm:py-12 2xl:pt-4 3xl:pt-14">
            <motion.div
              ref={refSocials}
              className="w-full sm:w-[80%] 2xl:w-[600px]"
              initial={{ opacity: 0, x: -100 }}
              animate={isInViewSocials ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <h3 className="font-semibold tracking-wide ~text-2xl/3xl">
                Socials
              </h3>
              <div className="my-2 h-[1px] w-full bg-zinc-900 dark:bg-zinc-100" />
              <ul className="mt-2 grid grid-cols-2 gap-2">
                {socialMedia.map(
                  (item, index) =>
                    index < 4 && (
                      <li
                        key={item.id}
                        className="flex items-center gap-2 tracking-wide text-zinc-900 ~text-base/lg dark:text-zinc-100"
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
              className="w-full sm:w-[80%] 2xl:w-[550px]"
              ref={refMenu}
              initial={{ opacity: 0, x: 100 }}
              animate={isInViewMenu ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <h3 className="font-semibold tracking-wide ~text-2xl/3xl">
                Menu
              </h3>
              <div className="my-2 h-[1px] w-full bg-zinc-900 dark:bg-zinc-100" />
              <ul className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                {navItemsFull.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 tracking-wide text-zinc-900 ~text-base/lg dark:text-zinc-100"
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
            className="absolute bottom-16 flex w-full max-w-7xl flex-col items-center justify-between px-4 font-light tracking-wide text-zinc-900 ~text-[0.65rem]/[0.85rem] dark:text-zinc-100 sm:bottom-6 sm:flex-row"
            ref={refFooter}
            initial={{ opacity: 0 }}
            animate={isInViewFooter ? { opacity: 1 } : {}}
            transition={{
              duration: 1,
              ease: "easeIn",
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
