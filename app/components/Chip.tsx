const Chip = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span
      className={`rounded-full border border-black px-[1.2rem] py-[0.4rem] dark:border-white ${className}`}
    >
      {text}
    </span>
  );
};

export default Chip;
