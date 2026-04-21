import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page Not Found — DBA" description="The page you're looking for doesn't exist." />
      <section className="min-h-[80vh] flex items-center justify-center bg-bone-50 pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
          <span className="index-label">404 · Not Found</span>
          <h1 className="mt-5 font-display font-black text-[8rem] md:text-[14rem] text-navy-900 display-tight leading-[0.85]">
            404
          </h1>
          <p className="font-serif italic text-2xl md:text-3xl text-ink-500 mt-4">
            This page is outside our jurisdiction.
          </p>
          <p className="mt-6 font-body text-ink-400 max-w-lg mx-auto leading-relaxed">
            The URL you followed may be broken or the page may have been moved. Try one of the routes below instead.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="inline-flex items-center gap-3 bg-navy-700 text-white px-7 py-4 font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-900 transition-colors">
              <ArrowLeft size={14} weight="bold" /> Back to Home
            </Link>
            <Link to="/practice-areas" className="inline-flex items-center gap-3 border border-navy-700 text-navy-700 px-7 py-4 font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-700 hover:text-white transition-all">
              Practice Areas <ArrowRight size={14} weight="bold" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 border border-navy-700 text-navy-700 px-7 py-4 font-display text-[0.72rem] tracking-[0.22em] uppercase font-semibold hover:bg-navy-700 hover:text-white transition-all">
              Contact <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
