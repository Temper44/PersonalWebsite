"use client";

import React, { useRef } from "react";
import { useCursor } from "./context/CursorContext";
import Link from "next/link";
import { useInView } from "motion/react";
import { motion } from "framer-motion";

const Button = ({
  type = "button",
  text,
  icon,
  href,
  className,
}: {
  type?: "button" | "submit" | "reset";
  text: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}) => {
  return href ? (
    <Link href={href}>
      <ButtonSkillet
        type={type}
        text={text}
        icon={icon}
        className={className}
      />
    </Link>
  ) : (
    <ButtonSkillet type={type} text={text} icon={icon} className={className} />
  );
};

export default Button;

const ButtonSkillet = ({
  type,
  text,
  icon,
  className,
}: {
  type: "button" | "submit" | "reset";
  text: string;
  icon?: React.ReactNode;
  className?: string;
}) => {
  const refButton = useRef<HTMLDivElement>(null);
  const isInView = useInView(refButton, {
    margin: "0px 0px -100px 0px",
    once: true,
  });
  const { setIsCursorHovered } = useCursor();

  return (
    <motion.div
      ref={refButton}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      <button
        type={type}
        className={`flex-center group relative w-fit gap-3 rounded-full px-[2px] py-[2px] font-medium tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-105 dark:text-black hover:dark:text-white ${className}`}
        onMouseEnter={() => setIsCursorHovered(true)}
        onMouseLeave={() => setIsCursorHovered(false)}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-purple-500" />
        <div className="flex-center relative gap-3 rounded-full bg-zinc-900 ~text-[0.9rem]/[1.05rem] ~px-[1.64rem]/[1.87rem] ~py-[0.58rem]/[0.68rem] group-hover:bg-transparent dark:bg-zinc-100">
          {text}
          {icon && (
            <span className="opacity-80 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
              {icon}
            </span>
          )}
        </div>
      </button>
    </motion.div>
  );
};

// only clasname in button element
//origan  button:  className={group flex w-fit items-center justify-center gap-3 rounded-full border border-rose-500 border-purple-500 bg-zinc-900 px-8 py-3 font-medium tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-500 focus:scale-105 active:scale-105 dark:bg-zinc-100 dark:text-black hover:dark:text-white ${className}}
