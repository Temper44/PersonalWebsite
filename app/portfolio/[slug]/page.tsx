import Button from "@/app/components/Button";
import Footer from "@/app/components/Footer";
import MaskText from "@/app/components/MaskText";
import PageUtilities from "@/app/components/PageUtilities";
import ProjectImageFrame from "@/app/components/ProjectImageFrame";
import ProjectImageFull from "@/app/components/ProjectImageFull";
import ProjectImageZoom from "@/app/components/ProjectImageZoom";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// 🌟 SEO Metadata for better search ranking & social previews
// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const project = projects.find((p) => p.slug === params.slug);

//   if (!project) {
//     return {
//       title: "Project Not Found",
//       description: "This project does not exist.",
//     };
//   }

//   return {
//     title: `${project.name} | My Portfolio`,
//     description: project.subheading,
//     openGraph: {
//       title: project.name,
//       description: project.subheading,
//       images: [{ url: project.imgPreview.src }],
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: project.name,
//       description: project.subheading,
//       images: [project.imgPreview.src],
//     },
//   };
// }

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-screen relative mx-auto overflow-hidden">
      <div className="bg-grain fixed inset-0 z-[-10] h-screen w-screen" />
      <PageUtilities />
      <ProjectImageFrame
        name={project.name}
        src={project.imgPreview.src}
        alt={project.imgPreview.alt}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:grid-cols-2">
        <div className="order-2 flex flex-col gap-2 md:order-none">
          <MaskText
            text={["My role"]}
            className="text-lg font-semibold tracking-wide 2xl:text-xl"
            headline
          />
          <MaskText
            text={[project.role]}
            className="text-base leading-relaxed text-zinc-900 dark:text-zinc-300"
          />
        </div>
        <div className="order-1 row-span-3 flex flex-col gap-2 md:order-none">
          <MaskText
            text={["Description"]}
            className="text-lg font-semibold tracking-wide 2xl:text-xl"
            headline
          />
          <MaskText
            text={[project.descriptionLong]}
            className="text-base leading-relaxed text-zinc-900 dark:text-zinc-300"
          />
        </div>
        <div className="order-3 flex flex-col gap-2 md:order-none">
          <MaskText
            text={["Team"]}
            className="text-lg font-semibold tracking-wide 2xl:text-xl"
            headline
          />
          <MaskText
            text={[project.team]}
            className="text-base leading-relaxed text-zinc-900 dark:text-zinc-300"
          />
        </div>
        <div className="order-4 flex flex-col gap-2 md:order-none">
          <MaskText
            text={["Date"]}
            className="text-lg font-semibold tracking-wide 2xl:text-xl"
            headline
          />
          <MaskText
            text={[project.date]}
            className="text-base leading-relaxed text-zinc-900 dark:text-zinc-300"
          />
        </div>
        <div className="order-5 flex flex-col gap-2 md:order-none">
          <MaskText
            text={["Technology"]}
            className="text-lg font-semibold tracking-wide 2xl:text-xl"
            headline
          />
          <MaskText
            text={[project.technologies]}
            className="text-base leading-relaxed text-zinc-900 dark:text-zinc-300"
          />
        </div>
        <div className="order-6 row-span-2 flex flex-col gap-2 justify-self-end md:order-none">
          <Button
            text="View Project"
            href={project.detailsPageLink}
            icon={<FiExternalLink size={16} />}
          />
        </div>
      </div>
      <div className="mx-auto my-28 flex max-w-7xl justify-center">
        <div className="flex gap-6">
          {project.colors.map((color) => (
            <div
              key={color}
              className="flex flex-col items-center justify-center gap-3"
            >
              <span
                key={color}
                className="h-16 w-16 rounded-full md:h-20 md:w-20"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs font-extralight text-zinc-900 dark:text-zinc-300">
                {color}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ProjectImageZoom
        src={project.imgPreview.src}
        alt={project.imgPreview.alt}
      />

      <div className="mx-auto my-24 flex max-w-7xl flex-col justify-center gap-12 p-4 md:my-36 md:gap-20 xl:gap-36">
        {project.imgFullScreen.map((img) => (
          <ProjectImageFull
            key={img.title}
            title={img.title}
            src={img.src}
            alt={img.alt}
          />
        ))}
      </div>

      <div className="mb-28 flex w-full max-w-8xl justify-end p-4">
        <Button
          text="Next Project"
          href={project.nextProjectLink}
          icon={<MdNavigateNext size={24} />}
        />
      </div>
      <Footer />
    </main>
  );
}
