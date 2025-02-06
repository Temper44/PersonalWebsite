import { Spotlight } from "@/app/components/ui/Spotlight";

const Spotlights = () => {
  return (
    <div>
      <Spotlight
        fill="blue"
        className="left-[2rem] top-[4rem] h-screen w-[200vw] md:left-[-2rem] md:top-[-1.5rem] md:w-[170vw]"
      />
      <Spotlight
        fill="#08B1FF"
        className="md:left-50 left-[5rem] top-[13rem] h-[80vh] w-[200vw] sm:w-[120vw] md:w-[80vw]"
      />
      <Spotlight
        fill="#FF4D59" //red
        className="left-[15rem] top-[7rem] h-[80vh] w-[150vw] sm:w-[80vw] md:top-[1rem] md:w-[100vw]"
      />
      <Spotlight
        fill="purple"
        className="left-[21rem] top-[0rem] h-[80vh] w-[200vw] sm:left-full md:top-[0rem]"
      />
    </div>
  );
};

export default Spotlights;
