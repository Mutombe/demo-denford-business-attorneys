import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MagnifyingGlass } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import InsightCard from '../components/InsightCard';
import { insights } from '../data/siteData';

const CATEGORIES = ['All', 'Real Estate', 'Business Law', 'Compliance Advisory', 'Construction Law', 'Estate Planning', 'The DBA Advantage'];

export default function Insights() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return insights.filter((i) => {
      const matchCat = filter === 'All' || i.category === filter;
      const matchQuery = !query || i.title.toLowerCase().includes(query.toLowerCase()) || i.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [filter, query]);

  return (
    <PageTransition>
      <SEO title="Insights — Denford Business Attorneys" description="Thought leadership on Zimbabwe's real estate, compliance and business law landscape — by the partners at DBA." />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-16 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="flex items-center gap-3 mb-6 text-ink-400 text-[0.7rem] tracking-[0.22em] uppercase font-display">
            <Link to="/" className="link-reveal">Home</Link>
            <span>/</span>
            <span className="text-navy-900">Insights</span>
          </div>
          <span className="index-label">From the Firm</span>
          <h1 className="mt-4 font-display font-black text-5xl md:text-7xl lg:text-[7rem] text-navy-900 display-tight">
            Reading the legal <span className="italic font-semibold text-gold-500">landscape.</span>
          </h1>
          <p className="mt-8 font-serif text-ink-500 text-lg md:text-xl max-w-3xl leading-relaxed">
            Perspective and commentary on Zimbabwe's real estate, compliance, and business law from the partners and associates at DBA.
          </p>
        </div>
      </section>

      {/* Feature */}
      <section className="pb-16 md:pb-20 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <SectionReveal>
            <InsightCard insight={insights[0]} variant="feature" />
          </SectionReveal>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="py-16 md:py-20 bg-bone-100 border-t border-steel-200">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          {/* Filter bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-6 border-b border-steel-300">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 font-display text-[0.68rem] tracking-[0.16em] uppercase font-semibold border transition-all ${
                    filter === cat
                      ? 'bg-navy-700 text-white border-navy-700'
                      : 'bg-transparent text-ink-500 border-steel-300 hover:border-navy-700 hover:text-navy-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative md:w-72">
              <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" weight="regular" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search insights"
                className="w-full pl-10 pr-4 py-3 bg-white border border-steel-300 text-navy-900 text-base focus:border-navy-700 focus:outline-none font-body"
              />
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p className="text-center font-serif italic text-ink-500 py-16">No insights match this filter.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filtered.map((insight, idx) => (
                <SectionReveal key={insight.slug} delay={(idx % 6) * 60}>
                  <InsightCard insight={insight} />
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-24 bg-navy-950 text-white">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10 text-center">
          <SectionReveal>
            <span className="index-label text-gold-400">Stay Informed</span>
            <h2 className="mt-4 font-display font-black text-4xl md:text-5xl display-tight max-w-2xl mx-auto">
              Get DBA insights in your inbox.
            </h2>
            <p className="mt-6 font-serif text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
              Quarterly dispatch — no more, no less. Real estate, compliance, and business law developments that matter.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-10 flex flex-col sm:flex-row items-stretch max-w-md mx-auto gap-0">
              <input
                type="email"
                placeholder="your email"
                className="flex-1 px-5 py-4 bg-white text-navy-900 font-body text-base focus:outline-none"
              />
              <button type="submit" className="bg-gold-500 text-navy-900 px-6 py-4 font-display text-[0.72rem] tracking-[0.22em] uppercase font-bold hover:bg-gold-400 transition-colors">
                Subscribe
              </button>
            </form>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
