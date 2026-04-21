import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock, FacebookLogo, LinkedinLogo } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import InsightCard from '../components/InsightCard';
import { insights } from '../data/siteData';

export default function InsightDetail() {
  const { slug } = useParams();
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="font-display font-black text-4xl text-navy-900 display-tight">Insight not found</h2>
          <Link to="/insights" className="mt-6 inline-flex items-center gap-2 text-navy-700 link-reveal font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold">
            Back to Insights <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </div>
    );
  }

  const related = insights.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <PageTransition>
      <SEO title={`${insight.title} — ${insight.category} | DBA Insights`} description={insight.excerpt} />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-12 bg-bone-50">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="flex items-center gap-3 mb-8 text-ink-400 text-[0.7rem] tracking-[0.22em] uppercase font-display">
            <Link to="/" className="link-reveal">Home</Link>
            <span>/</span>
            <Link to="/insights" className="link-reveal">Insights</Link>
            <span>/</span>
            <span className="text-navy-900 truncate max-w-[300px]">{insight.category}</span>
          </div>
          <span className="index-label">{insight.category}</span>
          <h1 className="mt-5 font-display font-black text-4xl md:text-6xl lg:text-7xl text-navy-900 display-tight text-balance">
            {insight.title}
          </h1>
          <div className="mt-8 flex items-center gap-5 text-ink-500 font-body text-[0.88rem]">
            <span>{insight.dateDisplay}</span>
            <span className="w-1 h-1 bg-ink-300 rounded-full"></span>
            <span className="flex items-center gap-1.5"><Clock size={13} weight="regular" />{insight.readTime}</span>
            <span className="w-1 h-1 bg-ink-300 rounded-full"></span>
            <span>By {insight.author}</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-bone-50">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="aspect-[16/9] overflow-hidden bg-navy-900">
            <img
              src={insight.image}
              alt={insight.title}
              loading="eager"
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80'; }}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 md:py-24 bg-bone-50">
        <div className="max-w-[780px] mx-auto px-5 md:px-10">
          <SectionReveal>
            <p className="font-serif text-2xl md:text-3xl text-navy-900 leading-[1.35] display-tight mb-10 text-balance">
              {insight.excerpt}
            </p>
            <div className="hairline-gold w-20 mb-10"></div>
            <div className="font-serif text-ink-700 text-lg leading-[1.8] space-y-6">
              <p>In Zimbabwe's property sector, the gap between good legal counsel and exceptional legal counsel is not a matter of degree — it is a matter of approach. Standard practice treats each matter as a discrete transaction. We treat each matter as an opportunity to deepen our clients' understanding of their assets.</p>
              <p>This article unpacks what that looks like in practice — the framework, the mindset, and the operational discipline that separates firms who merely execute from firms who genuinely add value.</p>
              <h3 className="font-display font-black text-3xl md:text-4xl text-navy-900 display-tight mt-10 mb-5">The conviction behind the approach</h3>
              <p>We begin from a single, uncompromising conviction: that real estate clients deserve lawyers who understand the asset, not just the contract. This is not rhetoric. It shapes every memo we write, every clause we draft, every call we make to municipal authorities.</p>
              <p>The founding partner of DBA holds not only an LLB but a BSc in Economics, an MBA in Finance, a Registered Estate Agent credential, and a Registered Property Valuer credential. He teaches Real Estate Law at the Real Estate Institute of Zimbabwe. When he reviews a transaction, he simultaneously examines its legal structure, financial architecture, and commercial logic.</p>
              <h3 className="font-display font-black text-3xl md:text-4xl text-navy-900 display-tight mt-10 mb-5">What this means for your next matter</h3>
              <p>When you instruct DBA, you receive more than a legal opinion. You receive a Matter Blueprint within 48 hours — a structured document setting out milestones, timeline, team composition, communication protocol, and fees. You know exactly what to expect.</p>
              <p>Every communication is acknowledged within four business hours with a specific revert time. Every written opinion includes a plain-English Executive Summary for Decision-Making. And every retainer client receives a structured quarterly Legal Health Check — covering regulatory changes, contract renewals, compliance gaps, and succession alignment.</p>
              <div className="pull-quote relative my-12 pl-12 border-l-2 border-gold-500">
                <p className="font-serif italic text-2xl md:text-3xl text-navy-900 display-tight leading-[1.3]">
                  Compliance is not an afterthought — it is a central pillar of successful property investment. A robust compliance framework drives sustainable growth, operational efficiency, and long-term reputational security.
                </p>
              </div>
              <p>This is the DBA approach: preventative, integrated, commercially calibrated. It is how boutique practice should feel.</p>
            </div>

            {/* Tags & Share */}
            <div className="mt-14 pt-10 border-t border-steel-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex flex-wrap gap-2">
                {insight.tags.map((tag) => (
                  <span key={tag} className="font-display text-[0.68rem] tracking-[0.14em] uppercase font-semibold bg-bone-200 text-navy-900 px-3 py-1.5">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display text-[0.68rem] tracking-[0.22em] uppercase text-ink-500 mr-2">Share</span>
                <a href="#" aria-label="LinkedIn" className="h-10 w-10 border border-steel-300 flex items-center justify-center hover:bg-navy-700 hover:border-navy-700 hover:text-white transition-colors">
                  <LinkedinLogo size={14} weight="regular" />
                </a>
                <a href="#" aria-label="Facebook" className="h-10 w-10 border border-steel-300 flex items-center justify-center hover:bg-navy-700 hover:border-navy-700 hover:text-white transition-colors">
                  <FacebookLogo size={14} weight="regular" />
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-bone-100 border-t border-steel-200">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="index-label">Continue Reading</span>
              <h2 className="mt-4 font-display font-black text-3xl md:text-4xl text-navy-900 display-tight">More from the firm</h2>
            </div>
            <Link to="/insights" className="hidden md:inline-flex items-center gap-2 font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-navy-700 link-reveal">
              All insights <ArrowRight size={13} weight="bold" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((r, idx) => (
              <SectionReveal key={r.slug} delay={idx * 80}>
                <InsightCard insight={r} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="py-10 border-t border-steel-200 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <Link to="/insights" className="inline-flex items-center gap-2 font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-navy-700 link-reveal">
            <ArrowLeft size={13} weight="bold" /> All Insights
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
