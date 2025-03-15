import Button from "@/app/components/Button";
import ChipAnimation from "@/app/components/ChipAnimation";
import ColorCase from "@/app/components/ColoCase";
import FixedBackground from "@/app/components/FixedBackground";
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
    <main className="max-w-screen relative-center overflow-hidden">
      <FixedBackground />
      <PageUtilities />
      <ProjectImageFrame
        name={project.name}
        src={project.imgPreview.src}
        alt={project.imgPreview.alt}
      />
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 p-4 md:mt-32 md:grid-cols-2 2xl:gap-8">
        <div className="projectDataWrapper order-2">
          <MaskText text={["My role"]} className="textSubHeading" headline />
          <MaskText text={[project.role]} className="projectDataText" />
        </div>
        <div className="projectDataWrapper order-1 row-span-3">
          <MaskText
            text={["Description"]}
            className="textSubHeading"
            headline
          />
          <MaskText
            text={[project.descriptionLong]}
            className="textParagraph !text-zinc-900 dark:!text-zinc-100"
          />
        </div>
        <div className="projectDataWrapper order-3">
          <MaskText text={["Team"]} className="textSubHeading" headline />
          <MaskText text={[project.team]} className="projectDataText" />
        </div>
        <div className="projectDataWrapper order-4">
          <MaskText text={["Date"]} className="textSubHeading" headline />
          <MaskText text={[project.date]} className="projectDataText" />
        </div>
        <div className="projectDataWrapper order-5">
          <MaskText
            text={["Technology"]}
            className="textSubHeading mb-3"
            headline
          />
          <ChipAnimation technologies={project.technologies} />
        </div>
        <div className="projectDataWrapper order-6 row-span-2 mt-8 justify-self-end md:mt-0">
          <Button
            text="View Project"
            href={project.detailsPageLink}
            icon={<FiExternalLink size={16} />}
          />
        </div>
      </div>

      <div className="mx-auto my-28 flex max-w-7xl justify-center">
        <ColorCase colors={project.colors} />
      </div>

      <ProjectImageZoom
        src={project.imgPreview.src}
        alt={project.imgPreview.alt}
      />

      <div className="flex-col-center mx-auto my-24 max-w-7xl gap-12 p-4 md:my-36 md:gap-20 xl:gap-36">
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
