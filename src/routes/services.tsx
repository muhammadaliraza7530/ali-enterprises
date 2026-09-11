import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CtaBand } from "@/components/PageBits";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Corian® Surfaces | Ali Enterprises" },
      {
        name: "description",
        content:
          "Bathrooms, interiors, custom fabrication, installation and maintenance by Ali Enterprises.",
      },
      { property: "og:title", content: "Services — Ali Enterprises" },
      {
        property: "og:description",
        content: "Premium Corian® solutions for bathrooms, interiors and custom projects.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Solutions without limits"
        intro="From seamless bathrooms to custom fabrication, we make Corian® work for your space."
        image={img.spanishVilla}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {services.map((service) => (
            <article key={service.slug} className="lit-panel bg-card p-6">
              <h2 className="text-lg font-bold">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Ready to upgrade your space?"
        body="Get a seamless, modern surface designed just for you."
      />
    </>
  );
}
