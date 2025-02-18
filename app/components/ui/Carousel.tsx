"use client";

import Image from "next/image";
import { useState, useRef, useId, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useCursor } from "../context/CursorContext";

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  const { setIsCursorHovered } = useCursor();

  return (
    <button
      className={`border-3 mx-3 flex h-10 w-10 scale-110 items-center justify-center rounded-full border border-black border-opacity-30 bg-neutral-200 dark:bg-neutral-800 sm:scale-100 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
      onMouseEnter={() => setIsCursorHovered(true)}
      onMouseLeave={() => setIsCursorHovered(false)}
    >
      <span className="text-neutral-600 dark:text-neutral-200">
        <IoIosArrowForward fontSize={20} />
      </span>
    </button>
  );
};

interface CarouselProps {
  slides: string[]; // Array of image paths
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % slides.length);
      } else if (event.key === "ArrowLeft") {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const id = useId();

  return (
    <div
      className="relative mx-auto aspect-[3/2] h-full w-[100vw] sm:w-[70vw]"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute mx-[-4vmin] flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((src, index) => (
          <Slide
            key={index}
            src={src}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute top-[calc(100%+2rem)] flex w-full justify-center">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
        <span className="absolute right-3 text-sm font-light text-neutral-600 dark:text-neutral-200 sm:right-0 2xl:text-base">
          {current + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}

interface SlideProps {
  src: string;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ src, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  return (
    <li
      ref={slideRef}
      className="relative z-10 mx-[4vmin] flex aspect-[3/2] h-full w-[100vw] flex-1 flex-col items-center justify-center text-center opacity-100 transition-all duration-300 ease-in-out sm:w-[70vw]"
      onClick={() => handleSlideClick(index)}
      style={{
        transform:
          current !== index
            ? "scale(0.98) rotateX(8deg)"
            : "scale(1) rotateX(0deg)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        transformOrigin: "bottom",
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden bg-[#000000] transition-all duration-150 ease-out">
        <Image
          className="duration-600 absolute inset-0 h-full object-cover opacity-100 transition-opacity ease-in-out"
          style={{
            opacity: current === index ? 1 : 0.5,
          }}
          alt=""
          src={src}
          fill
          onLoad={imageLoaded}
          quality={100}
          sizes="(max-width: 640px) 100vw, 70vw"
        />

        {/* {current === index && (
          <div className="bg-unset duration-[5000] absolute inset-0 transition-all" />
        )} */}
      </div>
    </li>
  );
};
