/**
 * Single source of truth for all site content.
 * Every media file lives in /public and is referenced with an absolute path,
 * so it works identically on the preview, on Lovable hosting and on Vercel.
 */

export const img = {
  logo: "/logo.jpeg",

  // Real Corian kitchen, vanity, cabinet, reception and commercial counter photography.
  luxuryVilla:
    "/projects/D%20h%20a%20phase%206%20Karachi/WhatsApp%20Image%202026-09-10%20at%207.48.19%20AM.jpeg",
  spanishVilla:
    "/projects/Defence%20phase%204%20Karachi/WhatsApp%20Image%202026-09-10%20at%207.39.23%20AM.jpeg",
  luxuryHouse:
    "/projects/Ufone%20all%20branches%20Karachi/WhatsApp%20Image%202026-09-10%20at%208.03.06%20AM.jpeg",
  courtyard:
    "/projects/Clariant%20company%20singer%20chowrangi%20Karachi/WhatsApp%20Image%202026-09-10%20at%207.53.25%20AM.jpeg",
  modernVilla:
    "/projects/Hyperstar%20Karachi/WhatsApp%20Image%202026-09-10%20at%207.58.18%20AM.jpeg",
  classicMansion:
    "/projects/Joban%20fabrics%20dolmen%20Mall%20Tariq%20road%20Karachi/WhatsApp%20Image%202026-09-10%20at%208.09.44%20AM.jpeg",
  greyClassic:
    "/projects/Ocean%20Tower%20laboratory%20Karachi/WhatsApp%20Image%202026-09-10%20at%208.04.53%20AM.jpeg",
  completedVilla:
    "/projects/j.%20Fragrancies%20and%20cosmetic%20Lucky%20one%20Mall%20Karachi/WhatsApp%20Image%202026-09-10%20at%208.01.40%20AM.jpeg",
  brickFront:
    "/projects/j.%20Fragrancies%20and%20cosmetic%20dolmen%20Mall%20Tariq%20road%20Karachi/WhatsApp%20Image%202026-09-10%20at%207.44.00%20AM.jpeg",
};

export const showreelUrl = "/video/showreel.mp4";

