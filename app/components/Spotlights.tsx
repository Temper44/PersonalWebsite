import { Spotlight } from "@/app/components/ui/Spotlight";

const Spotlights = () => {
  return (
    <div>
      <Spotlight
        id="filter"
        fill="blue"
        className="bottom-[-26rem] left-[0rem] w-[200vw] sm:bottom-[-50rem] md:left-[-2rem] md:w-[100vw] lg:bottom-[-65rem]"
      />
      {/* <Spotlight
        id="filter2"
        fill="#08B1FF"
        className="md:left-50 left-[5rem] top-[10rem] h-[80vh] w-[200vw] sm:w-[120vw] md:w-[80vw]"
      />
      <Spotlight
        id="filter3"
        fill="#FF4D59" //red
        className="left-[8rem] top-[3rem] h-[80vh] w-[200vw] sm:w-[80vw] md:top-[1rem] md:w-[100vw]"
      /> */}
      <Spotlight
        id="filter4"
        fill="purple"
        className="left-[21rem] top-[0rem] h-[80vh] w-[200vw] sm:left-full md:top-[0rem]"
      />
    </div>
  );
};

export default Spotlights;
