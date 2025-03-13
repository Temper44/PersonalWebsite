"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

export default function ScrollManager() {
  const lenis = useLenis(); // ✅ Get Lenis instance

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function update(time: number) {
      if (lenis) {
        lenis.raf(time); // ✅ Sync Lenis
      }
      ScrollTrigger.update(); // ✅ Sync ScrollTrigger
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);

    // return () => {
    //   ScrollTrigger.kill(); // ✅ Cleanup ScrollTrigger on unmount
    // };
  }, [lenis]); // ✅ Only runs when `lenis` is available

  return null; // This component does not render anything
}
