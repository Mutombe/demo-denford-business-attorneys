import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

const FALLBACK = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80';

export default function PracticeAreaCard({ area, variant = 'default' }) {
  if (variant === 'minimal') {
    return (
      <Link
        to={`/practice-areas/${area.slug}`}
        className="block group border-t border-steel-300 py-8 md:py-10 transition-colors hover:border-gold-500"
      >
        <div className="grid grid-cols-12 gap-4 items-start">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display font-light text-steel-400 text-[0.72rem] tracking-[0.2em]">{area.number}</span>
          </div>
          <div className="col-span-10 md:col-span-7">
            <span className="index-label text-gold-500">{area.pillar}</span>
            <h3 className="mt-2 font-display font-bold text-2xl md:text-3xl text-navy-900 group-hover:text-navy-700 transition-colors display-tight">
              {area.name}
            </h3>
          </div>
          <div className="hidden md:block md:col-span-3">
            <p className="font-serif text-ink-500 text-[0.95rem] leading-relaxed">
              {area.short}
            </p>
          </div>
          <div className="col-span-12 md:col-span-1 flex md:justify-end items-start mt-4 md:mt-0">
            <span className="inline-flex items-center justify-center h-11 w-11 border border-navy-700 text-navy-700 group-hover:bg-navy-700 group-hover:text-white transition-all">
              <ArrowRight size={16} weight="bold" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/practice-areas/${area.slug}`}
      className="block group relative overflow-hidden bg-bone-100 border border-steel-200 hover:border-navy-700 transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden bg-navy-900">
        <img
          src={area.image}
          alt={area.name}
          loading="lazy"
          decoding="async"
          onError={(e) => { e.currentTarget.src = FALLBACK; }}
          className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1200ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/10 to-transparent"></div>
        <span className="absolute top-4 left-5 font-display font-light text-white/90 text-[0.72rem] tracking-[0.22em]">
          {area.number}
        </span>
      </div>
      <div className="p-6 md:p-7">
        <span className="index-label text-gold-500">{area.pillar}</span>
        <h3 className="mt-2 font-display font-bold text-xl md:text-2xl text-navy-900 display-tight leading-tight">
          {area.name}
        </h3>
        <p className="mt-3 font-serif text-ink-500 text-[0.9rem] leading-relaxed line-clamp-3">
          {area.short}
        </p>
        <div className="mt-5 flex items-center gap-2 font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-navy-700 group-hover:text-gold-500 transition-colors">
          <span>Explore Practice</span>
          <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
