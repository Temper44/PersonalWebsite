import React from "react";
import { useCursor } from "./context/CursorContext";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

const socialMedia = [
  {
    id: 1,
    name: "Instagram",
    href: "https://www.instagram.com/ebnermathias/",
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
    href: "https://github.com/Temper44",
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
    <motion.footer
      className="container absolute bottom-0 flex w-full items-center justify-center gap-4 px-11 py-7 md:w-auto"
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
          className="text-[1.2rem] text-black transition-colors duration-500 ease-in-out dark:text-white md:text-[1.15rem] xl:text-lg 2xl:text-xl"
          onMouseEnter={() => setIsCursorHovered(true)}
          onMouseLeave={() => setIsCursorHovered(false)}
        >
          {link.icon}
        </Link>
      ))}
      <Link
        href="/imprint"
        className="text-sm transition-colors duration-500 ease-in-out md:inline xl:text-base 2xl:text-lg"
        aria-label="More information on Imprint"
        onMouseEnter={() => setIsCursorHovered(true)}
        onMouseLeave={() => setIsCursorHovered(false)}
      >
        Imprint
      </Link>
    </motion.footer>
  );
};

export default Footer;
