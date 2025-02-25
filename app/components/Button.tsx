import React from "react";
import { useCursor } from "./context/CursorContext";

const Button = ({
  type = "button",
  text,
  icon,
}: {
  type: "button" | "submit" | "reset";
  text: string;
  icon?: React.ReactNode;
}) => {
  const { setIsCursorHovered } = useCursor();

  return (
    <button
      type={type}
      className="group flex w-fit items-center justify-center gap-3 rounded-full bg-gray-900 px-8 py-3 tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-rose-500 hover:to-purple-500 focus:scale-105 active:scale-105"
      onMouseEnter={() => setIsCursorHovered(true)}
      onMouseLeave={() => setIsCursorHovered(false)}
    >
      {text}
      {icon && (
        <span className="text-xs opacity-80 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
