/*
 * Style reminder: Midnight Gold Atelier — asymmetric editorial composition,
 * graphite-black backgrounds, gold route lines, warm-white type, tactile motion.
 */
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CarFront,
  Check,
  ChevronDown,
  Droplets,
  Gauge,
  Hammer,
  MapPin,
  Menu,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const assets = {
  hero: "/manus-storage/sanwaliya-hero-reference_dab87993.jpg",
  detail: "/manus-storage/sanwaliya-detailing-closeup_1b71591d.jpg",
  pickup: "/manus-storage/sanwaliya-pickup-service_71d2feaf.jpg",
  texture: "/manus-storage/sanwaliya-gold-motion-texture_6564b05b.jpg",
  mark: "/manus-storage/sanwaliya-mark_2ce3d916.png",
  fallbackDetail: "/manus-storage/sanwaliya-fallback-polish_e00617de.jpg",
  fallbackPickup: "/manus-storage/sanwaliya-fallback-workshop_8aec2b49.jpg",
};

const phone = "8947880552";
const address = "Before HP Petrol Pump, Main Neemkathana Road, Dadi, Rajasthan";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=Shree+Sanwaliya+Car+Detailing+and+Service%2C+Dadi%2C+Rajasthan";

type Service = {
  number: string;
  title: string;
  copy: string;
  icon: LucideIcon;
  accent?: boolean;
};

const services: Service[] = [
  { number: "01", title: "Foam Washing", copy: "A rich, careful rinse that lifts the road film without rushing the finish.", icon: Droplets },
  { number: "02", title: "Deep Cleaning", copy: "A thorough interior and exterior reset for the places everyday driving reaches.", icon: Sparkles },
  { number: "03", title: "Dry Cleaning", copy: "Focused cabin care that leaves the inside feeling fresh, clear, and ready.", icon: SprayCan },
  { number: "04", title: "Light Buffing", copy: "A refined surface treatment to revive the visual clarity of your paintwork.", icon: Zap },
  { number: "05", title: "Rubbing", copy: "Hands-on correction work for a smoother, cleaner-looking exterior finish.", icon: Gauge },
  { number: "06", title: "Polishing", copy: "The final gloss pass that brings a considered shine back to your car.", icon: ShieldCheck, accent: true },
  { number: "07", title: "Mechanical Work", copy: "Practical workshop support for the maintenance jobs your vehicle needs next.", icon: Wrench },
];

const navItems = [
  { label: "Services", href: "#services" },
  { label: "The standard", href: "#standard" },
  { label: "Visit us", href: "#visit" },
];

function LogoLockup({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className={`brand-lockup ${compact ? "brand-lockup--compact" : ""}`} aria-label="Shree Sanwaliya Car Detailing & Service home">
      <span className="brand-symbol" aria-hidden="true">
        <img
          src={assets.mark}
          alt=""
          className="brand-mark brand-mark--generated"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.nextElementSibling?.classList.add("brand-mark--fallback-visible");
          }}
        />
        <svg className="brand-mark--fallback" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1.7 21 4.6v7.1c0 5.5-3.6 10.2-9 12.5-5.4-2.3-9-7-9-12.5V4.6L12 1.7Z" stroke="currentColor" strokeWidth="1.3" />
          <path d="M5.3 13.9c1.2-3.5 3.4-5.2 6.7-5.2 3.3 0 5.5 1.7 6.7 5.2M7.3 14h9.4M8.1 16.8h1.5M14.4 16.8h1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <path d="m17.9 6.4.6 1.2 1.3.2-.9.9.2 1.3-1.2-.6-1.2.6.2-1.3-.9-.9 1.3-.2.6-1.2Z" fill="currentColor" />
        </svg>
      </span>
      <span className="brand-copy">
        <span className="brand-name">Shree Sanwaliya</span>
        <span className="brand-subtitle">Car Detailing &amp; Service</span>
      </span>
    </a>
  );
}

