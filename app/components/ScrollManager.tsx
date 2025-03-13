// ScrollManager.tsx
"use client";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import gsap from "gsap";

// Register ScrollTrigger to make sure it works
gsap.registerPlugin(ScrollTrigger);

export default function ScrollManager({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Check if it's a mobile device, and normalize scroll only for mobile
    if (window.innerWidth <= 640) {
      ScrollTrigger.normalizeScroll(true); // Only apply to mobile devices
    }
  }, []);

  return <>{children}</>; // Return the children as they are wrapped with ScrollManager
}
