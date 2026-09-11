import {
  img,
  showreelUrl as reelUrl,
  process as processSteps,
  services as serviceList,
} from "@/lib/site-data";

export const logoUrl = img.logo;
export const showreelUrl = reelUrl;

export const company = {
  name: "Ali Enterprises",
  tagline: "Premium Corian® Surfaces for Modern Spaces",
  since: "The beauty is seamless",
  phoneDisplay: "+92 305 2200996",
  phoneTel: "+923052200996",
  whatsapp:
    "https://wa.me/923052200996?text=Hello%20Ali%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20quote.",
  email: "info@alienterprisescorian.com",
  addressShort: "Pakistan",
  address: "Pakistan",
  hours: "By appointment",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  status: "Completed" | "Under Construction" | "Upcoming";
  category: "Modern" | "Classic" | "Spanish" | "Grey Structure";
  image: string;
  gallery: string[];
  blurb: string;
};

export const projects: Project[] = [
  {
    slug: "the-reflection-sialkot",
    title: "Corian Kitchen & Cabinetry",
    location: "DHA Phase 6, Karachi",
    status: "Completed",
    category: "Modern",
    image: img.luxuryVilla,
    gallery: [img.luxuryVilla, img.luxuryHouse, img.modernVilla],
    blurb: "Custom Corian countertops and cabinetry designed for a clean, seamless kitchen finish.",
  },
  {
    slug: "spanish-courtyard-villa",
    title: "Seamless Bathroom Vanity",
    location: "Defence Phase 4, Karachi",
    status: "Completed",
    category: "Modern",
    image: img.spanishVilla,
    gallery: [img.spanishVilla, img.courtyard, img.classicMansion],
    blurb:
      "A custom Corian vanity with integrated surface detailing, drawers and a refined bathroom finish.",
  },
  {
    slug: "classical-grand-residence",
    title: "Corian Reception Counter",
    location: "Ufone, Karachi",
    status: "Completed",
    category: "Modern",
    image: img.classicMansion,
    gallery: [img.classicMansion, img.courtyard, img.completedVilla],
    blurb:
      "A branded reception counter fabricated with durable Corian surfaces for a high-traffic space.",
  },
  {
    slug: "modern-luxury-house",
    title: "Commercial Bank Counter",
    location: "Clariant, Karachi",
    status: "Completed",
    category: "Modern",
    image: img.luxuryHouse,
    gallery: [img.luxuryHouse, img.modernVilla, img.brickFront],
    blurb: "A long commercial counter with a clean Corian work surface and custom front detailing.",
  },
  {
    slug: "grey-modern-residence",
    title: "Corian Laboratory Surfaces",
    location: "Ocean Tower, Karachi",
    status: "Completed",
    category: "Modern",
    image: img.modernVilla,
    gallery: [img.modernVilla, img.greyClassic, img.brickFront],
    blurb:
      "Easy-to-maintain Corian work surfaces fabricated for a professional laboratory environment.",
  },
  {
    slug: "corner-plot-residence",
    title: "Custom Retail Counter",
    location: "Lucky One Mall, Karachi",
    status: "Completed",
    category: "Modern",
    image: img.brickFront,
    gallery: [img.brickFront, img.greyClassic, img.luxuryHouse],
    blurb:
      "Custom retail counters and display surfaces made for a polished, durable customer experience.",
  },
];

export const services = serviceList.map((s) => ({ title: s.title, body: s.body }));
export const process = processSteps;
