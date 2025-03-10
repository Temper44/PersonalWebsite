"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { sectionLinks } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";
import { useActiveSectionContext } from "./context/active-section-context";
import { useCursor } from "./context/CursorContext";
import { useState } from "react";

export default function FloatingNav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { setIsCursorHovered } = useCursor();
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      // 🔥 Check if the page is scrollable
      const isScrollable =
        document.documentElement.scrollHeight > window.innerHeight;

      if (!isScrollable) {
        setVisible(true); // Always show the menu if scrolling isn't possible
        return;
      }

      if (scrollYProgress.get() < 0.12) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <motion.header
      className="will-change-opacity relative z-10"
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.div
        className="will-change-all fixed bottom-8 left-1/2 h-[2.8rem] w-[95%] max-w-[330px] rounded-full border border-black/10 border-opacity-40 bg-white bg-opacity-80 shadow-sm backdrop-blur-[0.5rem] dark:border-white/10 dark:bg-zinc-950 dark:bg-opacity-75 xs:w-[90%] sm:h-[3rem] sm:max-w-[25rem]"
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{
          y: 0,
          x: "-50%",
          opacity: 1,
          transition: { delay: 1.7, duration: 0.4, ease: [0.33, 1, 0.68, 1] },
        }}
      ></motion.div>

      <nav className="will-change-all fixed bottom-8 left-1/2 flex h-[2.8rem] -translate-x-1/2 py-[0.4rem] sm:h-[3rem]">
        <ul className="flex-center gap-1 font-medium tracking-wide text-zinc-900 ~text-[0.875rem]/[1rem] dark:text-zinc-300 sm:gap-4">
          {sectionLinks.map((link) => (
            <motion.li
              key={link.hash}
              className="flex-center relative h-full"
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.7,
                  duration: 0.4,
                  ease: [0.33, 1, 0.68, 1],
                },
              }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex-center w-full px-[0.75rem] sm:px-[1rem]",
                  {
                    "text-white": activeSection === link.name,
                  },
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                onMouseEnter={() => setIsCursorHovered(true)}
                onMouseLeave={() => setIsCursorHovered(false)}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="will-change-all absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-rose-500 to-purple-500"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
