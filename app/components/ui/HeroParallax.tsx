"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="relative flex min-h-[300dvh] flex-col self-auto overflow-hidden pb-40 pt-56 antialiased [perspective:1000px] [transform-style:preserve-3d] xs:min-h-[285dvh] 2xl:min-h-[300dvh]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="mb-14 flex flex-row-reverse space-x-10 space-x-reverse md:mb-20 md:space-x-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-14 flex flex-row space-x-10 md:mb-20 md:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-10 space-x-reverse md:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative left-0 top-0 z-10 mx-auto w-full max-w-[100rem] px-4 xl:pt-12">
      <h1 className="textShadow md:[5.5rem] text-5xl font-medium leading-none dark:text-white xs:text-7xl sm:text-[5rem] md:font-semibold md:!leading-tight xl:text-8xl 2xl:text-9xl">
        Experience the{" "}
        <span className="text-[3.5rem] font-bold italic text-zinc-900 dark:text-slate-100 xs:text-[5rem] sm:text-[5.5rem] xl:text-[7rem] 2xl:text-[9rem]">
          Web
        </span>{" "}
        <br /> with a{" "}
        <span className="colorEffect text-[3.5rem] font-bold xs:text-[5rem] sm:text-[5.5rem] xl:text-[7rem] 2xl:text-[9rem]">
          Creative
        </span>{" "}
        <span>approach</span>
      </h1>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative aspect-[3/2] h-auto w-[15rem] flex-shrink-0 xs:w-[20rem] sm:w-[22rem] md:w-[24rem] lg:w-[26rem] xl:w-[28rem] 2xl:w-[30rem]"
    >
      <Link
        href={product.link}
        className="block h-full group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          fill
          quality={100}
          style={{ objectFit: "cover", objectPosition: "left top" }}
          alt={product.title}
        />
        {/* height="600" width="600" className="absolute inset-0 h-full w-full
        object-cover object-left-top" */}
      </Link>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80"></div>
      <h2 className="absolute bottom-4 left-4 text-3xl text-white opacity-0 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  );
};
