import { useEffect, useRef } from "react";
import GridImage from "./GridImage";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GridGallery = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const path = svgRef.current.querySelector("path");
    if (!path) return;
    const pathLength = path.getTotalLength();

    // Set initial SVG path styles
    gsap.set(path, {
      strokeDasharray: pathLength,
      // strokeDashoffset: pathLength,
    });

    gsap.fromTo(
      path,
      {
        strokeDashoffset: pathLength,
      },
      {
        strokeDashoffset: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top top",
          end: "bottom 10%",
          scrub: 8,
        },
      },
    );
  }, []);

  return (
    <div className="relative-center container grid w-full grid-cols-1 gap-5 sm:grid-cols-12 sm:gap-2">
      {/* Block 1 */}
      <div className="col-span-12 sm:col-span-6 sm:row-span-5">
        <GridImage
          className="aspect-[3/2]"
          src="/img/gallery/1.jpg"
          alt="car on a mountain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, (max-width: 1536px) 50vw, 33vw"
        />
      </div>

      {/* Block 2 */}
      <div className="col-span-12 sm:col-span-4 sm:col-start-8 sm:row-span-5 sm:row-start-3">
        <GridImage
          className="aspect-[1/1]"
          src="/img/gallery/2.jpg"
          alt="gondolier in Venice"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, (max-width: 1536px) 40vw, 28vw"
        />
      </div>

      {/* Block 3 */}
      <div className="col-span-12 sm:col-span-4 sm:col-start-2 sm:row-span-3 sm:row-start-8">
        <GridImage
          className="aspect-[3/4]"
          src="/img/gallery/3.jpg"
          alt="modern building"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 30vw, (max-width: 1536px) 33vw, 25vw"
        />
      </div>

      {/* Block 4 */}
      <div className="col-span-12 sm:col-span-6 sm:col-start-7 sm:row-span-4 sm:row-start-9">
        <GridImage
          className="aspect-[4/3]"
          src="/img/gallery/4.jpg"
          alt="Red Bull plane"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, (max-width: 1536px) 50vw, 40vw"
        />
      </div>

      {/* Block 5 */}
      <div className="col-span-12 sm:col-span-4 sm:row-span-6 sm:row-start-[13]">
        <GridImage
          className="aspect-[4/5]"
          src="/img/gallery/5.jpg"
          alt="people enjoying the sun"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>

      {/* Block 6 */}
      <div className="col-span-12 sm:col-span-4 sm:col-start-8 sm:row-span-4 sm:row-start-[16]">
        <GridImage
          className="aspect-[1/1]"
          src="/img/gallery/6.jpg"
          alt="ship in harbor"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, (max-width: 1536px) 40vw, 28vw"
        />
      </div>

      {/* Block 7 */}
      <div className="col-span-12 sm:col-span-6 sm:row-span-5 sm:row-start-[23]">
        <GridImage
          className="aspect-[16/9]"
          src="/img/gallery/7.jpg"
          alt="Verona from above"
          sizes="(max-width: 640px) 100vw, (max-width: 1536px) 45vw, 40vw"
        />
      </div>

      {/* Block 8 */}
      <div className="col-span-12 sm:col-span-3 sm:col-start-9 sm:row-span-6 sm:row-start-[25]">
        <GridImage
          className="aspect-[9/16]"
          src="/img/gallery/8.jpg"
          alt="Vienna ferris wheel"
          sizes="(max-width: 640px) 100vw, (max-width: 1536px) 25vw, 20vw"
        />
      </div>

      {/* Block 9 */}
      <div className="col-span-12 sm:col-span-4 sm:col-start-2 sm:row-span-4 sm:row-start-[30]">
        <GridImage
          className="aspect-[4/5]"
          src="/img/gallery/9.jpg"
          alt="Rotterdam bridge"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>

      {/* Block 10 */}
      <div className="col-span-12 sm:col-span-6 sm:col-start-7 sm:row-span-4 sm:row-start-[32]">
        <GridImage
          className="aspect-[3/2]"
          src="/img/gallery/10.jpg"
          alt="three mopeds in the street"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, (max-width: 1536px) 50vw, 33vw"
        />
      </div>

      {/* Block 11 */}
      <div className="col-span-12 sm:col-span-5 sm:col-start-3 sm:row-span-4 sm:row-start-[39]">
        <GridImage
          className="aspect-[3/2]"
          src="/img/gallery/11.jpg"
          alt="old man cycling"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, (max-width: 1536px) 50vw, 33vw"
        />
      </div>

      {/* Block 12 */}
      <div className="col-span-12 sm:col-span-3 sm:col-start-10 sm:row-span-4 sm:row-start-[41]">
        <GridImage
          className="aspect-[4/5]"
          src="/img/gallery/12.jpg"
          alt="Church in Milan"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>

      {/* SVG container */}
      <div className="svg-container full-size absolute left-0 top-0 z-[-10] hidden items-center justify-center md:flex">
        <svg
          ref={svgRef}
          className="snakeSvg"
          width="1200"
          height="3963"
          viewBox="0 0 1200 3963"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1.00098C1 1.00098 839 60.001 830 222.001C821 384.001 -106.353 442.121 46.5 787.001C165.357 1055.18 766.895 707.667 766.5 1001C766.23 1200.89 511 1727.5 431.5 1388C352 1048.5 996.385 1602.84 962 1884.5C921.151 2219.11 153.5 1666 110.5 2026C67.5 2386 587.059 2158.76 602.5 2399.5C618.084 2642.46 128.5 2543 153.5 2832C178.5 3121 785.683 2866.06 793.5 3144C801.191 3417.48 215 3800 192.5 3504C170 3208 962.283 3437.46 891.5 3713.5C859.403 3838.68 673 3962 673 3962" />
        </svg>
      </div>
    </div>
  );
};

export default GridGallery;
