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
    once: false,
    margin: "0px 0px -100px 0px",
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
        className={`group relative flex w-fit items-center justify-center gap-3 rounded-full px-[2px] py-[2px] font-medium tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-105 dark:text-black hover:dark:text-white ${className}`}
        onMouseEnter={() => setIsCursorHovered(true)}
        onMouseLeave={() => setIsCursorHovered(false)}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-purple-500" />
        <div className="relative flex items-center gap-3 rounded-full bg-zinc-900 px-[26px] py-[9px] group-hover:bg-transparent dark:bg-zinc-100 sm:px-[28px] sm:py-[10px] xl:px-[30px] xl:py-[11px]">
          {text}
          {icon && (
            <span className="text-xs opacity-80 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
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
