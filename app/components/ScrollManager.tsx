// "use client";
// import { useEffect } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
// import gsap from "gsap";

// // Register ScrollTrigger to make sure it works
// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollManager({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useEffect(() => {
//     // Check if it's a mobile device, and normalize scroll only for mobile
//     if (window.innerWidth <= 640) {
//       ScrollTrigger.normalizeScroll(true); // Only apply to mobile devices
//     }
//   }, []);

//   return <>{children}</>; // Return the children as they are wrapped with ScrollManager
// }

"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollManager() {
  useEffect(() => {
    if (
      window.innerWidth <= 640 &&
      navigator.userAgent.toLowerCase().includes("firefox")
    ) {
      ScrollTrigger.normalizeScroll(true);
    }
  }, []);

  return null;
}

// "use client";
// import { useEffect } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
// import gsap from "gsap";

// // Register ScrollTrigger to make sure it works
// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollManager({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useEffect(() => {
//     // Check if it's a mobile device, and normalize scroll only for mobile
//     if (window.innerWidth <= 640) {
//       ScrollTrigger.normalizeScroll(true); // Only apply to mobile devices
//     }
//   }, []);

//   return <>{children}</>; // Return the children as they are wrapped with ScrollManager
// }

// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollManager({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const lenisRef = useRef<Lenis | null>(null);

//   useEffect(() => {
//     // Initialize Lenis
//     const lenis = new Lenis({
//       duration: 2,
//       lerp: 0.05,
//       // syncTouch: true, // Improves touch scrolling behavior
//     });

//     lenisRef.current = lenis;

//     // Sync Lenis with GSAP's ticker at the correct frame rate
//     function update(time: number) {
//       lenis.raf(time * 1000); // Convert time to milliseconds
//     }

//     gsap.ticker.add(update);
//     gsap.ticker.lagSmoothing(0); // Prevents stuttering caused by frame drops

//     // Enable ScrollTrigger's normalizeScroll (only for mobile)
//     if (window.innerWidth <= 640 && navigator.userAgent.toLowerCase().includes('firefox')) {
//       ScrollTrigger.normalizeScroll(true);
//     }

//     // Clean up on unmount
//     return () => {
//       gsap.ticker.remove(update);
//       lenis.destroy();
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return <>{children}</>;
// }
