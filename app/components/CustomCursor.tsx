"use client";

import React, { useEffect, useState } from "react";
import { useCursor } from "./context/CursorContext";

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
      style={{
        position: "fixed", // Ensure it's fixed to the viewport
        zIndex: 9999,
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: isCursorHovered ? "55px" : "35px", // Change size on hover
        height: isCursorHovered ? "55px" : "35px",
        backgroundColor: "#1A5773", // Example color
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // Ensure cursor doesn't interfere with clicks
        mixBlendMode: "difference", // Optional: for unique visual effects
        transition: "width 0.1s ease, height 0.1s ease",
      }}
    />
  );
};

export default CustomCursor;
