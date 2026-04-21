import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle, Scales, Handshake } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { practiceAreas, attorneys, firm } from '../data/siteData';

export default function PracticeAreaDetail() {
  const { slug } = useParams();
  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="font-display font-black text-4xl text-navy-900 display-tight">Practice area not found</h2>
          <Link to="/practice-areas" className="mt-6 inline-flex items-center gap-2 text-navy-700 link-reveal font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold">
            Back to all practices <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </div>
    );
  }

  const idx = practiceAreas.findIndex((a) => a.slug === slug);
  const prev = idx > 0 ? practiceAreas[idx - 1] : null;
  const next = idx < practiceAreas.length - 1 ? practiceAreas[idx + 1] : null;
  const related = practiceAreas.filter((p) => p.pillar === area.pillar && p.slug !== area.slug).slice(0, 3);

  return (
    <PageTransition>
      <SEO title={`${area.name} — Denford Business Attorneys`} description={area.short} />

      {/* Hero */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={area.image}
            alt={area.name}
            loading="eager"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=2000&q=80'; }}
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/90 to-navy-800/70"></div>
        </div>
        <div className="absolute inset-0 grain opacity-40 pointer-events-none"></div>

        <div className="max-w-[1480px] mx-auto px-5 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-8 text-white/60 text-[0.7rem] tracking-[0.22em] uppercase font-display">
            <Link to="/" className="link-reveal">Home</Link>
            <span>/</span>
            <Link to="/practice-areas" className="link-reveal">Practice</Link>
            <span>/</span>
            <span className="text-white truncate max-w-[200px] md:max-w-none">{area.name}</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-9">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display font-light text-gold-400 text-[0.72rem] tracking-[0.3em]">{area.number}</span>
                <div className="w-16 h-px bg-gold-500"></div>
                <span className="font-display text-gold-400 text-[0.72rem] tracking-[0.3em] uppercase">{area.pillar}</span>
              </div>
              <h1 className="font-display font-black text-5xl md:text-7xl lg:text-[6.5rem] display-tight">
                {area.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-8">
              <SectionReveal>
                <span className="index-label">01 · Overview</span>
                <p className="mt-5 font-serif text-ink-700 text-xl md:text-2xl leading-[1.55] text-balance">
                  {area.description}
                </p>
              </SectionReveal>

              <SectionReveal delay={100} className="mt-14">
                <span className="index-label">02 · What We Do</span>
                <h2 className="mt-4 font-display font-black text-3xl md:text-4xl text-navy-900 display-tight mb-8">
                  Service breakdown
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-steel-300">
                  {area.services.map((svc, i) => (
                    <div key={i} className={`py-5 border-b border-steel-200 ${i % 2 === 0 ? 'md:border-r md:pr-8' : 'md:pl-8'} flex items-start gap-4`}>
                      <span className="font-display font-light text-gold-500 text-[0.7rem] tracking-[0.2em] mt-1">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-body text-ink-700 text-[0.95rem] leading-relaxed flex-1">{svc}</span>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            {/* Sidebar */}
            <aside className="col-span-12 md:col-span-4">
              <div className="md:sticky md:top-28 space-y-8">
                {/* Lead attorney */}
                <SectionReveal delay={150}>
                  <div className="bg-navy-900 text-white p-7">
                    <span className="index-label text-gold-400">Lead Attorney</span>
                    <div className="mt-5 flex items-center gap-4">
                      <img
                        src={attorneys[0].portrait}
                        alt={attorneys[0].name}
                        loading="lazy"
                        onError={(e) => { e.currentTarget.src = attorneys[0].portraitFallback; }}
                        className="w-16 h-16 object-cover object-center rounded-full"
                      />
                      <div>
                        <p className="font-display font-bold text-lg display-tight">{attorneys[0].name}</p>
                        <p className="font-serif italic text-white/70 text-sm">{attorneys[0].title}</p>
                      </div>
                    </div>
                    <p className="mt-5 font-body text-white/70 text-[0.88rem] leading-relaxed line-clamp-3">
                      {attorneys[0].short}
                    </p>
                    <Link to={`/attorneys/${attorneys[0].slug}`} className="mt-5 inline-flex items-center gap-2 font-display text-[0.7rem] tracking-[0.22em] uppercase font-semibold text-gold-400 link-reveal">
                      Full profile <ArrowRight size={12} weight="bold" />
                    </Link>
                  </div>
                </SectionReveal>

                {/* Consultation CTA */}
                <SectionReveal delay={200}>
                  <div className="border border-steel-300 p-7 bg-bone-100">
                    <span className="index-label">Need counsel?</span>
                    <h3 className="mt-3 font-display font-bold text-2xl text-navy-900 display-tight">
                      Book a strategic consultation.
                    </h3>
                    <p className="mt-3 font-body text-ink-500 text-[0.88rem] leading-relaxed">
                      A partner will respond within 4 business hours with a clear next step.
                    </p>
                    <Link to="/contact" className="mt-5 inline-flex items-center justify-between w-full bg-navy-700 text-white px-5 py-4 font-display text-[0.7rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-900 transition-colors">
                      Request Consultation
                      <ArrowRight size={14} weight="bold" />
                    </Link>
                    <a
                      href={`https://wa.me/${firm.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center justify-between w-full border border-navy-700 text-navy-700 px-5 py-4 font-display text-[0.7rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-700 hover:text-white transition-all"
                    >
                      WhatsApp Partner
                      <ArrowRight size={14} weight="bold" />
                    </a>
                  </div>
                </SectionReveal>

                {/* Related */}
                {related.length > 0 && (
                  <SectionReveal delay={250}>
                    <div>
                      <span className="index-label">Related in {area.pillar}</span>
                      <ul className="mt-5 space-y-4">
                        {related.map((r) => (
                          <li key={r.slug}>
                            <Link to={`/practice-areas/${r.slug}`} className="group block border-b border-steel-200 pb-4 hover:border-gold-500 transition-colors">
                              <span className="font-display font-light text-gold-500 text-[0.68rem] tracking-[0.22em]">{r.number}</span>
                              <p className="mt-1 font-display font-bold text-navy-900 text-[0.95rem] group-hover:text-navy-700 transition-colors">
                                {r.name}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SectionReveal>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Recent matters preview */}
      <section className="py-20 bg-bone-100 border-y border-steel-200">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <SectionReveal>
            <span className="index-label">03 · Representative Experience</span>
            <h2 className="mt-5 font-display font-black text-3xl md:text-5xl text-navy-900 display-tight">
              A sample of recent matters.
            </h2>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-steel-300">
            {[
              { label: 'Transaction', value: 'Multi-phase residential development structuring', amount: '120+ stand subdivision' },
              { label: 'Advisory', value: 'Portfolio acquisition due diligence for a foreign investor', amount: 'Cross-border' },
              { label: 'Representation', value: 'Commercial lease restructuring for an anchor tenant', amount: '10-year term' },
            ].map((m, i) => (
              <div key={i} className={`p-7 border-b md:border-b-0 border-steel-200 ${i < 2 ? 'md:border-r' : ''}`}>
                <span className="font-display text-gold-500 text-[0.68rem] tracking-[0.22em] uppercase">{m.label}</span>
                <p className="mt-3 font-display font-bold text-lg text-navy-900 display-tight">{m.value}</p>
                <p className="mt-2 font-serif italic text-ink-500 text-sm">{m.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next nav */}
      <section className="py-12 bg-bone-50 border-t border-steel-200">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prev ? (
              <Link to={`/practice-areas/${prev.slug}`} className="group p-6 border border-steel-300 hover:border-navy-700 transition-colors">
                <span className="font-display text-[0.7rem] tracking-[0.22em] uppercase text-ink-500 flex items-center gap-2">
                  <ArrowLeft size={13} weight="bold" /> Previous
                </span>
                <p className="mt-2 font-display font-bold text-xl text-navy-900 display-tight group-hover:text-gold-500 transition-colors">{prev.name}</p>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/practice-areas/${next.slug}`} className="group p-6 border border-steel-300 hover:border-navy-700 transition-colors md:text-right">
                <span className="font-display text-[0.7rem] tracking-[0.22em] uppercase text-ink-500 flex items-center md:justify-end gap-2">
                  Next <ArrowRight size={13} weight="bold" />
                </span>
                <p className="mt-2 font-display font-bold text-xl text-navy-900 display-tight group-hover:text-gold-500 transition-colors">{next.name}</p>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
