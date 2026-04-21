import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlass, X, WhatsappLogo, ArrowRight } from '@phosphor-icons/react';
import { firm, practiceAreas, attorneys, insights } from '../data/siteData';

const PAGES = [
  { name: 'The Firm', path: '/firm', description: 'Our origin, principles and approach.' },
  { name: 'Practice Areas', path: '/practice-areas', description: 'Fourteen specialised practices.' },
  { name: 'Attorneys', path: '/attorneys', description: 'Meet the team.' },
  { name: 'Clients', path: '/clients', description: 'Who we serve — institutional to individual.' },
  { name: 'Insights', path: '/insights', description: 'Articles, briefings, and thought leadership.' },
  { name: 'Careers', path: '/careers', description: 'Join a partner-led boutique.' },
  { name: 'Contact', path: '/contact', description: 'Book a strategic consultation.' },
];

const SUGGESTIONS = ['real estate', 'M&A', 'litigation', 'founder', 'careers', 'conveyancing'];

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQ('');
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!q.trim()) return null;
    const n = q.trim().toLowerCase();
    const match = (text) => (text || '').toString().toLowerCase().includes(n);

    const matchedPractices = practiceAreas.filter((p) =>
      [p.name, p.pillar, p.short, p.description, ...(p.services || [])].some(match)
    );
    const matchedAttorneys = attorneys.filter((a) =>
      [a.name, a.title, a.short, ...(a.focus || []), ...(a.credentials || [])].some(match)
    );
    const matchedInsights = insights.filter((i) =>
      [i.title, i.excerpt, i.category, i.author, ...(i.tags || [])].some(match)
    );
    const matchedPages = PAGES.filter((p) => match(p.name) || match(p.description));

    return {
      practices: matchedPractices,
      attorneys: matchedAttorneys,
      insights: matchedInsights,
      pages: matchedPages,
      total:
        matchedPractices.length +
        matchedAttorneys.length +
        matchedInsights.length +
        matchedPages.length,
    };
  }, [q]);

  if (!open) return null;

  const waNumber = (firm.whatsapp || firm.phone || '').replace(/\D/g, '');
  const waFallback = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi DBA, I couldn't find what I was looking for on the website — can someone help?")}`;

  return (
    <div className="fixed inset-0 z-[70] bg-bone-50/95 backdrop-blur-lg overflow-y-auto">
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 pt-10 pb-24">
        <button
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-6 right-5 md:top-8 md:right-10 h-11 w-11 flex items-center justify-center text-navy-900 hover:text-gold-500 transition-colors"
          style={{ borderRadius: 0 }}
        >
          <X size={22} weight="regular" />
        </button>

        <p className="index-label text-gold-500 text-center mt-10">Search DBA</p>
        <div className="relative mt-4 max-w-3xl mx-auto">
          <MagnifyingGlass
            size={24}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-ink-400"
          />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Practice areas, attorneys, insights…"
            className="w-full pl-11 pr-4 py-4 sm:py-5 bg-transparent border-b border-steel-300 focus:border-navy-900 outline-none text-2xl sm:text-4xl md:text-5xl font-display font-black text-navy-900 placeholder:text-steel-400 placeholder:font-normal display-tight"
            style={{ borderRadius: 0 }}
          />
          <span className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:inline-flex items-center gap-1 text-[0.65rem] tracking-[0.2em] uppercase font-display text-ink-400 border border-steel-300 px-2 py-1">
            Esc
          </span>
        </div>

        <div className="mt-14 max-w-5xl mx-auto">
          {/* Empty state — no query */}
          {!q.trim() && (
            <div>
              <p className="index-label text-ink-400 mb-5">Try searching</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setQ(t)}
                    className="px-4 py-2.5 font-display text-[0.72rem] tracking-[0.18em] uppercase font-medium text-navy-900 border border-steel-300 hover:border-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
                    style={{ borderRadius: 0 }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="index-label text-gold-500 mb-4">Quick links</p>
                  <ul className="space-y-2">
                    {PAGES.slice(0, 4).map((p) => (
                      <li key={p.path}>
                        <Link
                          to={p.path}
                          onClick={onClose}
                          className="font-display text-base text-navy-900 hover:text-gold-500 link-reveal"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="index-label text-gold-500 mb-4">Popular practices</p>
                  <ul className="space-y-2">
                    {practiceAreas.slice(0, 4).map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/practice-areas/${p.slug}`}
                          onClick={onClose}
                          className="font-display text-base text-navy-900 hover:text-gold-500 link-reveal"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="index-label text-gold-500 mb-4">Recent insights</p>
                  <ul className="space-y-2">
                    {insights.slice(0, 4).map((i) => (
                      <li key={i.slug}>
                        <Link
                          to={`/insights/${i.slug}`}
                          onClick={onClose}
                          className="font-display text-[0.95rem] text-navy-900 hover:text-gold-500 link-reveal leading-snug"
                        >
                          {i.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* No results */}
          {q.trim() && results && results.total === 0 && (
            <div className="text-center py-16 max-w-xl mx-auto">
              <p className="font-display font-black text-4xl md:text-5xl text-navy-900 display-tight">
                Nothing matches<span className="italic font-semibold text-gold-500"> — yet.</span>
              </p>
              <p className="mt-5 font-serif text-ink-500 text-base leading-relaxed">
                Our scope may span your brief even if the keyword doesn't. Tell us what you're looking for directly.
              </p>
              <a
                href={waFallback}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-7 py-4 bg-navy-900 text-white font-display text-[0.72rem] tracking-[0.22em] uppercase font-bold hover:bg-gold-500 hover:text-navy-900 transition-colors"
                style={{ borderRadius: 0 }}
              >
                <WhatsappLogo size={16} weight="fill" />
                Can't find it? Message DBA on WhatsApp
                <ArrowRight size={14} weight="bold" />
              </a>
            </div>
          )}

          {/* Results */}
          {q.trim() && results && results.total > 0 && (
            <div className="space-y-14">
              <p className="index-label text-ink-400">
                {results.total} {results.total === 1 ? 'result' : 'results'} for "{q}"
              </p>

              {results.practices.length > 0 && (
                <section>
                  <div className="flex items-baseline justify-between mb-5 border-b border-steel-200 pb-3">
                    <h3 className="index-label text-gold-500">Practice Areas</h3>
                    <span className="font-display text-[0.7rem] tracking-[0.18em] uppercase text-ink-400">
                      {results.practices.length}
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                    {results.practices.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/practice-areas/${p.slug}`}
                          onClick={onClose}
                          className="group block py-4 border-b border-steel-200/60 hover:border-navy-900 transition-colors"
                        >
                          <p className="font-display font-bold text-xl text-navy-900 group-hover:text-navy-700 display-tight">
                            {p.name}
                          </p>
                          <p className="mt-1 font-serif text-ink-400 text-[0.88rem] leading-snug line-clamp-2">
                            {p.short}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {results.attorneys.length > 0 && (
                <section>
                  <div className="flex items-baseline justify-between mb-5 border-b border-steel-200 pb-3">
                    <h3 className="index-label text-gold-500">Attorneys</h3>
                    <span className="font-display text-[0.7rem] tracking-[0.18em] uppercase text-ink-400">
                      {results.attorneys.length}
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                    {results.attorneys.map((a) => (
                      <li key={a.slug}>
                        <Link
                          to={`/attorneys/${a.slug}`}
                          onClick={onClose}
                          className="group block py-4 border-b border-steel-200/60 hover:border-navy-900 transition-colors"
                        >
                          <p className="font-display font-bold text-xl text-navy-900 group-hover:text-navy-700 display-tight">
                            {a.name}
                          </p>
                          <p className="mt-1 font-serif italic text-ink-400 text-[0.88rem]">
                            {a.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {results.insights.length > 0 && (
                <section>
                  <div className="flex items-baseline justify-between mb-5 border-b border-steel-200 pb-3">
                    <h3 className="index-label text-gold-500">Insights</h3>
                    <span className="font-display text-[0.7rem] tracking-[0.18em] uppercase text-ink-400">
                      {results.insights.length}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {results.insights.map((i) => (
                      <li key={i.slug}>
                        <Link
                          to={`/insights/${i.slug}`}
                          onClick={onClose}
                          className="group block py-4 border-b border-steel-200/60 hover:border-navy-900 transition-colors"
                        >
                          <p className="index-label text-ink-400">
                            {i.category} · {i.dateDisplay}
                          </p>
                          <p className="mt-1 font-display font-bold text-lg md:text-xl text-navy-900 group-hover:text-navy-700 display-tight">
                            {i.title}
                          </p>
                          <p className="mt-1 font-serif text-ink-400 text-[0.88rem] leading-snug line-clamp-2">
                            {i.excerpt}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {results.pages.length > 0 && (
                <section>
                  <div className="flex items-baseline justify-between mb-5 border-b border-steel-200 pb-3">
                    <h3 className="index-label text-gold-500">Pages</h3>
                    <span className="font-display text-[0.7rem] tracking-[0.18em] uppercase text-ink-400">
                      {results.pages.length}
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                    {results.pages.map((p) => (
                      <li key={p.path}>
                        <Link
                          to={p.path}
                          onClick={onClose}
                          className="group block py-4 border-b border-steel-200/60 hover:border-navy-900 transition-colors"
                        >
                          <p className="font-display font-bold text-lg text-navy-900 group-hover:text-navy-700 display-tight">
                            {p.name}
                          </p>
                          <p className="mt-1 font-serif text-ink-400 text-[0.88rem]">
                            {p.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Persistent WhatsApp escape-hatch */}
              <div className="pt-8 border-t border-steel-200 text-center">
                <p className="font-serif italic text-ink-400 text-base">
                  Still scoping your matter?
                </p>
                <a
                  href={waFallback}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-navy-900 font-display text-[0.72rem] tracking-[0.22em] uppercase font-bold border-b border-navy-900 hover:border-gold-500 hover:text-gold-500 transition-colors pb-0.5"
                >
                  <WhatsappLogo size={14} weight="fill" />
                  Message DBA on WhatsApp
                  <ArrowRight size={13} weight="bold" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