export const site = {
  name: "Ali Enterprises",
  short: "Ali Enterprises",
  fullName: "Ali Enterprises — Premium Corian® Surfaces for Modern Spaces",
  tagline: "The beauty is seamless",
  logo: img.logo,
  address: "Pakistan",
  addressShort: "Pakistan",
  email: "info@alienterprisescorian.com",
  phone: "+92 305 2200996",
  phoneTel: "+923052200996",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  whatsapp:
    "https://wa.me/923052200996?text=Hello%20Ali%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20quote.",
  hours: [
    { day: "Monday to Thursday", time: "9am to 7pm" },
    { day: "Friday", time: "9am to 12pm & 3pm to 7pm" },
    { day: "Saturday", time: "9am to 5pm" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const heroSlides = [
  {
    title: "Premium Corian® Surfaces for Modern Spaces",
    highlight: "One surface. No visible joins. Endless possibilities.",
    image: img.luxuryVilla,
  },
  {
    title: "Bathrooms, interiors and custom projects",
    highlight: "Transform your space with the world's leading solid surface.",
    image: img.spanishVilla,
  },
  {
    title: "Beauty that lasts",
    highlight:
      "Expert craftsmanship and world-class material bring elegance and durability to every space.",
    image: img.luxuryHouse,
  },
  {
    title: "Designed for your vision",
    highlight: "Any shape, any size, any color. We fabricate Corian® to match your exact design.",
    image: img.courtyard,
  },
];

export const stats = [
  { value: "100%", label: "Seamless surfaces" },
  { value: "5", label: "Reasons to choose Corian®" },
  { value: "∞", label: "Design possibilities" },
];

/** Branded social posts — shown full-frame, never cropped. */
export const posts = [
  {
    image: img.luxuryVilla,
    title: "Corian Kitchen & Cabinetry",
    location: "DHA Phase 6, Karachi",
    tag: "Completed",
  },
  {
    image: img.spanishVilla,
    title: "Seamless Bathroom Vanity",
    location: "Defence Phase 4, Karachi",
    tag: "Completed",
  },
  {
    image: img.luxuryHouse,
    title: "Corian Reception Counter",
    location: "Ufone, Karachi",
    tag: "Completed",
  },
  {
    image: img.courtyard,
    title: "Commercial Bank Counter",
    location: "Clariant, Karachi",
    tag: "Completed",
  },
  {
    image: img.modernVilla,
    title: "Retail Counter Surface",
    location: "Hyperstar, Karachi",
    tag: "Completed",
  },
  {
    image: img.classicMansion,
    title: "Custom Corian Countertops",
    location: "Joban Fabrics, Karachi",
    tag: "Completed",
  },
  {
    image: img.greyClassic,
    title: "Corian Laboratory Surfaces",
    location: "Ocean Tower, Karachi",
    tag: "Completed",
  },
  {
    image: img.completedVilla,
    title: "Custom Retail Vanity",
    location: "Lucky One Mall, Karachi",
    tag: "Completed",
  },
  {
    image: img.brickFront,
    title: "Retail Display Counter",
    location: "Dolmen Mall, Karachi",
    tag: "Completed",
  },
];

export const videoGallery = [
  {
    src: "/videogrally/video1.mp4",
    poster: img.luxuryVilla,
    title: "Corian Project Showreel",
    caption: "Surfaces and counters",
  },
  {
    src: "/videogrally/video2.mp4",
    poster: img.spanishVilla,
    title: "Bathroom Vanity Walkthrough",
    caption: "Seamless finish",
  },
  {
    src: "/videogrally/video3.mp4",
    poster: img.luxuryHouse,
    title: "Commercial Counter Detail",
    caption: "Built for daily use",
  },
  {
    src: "/videogrally/video4.mp4",
    poster: img.courtyard,
    title: "Reception Counter Reveal",
    caption: "Custom fabrication",
  },
];

export const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Homeowner · DHA Phase 6, Lahore",
    quote:
      "They handled drawings, material and labour themselves. I never had to chase three different people — the house looks exactly like the 3D they showed me.",
  },
  {
    name: "Sana Iqbal",
    role: "Homeowner · Citi Housing, Faisalabad",
    quote:
      "The elevation work is beautiful and the finishing is clean. Weekly site photos meant I always knew what was happening on my plot.",
  },
  {
    name: "Bilal Hussain",
    role: "Developer · Sialkot",
    quote:
      "Professional team, honest quantities and on-time slabs. We handed them a second duplex before the first one was even finished.",
  },
  {
    name: "Hira Nadeem",
    role: "Homeowner · Model Town, Lahore",
    quote:
      "Interiors were designed and installed by the same team that built the structure, so nothing had to be broken and redone.",
  },
  {
    name: "Usman Tariq",
    role: "Homeowner · Johar Town, Lahore",
    quote:
      "Renovation of a 20-year-old house — new facade, new layout, finished in time and within the range they quoted.",
  },
];

export const services = [
  {
    slug: "bathrooms",
    title: "Bathrooms",
    image: img.luxuryHouse,
    short:
      "Seamless vanities, washbasins, shower trays and wall cladding. Hygienic and easy to maintain.",
    body: "Seamless vanities, washbasins, shower trays and wall cladding with a hygienic, easy-to-maintain finish.",
  },
  {
    slug: "interiors",
    title: "Interiors",
    image: img.brickFront,
    short:
      "Kitchen countertops, wall panels, reception desks and furniture surfaces. Designed to impress.",
    body: "Kitchen countertops, wall panels, reception desks and furniture surfaces designed to bring a refined finish to modern interiors.",
  },
  {
    slug: "custom-solutions",
    title: "Custom Solutions",
    image: img.greyClassic,
    short:
      "Any shape. Any size. Any color. We fabricate Corian® to match your exact design vision.",
    body: "Curves, backlighting and integrated sinks are all possible. We fabricate Corian® to match your exact design vision.",
  },
  {
    slug: "installation-maintenance",
    title: "Installation & Maintenance",
    image: img.completedVilla,
    short: "Professional fitting and after-sales support to keep your surface looking new.",
    body: "Professional fitting and after-sales support keep your Corian® surface looking new for years to come.",
  },
];

export const registrations = [
  "Lahore",
  "Faisalabad",
  "Sialkot",
  "Architecture Design",
  "Interior Design Studio",
  "Construction Company",
];

export const process = [
  {
    step: "01",
    title: "Consultation",
    body: "Share your space, measurements and design vision with our team.",
  },
  {
    step: "02",
    title: "Design",
    body: "We develop a seamless Corian® solution tailored to your project.",
  },
  {
    step: "03",
    title: "Fabrication",
    body: "Our expert team crafts each piece with precision and care.",
  },
  {
    step: "04",
    title: "Installation",
    body: "Professional fitting and finishing bring your design to life.",
  },
];

export const galleryImages = [
  img.luxuryVilla,
  img.spanishVilla,
  img.luxuryHouse,
  img.courtyard,
  img.modernVilla,
  img.classicMansion,
  img.greyClassic,
  img.completedVilla,
  img.brickFront,
];
