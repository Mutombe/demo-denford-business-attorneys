import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Clock, GraduationCap, Sparkle } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { careers, firm } from '../data/siteData';

export default function Careers() {
  return (
    <PageTransition>
      <SEO title="Careers — Denford Business Attorneys" description="Join a partner-centric boutique where every lawyer works on matters that matter. Current openings at DBA." />

      {/* Hero */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-28 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
            alt=""
            loading="eager"
            fetchpriority="high"
            decoding="async"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/90 to-navy-700/60"></div>
        </div>
        <div className="absolute inset-0 grain opacity-40 pointer-events-none"></div>
        <div className="max-w-[1480px] mx-auto px-5 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-6 text-white/60 text-[0.7rem] tracking-[0.22em] uppercase font-display">
            <Link to="/" className="link-reveal">Home</Link>
            <span>/</span>
            <span className="text-white">Careers</span>
          </div>
          <span className="index-label text-gold-400">Join DBA</span>
          <h1 className="mt-5 font-display font-black text-5xl md:text-7xl lg:text-[7.5rem] display-tight">
            Build a career, <span className="italic font-semibold text-gold-400">not</span> a file.
          </h1>
          <p className="mt-8 font-serif text-white/85 text-xl md:text-2xl max-w-3xl leading-[1.5]">
            At DBA, every lawyer works directly on matters that matter — under the supervision of a Partner, with the support of structured mentorship and a genuine investment in your growth.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28 bg-bone-50">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <SectionReveal>
            <span className="index-label">The Culture</span>
            <p className="mt-5 font-serif text-ink-700 text-xl md:text-2xl leading-[1.6] text-balance">
              {careers.intro}
            </p>
          </SectionReveal>

          <SectionReveal delay={100} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-steel-300">
              {careers.culture.map((item, idx) => (
                <div key={item} className={`py-5 border-b border-steel-200 flex items-start gap-4 ${idx % 2 === 0 ? 'md:border-r md:pr-8' : 'md:pl-8'}`}>
                  <Sparkle size={16} className="text-gold-500 mt-1 shrink-0" weight="fill" />
                  <span className="font-body text-ink-700 text-[0.95rem] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28 bg-bone-100">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-4 mb-14">
            <div className="col-span-12 md:col-span-5">
              <SectionReveal>
                <span className="index-label">Open Roles</span>
                <h2 className="mt-5 font-display font-black text-5xl md:text-6xl text-navy-900 display-tight">
                  Current openings.
                </h2>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
              <SectionReveal delay={100}>
                <p className="font-serif text-ink-500 text-lg leading-relaxed">
                  We hire carefully and invest deeply. If the profile below describes you, we'd like to hear from you — even if you don't see a matching role.
                </p>
              </SectionReveal>
            </div>
          </div>

          <div className="space-y-0 border-t border-steel-300">
            {careers.positions.map((pos, idx) => (
              <SectionReveal key={pos.title} delay={idx * 70}>
                <div className="group border-b border-steel-300 py-8 md:py-10 hover:bg-white/50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-12 md:col-span-6">
                      <span className="font-display font-light text-gold-500 text-[0.7rem] tracking-[0.22em]">0{idx + 1}</span>
                      <h3 className="mt-2 font-display font-bold text-2xl md:text-3xl text-navy-900 display-tight">{pos.title}</h3>
                      <p className="mt-3 font-serif text-ink-500 text-[0.95rem] leading-relaxed">{pos.summary}</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 md:pl-8">
                      <ul className="space-y-2 font-body text-[0.85rem] text-ink-600">
                        <li className="flex items-center gap-2"><Briefcase size={14} className="text-gold-500" weight="regular" />{pos.type}</li>
                        <li className="flex items-center gap-2"><MapPin size={14} className="text-gold-500" weight="regular" />{pos.location}</li>
                        <li className="flex items-center gap-2"><GraduationCap size={14} className="text-gold-500" weight="regular" />{pos.years}</li>
                      </ul>
                    </div>
                    <div className="col-span-12 md:col-span-2 md:flex md:justify-end">
                      <a
                        href={`mailto:${firm.email}?subject=Application: ${encodeURIComponent(pos.title)}`}
                        className="inline-flex items-center gap-2 border border-navy-700 text-navy-700 px-5 py-3 font-display text-[0.68rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-700 hover:text-white transition-all"
                      >
                        Apply <ArrowRight size={12} weight="bold" />
                      </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Speculative / General application */}
      <section className="py-24 bg-navy-950 text-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
          <SectionReveal>
            <span className="index-label text-gold-400">Open Application</span>
            <h2 className="mt-5 font-display font-black text-4xl md:text-5xl display-tight max-w-2xl mx-auto">
              Don't see a matching role?
            </h2>
            <p className="mt-6 font-serif text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
              We are always open to hearing from exceptional lawyers. Send your CV and a cover note about why DBA — we read every application.
            </p>
            <a href={`mailto:${firm.email}?subject=General Application`} className="mt-10 inline-flex items-center gap-3 bg-white text-navy-900 px-8 py-5 font-display text-[0.74rem] tracking-[0.22em] uppercase font-semibold hover:bg-gold-400 transition-colors">
              Send CV <ArrowRight size={15} weight="bold" />
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
