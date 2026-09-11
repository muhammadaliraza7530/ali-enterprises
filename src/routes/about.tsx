import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { CtaBand, PageHero, Prose } from "@/components/PageBits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ali Enterprises — Premium Corian® Surfaces" },
      {
        name: "description",
        content:
          "Ali Enterprises brings premium Corian® solid surfaces to modern homes and commercial spaces across Pakistan.",
      },
      { property: "og:title", content: "About Ali Enterprises" },
      { property: "og:description", content: "Premium Corian® surfaces for modern spaces." },
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
        eyebrow="About Ali Enterprises"
        title="The beauty is seamless"
        intro="Bringing the innovation of Corian® solid surfaces to Pakistan."
        image={img.courtyard}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Prose>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Who we are</h2>
            <p>
              We are fabricators, designers, and installers of premium Corian® surfaces. From
              concept to installation, we deliver flawless results for residential and commercial
              clients.
            </p>
            <h2 className="pt-6 text-2xl font-bold text-foreground sm:text-3xl">
              What is Corian®?
            </h2>
            <p>
              Corian® is a versatile solid surface material that offers beauty, durability, and
              functionality. Its non-porous nature makes it perfect for bathrooms and kitchens where
              hygiene matters.
            </p>
            <h2 className="pt-6 text-2xl font-bold text-foreground sm:text-3xl">Our vision</h2>
            <p>
              To redefine modern interiors in Pakistan with seamless, sustainable, and timeless
              surfaces.
            </p>
          </Prose>
        </div>
      </section>
      <CtaBand
        title="Bring your vision to life"
        body="Talk to Ali Enterprises about your next surface project."
      />
    </>
  );
}
