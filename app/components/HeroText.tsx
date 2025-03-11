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
        className="colorEffect textShadow text-center font-bold capitalize leading-snug tracking-wide ~text-[6.2rem]/[14rem] max-xs:text-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: "easeIn",
        }}
      >
        {heading}
      </motion.h1>
      {subheading && (
        <TextGenerateEffect
          words={subheading}
          className="px-4 py-4 sm:max-w-[70%]"
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
          className="z-10 py-4 text-center font-bold tracking-wide text-zinc-900 ~text-base/2xl dark:text-zinc-100"
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
