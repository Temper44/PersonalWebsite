import React, { useRef } from "react";
import Button from "../components/Button";
import Image from "next/image";
import MaskText from "./MaskText";
import Link from "next/link";
import { useCursor } from "../components/context/CursorContext";
import { useInView } from "motion/react";
import { motion } from "framer-motion";

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
  reverseColor?: boolean;
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
  reverseColor = false,
}: SliderProjectProps) => {
  const refImage = useRef<HTMLDivElement>(null);
  const refFooter = useRef<HTMLDivElement>(null);
  const isInView = useInView(refImage, {
    margin: "0px 0px -100px 0px",
    once: true,
  });
  const isInViewFooter = useInView(refFooter, {
    margin: "0px 0px 0px 0px",
    once: true,
  });

  const { setIsCursorHovered } = useCursor();

  return (
    <div
      className={`panel flex-center relative h-svh w-screen will-change-transform ${className}`}
    >
      <div className="grid h-full max-w-8xl grid-cols-1 gap-y-3 p-6 md:auto-rows-auto md:grid-cols-2 md:gap-10 md:p-12 md:pb-6 xl:gap-20 xl:pt-28 2xl:gap-28 2xl:pt-36">
        <div className="f-col order-2 justify-between gap-6 md:order-1">
          <div className="f-col gap-4">
            <Link href={detailsPageLink}>
              <MaskText
                text={[name]}
                headline
                className={`textShadow w-min font-semibold leading-tight tracking-wide ~text-[2.4rem]/[4.5rem] max-xs:text-4xl md:pb-2 ${reverseColor ? "!text-zinc-100 dark:!text-zinc-900" : ""}`}
                cursorHoverEffect
              />
            </Link>
            <MaskText
              text={[subheading]}
              className={`font-medium tracking-wide text-zinc-900 ~text-[1.1rem]/[1.5rem] dark:text-zinc-100 max-xs:text-base ${reverseColor ? "!text-zinc-100 dark:!text-zinc-900" : ""}`}
            />
            <MaskText
              text={[descriptionShort]}
              className={`font-light !leading-relaxed tracking-wide text-zinc-900 ~text-base/lg dark:text-zinc-100 max-xs:text-sm ${reverseColor ? "!text-zinc-100 dark:!text-zinc-900" : ""}`}
            />
          </div>
          <div className="self-end">
            <Button text="Explore More" type="button" href={detailsPageLink} />
          </div>
        </div>
        <Link
          className="relative order-1 col-span-2 aspect-[3/2] w-full max-xs:h-[30vh] md:order-2 md:col-span-1"
          href={detailsPageLink}
          onMouseEnter={() => setIsCursorHovered(true)}
          onMouseLeave={() => setIsCursorHovered(false)}
          scroll={true}
        >
          <motion.div
            ref={refImage}
            className="full-size relative shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <Image
              src={imgPreview.src}
              alt={imgPreview.alt}
              fill
              quality={80}
              className="rounded-sm object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </motion.div>
        </Link>
        <div className="order-3 col-span-2 flex items-end">
          <div className="flex-center w-full gap-4" ref={refFooter}>
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInViewFooter ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className={`h-[1px] flex-1 bg-zinc-900 dark:bg-zinc-100 ${reverseColor ? "!bg-zinc-100 dark:!bg-zinc-900" : ""}`}
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInViewFooter ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className={`font-medium tracking-wider text-zinc-900 ~/xl:~text-sm/xl dark:text-zinc-100 md:mr-16 ${reverseColor ? "!text-zinc-100 dark:!text-zinc-900" : ""}`}
            >
              0{++currentCounter}/0{projectsLength}
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderProject;
