import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Buildings, UsersThree, House } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import ClientLogo from '../components/ClientLogo';
import { clientTiers, sectors, testimonials, firm } from '../data/siteData';

export default function Clients() {
  return (
    <PageTransition>
      <SEO title="Clients & Sectors — Denford Business Attorneys" description="From first-time buyers to foreign direct investors — the institutions, businesses and individuals DBA serves." />

      {/* Hero */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-20 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="flex items-center gap-3 mb-6 text-ink-400 text-[0.7rem] tracking-[0.22em] uppercase font-display">
            <Link to="/" className="link-reveal">Home</Link>
            <span>/</span>
            <span className="text-navy-900">Clients</span>
          </div>
          <span className="index-label">Who We Serve</span>
          <h1 className="mt-4 font-display font-black text-5xl md:text-7xl lg:text-[7rem] text-navy-900 display-tight">
            First-time buyers to <span className="italic font-semibold text-gold-500">foreign investors.</span>
          </h1>
          <p className="mt-8 font-serif text-ink-500 text-lg md:text-xl max-w-3xl leading-relaxed">
            A three-tier client model ensures that no matter the scale, every matter receives partner oversight and the same standard of care.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 md:py-28 bg-bone-100">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="space-y-20">
            {clientTiers.map((tier, idx) => (
              <SectionReveal key={tier.tier} delay={idx * 80}>
                <div className={`grid grid-cols-12 gap-8 md:gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`col-span-12 md:col-span-6 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="aspect-[4/3] overflow-hidden bg-navy-900 relative">
                      <img
                        src={tier.image}
                        alt={tier.heading}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80'; }}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent"></div>
                      <span className="absolute top-6 left-6 bg-white/95 text-navy-900 font-display text-[0.62rem] tracking-[0.22em] uppercase font-semibold px-3 py-1">{tier.tier}</span>
                    </div>
                  </div>
                  <div className={`col-span-12 md:col-span-6 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    <span className="index-label">{tier.tier}</span>
                    <h2 className="mt-4 font-display font-black text-4xl md:text-5xl text-navy-900 display-tight">
                      {tier.heading}
                    </h2>
                    <p className="mt-5 font-serif text-ink-500 text-lg leading-relaxed">{tier.description}</p>
                    <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-steel-300">
                      {tier.clients.map((c) => (
                        <li key={c} className="py-3 border-b border-steel-200 flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0"></span>
                          <span className="font-display font-semibold text-navy-900 text-[0.88rem] tracking-wide">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="py-20 md:py-28 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl mb-14">
            <SectionReveal>
              <span className="index-label">Sectors</span>
              <h2 className="mt-4 font-display font-black text-4xl md:text-6xl text-navy-900 display-tight">
                Sectors we serve.
              </h2>
              <p className="mt-6 font-serif text-ink-500 text-lg leading-relaxed">
                The common thread across every client: real estate. Whether as core business, asset class, or succession vehicle — it sits at the heart of every matter we touch.
              </p>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 border-t border-l border-steel-300">
            {sectors.map((s, idx) => (
              <SectionReveal key={s} delay={(idx % 9) * 50}>
                <ClientLogo name={s} variant="dark" />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-navy-950 text-white">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl mb-14">
            <SectionReveal>
              <span className="index-label text-gold-400">Client Voice</span>
              <h2 className="mt-4 font-display font-black text-4xl md:text-6xl display-tight">
                What our clients say.
              </h2>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-white/15">
            {testimonials.map((t, idx) => (
              <SectionReveal
                key={idx}
                delay={idx * 100}
                className={`p-8 md:p-10 border-b md:border-b-0 border-white/15 ${idx < 2 ? 'md:border-r' : ''}`}
              >
                <div className="text-6xl font-serif text-gold-400 leading-none mb-4">"</div>
                <p className="font-serif text-white/90 text-lg leading-[1.6] italic">
                  {t.quote}
                </p>
                <div className="mt-8 pt-6 border-t border-white/15">
                  <p className="font-display font-bold text-sm">{t.author}</p>
                  <p className="font-body text-white/60 text-[0.82rem]">{t.role}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10 text-center">
          <SectionReveal>
            <h2 className="font-display font-black text-4xl md:text-6xl text-navy-900 display-tight max-w-3xl mx-auto">
              Join our roster.
            </h2>
            <p className="mt-6 font-serif text-ink-500 text-lg max-w-xl mx-auto leading-relaxed">
              Schedule a no-obligation strategic consultation. A partner will respond within 4 business hours.
            </p>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-navy-700 text-white px-8 py-5 font-display text-[0.74rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-900 transition-colors">
              Book Consultation <ArrowRight size={15} weight="bold" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
