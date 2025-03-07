// {
//   /* <ImagesSlider
//           className="mb-20 aspect-[3/2] w-screen md:mb-0 md:w-[80vw] 2xl:w-full"
//           images={landscapeImages}
//           overlay={false}
//           autoplay={isDesktop && true}
//         >
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: -80,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.6,
//             }}
//             className="z-50 f-col items-center justify-center p-3"
//           ></motion.div>
//         </ImagesSlider> */
// }

("use client");
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    // setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const imgElement = new window.Image(); // Avoid conflict with next/image
        imgElement.src = image;
        imgElement.onload = () => resolve(image);
        imgElement.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
        // setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "flex-center full-size relative overflow-hidden",
        className,
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 z-40 bg-black/60", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="full-size absolute inset-0"
          >
            <Image
              src={loadedImages[currentIndex]}
              alt={`Slide ${currentIndex}`}
              // placeholder="blur"
              // blurDataURL={loadedImages[currentIndex]}
              fill
              priority
              loading="eager"
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1526px) 80vw, 100vw"
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
