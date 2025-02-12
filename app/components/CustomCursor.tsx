"use client";

import React, { useEffect } from "react";
import { useCursor } from "./context/CursorContext";

const CustomCursor = () => {
  const { isCursorHovered, position, setPosition } = useCursor();

  useEffect(() => {
    const updateCursorPosition = (e: { clientX: number; clientY: number }) => {
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

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 9999,
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: isCursorHovered ? "55px" : "35px", // Change size on hover
        height: isCursorHovered ? "55px" : "35px",
        backgroundColor: "#1A5773", // Example color
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // Make sure the cursor doesn't interfere with clicks
        mixBlendMode: "difference", // You can change this to 'multiply', 'screen', etc.
        transition: "width 0.1s ease, height 0.1s ease",
      }}
    />
  );
};

export default CustomCursor;
