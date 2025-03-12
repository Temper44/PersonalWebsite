"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { sectionLinks } from "@/lib/data";
// import Link from "next/link";
import { clsx } from "clsx";
import { useActiveSectionContext } from "./context/active-section-context";
import { useCursor } from "./context/CursorContext";
import { useState } from "react";
import { useLenis } from "lenis/react";
import Link from "next/link";

export default function FloatingNav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { setIsCursorHovered } = useCursor();
  const lenis = useLenis(); // Get the Lenis instance

  const [visible, setVisible] = useState(true);

  const { scrollYProgress } = useScroll();

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

  const handleNavClick = (linkHash: string, linkName: string) => {
    const targetElement = document.querySelector(linkHash);

    if (targetElement) {
      lenis?.scrollTo(targetElement as HTMLElement, {
        duration: 2, // Adjust the duration as needed
        // offset: -60, // Adjust the offset as needed
        // easing: "easeInOut", // Predefined easing function
      });
    }
    window.history.pushState(null, "", linkHash);
    setActiveSection(linkName);
    setTimeOfLastClick(Date.now());
  };

  return (
    <motion.header
      className="relative z-10"
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        delay: 0.3,
      }}
    >
      <motion.div
        className="will-change-all l fixed bottom-8 left-1/2 h-[2.85rem] w-[95%] max-w-[330px] rounded-full border border-black/10 border-opacity-40 bg-white/85 bg-opacity-90 shadow-sm backdrop-blur-[0.4rem] dark:border-white/10 dark:bg-zinc-950/90 dark:bg-opacity-90 xs:w-[90%] sm:h-[3rem] sm:max-w-[25rem] 2xl:h-[3.1rem] 2xl:max-w-[28rem] 3xl:h-[3.5rem] 3xl:max-w-[32rem]"
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{
          y: 0,
          x: "-50%",
          opacity: 1,
          transition: { delay: 1.7, duration: 0.4, ease: [0.33, 1, 0.68, 1] },
        }}
      ></motion.div>

      <nav className="will-change-all fixed bottom-8 left-1/2 flex h-[2.85rem] -translate-x-1/2 py-[0.4rem] sm:h-[3rem] 2xl:h-[3.1rem] 3xl:h-[3.5rem]">
        <ul className="flex-center gap-1 font-medium tracking-wide text-zinc-900 ~text-[0.9rem]/[1.1rem] dark:text-zinc-300 sm:gap-4">
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
                  "flex-center w-full px-[0.8rem] sm:px-[1rem] 2xl:px-[1.25rem] 3xl:px-[1.5rem]",
                  {
                    "text-white": activeSection === link.name,
                  },
                )}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor link behavior
                  handleNavClick(link.hash, link.name); // Manually scroll using Lenis
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
