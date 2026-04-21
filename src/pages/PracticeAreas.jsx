import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FunnelSimple } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import PracticeAreaCard from '../components/PracticeAreaCard';
import { practiceAreas, pillars } from '../data/siteData';

const PILLARS = ['All', 'Real Estate', 'Compliance', 'Business Law', 'Complementary'];

export default function PracticeAreas() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? practiceAreas : practiceAreas.filter((p) => p.pillar === filter);

  return (
    <PageTransition>
      <SEO title="Practice Areas — Denford Business Attorneys" description="Fourteen practice areas across three integrated pillars — real estate, compliance advisory, and business law." />

      {/* Hero */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-20 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="flex items-center gap-3 mb-6 text-ink-400 text-[0.7rem] tracking-[0.22em] uppercase font-display">
            <Link to="/" className="link-reveal">Home</Link>
            <span>/</span>
            <span className="text-navy-900">Practice</span>
          </div>
          <span className="index-label">Our Practice</span>
          <h1 className="mt-4 font-display font-black text-5xl md:text-7xl lg:text-[7rem] text-navy-900 display-tight">
            Where strategy meets <span className="italic font-semibold text-gold-500">specialisation.</span>
          </h1>
          <p className="mt-8 font-serif text-ink-500 text-lg md:text-xl max-w-3xl leading-relaxed">
            Three interconnected pillars. Fourteen practice areas. One integrated picture.
          </p>
        </div>
      </section>

      {/* Pillars callout */}
      <section className="relative py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-white/15">
            {pillars.map((p, idx) => (
              <div key={p.number} className={`p-8 md:p-10 border-b md:border-b-0 border-white/15 ${idx < 2 ? 'md:border-r' : ''}`}>
                <span className="font-display text-gold-400 text-[0.7rem] tracking-[0.3em] uppercase font-light">Pillar {p.number}</span>
                <h3 className="mt-3 font-display font-bold text-2xl display-tight">{p.name}</h3>
                <p className="mt-3 font-serif text-white/70 text-[0.95rem] leading-[1.6]">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="py-16 md:py-24 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          {/* Filter chips */}
          <div className="flex flex-wrap items-center gap-3 mb-12 pb-6 border-b border-steel-300">
            <span className="flex items-center gap-2 font-display text-[0.7rem] tracking-[0.22em] uppercase text-ink-500 mr-2">
              <FunnelSimple size={14} /> Filter
            </span>
            {PILLARS.map((pillar) => (
              <button
                key={pillar}
                onClick={() => setFilter(pillar)}
                className={`px-4 py-2 font-display text-[0.7rem] tracking-[0.18em] uppercase font-semibold border transition-all ${
                  filter === pillar
                    ? 'bg-navy-700 text-white border-navy-700'
                    : 'bg-transparent text-ink-500 border-steel-300 hover:border-navy-700 hover:text-navy-700'
                }`}
              >
                {pillar}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((area, idx) => (
              <SectionReveal key={area.slug} delay={(idx % 6) * 60}>
                <PracticeAreaCard area={area} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-950 text-white">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10 text-center">
          <SectionReveal>
            <h2 className="font-display font-black text-4xl md:text-6xl display-tight max-w-3xl mx-auto">
              Need counsel that spans <span className="italic text-gold-400">multiple</span> areas?
            </h2>
            <p className="mt-6 font-serif text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
              DBA's integrated model means you brief one firm. We coordinate across pillars without the friction — or the invoice — of engaging multiple firms.
            </p>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-white text-navy-900 px-8 py-5 font-display text-[0.74rem] tracking-[0.22em] uppercase font-semibold hover:bg-gold-400 transition-colors">
              Book Strategic Consultation <ArrowRight size={15} weight="bold" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
