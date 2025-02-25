import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import MaskText from "./MaskText";
import Link from "next/link";

const SliderProject = () => {
  //   const ref = useRef<HTMLDivElement>(null);
  //   const isInView = useInView(ref, {
  //     once: true,
  //     margin: "0px 0px -100px 0px",
  //   });

  return (
    <div className="panel grid h-[100dvh] w-screen grid-cols-1 gap-y-3 bg-gray-800 p-4 md:auto-rows-auto md:grid-cols-2 md:gap-20 md:p-16">
      <div className="order-2 flex flex-col justify-between gap-6 md:order-1">
        <div className="flex flex-col gap-4">
          <Link href="/detail">
            <MaskText
              text={["Project Title"]}
              headline
              className="textShadow pb-2 text-4xl font-semibold leading-relaxed tracking-wide sm:text-5xl md:text-7xl"
            ></MaskText>
          </Link>
          <MaskText
            text={[
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat",
            ]}
            className="text-base font-medium tracking-wide text-zinc-900 dark:text-zinc-300 sm:text-lg"
          />
          <MaskText
            text={[
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat",
            ]}
            className="text-sm font-light leading-relaxed tracking-wide text-zinc-900 dark:text-zinc-300 sm:text-base"
          />
        </div>
        <Button
          text="View Project"
          type="button"
          href="/detail"
          className="justify-self-end"
        />
      </div>
      <Link
        // ref={ref}
        className="relative order-1 col-span-2 aspect-[3/2] w-full bg-red-200 shadow-md md:order-2 md:col-span-1"
        // initial={{ opacity: 0, scale: 0.95 }}
        // animate={isInView ? { opacity: 1, scale: 1 } : {}}
        // transition={{
        //   duration: 0.6,
        //   ease: "easeOut",
        // }}
        href="/detail"
      >
        <Image
          src="/img/gallery/1.jpg"
          alt="test"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </Link>
      <div className="order-3 col-span-2 flex items-end">
        <div className="flex w-full items-center justify-between gap-4">
          <span className="h-[1px] flex-1 bg-zinc-900 dark:bg-zinc-300" />
          <span className="text-sm font-medium tracking-wider text-zinc-900 dark:text-zinc-300 sm:text-lg xl:text-xl">
            01/05
          </span>
        </div>
      </div>
    </div>
  );
};

export default SliderProject;
