/*
 * Style reminder: Midnight Gold Atelier, grounded in an Indian roadside
 * workshop context. Keep copy practical, confident, and free of unverified claims.
 */
import type { LucideIcon } from "lucide-react";
import { CarFront, Droplets, Gauge, Sparkles, SprayCan, Wrench, Zap } from "lucide-react";

export const phone = "8947880552";
export const whatsappPhone = "918947880552";
export const address = "Shri Sanwaliya Car Detailing & Service, SH34/SH37A, Motipura, Loharpura, Nainwa Tehsil, Bundi, Rajasthan, India";
export const location = { lat: 25.690720, lng: 75.929624 };
export const mapUrl = "https://maps.app.goo.gl/TH3Fi57hhgdaCjK59?g_st=ac";
export const mapEmbedUrl = "https://www.google.com/maps?q=25.690720,75.929624&z=16&output=embed";
export const bookingMessage = "Hello Shree Sanwaliya Car Detailing & Service, I would like to enquire about a service for my vehicle.";

export const assets = {
  hero: "/media/sanwaliya-indian-workshop.jpg",
  polish: "/media/sanwaliya-founder-polish-final.jpg",
  foamWash: "/media/sanwaliya-founder-wash-final.jpg",
  mechanical: "/media/sanwaliya-founder-mechanical-final.jpg",
  interior: "/media/sanwaliya-fallback-polish.jpg",
  founder: "/media/sanwaliya-founder-office.jpg",
  founderOffice: "/media/sanwaliya-founder-office.jpg",
  founderFoamWash: "/media/sanwaliya-founder-wash-final.jpg",
  founderPolish: "/media/sanwaliya-founder-polish-final.jpg",
  founderMechanical: "/media/sanwaliya-founder-mechanical-final.jpg",
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
  articleTitle: string;
  articleIntro: string;
  articleSections: { heading: string; copy: string }[];
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
    articleTitle: "A clean reset starts with the right read.",
    articleIntro: "A local road leaves a vehicle with more than visible dust. Foam, cabin use, water marks, and the small edges around badges all tell the team where to begin.",
    articleSections: [
      { heading: "Start with the surface", copy: "The first conversation is visual and practical. The team looks at the body, glass, wheels, cabin touch points, and the areas that have collected the most road film." },
      { heading: "Choose the depth of clean", copy: "Foam washing can set the reset in motion, while deep cleaning and dry cleaning bring more attention to the places everyday driving reaches. The final mix depends on the vehicle in front of the bay." },
      { heading: "Leave with a clearer next step", copy: "The goal is not a complicated package. It is a cleaner vehicle, a clear handover conversation, and a practical understanding of what the vehicle may need next." },
    ],
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
    articleTitle: "The finish is read before it is refined.",
    articleIntro: "Polish and detailing are about more than adding shine. They are about understanding the paint, the road film, and the finish the vehicle can realistically support.",
    articleSections: [
      { heading: "Read the paint honestly", copy: "Visible dullness, marks, old residue, and the way light falls across the panel help define the route. That first look keeps surface work deliberate rather than rushed." },
      { heading: "Work in considered passes", copy: "Light buffing, rubbing, and polishing each have a different role. The team chooses the practical sequence around the condition of the surface and the result the owner wants to discuss." },
      { heading: "Bring back a composed reflection", copy: "A good finish is seen in the bonnet reflection, the clean edge around a badge, and the way the vehicle holds light after the work. The final pass is about clarity, not inflated promises." },
    ],
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
    articleTitle: "Workshop support begins with a direct conversation.",
    articleIntro: "A mechanical concern is easier to handle when the vehicle, the symptom, and the next practical step are discussed together at the bay.",
    articleSections: [
      { heading: "Bring the concern to the bay", copy: "Tell the workshop what you are noticing, when it happens, and what kind of vehicle you are bringing. Cars and pickups can need different kinds of attention, so context matters." },
      { heading: "Keep the work practical", copy: "The exact mechanical job is confirmed before work begins. This keeps the conversation grounded in the vehicle, the available workshop requirements, and the job that has actually been discussed." },
      { heading: "Confirm what comes next", copy: "Before the vehicle leaves, the next step stays clear. Parts, timing, pricing, and any specific mechanical requirement should be confirmed directly with the workshop." },
    ],
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
  { label: "Find us", href: "/#location" },
  { label: "Visit us", href: "/visit" },
];

export const values = [
  { number: "01", title: "Experienced team", copy: "Careful, hands-on service built around the vehicle in front of us.", icon: CarFront },
  { number: "02", title: "Modern equipment", copy: "Tools and workshop support for a clean, controlled finish.", icon: Wrench },
  { number: "03", title: "Cars + pickups", copy: "A practical service route for the vehicles that keep Rajasthan moving.", icon: CarFront },
];
