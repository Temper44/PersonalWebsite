import React from "react";
import { useCursor } from "./context/CursorContext";
import Link from "next/link";

const Button = ({
  type = "button",
  text,
  icon,
  href,
  className,
}: {
  type: "button" | "submit" | "reset";
  text: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}) => {
  const { setIsCursorHovered } = useCursor();

  return href ? (
    <Link href={href}>
      <button
        type={type}
        className={`group relative flex w-fit items-center justify-center gap-3 rounded-full px-[2px] py-[2px] font-medium tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-105 dark:text-black hover:dark:text-white ${className}`}
        onMouseEnter={() => setIsCursorHovered(true)}
        onMouseLeave={() => setIsCursorHovered(false)}
      >
        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-purple-500" />

        {/* Button Content */}
        <div className="relative flex items-center gap-3 rounded-full bg-zinc-900 px-8 py-3 group-hover:bg-transparent dark:bg-zinc-100">
          {text}
          {icon && (
            <span className="text-xs opacity-80 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
              {icon}
            </span>
          )}
        </div>
      </button>
    </Link>
  ) : (
    <button
      type={type}
      className={`group relative flex w-fit items-center justify-center gap-3 rounded-full px-[2px] py-[2px] font-medium tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-105 dark:text-black hover:dark:text-white ${className}`}
      onMouseEnter={() => setIsCursorHovered(true)}
      onMouseLeave={() => setIsCursorHovered(false)}
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-purple-500" />

      {/* Button Content */}
      <div className="relative flex items-center gap-3 rounded-full bg-zinc-900 px-8 py-3 group-hover:bg-transparent dark:bg-zinc-100">
        {text}
        {icon && (
          <span className="text-xs opacity-80 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
            {icon}
          </span>
        )}
      </div>
    </button>
  );
};

export default Button;

// only clasname in button element
//origan  button:  className={group flex w-fit items-center justify-center gap-3 rounded-full border border-rose-500 border-purple-500 bg-zinc-900 px-8 py-3 font-medium tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-500 focus:scale-105 active:scale-105 dark:bg-zinc-100 dark:text-black hover:dark:text-white ${className}}
