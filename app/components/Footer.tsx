"use client";

import React from "react";
import { useCursor } from "./context/CursorContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { socialMedia } from "@/lib/data";

const Footer = () => {
  const { setIsCursorHovered } = useCursor();

  return (
    <motion.footer
      className="container absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 items-center justify-center gap-4 px-11 py-7 md:w-auto"
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
          className="~text-[1.175rem]/[1.4rem] text-black transition-colors duration-500 ease-in-out dark:text-white"
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
    </motion.footer>
  );
};

export default Footer;
