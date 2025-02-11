import Hero from "./sections/Hero";

export default function Home() {
  return (
    <main className="mx-auto flex max-h-[100svh] min-h-screen w-full flex-col items-center justify-center overflow-clip lg:h-screen">
      <Hero />
    </main>
  );
}
