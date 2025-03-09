"use client";

import React, { useEffect, useState } from "react";
import { useCursor } from "./context/CursorContext";

const CustomCursor = () => {
  const { isCursorHovered, position, setPosition } = useCursor();
  const [isClient, setIsClient] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Ensure the component only renders after the client is mounted
  useEffect(() => {
    setIsClient(true);

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Check if the device supports touch events (to detect touch devices)
    const checkTouchDevice = () => {
      if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      } else {
        setIsTouchDevice(false);
      }
    };

    // Initial check for touch device
    checkTouchDevice();

    // Add event listener to track mouse movement
    window.addEventListener("mousemove", updateCursorPosition);

    // Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [setPosition]);

  if (!isClient || isTouchDevice) return null; // Hide cursor on touch devices

  return (
    <div
      style={{
        position: "fixed", // Ensure it's fixed to the viewport
        zIndex: 9999,
        top: position.y + "px",
        left: position.x + "px",
        width: isCursorHovered ? "52px" : "25px", // Change size on hover
        height: isCursorHovered ? "52px" : "25px",
        backgroundColor: "#ffffff", // Example color
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
