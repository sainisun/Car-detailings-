/*
 * Style reminder: a mobile-first service menu that feels like a workshop route
 * card—large tap targets, clear sub-service groupings, Indian workshop imagery.
 */
import { ArrowUpRight, Check, PhoneCall } from "lucide-react";
import { Link } from "wouter";
import { Breadcrumb, CalloutStrip, PageIntro, SectionLabel } from "@/components/SiteChrome";
import { assets, phone, serviceGroups, serviceHighlights } from "@/lib/siteData";

export default function Services() {
  return (
    <div className="page-shell">
      <PageIntro number="01" eyebrow="The full service menu" title="Choose your" accent="care route." lead="Washing, cleaning, polish, detailing, and mechanical workshop support for cars and pickups at Main Nainwa Road, Dei, Bundi, Rajasthan, 323802." image={assets.foamWash} />
      <section className="content-section services-overview"><div className="shell-width"><Breadcrumb label="Services" /><div className="section-heading section-heading--split"><div><SectionLabel number="01" eyebrow="Service routes" /><h2>Every vehicle<br /><span>needs a different rhythm.</span></h2></div><p>Start with what you see, tell us what you need, and let the workshop guide the next practical step. These are the main service routes available at Shree Sanwaliya.</p></div><div className="service-route-grid">{serviceGroups.map((group) => { const Icon = group.icon; return <Link className="route-card" href={`/services/${group.slug}`} key={group.slug}><div className="route-card-media"><img src={group.image} alt={`${group.title} in an Indian automotive workshop`} /><span className="route-card-index">{group.number}</span><span className="route-card-icon"><Icon size={21} /></span></div><div className="route-card-body"><p className="route-card-eyebrow">{group.eyebrow}</p><h3>{group.title}</h3><p>{group.summary}</p><ul>{group.included.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul><span className="route-card-link">See route <ArrowUpRight size={16} /></span></div></Link>; })}</div></div></section>
      <section className="content-section service-index-section"><div className="shell-width service-index-grid"><div><SectionLabel number="02" eyebrow="At a glance" /><h2>Seven ways<br /><em>to care.</em></h2><p className="body-copy">The poster’s core services, translated into a clear English service menu for the website.</p><a className="button button--outline" href={`tel:${phone}`}>Ask the workshop <PhoneCall size={16} /></a></div><div className="service-index-list">{serviceHighlights.map((item, index) => { const Icon = item.icon; return <Link href={`/services/${item.group}`} className="service-index-row" key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><Icon size={18} /><div><strong>{item.title}</strong><p>{item.copy}</p></div><ArrowUpRight size={16} /></Link>; })}</div></div></section>
      <CalloutStrip title="Not sure where to start? Call the workshop." />
    </div>
  );
}
