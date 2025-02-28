import { useState, useRef, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navItems } from "@/lib/data";
import gsap from "gsap";
// import Link from "next/link";
import { Link } from "next-transition-router";
import { useCursor } from "./context/CursorContext";
import { usePathname } from "next/navigation"; // Import the useRouter hook
import { useMediaQuery } from "react-responsive";
import MagneticButton from "./MagneticButton";

interface MobileMenuProps {
  isFullPage?: boolean;
  displayHome?: boolean;
}

const MobileMenu = ({ isFullPage, displayHome = true }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevState) => !prevState);
  const menuRef = useRef(null);
  const menuItemsRef = useRef<HTMLAnchorElement[]>([]); // Refs for individual menu items
  const { setIsCursorHovered } = useCursor();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const pathname = usePathname(); // Get the current router

  const isMobileOrTabletLandscape = useMediaQuery({
    query: "(max-width: 1024px) and (orientation: landscape)", // Only detect landscape mode on mobile/tablets
  });

  // GSAP animation on menu state change (open/close)
  useEffect(() => {
    if (isOpen) {
      const timeline = gsap.timeline({
        defaults: { duration: 0.75, ease: "power2.out" },
      });

      timeline
        .set(menuRef.current, { visibility: "visible" }) // Ensure it's visible before animation
        .fromTo(
          menuRef.current,
          { opacity: 0, x: "100%" },
          { opacity: 1, x: "0%" },
        )
        .fromTo(
          menuItemsRef.current,
          { opacity: 0, x: 85 },
          { opacity: 1, x: 0, stagger: 0.1 },
          "-=0.5",
        );
    } else {
      const timeline = gsap.timeline({
        defaults: { duration: 0.3, ease: "power2.out" },
      });

      timeline
        .to(menuRef.current, { opacity: 0, x: "100%" })
        .set(menuRef.current, { visibility: "hidden" }); // Hide after animation
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  // Listen for the Esc key to close the menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false); // Close the menu when the Escape key is pressed
      }
    };

    window.addEventListener("keydown", handleEscKey);

    // Cleanup the event listener when the component unmounts or the menu closes
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.12) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      <motion.div
        className="fixed right-20 top-6 z-50"
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <MagneticButton>
          <motion.button
            className={`burgerMenu flex items-center justify-center rounded-full backdrop-blur-[0.4rem] transition-all ${!isFullPage && "md:hidden"} ${
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
        </MagneticButton>
      </motion.div>

      <motion.div
        className={`nav-sidebar ${!isFullPage && "md:hidden"}`}
        ref={menuRef}
      >
        <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-grid-small-black/[0.15] dark:bg-grid-small-white/[0.25]">
          <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,theme(colors.background))] dark:bg-black" />
        </div>
        <nav
          className={`z-100 relative flex h-screen flex-col items-center justify-center gap-2 xs:gap-6 lg:gap-4 xl:gap-0 ${isMobileOrTabletLandscape && "!gap-2"}`}
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
                onMouseEnter={() => setIsCursorHovered(true)}
                onMouseLeave={() => setIsCursorHovered(false)}
                aria-label={`More information on my ${item.name}`}
                ref={(el) => {
                  if (el && !menuItemsRef.current.includes(el)) {
                    menuItemsRef.current.push(el); // Ensure each element is only added once
                  }
                }}
              >
                <h3
                  className={`nav-text ${isActive && "nav-text-isActive line-through decoration-rose-500"} ${isMobileOrTabletLandscape && "!text-2xl"}`}
                >
                  {item.name}
                </h3>
              </Link>
            );
          })}
        </nav>
      </motion.div>
    </>
  );
};

export default MobileMenu;
