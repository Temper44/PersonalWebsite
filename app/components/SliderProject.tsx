import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import MaskText from "./MaskText";
import Link from "next/link";
import { useCursor } from "../components/context/CursorContext";

type SliderProjectProps = {
  className?: string;
  name: string;
  detailsPageLink: string;
  subheading: string;
  descriptionShort: string;
  imgPreview: {
    src: string;
    alt: string;
  };
  currentCounter: number;
  projectsLength: number;
};

const SliderProject = ({
  name,
  className,
  detailsPageLink,
  subheading,
  descriptionShort,
  imgPreview,
  currentCounter,
  projectsLength,
}: SliderProjectProps) => {
  //   const ref = useRef<HTMLDivElement>(null);
  //   const isInView = useInView(ref, {
  //     once: true,
  //     margin: "0px 0px -100px 0px",
  //   });
  const { setIsCursorHovered } = useCursor();

  return (
    <div
      className={`panel grid h-[100dvh] w-screen grid-cols-1 gap-y-3 p-4 pb-6 md:auto-rows-auto md:grid-cols-2 md:gap-20 md:p-12 xl:pt-28 2xl:px-20 2xl:pt-36 ${className}`}
    >
      <div className="order-2 flex flex-col justify-between gap-6 md:order-1">
        <div className="flex flex-col gap-4">
          <Link href={detailsPageLink}>
            <MaskText
              text={[name]}
              headline
              className="textShadow text-4xl font-semibold leading-tight tracking-wide xs:text-5xl sm:text-6xl md:pb-2 md:text-7xl xl:text-8xl 2xl:font-bold"
              cursorHoverEffect
            />
          </Link>
          <MaskText
            text={[subheading]}
            className="text-base font-medium tracking-wide text-zinc-900 dark:text-zinc-300 sm:text-lg"
          />
          <MaskText
            text={[descriptionShort]}
            className="text-sm font-light leading-relaxed tracking-wide text-zinc-900 dark:text-zinc-300 sm:text-base"
          />
        </div>
        <Button
          text="Explore More"
          type="button"
          href={detailsPageLink}
          className="justify-self-end"
        />
      </div>
      <Link
        // ref={ref}
        className="relative order-1 col-span-2 aspect-[3/2] w-full shadow-md md:order-2 md:col-span-1"
        // initial={{ opacity: 0, scale: 0.95 }}
        // animate={isInView ? { opacity: 1, scale: 1 } : {}}
        // transition={{
        //   duration: 0.6,
        //   ease: "easeOut",
        // }}
        href={detailsPageLink}
        onMouseEnter={() => setIsCursorHovered(true)}
        onMouseLeave={() => setIsCursorHovered(false)}
      >
        <Image
          src={imgPreview.src}
          alt={imgPreview.alt}
          fill
          quality={100}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </Link>
      <div className="order-3 col-span-2 flex items-end">
        <div className="flex w-full items-center justify-between gap-4">
          <span className="h-[1px] flex-1 bg-zinc-900 dark:bg-zinc-300" />
          <span className="mr-20 text-sm font-medium tracking-wider text-zinc-900 dark:text-zinc-300 sm:text-lg md:mr-16 xl:text-xl">
            0{++currentCounter}/0{projectsLength}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SliderProject;
