import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Handshake, ShieldCheck, Lightbulb, ChartLineUp, Quotes } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { firm, values, stats, memberships, attorneys, clientExperience } from '../data/siteData';

const iconMap = { CheckCircle, Handshake, ShieldCheck, Lightbulb, ChartLineUp };

export default function Firm() {
  return (
    <PageTransition>
      <SEO title={`The Firm — ${firm.name}`} description="Learn about Denford Business Attorneys, Harare's boutique real estate law firm — our story, vision, mission, values, and operational edge." />

      {/* Hero */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-28 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=1600&q=80"
            alt=""
            loading="eager"
            fetchpriority="high"
            decoding="async"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/90 to-navy-700/60"></div>
        </div>
        <div className="absolute inset-0 grain opacity-40 pointer-events-none"></div>
        <div className="max-w-[1480px] mx-auto px-5 md:px-10 relative z-10">
          <div className="flex items-center gap-3 mb-6 text-white/60 text-[0.7rem] tracking-[0.22em] uppercase font-display">
            <Link to="/" className="link-reveal">Home</Link>
            <span>/</span>
            <span className="text-white">The Firm</span>
          </div>
          <span className="index-label text-gold-400">About DBA</span>
          <h1 className="mt-5 font-display font-black text-5xl md:text-7xl lg:text-[7.5rem] display-tight">
            A boutique firm, <span className="italic font-semibold text-gold-400">built</span> for real estate.
          </h1>
          <p className="mt-8 font-serif text-white/85 text-xl md:text-2xl max-w-3xl leading-[1.5]">
            Harare-based. Partner-led. Technology-enabled. A deliberately lean practice designed to deliver the depth of a larger firm without sacrificing personal attention.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-24 md:py-36 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-4">
              <SectionReveal>
                <span className="index-label">01 · Our Story</span>
                <h2 className="mt-5 font-display font-black text-4xl md:text-5xl text-navy-900 display-tight">
                  A firm built for a thesis.
                </h2>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <SectionReveal delay={100}>
                <p className="font-serif text-ink-700 text-xl md:text-2xl leading-[1.55] text-balance">
                  DBA was founded on a single, uncompromising conviction: the real estate client deserves a lawyer who understands the asset, not just the contract.
                </p>
                <p className="mt-6 font-body text-ink-500 text-base md:text-lg leading-[1.75]">
                  In Zimbabwe's property sector — where dated legislation runs alongside transformative new laws, where municipal processes remain opaque, and where tax and finance considerations shape every deal — generic corporate law isn't enough. Clients need specialists. Clients need partners. Clients need a firm whose expertise runs deep into the sector's operational detail.
                </p>
                <p className="mt-6 font-body text-ink-500 text-base md:text-lg leading-[1.75]">
                  DBA was built to be that firm. A lean, partner-centric practice anchored in real estate, compliance advisory, and business law — with technology-enabled efficiency and a client experience system designed to turn expertise into measurable outcomes.
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission pull block */}
      <section className="relative py-24 md:py-32 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none"></div>
        <div className="max-w-[1480px] mx-auto px-5 md:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-b border-white/15">
            <SectionReveal className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/15">
              <span className="index-label text-gold-400">02 · Vision</span>
              <p className="mt-6 font-serif text-2xl md:text-4xl leading-[1.3] display-tight text-balance">
                To be the legal practice of choice for <span className="italic text-gold-400">Real Estate</span> — delivering meticulously crafted, bespoke solutions with exceptional personal attention and discretion.
              </p>
            </SectionReveal>
            <SectionReveal delay={120} className="p-10 md:p-14">
              <span className="index-label text-gold-400">03 · Mission</span>
              <p className="mt-6 font-serif text-2xl md:text-4xl leading-[1.3] display-tight text-balance">
                To provide <span className="italic text-gold-400">commercially viable, value-centric</span> legal solutions that optimise operations and fuel growth. We translate legal complexity into business advantage.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 md:py-32 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-4 mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-5">
              <SectionReveal>
                <span className="index-label">04 · Core Values</span>
                <h2 className="mt-5 font-display font-black text-5xl md:text-6xl text-navy-900 display-tight">
                  Five convictions.
                </h2>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
              <SectionReveal delay={100}>
                <p className="font-serif text-ink-500 text-lg leading-relaxed">
                  Values are not marketing. They are how we draft, how we advise, and how we relate to clients when no one is watching.
                </p>
              </SectionReveal>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-steel-300">
            {values.map((v, idx) => {
              const Icon = iconMap[v.icon] || CheckCircle;
              return (
                <SectionReveal
                  key={v.title}
                  delay={idx * 70}
                  className={`p-7 border-b md:border-b-0 border-steel-200 ${idx < 4 ? 'lg:border-r' : ''} ${idx % 2 === 0 ? 'md:border-r lg:border-r' : ''}`}
                >
                  <Icon size={28} weight="regular" className="text-gold-500 mb-5" />
                  <h3 className="font-display font-bold text-lg text-navy-900 display-tight mb-2">{v.title}</h3>
                  <p className="font-body text-ink-500 text-[0.88rem] leading-relaxed">{v.body}</p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work — operational structure */}
      <section className="relative py-24 md:py-32 bg-bone-100">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl mb-14 md:mb-20">
            <SectionReveal>
              <span className="index-label">05 · How We Work</span>
              <h2 className="mt-5 font-display font-black text-5xl md:text-6xl text-navy-900 display-tight">
                Deliberately lean. Partner-centric.
              </h2>
              <p className="mt-6 font-serif text-ink-500 text-lg md:text-xl leading-relaxed">
                DBA is structured so that every matter is directly overseen by a Partner. You engage a partner; a partner works with you — from instruction to conclusion.
              </p>
            </SectionReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-steel-300">
            {[
              { title: 'Partner-Led Delivery', body: 'You engage a partner; a partner works with you — from instruction to conclusion. No diluted representation.' },
              { title: 'Boutique Agility', body: 'A focused team, augmented by specialist external counsel only when complexity demands it. Responsiveness with expanded reach.' },
              { title: 'Integrated Advice', body: 'Seamless counsel across all three pillars — Real Estate, Compliance, Business Law — without briefing separate firms.' },
              { title: 'Technology-Enabled Efficiency', body: 'Clio practice management, cloud document management, automated workflows, and our proprietary Due Diligence Database. Enterprise-grade cybersecurity.' },
            ].map((item, idx) => (
              <SectionReveal
                key={item.title}
                delay={idx * 80}
                className={`p-8 md:p-10 border-b border-steel-200 ${idx % 2 === 0 ? 'md:border-r' : ''}`}
              >
                <span className="font-display font-light text-gold-500 text-[0.7rem] tracking-[0.22em]">0{idx + 1}</span>
                <h3 className="mt-3 font-display font-bold text-2xl md:text-3xl text-navy-900 display-tight">{item.title}</h3>
                <p className="mt-4 font-serif text-ink-500 leading-[1.65]">{item.body}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships & Credentials */}
      <section className="relative py-20 md:py-24 bg-navy-950 text-white">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <span className="index-label text-gold-400">06 · Regulatory & Professional Affiliations</span>
            <h2 className="mt-4 font-display font-black text-3xl md:text-4xl display-tight">
              Credentials you can verify.
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-w-5xl mx-auto">
            {memberships.map((m) => (
              <span key={m} className="font-display text-[0.82rem] md:text-[0.95rem] tracking-[0.08em] uppercase text-white/80 font-medium border-b border-gold-500/30 pb-1.5">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-28 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10 text-center">
          <SectionReveal>
            <h2 className="font-display font-black text-4xl md:text-6xl text-navy-900 display-tight max-w-3xl mx-auto">
              Meet the team behind the practice.
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/attorneys" className="inline-flex items-center gap-3 bg-navy-700 text-white px-8 py-5 font-display text-[0.74rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-900 transition-colors">
                Our Attorneys <ArrowRight size={15} weight="bold" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-3 border border-navy-700 text-navy-700 px-8 py-5 font-display text-[0.74rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-700 hover:text-white transition-all">
                Book Consultation <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
