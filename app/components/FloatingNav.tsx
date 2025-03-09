"use client";

import { motion } from "framer-motion";
import { sectionLinks } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";
import { useActiveSectionContext } from "./context/active-section-context";
import { useCursor } from "./context/CursorContext";

export default function FloatingNav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { setIsCursorHovered } = useCursor();

  return (
    <header className="relative z-10">
      <motion.div
        className="fixed left-1/2 top-6 h-[3rem] w-[95%] max-w-[330px] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-sm backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-zinc-950 dark:bg-opacity-75 xs:w-[90%] sm:max-w-[25rem]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-6 flex h-[3rem] -translate-x-1/2 py-2 sm:top-[1.5rem]">
        <ul className="flex-center gap-1 tracking-wide text-zinc-600 ~text-[0.9rem]/[1rem] sm:gap-4">
          {sectionLinks.map((link) => (
            <motion.li
              key={link.hash}
              className="flex-center relative h-full"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex-center w-full px-3 py-3 sm:px-4 sm:py-4",
                  {
                    "text-black dark:text-white": activeSection === link.name,
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
                    className="absolute inset-0 -z-10 rounded-full border border-black border-opacity-40 dark:border-white dark:border-white/40"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
