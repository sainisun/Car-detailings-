/*
 * Style reminder: Midnight Gold Atelier, grounded in an Indian roadside
 * workshop context. Keep copy practical, confident, and free of unverified claims.
 */
import type { LucideIcon } from "lucide-react";
import { CarFront, Droplets, Gauge, Sparkles, SprayCan, Wrench, Zap } from "lucide-react";

export const phone = "8947880552";
export const whatsappPhone = "918947880552";
export const address = "Before HP Petrol Pump, Main Neemkathana Road, Dadi, Rajasthan";
export const mapUrl = "https://www.google.com/maps/search/?api=1&query=Shree+Sanwaliya+Car+Detailing+and+Service%2C+Dadi%2C+Rajasthan";
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
export const bookingMessage = "Hello Shree Sanwaliya Car Detailing & Service, I would like to enquire about a service for my vehicle.";

export const assets = {
  hero: "/media/sanwaliya-indian-workshop.jpg",
  polish: "/media/sanwaliya-indian-detailing.webp",
  foamWash: "/media/sanwaliya-indian-garage.jpg",
  mechanical: "/media/sanwaliya-fallback-workshop.jpg",
  interior: "/media/sanwaliya-fallback-polish.jpg",
  founder: "/media/sanwaliya-fallback-workshop.jpg",
  fallbackHero: "/media/sanwaliya-hero-reference.jpg",
  fallbackWorkshop: "/media/sanwaliya-fallback-workshop.jpg",
  fallbackPolish: "/media/sanwaliya-fallback-polish.jpg",
  mark: "/media/sanwaliya-mark.svg",
};

export type ServiceGroup = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  image: string;
  fallbackImage: string;
  included: string[];
  bestFor: string;
  note: string;
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "washing-cleaning",
    number: "01",
    title: "Washing & Cleaning",
    shortTitle: "Wash + clean",
    eyebrow: "Foam / deep / dry",
    summary: "A clean, composed reset for the parts you see, touch, and drive through every day.",
    description: "Start with a careful wash, then choose the depth of clean your vehicle needs. This route brings together Foam Washing, Deep Cleaning, and Dry Cleaning for cars and pickups.",
    icon: Droplets,
    image: assets.foamWash,
    fallbackImage: assets.fallbackWorkshop,
    included: ["Foam Washing", "Deep Cleaning", "Dry Cleaning"],
    bestFor: "Daily drivers, family cars, dusty road trips, and vehicles that need a clear reset.",
    note: "The final service mix is discussed directly with the workshop after a visual look at the vehicle.",
  },
  {
    slug: "polish-detailing",
    number: "02",
    title: "Polish & Detailing",
    shortTitle: "Detail + polish",
    eyebrow: "Buff / rub / polish",
    summary: "Careful finish work that brings clarity, smoothness, and a more considered shine back to the surface.",
    description: "For the outside finish, Shree Sanwaliya brings together Light Buffing, Rubbing, and Polishing in a practical detailing route made for Indian road conditions.",
    icon: Sparkles,
    image: assets.polish,
    fallbackImage: assets.fallbackPolish,
    included: ["Light Buffing", "Rubbing", "Polishing"],
    bestFor: "Vehicles with dullness, road film, visible marks, or a finish that needs more attention.",
    note: "The right level of surface work depends on paint condition, previous care, and the owner’s goal.",
  },
  {
    slug: "mechanical-work",
    number: "03",
    title: "Mechanical Work",
    shortTitle: "Mechanical care",
    eyebrow: "Workshop support",
    summary: "Hands-on workshop support for the maintenance jobs your car or pickup needs next.",
    description: "Bring the bigger vehicle-care conversation to the bay. The workshop also provides Mechanical Work for cars and pickups, with the exact job discussed before work begins.",
    icon: Wrench,
    image: assets.mechanical,
    fallbackImage: assets.fallbackWorkshop,
    included: ["Vehicle inspection conversation", "Practical mechanical support", "Car and pickup servicing"],
    bestFor: "Cars and pickups that need a workshop look beyond cleaning and detailing.",
    note: "Specific mechanical jobs, parts, timing, and pricing should be confirmed directly with the workshop.",
  },
];

export const serviceHighlights = [
  { title: "Foam Washing", copy: "Lift the road film with a careful, rich rinse.", icon: Droplets, group: "washing-cleaning" },
  { title: "Deep Cleaning", copy: "Reset the areas everyday driving reaches.", icon: Sparkles, group: "washing-cleaning" },
  { title: "Dry Cleaning", copy: "Bring focus back to the cabin and its details.", icon: SprayCan, group: "washing-cleaning" },
  { title: "Light Buffing", copy: "Refine the look of paint that has lost clarity.", icon: Zap, group: "polish-detailing" },
  { title: "Rubbing", copy: "A hands-on route for a smoother-looking finish.", icon: Gauge, group: "polish-detailing" },
  { title: "Polishing", copy: "Finish with a considered gloss pass.", icon: Sparkles, group: "polish-detailing" },
  { title: "Mechanical Work", copy: "Talk through the next practical workshop job.", icon: Wrench, group: "mechanical-work" },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Visit us", href: "/visit" },
];

export const values = [
  { number: "01", title: "Experienced team", copy: "Careful, hands-on service built around the vehicle in front of us.", icon: CarFront },
  { number: "02", title: "Modern equipment", copy: "Tools and workshop support for a clean, controlled finish.", icon: Wrench },
  { number: "03", title: "Cars + pickups", copy: "A practical service route for the vehicles that keep Rajasthan moving.", icon: CarFront },
];
