import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageBits";
import { ProjectGallery } from "@/components/ProjectGallery";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ali Enterprises Corian® Projects" },
      {
        name: "description",
        content:
          "Explore premium Corian® surface projects by Ali Enterprises, from luxury homes to commercial interiors.",
      },
      { property: "og:title", content: "Portfolio — Ali Enterprises" },
      { property: "og:description", content: "From luxury homes to commercial interiors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our premium projects"
        intro="From luxury homes to commercial interiors."
        image={img.luxuryHouse}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our portfolio showcases the possibilities of seamless Corian® surfaces, from luxury
              homes to commercial interiors. Select a project to explore every image.
            </p>
          </div>
          <ProjectGallery />
        </div>
      </section>
    </>
  );
}
