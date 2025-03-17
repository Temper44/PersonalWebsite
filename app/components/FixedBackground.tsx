const FixedBackground = () => {
  return (
    <>
      <div className="bg-grain" />
      <div className="flex-center fixed left-0 top-0 z-[-10] h-lvh w-screen bg-dot-black/[0.10] dark:bg-dot-white/[0.07]">
        <div className="flex-center pointer-events-none fixed inset-0 z-[-10] h-lvh bg-white opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,theme(colors.background))] dark:bg-black dark:opacity-10" />
      </div>
    </>
  );
};

export default FixedBackground;
