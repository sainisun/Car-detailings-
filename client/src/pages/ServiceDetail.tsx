/*
 * Style reminder: detail pages are practical and tactile—one clear route, three
 * observable steps, direct contact, and no invented pricing or operational claims.
 */
import { ArrowUpRight, Check, PhoneCall, Wrench } from "lucide-react";
import { Link, useRoute } from "wouter";
import { Breadcrumb, CalloutStrip, PageIntro, SectionLabel } from "@/components/SiteChrome";
import { assets, phone, serviceGroups, type ServiceGroup } from "@/lib/siteData";
import NotFound from "@/pages/NotFound";

const steps: Record<string, { number: string; title: string; copy: string }[]> = {
  "washing-cleaning": [
    { number: "01", title: "Look at the vehicle", copy: "We start with the surface, cabin, and the areas that need the most attention." },
    { number: "02", title: "Choose the clean route", copy: "Foam washing, deep cleaning, and dry cleaning can be combined around the vehicle’s condition." },
    { number: "03", title: "Check the finish", copy: "The vehicle is looked over again before you take the clean route back to the road." },
  ],
  "polish-detailing": [
    { number: "01", title: "Read the surface", copy: "Paint condition, road film, dullness, and visible marks help set the right direction." },
    { number: "02", title: "Work the finish", copy: "Light buffing, rubbing, and polishing are chosen for the result the vehicle can support." },
    { number: "03", title: "Bring back clarity", copy: "The final pass is about a smooth, considered surface—not a rushed shine." },
  ],
  "mechanical-work": [
    { number: "01", title: "Talk through the job", copy: "Bring the concern to the bay so the workshop can understand the vehicle and the next step." },
    { number: "02", title: "Work practically", copy: "Mechanical support is handled around the confirmed job, vehicle, and available workshop requirements." },
    { number: "03", title: "Confirm what’s next", copy: "Before you drive away, the next practical care conversation stays clear and direct." },
  ],
};

function RelatedRoutes({ current }: { current: ServiceGroup }) {
  return <div className="related-routes"><SectionLabel number="→" eyebrow="Continue the route" /><div>{serviceGroups.filter((item) => item.slug !== current.slug).map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><span>{item.number}</span><strong>{item.title}</strong><ArrowUpRight size={16} /></Link>)}</div></div>;
}

export default function ServiceDetail() {
  const [, params] = useRoute<{ slug: string }>("/services/:slug");
  const service = serviceGroups.find((item) => item.slug === params?.slug);
  if (!service) return <NotFound />;
  const serviceSteps = steps[service.slug];
  const Icon = service.icon;
  return <div className={`page-shell service-detail-page service-detail-page--${service.slug}`}><PageIntro number={service.number} eyebrow={service.eyebrow} title="A better" accent="care route." lead={service.description} image={service.image} /><section className="content-section"><div className="shell-width"><Breadcrumb label={service.title} /><div className={`route-visual route-visual--${service.slug}`} aria-hidden="true"><span>{service.number} / {service.shortTitle}</span><i /><b /><i /><b /><i /></div><div className="detail-layout"><article className="detail-main"><div className="detail-kicker"><Icon size={20} /><span>{service.shortTitle}</span></div><h2>{service.title}<br /><em>made practical.</em></h2><p className="detail-lead">{service.summary}</p><p className="body-copy">{service.note}</p><div className="included-box"><SectionLabel number="01" eyebrow="Included in this route" /><div className="included-list">{service.included.map((item) => <div key={item}><span><Check size={14} /></span><strong>{item}</strong></div>)}</div></div></article><aside className="detail-aside"><div className="contact-card"><span className="contact-card-mark"><Wrench size={18} /></span><small>Need to talk it through?</small><strong>Call the<br />workshop.</strong><a className="contact-card-phone" href={`tel:${phone}`}>{phone} <PhoneCall size={16} /></a><p>Tell us about the car or pickup and we’ll help you choose the next practical step.</p><a className="button button--gold" href={`tel:${phone}`}>Call now <ArrowUpRight size={16} /></a></div></aside></div></div></section><section className="content-section steps-section"><div className="shell-width"><SectionLabel number="02" eyebrow="How the route moves" /><div className="steps-grid">{serviceSteps.map((step) => <div className="step-card" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></div>)}</div></div></section><section className="content-section related-section"><div className="shell-width"><RelatedRoutes current={service} /></div></section><CalloutStrip title="Bring your vehicle to the right route." /></div>;
}
