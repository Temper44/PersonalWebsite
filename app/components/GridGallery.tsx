import GridImage from "./GridImage";

const GridGallery = () => {
  return (
    <div className="container mx-auto grid w-full grid-cols-1 gap-5 py-20 sm:grid-cols-12 sm:gap-2 sm:py-24 md:py-40 lg:py-52">
      {/* Block 1 */}
      <div className="col-span-12 sm:col-span-6 sm:row-span-5">
        <GridImage
          className="aspect-[3/2]"
          src="/img/gallery/1.jpg"
          alt="car on a mountain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, (max-width: 1536px) 50vw, 33vw"
        />
      </div>

      {/* Block 2 */}
      <div className="col-span-12 sm:col-span-4 sm:col-start-8 sm:row-span-5 sm:row-start-3">
        <GridImage
          className="aspect-[1/1]"
          src="/img/gallery/2.jpg"
          alt="gondolier in Venice"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, (max-width: 1536px) 40vw, 28vw"
        />
      </div>

      {/* Block 3 */}
      <div className="col-span-12 sm:col-span-4 sm:col-start-2 sm:row-span-3 sm:row-start-8">
        <GridImage
          className="aspect-[3/4]"
          src="/img/gallery/3.jpg"
          alt="modern building"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 30vw, (max-width: 1536px) 33vw, 25vw"
        />
      </div>

      {/* Block 4 */}
      <div className="col-span-12 sm:col-span-6 sm:col-start-7 sm:row-span-4 sm:row-start-9">
        <GridImage
          className="aspect-[4/3]"
          src="/img/gallery/4.jpg"
          alt="Red Bull plane"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, (max-width: 1536px) 50vw, 40vw"
        />
      </div>

      {/* Block 5 */}
      <div className="col-span-12 sm:col-span-4 sm:row-span-6 sm:row-start-[13]">
        <GridImage
          className="aspect-[4/5]"
          src="/img/gallery/5.jpg"
          alt="people enjoying the sun"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>

      {/* Block 6 */}
      <div className="col-span-12 sm:col-span-4 sm:col-start-8 sm:row-span-4 sm:row-start-[16]">
        <GridImage
          className="aspect-[1/1]"
          src="/img/gallery/6.jpg"
          alt="ship in harbor"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, (max-width: 1536px) 40vw, 28vw"
        />
      </div>

      {/* Block 7 */}
      <div className="col-span-12 sm:col-span-6 sm:row-span-5 sm:row-start-[23]">
        <GridImage
          className="aspect-[16/9]"
          src="/img/gallery/7.jpg"
          alt="Verona from above"
          sizes="(max-width: 640px) 100vw, (max-width: 1536px) 45vw, 40vw"
        />
      </div>

      {/* Block 8 */}
      <div className="col-span-12 sm:col-span-3 sm:col-start-9 sm:row-span-6 sm:row-start-[25]">
        <GridImage
          className="aspect-[9/16]"
          src="/img/gallery/8.jpg"
          alt="Vienna ferris wheel"
          sizes="(max-width: 640px) 100vw, (max-width: 1536px) 25vw, 20vw"
        />
      </div>

      {/* Block 9 */}
      <div className="col-span-12 sm:col-span-4 sm:col-start-2 sm:row-span-4 sm:row-start-[30]">
        <GridImage
          className="aspect-[4/5]"
          src="/img/gallery/9.jpg"
          alt="Rotterdam bridge"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>

      {/* Block 10 */}
      <div className="col-span-12 sm:col-span-6 sm:col-start-7 sm:row-span-4 sm:row-start-[32]">
        <GridImage
          className="aspect-[3/2]"
          src="/img/gallery/10.jpg"
          alt="three mopeds in the street"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, (max-width: 1536px) 50vw, 33vw"
        />
      </div>

      {/* Block 11 */}
      <div className="col-span-12 sm:col-span-5 sm:col-start-3 sm:row-span-4 sm:row-start-[39]">
        <GridImage
          className="aspect-[3/2]"
          src="/img/gallery/11.jpg"
          alt="old man cycling"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, (max-width: 1536px) 50vw, 33vw"
        />
      </div>

      {/* Block 12 */}
      <div className="col-span-12 sm:col-span-3 sm:col-start-10 sm:row-span-4 sm:row-start-[41]">
        <GridImage
          className="aspect-[4/5]"
          src="/img/gallery/12.jpg"
          alt="Church in Milan"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>
    </div>
  );
};

export default GridGallery;
