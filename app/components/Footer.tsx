import React from "react";
import { useCursor } from "../components/context/CursorContext";
import { navItems } from "@/lib/data";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

const socialMedia = [
  {
    id: 1,
    name: "Instagram",
    href: "https://instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    name: "GitHub",
    href: "https://github.com",
    icon: <FaGithub />,
  },
  {
    id: 4,
    name: "Email",
    href: "mailto:mathiasebner2000@gmail.com",
    icon: <IoMdMail />,
  },
];

const Footer = () => {
  const { setIsCursorHovered } = useCursor();

  return (
    <footer className="container absolute bottom-0 flex w-full items-center justify-between px-14 py-7">
      <motion.div
        className="flex w-full items-center justify-center gap-4 md:w-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {socialMedia.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`More information on ${link.name}`}
            className="text-[1.2rem] text-black transition-colors duration-500 ease-in-out dark:text-white md:text-[1.15rem] xl:text-lg 2xl:text-xl"
            onMouseEnter={() => setIsCursorHovered(true)}
            onMouseLeave={() => setIsCursorHovered(false)}
          >
            {link.icon}
          </Link>
        ))}
        <Link
          href="/imprint"
          className="hidden text-sm transition-colors duration-500 ease-in-out md:inline xl:text-base 2xl:text-lg"
          aria-label="More information on Imprint"
          onMouseEnter={() => setIsCursorHovered(true)}
          onMouseLeave={() => setIsCursorHovered(false)}
        >
          Imprint
        </Link>
      </motion.div>
      <motion.nav
        className="hidden items-center justify-center md:flex md:gap-6 lg:gap-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            aria-label={`More information on ${item.name}`}
            className="nav-hover-btn"
            onMouseEnter={() => setIsCursorHovered(true)}
            onMouseLeave={() => setIsCursorHovered(false)}
          >
            {item.name}
          </Link>
        ))}
      </motion.nav>
    </footer>
  );
};

export default Footer;
