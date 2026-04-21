import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, GraduationCap, Briefcase, Star } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { attorneys, firm } from '../data/siteData';

export default function AttorneyDetail() {
  const { slug } = useParams();
  const attorney = attorneys.find((a) => a.slug === slug);

  if (!attorney) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="font-display font-black text-4xl text-navy-900 display-tight">Attorney not found</h2>
          <Link to="/attorneys" className="mt-6 inline-flex items-center gap-2 text-navy-700 link-reveal font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold">
            Back to attorneys <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <SEO title={`${attorney.name} — ${firm.name}`} description={attorney.short} />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-16 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="flex items-center gap-3 mb-8 text-ink-400 text-[0.7rem] tracking-[0.22em] uppercase font-display">
            <Link to="/" className="link-reveal">Home</Link>
            <span>/</span>
            <Link to="/attorneys" className="link-reveal">Attorneys</Link>
            <span>/</span>
            <span className="text-navy-900 truncate">{attorney.name}</span>
          </div>
          <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="col-span-12 md:col-span-5">
              <div className="aspect-[3/4] overflow-hidden bg-navy-900">
                <img
                  src={attorney.portrait}
                  alt={attorney.name}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  onError={(e) => { e.currentTarget.src = attorney.portraitFallback; }}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-6">
              <span className="index-label">Attorney</span>
              <h1 className="mt-4 font-display font-black text-5xl md:text-7xl text-navy-900 display-tight">
                {attorney.name}
              </h1>
              <p className="mt-3 font-serif italic text-ink-500 text-xl">{attorney.title}</p>
              <p className="mt-6 font-body text-ink-600 text-[0.92rem] leading-relaxed">{attorney.short}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${firm.email}`} className="inline-flex items-center gap-2 bg-navy-700 text-white px-5 py-4 font-display text-[0.7rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-900 transition-colors">
                  Email
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 border border-navy-700 text-navy-700 px-5 py-4 font-display text-[0.7rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-700 hover:text-white transition-all">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-8">
              <SectionReveal>
                <span className="index-label">Biography</span>
                <div className="mt-5 space-y-6 font-serif text-ink-700 text-lg leading-[1.65]">
                  {attorney.bio.map((para, i) => (
                    <p key={i} className={i === 0 ? 'text-xl md:text-2xl text-balance' : ''}>{para}</p>
                  ))}
                </div>
              </SectionReveal>

              {attorney.focus && attorney.focus.length > 0 && (
                <SectionReveal delay={100} className="mt-14">
                  <span className="index-label">Practice Focus</span>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {attorney.focus.map((f) => (
                      <span key={f} className="font-display text-[0.74rem] tracking-[0.12em] uppercase font-semibold bg-navy-900 text-white px-4 py-2">
                        {f}
                      </span>
                    ))}
                  </div>
                </SectionReveal>
              )}
            </div>

            <aside className="col-span-12 md:col-span-4">
              <div className="md:sticky md:top-28 space-y-8">
                {attorney.credentials && attorney.credentials.length > 0 && (
                  <SectionReveal>
                    <div className="border border-steel-300 p-7">
                      <GraduationCap size={22} className="text-gold-500 mb-4" weight="regular" />
                      <span className="index-label">Credentials</span>
                      <ul className="mt-4 space-y-2.5">
                        {attorney.credentials.map((c) => (
                          <li key={c} className="font-display text-[0.82rem] text-navy-900 font-semibold border-b border-steel-200 pb-2">{c}</li>
                        ))}
                      </ul>
                    </div>
                  </SectionReveal>
                )}

                {attorney.memberships && attorney.memberships.length > 0 && (
                  <SectionReveal delay={100}>
                    <div className="border border-steel-300 p-7">
                      <Star size={22} className="text-gold-500 mb-4" weight="regular" />
                      <span className="index-label">Memberships</span>
                      <ul className="mt-4 space-y-3">
                        {attorney.memberships.map((m) => (
                          <li key={m} className="font-serif text-ink-600 text-[0.88rem] leading-relaxed pl-4 border-l-2 border-gold-500/40">{m}</li>
                        ))}
                      </ul>
                    </div>
                  </SectionReveal>
                )}

                {attorney.teaches && (
                  <SectionReveal delay={150}>
                    <div className="bg-navy-900 text-white p-7">
                      <Briefcase size={22} className="text-gold-400 mb-4" weight="regular" />
                      <span className="index-label text-gold-400">Teaches</span>
                      <p className="mt-3 font-serif text-white/90 text-[0.95rem] leading-relaxed">{attorney.teaches}</p>
                    </div>
                  </SectionReveal>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="py-12 border-t border-steel-200 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <Link to="/attorneys" className="inline-flex items-center gap-2 font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-navy-700 link-reveal">
            <ArrowLeft size={13} weight="bold" /> All Attorneys
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
