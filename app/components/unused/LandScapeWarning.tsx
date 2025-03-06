"use client";

import { useEffect, useState } from "react";

const LandscapeWarning = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkLandscape = () => {
      // Check if the window is in landscape mode
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    // Check on initial load
    checkLandscape();

    // Listen to orientation changes (e.g., rotating the phone)
    window.addEventListener("orientationchange", checkLandscape);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("orientationchange", checkLandscape);
    };
  }, []);

  if (isLandscape) {
    return (
      <div className="fixed left-0 right-0 top-0 z-50 bg-red-500 p-4 text-center text-white">
        <p>
          Please do not use landscape mode. Please rotate back to portrait mode.
        </p>
      </div>
    );
  }

  return null;
};

export default LandscapeWarning;
