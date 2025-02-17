import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/lib/data";
import { TextHoverEffect } from "./ui/TextHoverEffect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useCursor } from "./context/CursorContext";
import { usePathname } from "next/navigation"; // Import the useRouter hook

interface MobileMenuProps {
  isFullPage?: boolean;
  displayHome?: boolean;
}

const MobileMenu = ({ isFullPage, displayHome = true }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevState) => !prevState);
  const menuRef = useRef(null);
  const { setIsCursorHovered } = useCursor();
  const pathname = usePathname(); // Get the current router

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, x: "100%", y: 0 },
        { opacity: 1, y: 0, x: "0%", duration: 0.75, ease: "power2.out" },
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        x: "100%",
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <>
      <motion.button
        className={`burgerMenu fixed right-8 top-6 z-50 flex items-center justify-center rounded-full backdrop-blur-[0.4rem] transition-all ${!isFullPage && "md:hidden"} ${
          isOpen &&
          "opened right-[1.4rem] top-4 rounded-full bg-black p-2 dark:bg-white"
        }`}
        aria-label="Main Menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        onMouseEnter={() => setIsCursorHovered(true)}
        onMouseLeave={() => setIsCursorHovered(false)}
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
        className={`nav-sidebar ${!isFullPage && "md:hidden"}`}
        ref={menuRef}
      >
        <div className="top-0flex absolute left-0 h-screen w-screen items-center justify-center bg-grid-small-black/[0.15] dark:bg-grid-small-white/[0.25]">
          <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,theme(colors.background))] dark:bg-black" />
        </div>
        <nav
          className={`z-100 relative flex h-screen flex-col items-center justify-center gap-0`}
        >
          {navItems.map((item, index) => {
            if (index === 0 && !displayHome) {
              return null;
            }
            // Check if the current route matches the item's link
            const isActive = pathname === item.link;

            return (
              <Link
                key={item.name}
                href={item.link}
                aria-label={`More information on my ${item.name}`}
              >
                {/* Pass the isActive prop to TextHoverEffect */}
                {isOpen && (
                  <TextHoverEffect text={item.name} active={isActive} />
                )}
              </Link>
            );
          })}
        </nav>
      </motion.div>
    </>
  );
};

export default MobileMenu;
