import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageBits";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Coming Soon | Aspiring Homes" },
      {
        name: "description",
        content: "Our project portfolio is being updated. Please check back soon to see our villas and modern homes.",
      },
      { property: "og:title", content: "Projects — Coming Soon | Aspiring Homes" },
      { property: "og:description", content: "Our portfolio section is being updated. Please check back soon." },
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
        title="Coming Soon"
        intro="Our project gallery is being prepared. Please check back soon."
        image={img.luxuryHouse}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <div className="rounded-3xl border border-dashed border-primary/40 bg-primary/10 p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Under Construction</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">New project pages are on the way</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are updating this section with our completed, ongoing and upcoming homes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
