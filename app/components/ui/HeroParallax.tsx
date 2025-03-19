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
import { useSectionInView } from "@/lib/hooks";
import { useBetterMediaQuery } from "@/lib/hooks";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 13);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 40, bounce: 100 };
  const isDesktop = useBetterMediaQuery("(min-width: 768px)");
  const isLargeDesktop = useBetterMediaQuery("(min-width: 1920px)");

  const translateYValue = isLargeDesktop
    ? [-700, 500]
    : isDesktop
      ? [-700, 330]
      : [-530, 250];

  const translateXValue = isLargeDesktop
    ? [0, 400]
    : isDesktop
      ? [0, -500]
      : [0, -500];

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.8], translateXValue),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0, -200]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], translateYValue),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="relative flex min-h-full flex-grow flex-col self-auto overflow-hidden pb-[40rem] pt-[14rem] antialiased [perspective:1000px] [transform-style:preserve-3d]"
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
        <motion.div className="flex ~mb-10/20 ~space-x-10/20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex ~mb-10/20 ~space-x-10/20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex ~space-x-10/20">
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

const AnimatedText = ({
  text,
  custom,
  className = "",
}: {
  text: string;
  custom: number;
  className?: string;
}) => {
  const animation = {
    initial: { y: "100%", x: "15%", opacity: 0 },
    animate: (i: number) => ({
      y: "0%",
      x: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        delay: 0.13 * i,
      },
    }),
  };

  return (
    <span className="mb-[0rem] inline-flex flex-wrap items-end overflow-hidden">
      <motion.span
        className={`will-change-all ${className}`}
        variants={animation}
        initial="initial"
        animate="animate"
        custom={custom}
      >
        {text}&nbsp;
      </motion.span>
    </span>
  );
};

export const Header = () => {
  return (
    <div className="relative left-0 top-[-50px] z-10 mx-auto w-full p-6 md:top-[-100px] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl xl:pt-12 2xl:max-w-[88rem] 3xl:max-w-8xl">
      <div className="overflow-hidden">
        <motion.h1
          className="-space-y-12 font-semibold leading-[1.2] tracking-tight ~text-[3.5rem]/[9.5rem] dark:text-white max-xs:text-[2.7rem] md:font-medium 2xl:tracking-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatedText text="Transforming" custom={1} className="textShadow" />

          <AnimatedText text="Ideas" custom={2} className="textShadow" />

          <AnimatedText text="into" custom={3} className="textShadow" />
          <AnimatedText
            text="Creative"
            custom={4}
            className="colorEffect font-bold ~text-[4rem]/[10.5rem] max-xs:text-[3rem]"
          />
          <AnimatedText
            text="Web"
            custom={5}
            className="textShadow font-bold ~text-[4rem]/[10.5rem] max-xs:text-[3rem]"
          />
          <AnimatedText text="Experiences" custom={6} className="textShadow" />
        </motion.h1>
      </div>
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
  const { ref } = useSectionInView("");

  return (
    <motion.div
      ref={ref}
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative aspect-[16/9] h-auto flex-shrink-0 will-change-transform ~w-[15rem]/[32rem]"
    >
      <Link
        href={product.link}
        className="relative block h-full group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          fill
          loading="eager"
          priority
          quality={75}
          className="object-cover object-left-top"
          alt={product.title}
          sizes="30vw"
        />
      </Link>
      <div className="full-size pointer-events-none absolute inset-0 bg-black opacity-0 group-hover/product:opacity-80"></div>
      <h2 className="absolute bottom-4 left-4 text-3xl text-white opacity-0 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  );
};
