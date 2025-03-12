import React from "react";

const FixedBackground = () => {
  return (
    <>
      <div className="bg-grain" />
      <div className="flex-center fixed left-0 top-0 z-[-10] h-dvh w-screen bg-dot-black/[0.2] dark:bg-dot-white/[0.1]">
        <div className="flex-center pointer-events-none fixed inset-0 z-[-10] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,theme(colors.background))] dark:bg-black" />
      </div>
    </>
  );
};

export default FixedBackground;
