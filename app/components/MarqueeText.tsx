// "use client";

// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const MarqueeText = ({
//   text,
//   fontMobileBigger,
// }: {
//   text: string;
//   fontMobileBigger?: boolean;
// }) => {
//   const marqueeRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // ScrollTrigger.normalizeScroll(false);
//     const marquee = marqueeRef.current;

//     if (!marquee) return;

//     // Sync with scrolling using ScrollTrigger
//     ScrollTrigger.create({
//       trigger: marquee,
//       start: "top bottom",
//       end: "bottom top",
//       // invalidateOnRefresh: true,
//       scrub: 1, // Smooth effect
//       onUpdate: (self) => {
//         gsap.set(marquee, {
//           xPercent: -self.scroll() * 0.01, // Adjust speed dynamically
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       },
//     });

//     return () => {
//       ScrollTrigger.killAll(); // Clean up on unmount
//     };
//   }, []);

//   return (
//     <div
//       className="overflow-hidden"
//       style={{
//         overflow: "hidden",
//         whiteSpace: "nowrap",
//         position: "relative",
//         width: "99vw",
//       }}
//     >
//       <div
//         ref={marqueeRef}
//         style={{
//           display: "inline-block",
//           whiteSpace: "nowrap",
//         }}
//         className="will-change-transform"
//       >
//         <h2
//           className={`inline-block overflow-hidden font-normal uppercase italic tracking-wide ${fontMobileBigger ? "~text-[3.2rem]/[13rem]" : "~text-[2.25rem]/[13rem]"} ~mt-[9rem]/[13rem] ~mb-[4rem]/[8rem]`}
//         >
//           {text} - {text} - {text} - {text} - {text} - {text} - {text} - {text}
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default MarqueeText;

// "use client";

// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";

// const MarqueeText = ({
//   text,
//   fontMobileBigger,
// }: {
//   text: string;
//   fontMobileBigger?: boolean;
// }) => {
//   const marqueeRef = useRef<HTMLDivElement>(null);
//   const timelineRef = useRef<gsap.core.Timeline | null>(null);

//   useEffect(() => {
//     const marquee = marqueeRef.current;

//     if (!marquee) return;

//     // Create the infinite scrolling effect
//     const marqueeTimeline = gsap.timeline({
//       repeat: -1,
//     });

//     // Animate the marquee text
//     // marqueeTimeline.to(marquee, {
//     //   xPercent: -100, // Move the text fully out of the viewport
//     //   duration: 10, // Duration for one full scroll
//     //   ease: "none",
//     // });

//     // Store the timeline reference for use in scroll interaction
//     timelineRef.current = marqueeTimeline;

//     // Scroll interaction
//     const updateOnScroll = () => {
//       const scrollAmount = window.scrollY || 0;

//       // Pause the timeline while scrolling
//       //   marqueeTimeline.pause();

//       // Adjust position based on scroll
//       gsap.to(marquee, {
//         xPercent: -scrollAmount * 0.01, // Adjust speed by multiplying scroll
//         duration: 0.3,
//         ease: "power2.out",
//         // scrub: 1,
//         onComplete: () => {
//           // Resume the timeline after scrolling stops
//           marqueeTimeline.play();
//         },
//       });
//       // gsap.ticker.lagSmoothing(0);
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", updateOnScroll);

//     return () => {
//       // Clean up event listener
//       window.removeEventListener("scroll", updateOnScroll);
//     };
//   }, []);

//   return (
//     <div
//       className="overflow-hidden"
//       style={{
//         overflow: "hidden",
//         whiteSpace: "nowrap",
//         position: "relative",
//         width: "99vw",
//       }}
//     >
//       <div
//         ref={marqueeRef}
//         style={{
//           display: "inline-block",
//           whiteSpace: "nowrap",
//         }}
//         className="will-change-transform"
//       >
//         <h2
//           className={`inline-block overflow-hidden font-normal uppercase italic tracking-wide ${fontMobileBigger ? "~text-[3.2rem]/[13rem]" : "~text-[2.25rem]/[13rem]"} ~mt-[9rem]/[13rem] ~mb-[4rem]/[8rem]`}
//         >
//           {text} - {text} - {text} - {text} - {text} - {text} - {text} - {text}
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default MarqueeText;

// "use client";

// import React, { useRef } from "react";
// import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsapConfig";

// const MarqueeText = ({
//   text,
//   fontMobileBigger,
// }: {
//   text: string;
//   fontMobileBigger?: boolean;
// }) => {
//   const marqueeRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     const marquee = marqueeRef.current;

//     if (!marquee) return;

//     // Sync with scrolling using ScrollTrigger
//     ScrollTrigger.create({
//       trigger: marquee,
//       start: "top bottom",
//       end: "bottom top",
//       scrub: 1, // Smooth effect
//       onUpdate: (self) => {
//         gsap.to(marquee, {
//           xPercent: -self.progress * 10, // Adjust speed dynamically
//           ease: "power2.out",
//         });
//       },
//     });
//   }, []);

//   return (
//     <div
//       className="overflow-hidden"
//       style={{
//         overflow: "hidden",
//         whiteSpace: "nowrap",
//         position: "relative",
//         width: "99vw",
//       }}
//     >
//       <div
//         ref={marqueeRef}
//         style={{
//           display: "inline-block",
//           whiteSpace: "nowrap",
//         }}
//         className="will-change-transform"
//       >
//         <h2
//           className={`inline-block overflow-hidden font-normal uppercase italic tracking-wide ${fontMobileBigger ? "~text-[3.2rem]/[13rem]" : "~text-[2.25rem]/[13rem]"} ~mt-[9rem]/[13rem] ~mb-[4rem]/[8rem]`}
//         >
//           {text} - {text} - {text} - {text} - {text} - {text} - {text} - {text}
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default MarqueeText;

"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsapConfig";

const MarqueeText = ({
  text,
  fontMobileBigger,
}: {
  text: string;
  fontMobileBigger?: boolean;
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    gsap.set(marquee, { xPercent: 0 });

    ScrollTrigger.create({
      trigger: marquee,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        gsap.set(marquee, { xPercent: -self.progress * 13 });
      },
    });
  }, []);

  return (
    <div
      className="overflow-hidden"
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        width: "99vw",
      }}
    >
      <div
        ref={marqueeRef}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
        className="will-change-transform"
      >
        <h2
          className={`inline-block overflow-hidden font-semibold uppercase italic tracking-wide sm:font-medium ${
            fontMobileBigger
              ? "~text-[3.5rem]/[13rem]"
              : "~text-[2.25rem]/[13rem]"
          } ~mt-[11rem]/[25rem] ~mb-[4.5rem]/[9rem]`}
        >
          {text} - {text} - {text} - {text} - {text} - {text} - {text} - {text}
        </h2>
      </div>
    </div>
  );
};

export default MarqueeText;
