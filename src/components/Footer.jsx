import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinLogo, FacebookLogo, Envelope, Phone, MapPin, WhatsappLogo } from '@phosphor-icons/react';
import { firm, practiceAreas, memberships } from '../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();
  const topPractices = practiceAreas.slice(0, 6);

  return (
    <footer className="bg-navy-900 text-bone-100 relative overflow-hidden">
      {/* Regulatory strip */}
      <div className="border-b border-white/10">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="index-label text-gold-400">Regulatory Affiliations</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {memberships.map((m) => (
                <span key={m} className="font-display text-[0.72rem] tracking-[0.12em] uppercase text-bone-100/70 font-medium">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-[1480px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Denford Business Attorneys"
                width="52"
                height="52"
                className="h-12 w-auto object-contain brightness-0 invert"
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-sm tracking-[0.08em]">DENFORD BUSINESS</span>
                <span className="font-display font-black text-sm tracking-[0.08em]">ATTORNEYS</span>
              </div>
            </Link>
            <p className="font-serif italic text-gold-400 text-lg mb-5">{firm.tagline}</p>
            <p className="font-body text-bone-100/70 text-sm leading-relaxed max-w-sm">
              A Harare-based boutique firm built exclusively around real estate and commercial law — translating complex legal issues into tangible business advantage.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={firm.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="h-10 w-10 border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-colors">
                <LinkedinLogo size={16} weight="regular" />
              </a>
              <a href={firm.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="h-10 w-10 border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-colors">
                <FacebookLogo size={16} weight="regular" />
              </a>
            </div>
          </div>

          {/* Practice */}
          <div className="md:col-span-3">
            <p className="index-label text-gold-400 mb-6">Practice Areas</p>
            <ul className="space-y-3">
              {topPractices.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/practice-areas/${p.slug}`}
                    className="font-display text-[0.85rem] text-bone-100/80 hover:text-white tracking-wide"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/practice-areas" className="font-display text-[0.85rem] text-gold-400 link-reveal tracking-wide">
                  View all practices →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2">
            <p className="index-label text-gold-400 mb-6">Navigate</p>
            <ul className="space-y-3">
              <li><Link to="/firm" className="font-display text-[0.85rem] text-bone-100/80 hover:text-white tracking-wide">The Firm</Link></li>
              <li><Link to="/attorneys" className="font-display text-[0.85rem] text-bone-100/80 hover:text-white tracking-wide">Attorneys</Link></li>
              <li><Link to="/clients" className="font-display text-[0.85rem] text-bone-100/80 hover:text-white tracking-wide">Clients</Link></li>
              <li><Link to="/insights" className="font-display text-[0.85rem] text-bone-100/80 hover:text-white tracking-wide">Insights</Link></li>
              <li><Link to="/careers" className="font-display text-[0.85rem] text-bone-100/80 hover:text-white tracking-wide">Careers</Link></li>
              <li><Link to="/contact" className="font-display text-[0.85rem] text-bone-100/80 hover:text-white tracking-wide">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="index-label text-gold-400 mb-6">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-400 mt-1 shrink-0" weight="regular" />
                <span className="font-body text-[0.85rem] text-bone-100/80 leading-relaxed">{firm.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold-400 mt-1 shrink-0" weight="regular" />
                <a href={`tel:${firm.phone}`} className="font-body text-[0.85rem] text-bone-100/80 hover:text-white">
                  {firm.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Envelope size={16} className="text-gold-400 mt-1 shrink-0" weight="regular" />
                <a href={`mailto:${firm.email}`} className="font-body text-[0.85rem] text-bone-100/80 hover:text-white break-all">
                  {firm.email}
                </a>
              </li>
            </ul>
            <a
              href={`https://wa.me/${firm.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Hi DBA, I'd like to discuss a matter with one of your attorneys.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 font-display text-[0.66rem] tracking-[0.22em] uppercase font-bold text-white transition-all hover:brightness-110"
              style={{ backgroundColor: '#25D366' }}
            >
              <WhatsappLogo size={13} weight="fill" />
              Message on WhatsApp
            </a>

            <p className="mt-6 index-label text-bone-100/40">Hours</p>
            <p className="mt-2 font-body text-[0.82rem] text-bone-100/70">{firm.hours}</p>
          </div>
        </div>

        <div className="hairline my-12 opacity-30"></div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[0.72rem] tracking-[0.14em] uppercase font-display text-bone-100/50">
          <p>© {year} Denford Business Attorneys. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <span>Legal Practitioner · Conveyancer · Notary Public</span>
          </div>
          <a
            href="https://www.bitstudio.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="link-reveal hover:text-gold-400 transition-colors"
          >
            Crafted by Bit Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
