import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import AttorneyCard from '../components/AttorneyCard';
import { attorneys, firm } from '../data/siteData';

export default function Attorneys() {
  return (
    <PageTransition>
      <SEO title="Attorneys — Denford Business Attorneys" description="Meet the lawyers behind DBA — a partner-centric team united by specialisation in real estate and commercial law." />

      {/* Hero */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-20 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="flex items-center gap-3 mb-6 text-ink-400 text-[0.7rem] tracking-[0.22em] uppercase font-display">
            <Link to="/" className="link-reveal">Home</Link>
            <span>/</span>
            <span className="text-navy-900">Attorneys</span>
          </div>
          <span className="index-label">Our People</span>
          <h1 className="mt-4 font-display font-black text-5xl md:text-7xl lg:text-[7rem] text-navy-900 display-tight">
            Partner-led. <span className="italic font-semibold text-gold-500">Always.</span>
          </h1>
          <p className="mt-8 font-serif text-ink-500 text-lg md:text-xl max-w-3xl leading-relaxed">
            Every matter at DBA is directly overseen by a Partner. Meet the team behind the practice.
          </p>
        </div>
      </section>

      {/* Founder hero */}
      <section className="relative py-20 md:py-28 bg-bone-100">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="col-span-12 md:col-span-5">
              <SectionReveal>
                <div className="relative aspect-[3/4] overflow-hidden bg-navy-900">
                  <img
                    src={attorneys[0].portrait}
                    alt={attorneys[0].name}
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                    onError={(e) => { e.currentTarget.src = attorneys[0].portraitFallback; }}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="bg-white/95 text-navy-900 font-display text-[0.62rem] tracking-[0.22em] uppercase font-semibold px-3 py-1">
                      Founding Partner
                    </span>
                  </div>
                </div>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-8">
              <SectionReveal delay={120}>
                <span className="index-label">01 · Founding Partner</span>
                <h2 className="mt-5 font-display font-black text-5xl md:text-7xl text-navy-900 display-tight">
                  {attorneys[0].name}
                </h2>
                <p className="mt-3 font-serif italic text-ink-500 text-xl">{attorneys[0].title}</p>
                <p className="mt-6 font-body text-ink-600 text-[0.92rem] leading-relaxed">{attorneys[0].short}</p>
                <p className="mt-6 font-serif text-ink-700 text-lg leading-[1.65]">
                  {attorneys[0].bio[0]}
                </p>
                <Link
                  to={`/attorneys/${attorneys[0].slug}`}
                  className="mt-8 inline-flex items-center gap-2 bg-navy-700 text-white px-6 py-4 font-display text-[0.7rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-900 transition-colors"
                >
                  Full Profile <ArrowRight size={14} weight="bold" />
                </Link>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 md:py-28 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-4 mb-14">
            <div className="col-span-12 md:col-span-5">
              <SectionReveal>
                <span className="index-label">02 · The Team</span>
                <h2 className="mt-5 font-display font-black text-4xl md:text-5xl text-navy-900 display-tight">
                  A collaborative model.
                </h2>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
              <SectionReveal delay={100}>
                <p className="font-serif text-ink-500 text-lg leading-relaxed">
                  DBA operates on a collaborative team model designed to deliver responsive, well-rounded counsel across every matter. A Practice Manager anchors operations. A cohesive group of lawyers, each with specialist depth, delivers across the practice.
                </p>
              </SectionReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attorneys.map((a, idx) => (
              <SectionReveal key={a.slug} delay={idx * 80}>
                <AttorneyCard attorney={a} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Training / culture strip */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-5">
              <SectionReveal>
                <span className="index-label text-gold-400">03 · Continued Learning</span>
                <h2 className="mt-5 font-display font-black text-4xl md:text-5xl display-tight">
                  At the forefront of our practice.
                </h2>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-3">
              <SectionReveal delay={100}>
                <p className="font-serif text-white/80 text-lg leading-[1.65]">
                  DBA attaches great importance to professional development and the team's continued legal training. As the legal landscape is ever changing, we strive to keep abreast of these developments — ensuring lawyers and support staff are up to date with current practice.
                </p>
                <p className="mt-4 font-body text-white/60 leading-[1.75]">
                  We practice a well-developed, holistic system of continued learning that allows our professionals to proudly stand at the forefront of our specialist practice.
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 bg-bone-100">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10 text-center">
          <SectionReveal>
            <h2 className="font-display font-black text-4xl md:text-5xl text-navy-900 display-tight max-w-2xl mx-auto">
              Join a firm where <span className="italic text-gold-500">every</span> matter matters.
            </h2>
            <Link to="/careers" className="mt-8 inline-flex items-center gap-3 bg-navy-700 text-white px-8 py-5 font-display text-[0.74rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-900 transition-colors">
              Careers at DBA <ArrowRight size={15} weight="bold" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
