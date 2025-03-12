"use client";

import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ScrollManager() {
  useEffect(() => {
    ScrollTrigger.normalizeScroll(true);

    return () => {
      ScrollTrigger.normalizeScroll(false); // Cleanup when unmounting
    };
  }, []);

  return null; // This component doesn't render anything
}
