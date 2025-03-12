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
    initial: { y: "100%", opacity: 0 },
    animate: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1], // Smooth easing
        delay: 0.2 * i, // Stagger each word by 0.1s
      },
    }),
  };

  return (
    <div className="inline-flex flex-wrap items-end overflow-hidden">
      <motion.span
        className={`will-change-all ${className}`}
        variants={animation}
        initial="initial"
        animate="animate"
        custom={custom}
      >
        {text}&nbsp;
      </motion.span>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative left-0 top-[-50px] z-10 mx-auto w-full max-w-[100rem] px-4 md:top-[-100px] xl:pt-12">
      <div className="overflow-hidden">
        <motion.h1
          className="font-medium leading-none ~text-[4.25rem]/[9.5rem] dark:text-white max-xs:text-[3rem] md:font-semibold md:!leading-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatedText text="Experience" custom={1} />
          <AnimatedText text="the" custom={2} />
          <AnimatedText
            text="Web"
            custom={3}
            className="font-bold italic ~text-[4.75rem]/[10.5rem] max-xs:text-[3rem]"
          />
          <AnimatedText text="with" custom={4} />
          <AnimatedText text="a" custom={5} />
          <AnimatedText
            text="Creative"
            custom={6}
            className="colorEffect font-bold ~text-[4.75rem]/[10.5rem] max-xs:text-[3rem]"
          />
          <AnimatedText text="approach" custom={7} />
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
      className="group/product relative aspect-[3/2] h-auto w-[15rem] flex-shrink-0 will-change-transform xs:w-[20rem] sm:w-[22rem] md:w-[24rem] lg:w-[26rem] xl:w-[28rem] 2xl:w-[30rem]"
    >
      <Link
        href={product.link}
        className="block h-full group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          fill
          loading="eager"
          quality={100}
          className="object-cover object-left-top"
          alt={product.title}
        />
        {/* height="600" width="600" className="absolute inset-0 full-size
        object-cover object-left-top" */}
      </Link>
      <div className="full-size pointer-events-none absolute inset-0 bg-black opacity-0 group-hover/product:opacity-80"></div>
      <h2 className="absolute bottom-4 left-4 text-3xl text-white opacity-0 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  );
};
