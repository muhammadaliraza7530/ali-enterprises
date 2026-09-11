import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { CtaBand, PageHero } from "@/components/PageBits";
import { Globe, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site-data";
// import { Reveal, SectionHeading } from "@/components/ui-bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ali Enterprises — Request a Quote" },
      {
        name: "description",
        content: "Talk to Ali Enterprises about premium Corian® surfaces for your next project.",
      },
      { property: "og:title", content: "Contact Ali Enterprises" },
      {
        property: "og:description",
        content: "Request a quote for bathrooms, interiors or custom Corian® solutions.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Ali Enterprises"
        title="Let's discuss your next project"
        intro="Request a quote for a seamless, modern surface designed just for you."
        image={img.luxuryVilla}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-3 lg:px-8">
          <a href={`tel:${site.phoneTel}`} className="lit-panel bg-card p-6 text-center">
            <Phone className="mx-auto size-6 text-primary" />
            <h2 className="mt-4 font-bold">Phone</h2>
            <p className="mt-2 text-sm text-muted-foreground">{site.phone}</p>
          </a>
          <a href={`mailto:${site.email}`} className="lit-panel bg-card p-6 text-center">
            <Mail className="mx-auto size-6 text-primary" />
            <h2 className="mt-4 font-bold">Email</h2>
            <p className="mt-2 break-all text-sm text-muted-foreground">{site.email}</p>
          </a>
          <div className="lit-panel bg-card p-6 text-center">
            <Globe className="mx-auto size-6 text-primary" />
            <h2 className="mt-4 font-bold">Website</h2>
            <p className="mt-2 text-sm text-muted-foreground">alienterprisescorian.com</p>
          </div>
        </div>
      </section>
      <CtaBand
        title="Tell us about your project"
        body="Bathrooms, interiors and custom solutions for modern spaces."
      />
    </>
  );
}
