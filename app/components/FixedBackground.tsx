import React from "react";

const FixedBackground = () => {
  return (
    <>
      <div className="bg-grain fixed inset-0 z-[-10] h-screen w-screen" />
      <div className="fixed left-0 top-0 z-[-10] flex h-screen w-screen items-center justify-center bg-dot-black/[0.2] dark:bg-dot-white/[0.1]">
        <div className="bg-gradient pointer-events-none fixed inset-0 z-[-10] flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,theme(colors.background))] dark:bg-black" />
      </div>
    </>
  );
};

export default FixedBackground;
