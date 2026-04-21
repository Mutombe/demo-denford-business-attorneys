import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, WhatsappLogo } from '@phosphor-icons/react';
import { firm } from '../data/siteData';

const FALLBACK = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=85';

function getWaHref(name) {
  const number = (firm.whatsapp || firm.phone || '').replace(/\D/g, '');
  const text = `Hi DBA, I'd like to speak with ${name}.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export default function AttorneyCard({ attorney, featured = false }) {
  const waHref = getWaHref(attorney.name);

  return (
    <div className="relative block group">
      <Link
        to={`/attorneys/${attorney.slug}`}
        className="block"
      >
        <div className={`relative overflow-hidden bg-navy-900 ${featured ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
          <img
            src={attorney.portrait}
            alt={attorney.name}
            loading="lazy"
            decoding="async"
            onError={(e) => { e.currentTarget.src = attorney.portraitFallback || FALLBACK; }}
            className="w-full h-full object-cover object-center grayscale-[30%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1200ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-5 left-5 right-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/95 text-navy-900 font-display text-[0.62rem] tracking-[0.22em] uppercase font-semibold">
              {attorney.role === 'founding-partner' ? 'Founding Partner' : attorney.role === 'practice-manager' ? 'Operations' : 'Team'}
            </span>
          </div>
        </div>
        <div className="mt-5">
          <h3 className={`font-display font-bold text-navy-900 display-tight ${featured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
            {attorney.name}
          </h3>
          <p className="mt-1 font-serif italic text-ink-500 text-[0.95rem]">
            {attorney.title}
          </p>
          <p className="mt-3 font-body text-ink-400 text-[0.82rem] leading-relaxed line-clamp-2">
            {attorney.short}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <span className="inline-flex items-center gap-2 font-display text-[0.7rem] tracking-[0.22em] uppercase font-semibold text-navy-700 group-hover:text-gold-500 transition-colors">
              <span>Profile</span>
              <ArrowRight size={12} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
      {/* WhatsApp icon — positioned on the portrait's top-right */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        aria-label={`Speak with ${attorney.name} on WhatsApp`}
        className="absolute top-4 right-4 inline-flex items-center justify-center h-10 w-10 text-white shadow-md hover:brightness-110 transition-all z-10"
        style={{ backgroundColor: '#25D366' }}
      >
        <WhatsappLogo size={15} weight="fill" />
      </a>
    </div>
  );
}
