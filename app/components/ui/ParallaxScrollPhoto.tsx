"use client";

import {
  useScroll,
  useTransform,
  motion,
  useInView,
  MotionValue,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import { useCursor } from "../context/CursorContext";

export const ParallaxScrollPhoto = ({
  images,
  className,
}: {
  images: { src: string; thumb: string; caption?: string; size?: string }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxClosed, setLightboxClosed] = useState(true);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const translateFirst = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, -200],
  );
  const translateSecond = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, 200],
  );
  const translateThird = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, 0],
  );

  // Split images into 3 parts
  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 1.9 * third);
  const thirdPart = images.slice(1.9 * third);

  const AnimatedWrapper = ({
    children,
    translate,
  }: {
    children: React.ReactNode;
    translate: MotionValue<number>;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
      margin: "0px 0px -100px 0px",
      once: true,
    });

    return (
      <motion.div
        ref={ref}
        style={{ y: translate }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView && lightboxClosed ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="overflow-hidden shadow-xl"
      >
        {children}
      </motion.div>
    );
  };

  const ParallaxImage = ({
    idx,
    el,
    className,
  }: {
    idx: number;
    el: { thumb: string };
    className: string;
  }) => {
    const { setIsCursorHovered } = useCursor();

    return (
      <motion.div
        className={`${className} full-size relative shadow-md`}
        onClick={() => {
          setCurrentImage(idx);
          setIsOpen(true);
          setLightboxClosed(false);
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onMouseEnter={() => setIsCursorHovered(true)}
        onMouseLeave={() => setIsCursorHovered(false)}
      >
        <Image
          src={el.thumb}
          className="object-cover brightness-100 transition-all duration-300 hover:brightness-75"
          fill
          quality={100}
          alt={`Image ${idx + 1}`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </motion.div>
    );
  };

  useEffect(() => {
    if (!isOpen) {
      setLightboxClosed(true);
    }
  }, [isOpen]);

  return (
    <div className={cn("w-full items-start overflow-hidden", className)}>
      <div className="mx-auto grid w-full max-w-9xl grid-cols-1 items-start gap-8 md:grid-cols-3">
        <div className="grid gap-8">
          <Lightbox
            className="cursor-pointer"
            open={isOpen}
            close={() => setIsOpen(false)}
            index={currentImage || 0}
            slides={images.map((el) => ({
              src: el.src,
              alt: el.caption || "Image",
            }))}
          />
          {firstPart.map((el, idx) => (
            <AnimatedWrapper key={`grid-1-${idx}`} translate={translateFirst}>
              <ParallaxImage idx={idx} el={el} className="aspect-[4/5]" />
            </AnimatedWrapper>
          ))}
        </div>

        <div className="grid gap-8">
          {secondPart.map((el, idx) => (
            <AnimatedWrapper key={`grid-2-${idx}`} translate={translateSecond}>
              <ParallaxImage
                idx={idx + firstPart.length}
                el={el}
                className="aspect-[3/4]"
              />
            </AnimatedWrapper>
          ))}
        </div>

        <div className="grid gap-8">
          {thirdPart.map((el, idx) => (
            <AnimatedWrapper key={`grid-3-${idx}`} translate={translateThird}>
              <ParallaxImage
                idx={idx + firstPart.length + secondPart.length}
                el={el}
                className="aspect-[4/5]"
              />
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};
