import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowDown, House, Buildings, MapPin, Stack, SealCheck, Wrench, Vault,
  ShieldCheck, Handshake, FileText, UsersThree, ChartPieSlice, TreeStructure, Scales,
  CheckCircle, Lightbulb, ChartLineUp, Quotes, Star
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import PracticeAreaCard from '../components/PracticeAreaCard';
import AttorneyCard from '../components/AttorneyCard';
import InsightCard from '../components/InsightCard';
import ClientLogo from '../components/ClientLogo';
import { firm, pillars, practiceAreas, attorneys, clientTiers, sectors, insights, values, clientExperience, stats, testimonials } from '../data/siteData';

const iconMap = {
  House, Buildings, MapPin, Stack, SealCheck, Wrench, Vault,
  ShieldCheck, Handshake, FileText, UsersThree, ChartPieSlice, TreeStructure, Scales,
  CheckCircle, Lightbulb, ChartLineUp,
};

const HERO_IMAGE = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2000&q=85';
const HERO_FALLBACK = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=2000&q=85';

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title={`${firm.name} — Full Service Real Estate Law | Harare, Zimbabwe`}
        description="A Harare-based boutique firm built exclusively around real estate and commercial law. Solutions. Value. Growth."
      />

      {/* ============ HERO — EDITORIAL DRAMATIC ============ */}
      <section className="relative min-h-[100vh] md:min-h-[105vh] flex flex-col overflow-hidden bg-navy-950">
        {/* Background imagery */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Modern architectural interior"
            loading="eager"
            onError={(e) => { e.currentTarget.src = HERO_FALLBACK; }}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/75 to-navy-800/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
        </div>
        {/* Grain overlay */}
        <div className="absolute inset-0 grain pointer-events-none"></div>

        {/* Top-right brand sigil line */}
        <div className="absolute top-[108px] md:top-[130px] right-5 md:right-10 text-white/50 text-[0.62rem] tracking-[0.3em] uppercase font-display font-light flex flex-col items-end gap-2">
          <span>[ Est · Harare ]</span>
          <span>[ Zimbabwe ]</span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex items-end pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="max-w-[1480px] mx-auto px-5 md:px-10 w-full">
            <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
              <div className="col-span-12 lg:col-span-9">
                {/* Pre-title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-px bg-gold-500"></div>
                    <p className="text-gold-400 font-display text-[0.72rem] tracking-[0.3em] uppercase font-medium">
                      {firm.subTagline}
                    </p>
                  </div>
                </motion.div>

                {/* Massive editorial headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="hero-display font-display font-black text-white display-tight text-[5.5rem] md:text-[8rem] lg:text-[10rem] xl:text-[11.5rem]"
                  style={{ lineHeight: 0.88 }}
                >
                  Solutions.<br />
                  <span className="italic font-semibold text-gold-400">Value.</span><br />
                  Growth.
                </motion.h1>

                {/* Subhead */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="mt-10 md:mt-14 font-serif text-white/85 text-lg md:text-2xl leading-[1.5] max-w-2xl text-balance"
                >
                  Legal partners who think like investors. A Harare-based boutique firm built exclusively around real estate and commercial law.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="mt-10 flex flex-wrap items-center gap-4"
                >
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 bg-white text-navy-900 px-8 py-5 font-display text-[0.74rem] tracking-[0.22em] uppercase font-semibold hover:bg-gold-400 transition-colors"
                  >
                    Book Strategic Consultation
                    <ArrowRight size={15} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/practice-areas"
                    className="group inline-flex items-center gap-3 border border-white/30 text-white px-8 py-5 font-display text-[0.74rem] tracking-[0.22em] uppercase font-semibold hover:border-white hover:bg-white/10 transition-all"
                  >
                    Explore Practice
                    <ArrowRight size={15} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Side rail — three pillars mini */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="hidden lg:flex col-span-3 flex-col gap-6 pl-8 border-l border-white/20"
              >
                <p className="text-white/60 font-display text-[0.68rem] tracking-[0.3em] uppercase">Three Pillars</p>
                {pillars.map((p) => (
                  <div key={p.number}>
                    <span className="text-gold-400 font-display text-[0.7rem] tracking-[0.22em] font-light">{p.number}</span>
                    <p className="text-white font-display font-bold text-sm mt-1 leading-tight">{p.name}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero bottom ticker */}
        <div className="relative z-10 border-t border-white/15 bg-navy-950/50 backdrop-blur-sm">
          <div className="max-w-[1480px] mx-auto px-5 md:px-10 py-5 md:py-6">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div className="flex items-center gap-3 text-white/60 text-[0.7rem] tracking-[0.22em] uppercase font-display">
                <ArrowDown size={14} weight="regular" className="animate-bounce" />
                Scroll
              </div>
              <div className="flex items-center gap-8 md:gap-12 text-white font-display text-[0.7rem] tracking-[0.22em] uppercase">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                  Conveyancer
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                  Notary Public
                </span>
                <span className="hidden md:flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                  Reg. Valuer
                </span>
                <span className="hidden lg:flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                  Reg. Estate Agent
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INTRODUCTION / MANIFESTO ============ */}
      <section className="relative py-24 md:py-36 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-4">
              <SectionReveal>
                <span className="index-label">01 · Overture</span>
                <h2 className="mt-5 font-display font-black text-4xl md:text-5xl text-navy-900 display-tight">
                  More than a conveyancer.
                </h2>
                <p className="mt-4 font-serif italic text-ink-500 text-lg">
                  You need a legal partner who thinks like an investor.
                </p>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <SectionReveal delay={120}>
                <p className="font-serif text-ink-700 text-xl md:text-2xl leading-[1.55] text-balance">
                  If real estate is at the centre of your business — whether you're acquiring your first commercial property, structuring a multi-project development, or managing a growing portfolio — you need more than a conveyancer.
                </p>
                <p className="mt-6 font-body text-ink-500 text-base md:text-lg leading-[1.75]">
                  At DBA, real estate is not one of many practice areas. It's the entire practice. We combine deep technical specialisation with commercial pragmatism — translating complex legal issues into tangible business advantages across the full property lifecycle.
                </p>
                <p className="mt-6 font-body text-ink-500 text-base md:text-lg leading-[1.75]">
                  Our practice rests on a tripod of <span className="text-navy-900 font-semibold">Real Estate</span>, <span className="text-navy-900 font-semibold">Compliance Advisory</span>, and <span className="text-navy-900 font-semibold">Business Law</span> — supported by complementary practice areas in Family Law, Estate Planning, and Dispute Resolution.
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <Link to="/firm" className="font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-navy-700 link-reveal inline-flex items-center gap-2">
                    About the Firm <ArrowRight size={13} weight="bold" />
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THREE PILLARS ============ */}
      <section className="relative py-24 md:py-32 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 grain opacity-40 pointer-events-none"></div>
        <div className="max-w-[1480px] mx-auto px-5 md:px-10 relative z-10">
          <div className="max-w-3xl mb-16 md:mb-24">
            <SectionReveal>
              <span className="index-label text-gold-400">02 · Architecture</span>
              <h2 className="mt-5 font-display font-black text-5xl md:text-7xl display-tight">
                Three pillars, <br />
                <span className="italic font-semibold text-gold-400">one integrated</span> practice.
              </h2>
              <p className="mt-6 font-serif text-white/80 text-lg md:text-xl leading-relaxed">
                Where strategy meets specialisation. Our services are structured under three interconnected pillars — designed to cover the full spectrum of real estate and commercial transactions, ensuring seamless expert advice across all facets of client work.
              </p>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/15">
            {pillars.map((pillar, idx) => (
              <SectionReveal key={pillar.number} delay={idx * 100} className={`group p-8 md:p-12 border-b md:border-b-0 border-white/15 ${idx < 2 ? 'md:border-r' : ''} hover:bg-white/5 transition-colors`}>
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display font-light text-gold-400 text-[0.72rem] tracking-[0.3em]">PILLAR {pillar.number}</span>
                  <div className="w-10 h-10 border border-white/25 flex items-center justify-center">
                    <span className="font-display font-bold text-sm">{pillar.number}</span>
                  </div>
                </div>
                <h3 className="font-display font-black text-3xl md:text-4xl display-tight mb-6">
                  {pillar.name}
                </h3>
                <p className="font-serif text-white/70 text-[1rem] leading-[1.7]">
                  {pillar.blurb}
                </p>
                <div className="mt-8 hairline opacity-25"></div>
                <Link
                  to="/practice-areas"
                  className="mt-8 inline-flex items-center gap-2 font-display text-[0.7rem] tracking-[0.22em] uppercase font-semibold text-gold-400 link-reveal"
                >
                  Explore pillar <ArrowRight size={12} weight="bold" />
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRACTICE AREAS — EDITORIAL INDEX ============ */}
      <section className="relative py-24 md:py-32 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-4 mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-5">
              <SectionReveal>
                <span className="index-label">03 · Full Index</span>
                <h2 className="mt-5 font-display font-black text-5xl md:text-7xl text-navy-900 display-tight">
                  Practice areas.
                </h2>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
              <SectionReveal delay={100}>
                <p className="font-serif text-ink-500 text-lg leading-relaxed">
                  Fourteen practice lines, grouped under three pillars — from conveyancing and bond registration through to M&A, compliance advisory, estate planning and dispute resolution.
                </p>
              </SectionReveal>
            </div>
          </div>

          <div className="border-b border-steel-300">
            {practiceAreas.slice(0, 10).map((area) => (
              <SectionReveal key={area.slug}>
                <PracticeAreaCard area={area} variant="minimal" />
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-12 flex justify-center" delay={80}>
            <Link
              to="/practice-areas"
              className="group inline-flex items-center gap-3 bg-navy-700 text-white px-10 py-5 font-display text-[0.74rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-900 transition-colors"
            >
              All 14 Practice Areas
              <ArrowRight size={15} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ============ FOUNDER SPLIT ============ */}
      <section className="relative py-24 md:py-36 bg-bone-100">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="col-span-12 md:col-span-5">
              <SectionReveal>
                <div className="relative aspect-[4/5] overflow-hidden bg-navy-900">
                  <img
                    src={attorneys[0].portrait}
                    alt={attorneys[0].name}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = attorneys[0].portraitFallback; }}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/90 font-display text-[0.62rem] tracking-[0.3em] uppercase mb-1">Founding Partner</p>
                    <p className="text-white font-display font-bold text-2xl md:text-3xl display-tight">{attorneys[0].name}</p>
                  </div>
                </div>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-12">
              <SectionReveal delay={120}>
                <span className="index-label">04 · The Founder</span>
                <h2 className="mt-5 font-display font-black text-5xl md:text-6xl text-navy-900 display-tight">
                  A lawyer who speaks the language of finance <span className="italic font-semibold text-gold-500">and</span> real estate.
                </h2>
                <p className="mt-8 font-serif text-ink-500 text-lg leading-[1.65]">
                  {attorneys[0].bio[0]}
                </p>
                <p className="mt-5 font-body text-ink-400 leading-[1.75]">
                  Dual registration as a Registered Estate Agent with the Estate Agents Council <span className="italic">and</span> a Registered Property Valuer with the Valuers Council of Zimbabwe. An LLB (Honours) and BSc (Honours) in Economics, plus an MBA specialising in Finance. A teacher of Real Estate Law at the Real Estate Institute of Zimbabwe.
                </p>

                {/* Credentials row */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-0 border-t border-steel-300">
                  {attorneys[0].credentials.map((c) => (
                    <div key={c} className="py-4 border-b border-steel-200 md:border-r md:last:border-r-0 pr-2">
                      <p className="font-display font-bold text-navy-900 text-[0.82rem] tracking-[0.04em]">{c}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/attorneys/${attorneys[0].slug}`}
                  className="mt-10 inline-flex items-center gap-2 font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-navy-700 link-reveal"
                >
                  Full profile <ArrowRight size={13} weight="bold" />
                </Link>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE DBA ADVANTAGE — CLIENT EXPERIENCE ============ */}
      <section className="relative py-24 md:py-32 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none"></div>
        <div className="max-w-[1480px] mx-auto px-5 md:px-10 relative z-10">
          <div className="grid grid-cols-12 gap-4 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-5">
              <SectionReveal>
                <span className="index-label text-gold-400">05 · The Advantage</span>
                <h2 className="mt-5 font-display font-black text-5xl md:text-7xl display-tight">
                  The client experience <span className="italic font-semibold text-gold-400">system.</span>
                </h2>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
              <SectionReveal delay={100}>
                <p className="font-serif text-white/70 text-lg leading-relaxed">
                  At DBA, client service is a discipline embedded in every process — the engine that converts legal expertise into measurable outcomes. Five systems run behind every matter.
                </p>
              </SectionReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-white/15">
            {clientExperience.map((item, idx) => (
              <SectionReveal
                key={item.letter}
                delay={idx * 80}
                className={`p-7 md:p-8 border-b md:border-b-0 border-white/15 ${idx < 4 ? 'lg:border-r' : ''} ${idx % 2 === 0 ? 'md:border-r lg:border-r' : ''} group hover:bg-white/5 transition-colors`}
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="font-display font-black text-gold-400 text-5xl display-tight">{item.letter}</span>
                  <span className="font-display text-white/30 text-[0.65rem] tracking-[0.3em] uppercase">0{idx + 1}</span>
                </div>
                <h3 className="font-display font-bold text-xl display-tight mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-white/70 text-[0.88rem] leading-relaxed">
                  {item.body}
                </p>
              </SectionReveal>
            ))}
          </div>

          {/* Due Diligence Database callout */}
          <SectionReveal delay={200} className="mt-20 border-t border-white/15 pt-14">
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-12 md:col-span-4">
                <span className="index-label text-gold-400">06 · Signature Asset</span>
                <h3 className="mt-5 font-display font-black text-3xl md:text-5xl display-tight">
                  The Due Diligence Database.
                </h3>
              </div>
              <div className="col-span-12 md:col-span-8 md:pt-3">
                <p className="font-serif text-white/80 text-lg md:text-xl leading-[1.6]">
                  In Zimbabwe's complex regulatory environment, standard due diligence misses what isn't immediately visible. Our proprietary Due Diligence Database codifies years of transactional knowledge — enabling faster reviews, systematic anomaly detection, and institutional memory that deepens with every matter.
                </p>
                <p className="mt-5 font-body text-white/60 leading-[1.75]">
                  For our clients, this means fewer surprises, faster decision-making, and clear, decision-ready assessments coordinating legal, regulatory, and financial due diligence into one integrated picture.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="relative py-20 bg-bone-100 border-y border-steel-200">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, idx) => (
              <SectionReveal key={s.label} delay={idx * 70}>
                <div className="text-center md:text-left">
                  <p className="font-display font-black text-6xl md:text-7xl text-navy-900 display-tight">{s.value}</p>
                  <div className="hairline-gold w-10 mt-4 mx-auto md:mx-0"></div>
                  <p className="mt-4 font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-ink-500">{s.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="relative py-24 md:py-32 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-4 mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-5">
              <SectionReveal>
                <span className="index-label">07 · Values</span>
                <h2 className="mt-5 font-display font-black text-5xl md:text-6xl text-navy-900 display-tight">
                  What we stand for.
                </h2>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
              <SectionReveal delay={100}>
                <p className="font-serif text-ink-500 text-lg leading-relaxed">
                  Five convictions shape every matter we take on — a value system embedded in how we draft, advise, and relate to clients.
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

      {/* ============ CLIENT TIERS ============ */}
      <section className="relative py-24 md:py-32 bg-bone-100">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="max-w-3xl mb-14 md:mb-20">
            <SectionReveal>
              <span className="index-label">08 · Who We Serve</span>
              <h2 className="mt-5 font-display font-black text-5xl md:text-6xl text-navy-900 display-tight">
                From first-time buyers to foreign direct investors.
              </h2>
              <p className="mt-6 font-serif text-ink-500 text-lg md:text-xl leading-relaxed">
                A three-tier client model ensures that no matter your scale, your matter receives partner oversight and the same standard of care.
              </p>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {clientTiers.map((tier, idx) => (
              <SectionReveal key={tier.tier} delay={idx * 100}>
                <div className="group relative h-full bg-white border border-steel-200 hover:border-navy-700 transition-all">
                  <div className="aspect-[4/3] overflow-hidden bg-navy-900 relative">
                    <img
                      src={tier.image}
                      alt={tier.heading}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80'; }}
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-[1000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/20 to-transparent"></div>
                    <span className="absolute top-5 left-5 font-display font-light text-white/80 text-[0.72rem] tracking-[0.22em]">{tier.tier}</span>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-display font-bold text-2xl text-navy-900 display-tight">{tier.heading}</h3>
                    <p className="mt-3 font-serif text-ink-500 text-[0.92rem] leading-relaxed">{tier.description}</p>
                    <ul className="mt-5 space-y-1.5">
                      {tier.clients.slice(0, 4).map((c) => (
                        <li key={c} className="font-body text-ink-600 text-[0.85rem] flex items-start gap-2">
                          <span className="w-1 h-1 bg-gold-500 rounded-full mt-2 shrink-0"></span>
                          {c}
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

      {/* ============ TESTIMONIALS ============ */}
      <section className="relative py-24 md:py-32 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <SectionReveal>
                <span className="index-label">09 · Client Voice</span>
                <h2 className="mt-5 font-display font-black text-5xl md:text-6xl text-navy-900 display-tight">
                  What our clients say.
                </h2>
                <p className="mt-6 font-serif text-ink-500 text-lg leading-relaxed">
                  Selections from feedback across our institutional and private clients.
                </p>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-10">
              {testimonials.map((t, idx) => (
                <SectionReveal key={idx} delay={idx * 80}>
                  <div className="relative pl-10 border-l-2 border-gold-500">
                    <Quotes size={32} className="text-gold-500 absolute -left-4 -top-2 bg-bone-50 px-1" weight="fill" />
                    <p className="font-serif text-ink-700 text-xl md:text-2xl leading-[1.5] italic text-balance">
                      {t.quote}
                    </p>
                    <div className="mt-5 flex items-center gap-4">
                      <div>
                        <p className="font-display font-bold text-navy-900 text-[0.95rem]">{t.author}</p>
                        <p className="font-body text-ink-500 text-[0.82rem]">{t.role} · {t.sector}</p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ INSIGHTS ============ */}
      <section className="relative py-24 md:py-32 bg-bone-100 border-t border-steel-200">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20 gap-6">
            <SectionReveal>
              <span className="index-label">10 · Insights</span>
              <h2 className="mt-5 font-display font-black text-5xl md:text-6xl text-navy-900 display-tight">
                From the firm.
              </h2>
            </SectionReveal>
            <SectionReveal delay={80}>
              <Link to="/insights" className="inline-flex items-center gap-2 font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-navy-700 link-reveal">
                All insights <ArrowRight size={13} weight="bold" />
              </Link>
            </SectionReveal>
          </div>

          <div className="mb-16">
            <SectionReveal>
              <InsightCard insight={insights[0]} variant="feature" />
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.slice(1, 4).map((insight, idx) => (
              <SectionReveal key={insight.slug} delay={idx * 80}>
                <InsightCard insight={insight} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative py-28 md:py-40 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2000&q=80"
            alt=""
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/85 to-navy-800/80"></div>
        </div>
        <div className="absolute inset-0 grain opacity-40 pointer-events-none"></div>

        <div className="max-w-[1480px] mx-auto px-5 md:px-10 relative z-10">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-8">
              <SectionReveal>
                <span className="index-label text-gold-400">Let's Build Value Together</span>
                <h2 className="mt-5 font-display font-black text-5xl md:text-7xl lg:text-8xl display-tight">
                  Ready to protect, structure, and <span className="italic font-semibold text-gold-400">grow</span> your real estate interests?
                </h2>
                <p className="mt-8 font-serif text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                  Book your Strategic Consultation. A Partner will meet you within seven business days — and within 48 hours of engagement, your Matter Blueprint is on your desk.
                </p>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-4 md:flex md:justify-end">
              <SectionReveal delay={120} className="w-full">
                <div className="flex flex-col gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-between bg-white text-navy-900 px-8 py-6 font-display text-[0.74rem] tracking-[0.22em] uppercase font-bold hover:bg-gold-400 transition-colors"
                  >
                    Strategic Consultation
                    <ArrowRight size={15} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={`https://wa.me/${firm.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between border border-white/30 text-white px-8 py-6 font-display text-[0.74rem] tracking-[0.22em] uppercase font-bold hover:bg-white/10 transition-all"
                  >
                    WhatsApp a partner
                    <ArrowRight size={15} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
