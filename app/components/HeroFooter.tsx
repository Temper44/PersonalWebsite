"use client";

import React, { useEffect, useState } from "react";
import { useCursor } from "./context/CursorContext";
import { navItems, socialMedia } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const HeroFooter = () => {
  const { setIsCursorHovered } = useCursor();
  const [isMobile, setIsMobile] = useState(false);

  // Detect media query changes
  const mediaQueryMobile = useMediaQuery({ maxWidth: 768 });

  // Prevent re-renders by syncing state once
  useEffect(() => {
    setIsMobile(mediaQueryMobile);
  }, [mediaQueryMobile]);

  return (
    <footer className="container absolute bottom-0 flex items-center justify-around px-11 py-7">
      {/* Social Media Links */}
      <motion.div
        className="flex-center w-full gap-4 md:w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {socialMedia.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`More information on ${link.name}`}
            className="transition-colors duration-500 ease-in-out ~text-[1.175rem]/[1.25rem] dark:text-white"
            onMouseEnter={() => setIsCursorHovered(true)}
            onMouseLeave={() => setIsCursorHovered(false)}
          >
            {link.icon}
          </Link>
        ))}
        {/* <Link
          href="/imprint"
          className="text-sm transition-colors duration-500 ease-in-out md:inline xl:text-base 2xl:text-lg"
          aria-label="More information on Imprint"
          onMouseEnter={() => setIsCursorHovered(true)}
          onMouseLeave={() => setIsCursorHovered(false)}
        >
          Imprint
        </Link> */}
      </motion.div>

      {/* Navigation */}
      <motion.nav
        className={`items-center justify-center md:flex md:gap-6 lg:gap-8 ${
          isMobile ? "hidden" : "flex"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        {navItems.map((item, index) =>
          index === 0 ? null : (
            <Link
              key={item.name}
              href={item.link}
              aria-label={`More information on ${item.name}`}
              className="nav-hover-btn relative font-medium uppercase tracking-wide transition-colors duration-500 ease-in-out ~text-[0.8rem]/[1rem]"
              onMouseEnter={() => setIsCursorHovered(true)}
              onMouseLeave={() => setIsCursorHovered(false)}
            >
              {item.name}
            </Link>
          ),
        )}
      </motion.nav>
    </footer>
  );
};

export default HeroFooter;
