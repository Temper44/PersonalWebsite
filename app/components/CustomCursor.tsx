"use client";

import React, { useEffect, useState, useRef } from "react";
import { useCursor } from "./context/CursorContext";

const CustomCursor = () => {
  const { isCursorHovered } = useCursor();
  const [isClient, setIsClient] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Ref to store the cursor position
  const positionRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  // Update the cursor position on mouse move
  useEffect(() => {
    setIsClient(true);

    const updateCursorPosition = (e: MouseEvent) => {
      // Update cursor position in the ref without triggering a re-render
      positionRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Check for touch devices
    const checkTouchDevice = () => {
      if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      } else {
        setIsTouchDevice(false);
      }
    };

    checkTouchDevice();

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // Use requestAnimationFrame for smoother cursor movement
  useEffect(() => {
    let animationFrameId: number;

    const moveCursor = () => {
      if (cursorRef.current) {
        // Set cursor position
        cursorRef.current.style.left = `${positionRef.current.x}px`;
        cursorRef.current.style.top = `${positionRef.current.y}px`;
      }

      // Continue the animation
      animationFrameId = requestAnimationFrame(moveCursor);
    };

    animationFrameId = requestAnimationFrame(moveCursor); // Start the animation loop

    return () => cancelAnimationFrame(animationFrameId); // Cleanup the animation loop
  }, []);

  if (!isClient || isTouchDevice) return null; // Hide cursor on touch devices

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        zIndex: 9999,
        width: isCursorHovered ? "52px" : "25px",
        height: isCursorHovered ? "52px" : "25px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        mixBlendMode: "difference",
        transition: "width 0.1s ease, height 0.1s ease",
      }}
    />
  );
};

export default CustomCursor;
