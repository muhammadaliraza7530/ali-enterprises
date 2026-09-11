import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageBits";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/projects/$slug")({
  head: () => ({
    meta: [
      { title: "Corian® Project — Ali Enterprises" },
      {
        name: "description",
        content: "Explore a premium Corian® surface project by Ali Enterprises.",
      },
      { property: "og:title", content: "Corian® Project — Ali Enterprises" },
      { property: "og:description", content: "Premium Corian® surfaces for modern spaces." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  return (
    <>
      <PageHero
        eyebrow="Project"
        title="Seamless by design"
        intro="Explore the detail and finish behind an Ali Enterprises surface project."
        image={img.luxuryVilla}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every project is fabricated to meet the needs of its space, with expert installation and
            a finish built to last.
          </p>
        </div>
      </section>
    </>
  );
}
