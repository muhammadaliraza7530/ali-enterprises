import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero } from "@/components/PageBits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aspiring Homes — Coming Soon" },
      {
        name: "description",
        content:
          "Our About page is being updated. Aspiring Homes has been making quality houses since 2019 across Lahore, Faisalabad and Sialkot.",
      },
      { property: "og:title", content: "About Aspiring Homes — Coming Soon" },
      { property: "og:description", content: "This section is being updated. Please check back soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Coming Soon"
        intro="Our story and team details are being updated. Please check back soon."
        image={img.courtyard}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <div className="rounded-3xl border border-dashed border-primary/40 bg-primary/10 p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Under Construction</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">This page is on the way</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are preparing a fuller introduction to our team and the way we work.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
