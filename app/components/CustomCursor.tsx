"use client";

import React, { useEffect, useState } from "react";
import { useCursor } from "./context/CursorContext";
import clsx from "clsx";

const CustomCursor = () => {
  const { isCursorHovered, position, setPosition } = useCursor();
  const [isClient, setIsClient] = useState(false);

  // Ensure the component only renders after the client is mounted
  useEffect(() => {
    setIsClient(true);

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Add event listener to track mouse movement
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [setPosition]);

  if (!isClient) return null; // Prevent server-side rendering

  return (
    <div
      className={clsx(
        "pointer-events-none fixed z-[9999] rounded-full bg-white mix-blend-difference transition-all duration-100 ease-in-out",
        isCursorHovered ? "size-[3.25rem]" : "size-[1.56rem]",
      )}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default CustomCursor;
