/*
 * Style reminder: every shared chrome element should feel like a compact Indian
 * workshop instrument panel—graphite glass, gold route marks, direct actions.
 */
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronRight, Menu, MessageCircle, PhoneCall, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { address, assets, mapUrl, navItems, phone, whatsappPhone } from "@/lib/siteData";

export function BrandMark() {
  return (
    <span className="brand-symbol" aria-hidden="true">
      <img src={assets.mark} alt="" className="brand-mark brand-mark--generated" />
      <svg className="brand-mark--fallback" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.7 21 4.6v7.1c0 5.5-3.6 10.2-9 12.5-5.4-2.3-9-7-9-12.5V4.6L12 1.7Z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5.3 13.9c1.2-3.5 3.4-5.2 6.7-5.2 3.3 0 5.5 1.7 6.7 5.2M7.3 14h9.4M8.1 16.8h1.5M14.4 16.8h1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="m17.9 6.4.6 1.2 1.3.2-.9.9.2 1.3-1.2-.6-1.2.6.2-1.3-.9-.9 1.3-.2.6-1.2Z" fill="currentColor" />
      </svg>
    </span>
  );
}

export function LogoLockup({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={`brand-lockup ${compact ? "brand-lockup--compact" : ""}`} aria-label="Shree Sanwaliya Car Detailing & Service home">
      <BrandMark />
      <span className="brand-copy">
        <span className="brand-name">Shree Sanwaliya</span>
        <span className="brand-subtitle">Car Detailing &amp; Service</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="header-inner shell-width">
        <LogoLockup compact />
        <nav className={`desktop-nav ${menuOpen ? "desktop-nav--open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={location === item.href ? "is-active" : ""}>{item.label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href={`tel:${phone}`} aria-label={`Call Shree Sanwaliya at ${phone}`}><PhoneCall size={15} /><span>{phone}</span></a>
          <a className="button button--gold button--small header-cta" href={`tel:${phone}`}>Call workshop <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell-width footer-main">
        <div className="footer-brand"><LogoLockup /><p>Care for the road ahead.<br /><span>Motipura · Bundi · Rajasthan</span></p></div>
        <div className="footer-columns">
          <div><small>Explore</small>{navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
          <div><small>Services</small><Link href="/services/washing-cleaning">Washing &amp; cleaning</Link><Link href="/services/polish-detailing">Polish &amp; detailing</Link><Link href="/services/mechanical-work">Mechanical work</Link></div>
          <div><small>Reach the bay</small><a href={`tel:${phone}`}>{phone}</a><a href={mapUrl} target="_blank" rel="noreferrer">Open directions</a><span>{address}</span></div>
        </div>
      </div>
      <div className="shell-width footer-bottom"><span>© {new Date().getFullYear()} Shree Sanwaliya Car Detailing &amp; Service</span><span>Car care · detailing · service</span><Link href="/">Back to top <ArrowUpRight size={14} /></Link></div>
    </footer>
  );
}

export function FloatingMotion() {
  return <div className="floating-motion" aria-hidden="true"><span className="float-orb float-orb--one" /><span className="float-orb float-orb--two" /><span className="float-orb float-orb--three" /><span className="float-route float-route--one" /><span className="float-route float-route--two" /></div>;
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [location]);
  return <div className="site-shell"><SiteHeader /><FloatingMotion /><main>{children}</main><SiteFooter /><a href={`tel:${phone}`} className="floating-call" aria-label={`Call workshop at ${phone}`}><PhoneCall size={18} /><span>Call us</span></a><a href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello Shree Sanwaliya, I would like to enquire about a vehicle service.")}`} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Message Shree Sanwaliya on WhatsApp"><MessageCircle size={18} /><span>WhatsApp</span></a></div>;
}

export function SectionLabel({ eyebrow, number }: { eyebrow: string; number: string }) {
  return <div className="section-label"><span>{number}</span><i /><span>{eyebrow}</span></div>;
}

export function PageIntro({ number, eyebrow, title, accent, lead, image, fallbackImage = "/media/sanwaliya-fallback-workshop.jpg" }: { number: string; eyebrow: string; title: string; accent: string; lead: string; image: string; fallbackImage?: string }) {
  return <section className="page-intro"><img className="page-intro-image" src={image} alt="" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = fallbackImage; }} /><div className="page-intro-shade" /><div className="shell-width page-intro-inner"><SectionLabel number={number} eyebrow={eyebrow} /><h1>{title}<br /><em>{accent}</em></h1><p>{lead}</p><div className="page-intro-line"><span>Shree Sanwaliya / Rajasthan</span><span>Car care · detailing · service</span></div></div></section>;
}

export function CalloutStrip({ title = "Bring your car in. We’ll handle the details." }: { title?: string }) {
  return <section className="callout-strip"><div className="shell-width callout-inner"><div><SectionLabel number="→" eyebrow="Talk to the workshop" /><h2>{title}</h2></div><div className="callout-actions"><a className="button button--gold" href={`tel:${phone}`}>Call {phone} <PhoneCall size={16} /></a><a className="button button--outline" href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello Shree Sanwaliya, I would like to enquire about a vehicle service.")}`} target="_blank" rel="noreferrer">WhatsApp <MessageCircle size={16} /></a></div></div></section>;
}

export function Breadcrumb({ label }: { label: string }) {
  return <div className="breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} /><span>{label}</span></div>;
}