function SectionLabel({ eyebrow, number }: { eyebrow: string; number: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      <span>{eyebrow}</span>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="header-inner">
          <LogoLockup compact />
          <nav className={`desktop-nav ${menuOpen ? "desktop-nav--open" : ""}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-phone" href={`tel:${phone}`} aria-label={`Call Shree Sanwaliya at ${phone}`}>
              <PhoneCall size={15} strokeWidth={1.8} />
              <span>{phone}</span>
            </a>
            <a className="button button--gold button--small header-cta" href={`tel:${phone}`}>
              Call the workshop <ArrowUpRight size={15} />
            </a>
            <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={assets.hero} alt="Glossy black car receiving a premium foam wash" />
          <div className="hero-shade" />
          <div className="hero-grain" />
          <div className="hero-route hero-route--one" />
          <div className="hero-route hero-route--two" />
          <div className="hero-content shell-width">
            <div className="hero-copy">
              <div className="eyebrow reveal reveal--delay-1"><span className="eyebrow-dot" /> Car care · detailing · service</div>
              <h1 id="hero-title" className="hero-title reveal reveal--delay-2">Your drive<br /><em>deserves</em><br />a clean start.</h1>
              <p className="hero-description reveal reveal--delay-3">Professional car detailing, washing, polishing, and workshop care for cars and pickups in Dadi, Rajasthan.</p>
              <div className="hero-actions reveal reveal--delay-4">
                <a className="button button--gold" href="#services">Explore services <ArrowDownRight size={17} /></a>
                <a className="text-link" href={`tel:${phone}`}><span>Talk to the team</span><ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="hero-meta reveal reveal--delay-4">
              <div className="hero-meta-line"><span>01</span><span>Shree Sanwaliya</span></div>
              <p>Before HP Petrol Pump<br />Main Neemkathana Road<br />Dadi, Rajasthan</p>
            </div>
          </div>
          <div className="hero-bottom shell-width">
            <div className="hero-promise"><span>|| Jai Shri Sanwaliya Seth ||</span><span>→</span><strong>Your car’s care, our responsibility.</strong></div>
            <div className="scroll-cue"><span>Scroll to explore</span><ChevronDown size={16} /></div>
          </div>
        </section>

        <section className="service-intro" id="services" aria-labelledby="services-title">
          <div className="shell-width service-intro-grid">
            <div className="service-intro-side">
              <SectionLabel number="01" eyebrow="The service bay" />
              <p className="side-note">From first rinse to final shine, every service is built around the finish you want to drive away with.</p>
            </div>
            <div className="service-intro-main">
              <h2 id="services-title">Care, from first rinse<br /><span>to final shine.</span></h2>
              <p className="lead-copy">A multi-service workshop for the vehicles that keep your day moving. Choose a focused detail or bring us the bigger job—we’ll start with a clear look at what your car needs.</p>
              <div className="service-proof-row" aria-label="Workshop qualities">
                <div><strong>01</strong><span>Experienced<br />team</span></div>
                <div><strong>02</strong><span>Modern<br />equipment</span></div>
                <div><strong>03</strong><span>Careful<br />finish</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-grid-section" aria-label="Available workshop services">
          <div className="shell-width services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a className={`service-card ${service.accent ? "service-card--accent" : ""}`} href={`tel:${phone}`} key={service.number}>
                  <div className="service-card-top"><span>{service.number}</span><Icon size={21} strokeWidth={1.5} /></div>
                  <div className="service-card-bottom"><h3>{service.title}</h3><p>{service.copy}</p><span className="service-card-arrow"><ArrowUpRight size={17} /></span></div>
                </a>
              );
            })}
            <div className="service-card service-card--image" aria-label="All types of cars and pickups welcome">
              <img src={assets.fallbackPickup} alt="Car and pickup vehicles in a clean workshop bay" />
              <div className="service-image-overlay" />
              <div className="service-image-copy"><span>All types welcome</span><strong>Cars +<br />pickups</strong><ArrowUpRight size={18} /></div>
            </div>
          </div>
        </section>

        <section className="standard-section" id="standard" aria-labelledby="standard-title">
          <div className="standard-texture" style={{ backgroundImage: `url(${assets.texture})` }} />
          <div className="shell-width standard-grid">
            <div className="standard-image-wrap">
              <div className="standard-image-frame"><img src={assets.fallbackDetail} alt="Detailing professional polishing a car hood" /></div>
              <div className="image-caption"><span>Finish / 01</span><span>Hand-finished attention</span></div>
            </div>
            <div className="standard-copy">
              <SectionLabel number="02" eyebrow="The Sanwaliya standard" />
              <h2 id="standard-title">Good work is<br /><em>felt</em> before it’s seen.</h2>
              <p>It’s in the careful rinse. The clean edge around a badge. The moment the paint catches the light again. Our job is simple: treat your vehicle with the attention it deserves.</p>
              <div className="standard-list">
                <div><span><Check size={14} /></span><p><strong>Clear, practical service</strong><br />We focus on the work your vehicle actually needs.</p></div>
                <div><span><Check size={14} /></span><p><strong>Built for daily drives</strong><br />Care that makes sense for cars and pickups on the road.</p></div>
                <div><span><Check size={14} /></span><p><strong>One direct conversation</strong><br />Call the workshop and tell us what you want looked after.</p></div>
              </div>
              <a className="button button--outline" href={`tel:${phone}`}>Speak with Shree Sanwaliya <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="visit-section" id="visit" aria-labelledby="visit-title">
          <div className="shell-width visit-grid">
            <div className="visit-copy">
              <SectionLabel number="03" eyebrow="Find the bay" />
              <h2 id="visit-title">Bring it in.<br /><span>We’ll handle the details.</span></h2>
              <p>Call ahead or stop by for car detailing, washing, polishing, light work, rubbing, and broader workshop support.</p>
              <div className="visit-details">
                <div className="visit-detail-icon"><MapPin size={19} /></div>
                <div><small>Workshop address</small><strong>{address}</strong></div>
              </div>
              <div className="visit-details">
                <div className="visit-detail-icon"><PhoneCall size={19} /></div>
                <div><small>Call the workshop</small><a href={`tel:${phone}`}><strong>{phone}</strong></a></div>
              </div>
              <div className="visit-actions"><a className="button button--gold" href={`tel:${phone}`}>Call now <PhoneCall size={16} /></a><a className="button button--text" href={mapUrl} target="_blank" rel="noreferrer">Open directions <ArrowUpRight size={16} /></a></div>
            </div>
            <div className="visit-card">
              <div className="visit-card-top"><span>Workshop note</span><CarFront size={23} /></div>
              <div className="visit-card-main"><span className="visit-card-number">Call<br />the bay</span><p>When your car needs a little more care, keep this number close and speak with the workshop directly.</p><a href={`tel:${phone}`} className="visit-card-link">{phone} <ArrowUpRight size={16} /></a></div>
              <div className="visit-card-foot"><span>Cars</span><i /><span>Pickups</span><i /><span>Detailing</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell-width footer-top"><LogoLockup /><div className="footer-line" /><p>Care for the road ahead.<br /><span>Dadi · Rajasthan</span></p></div>
        <div className="shell-width footer-bottom"><span>© {new Date().getFullYear()} Shree Sanwaliya Car Detailing &amp; Service</span><span>Car care · detailing · service</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></div>
      </footer>
      <a href={`tel:${phone}`} className="floating-call" aria-label={`Call workshop at ${phone}`}><PhoneCall size={19} /><span>Call us</span></a>
    </div>
  );
}

export default Home;
