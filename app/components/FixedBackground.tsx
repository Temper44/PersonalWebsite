const FixedBackground = () => {
  return (
    <>
      <div className="bg-grain" />
      <div className="flex-center fixed left-0 top-0 z-[-10] h-lvh w-screen bg-dot-black/[0.10] dark:bg-dot-white/[0.07]">
        {/* <div className="xl:flex-center xl:pointer-events-none xl:fixed xl:inset-0 xl:z-[-10] xl:h-lvh xl:bg-white xl:opacity-50 xl:[mask-image:radial-gradient(ellipse_at_center,transparent_40%,theme(colors.background))] xl:dark:bg-black xl:dark:opacity-10" /> */}
      </div>
    </>
  );
};

export default FixedBackground;
