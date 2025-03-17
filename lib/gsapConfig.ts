// gsapConfig.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// gsap.config({
//   force3D: true,
// });

ScrollTrigger.config({
  //   limitCallbacks: true,
  ignoreMobileResize: true,
});

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger, useGSAP };
