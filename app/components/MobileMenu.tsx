import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/lib/data";
import { TextHoverEffect } from "./ui/TextHoverEffect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevState) => !prevState);
  const menuRef = useRef(null);
  const isVerySmallPhone = useMediaQuery({ maxHeight: 680 });

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, x: "100%", y: 0 }, // Initial state: off-screen to the right (100% of its width)
        { opacity: 1, y: 0, x: "0%", duration: 0.75, ease: "power2.out" }, // End state: at its natural position (0%)
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        x: "100%", // Move the menu back off-screen to the right
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <>
      <motion.button
        className={`burgerMenu fixed right-8 top-6 z-50 flex items-center justify-center transition-all md:hidden ${
          isOpen &&
          "opened right-[1.4rem] top-4 rounded-full bg-black p-2 dark:bg-white"
        }`}
        aria-label="Main Menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        <svg width="50" height="50" viewBox="0 0 100 100">
          <path
            className={`line line1 ${isOpen && "!stroke-white dark:!stroke-black"}`}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 
             94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 
             79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 
             L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className={`line line3 ${isOpen && "!stroke-white dark:!stroke-black"}`}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 
             94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 
             79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 
             L 25.000021,74.999942"
          />
        </svg>
      </motion.button>

      <motion.div
        className="nav-sidebar"
        ref={menuRef}
        // animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
        // exit={{ y: "-100%" }}
        // transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-dot-black/[0.1] dark:bg-dot-white/[0.1]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,theme(colors.background))] dark:bg-black" />
        </div>
        <nav
          className={`flex h-screen flex-col items-center justify-center gap-6 ${isVerySmallPhone && "gap-0"}`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              aria-label={`More information on ${item.name}`}
            >
              {isOpen && <TextHoverEffect text={item.name} />}
            </Link>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default MobileMenu;
