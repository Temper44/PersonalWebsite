import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useCursor } from "./context/CursorContext";

const HeroText = ({
  heading,
  subheading,
  infoText,
  anchor,
}: {
  heading: string;
  subheading?: string;
  infoText?: string;
  anchor?: string;
}) => {
  const { setIsCursorHovered } = useCursor();

  return (
    <>
      <motion.h1
        className="font-grain font-grotesk text-center text-7xl font-bold capitalize !leading-[1.15] tracking-wide xs:text-[6.2rem] sm:text-9xl md:text-[9rem] lg:text-[10rem] xl:text-[11rem] 2xl:text-[12rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 1,
          ease: "easeIn",
        }}
      >
        {heading}
      </motion.h1>
      {subheading && (
        <TextGenerateEffect
          words={subheading}
          className="py-4 md:px-[4em] lg:px-[7.5rem] xl:px-[10rem]"
        />
      )}

      {!infoText && (
        <motion.a
          className="scrollIcon mt-40 md:mt-20"
          href={`#${anchor}`}
          aria-label="scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onMouseEnter={() => setIsCursorHovered(true)}
          onMouseLeave={() => setIsCursorHovered(false)}
          transition={{
            delay: 2.3,
            duration: 1,
            ease: "easeIn",
          }}
        ></motion.a>
      )}
      {infoText && (
        <motion.p
          className="z-10 py-4 text-center text-base font-bold text-black dark:text-white md:text-xl xl:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
            ease: "easeIn",
          }}
        >
          {infoText}
        </motion.p>
      )}
    </>
  );
};

export default HeroText;
