import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from '@phosphor-icons/react';

const FALLBACK = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80';

export default function InsightCard({ insight, variant = 'default' }) {
  if (variant === 'feature') {
    return (
      <Link to={`/insights/${insight.slug}`} className="block group">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div className="aspect-[4/3] overflow-hidden bg-navy-900">
            <img
              src={insight.image}
              alt={insight.title}
              loading="lazy"
              onError={(e) => { e.currentTarget.src = FALLBACK; }}
              className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-[1200ms]"
            />
          </div>
          <div>
            <span className="index-label text-gold-500">{insight.category}</span>
            <h3 className="mt-3 font-display font-black text-3xl md:text-4xl text-navy-900 display-tight group-hover:text-navy-700 transition-colors">
              {insight.title}
            </h3>
            <p className="mt-4 font-serif text-ink-500 text-base leading-relaxed">
              {insight.excerpt}
            </p>
            <div className="mt-5 flex items-center gap-4 text-ink-400 text-[0.78rem] font-body">
              <span>{insight.dateDisplay}</span>
              <span className="w-1 h-1 bg-ink-300 rounded-full"></span>
              <span className="flex items-center gap-1.5"><Clock size={13} weight="regular" />{insight.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/insights/${insight.slug}`}
      className="block group border-t border-steel-300 pt-6 hover:border-gold-500 transition-colors"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="index-label text-gold-500">{insight.category}</span>
        <span className="font-body text-[0.72rem] text-ink-400">{insight.dateDisplay}</span>
      </div>
      <h3 className="font-display font-bold text-xl md:text-2xl text-navy-900 display-tight group-hover:text-navy-700 transition-colors">
        {insight.title}
      </h3>
      <p className="mt-3 font-serif text-ink-500 text-[0.95rem] leading-relaxed line-clamp-3">
        {insight.excerpt}
      </p>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3 text-[0.72rem] font-body text-ink-400">
          <span className="flex items-center gap-1.5"><Clock size={12} weight="regular" />{insight.readTime}</span>
          <span>{insight.author}</span>
        </div>
        <ArrowRight size={16} weight="bold" className="text-navy-700 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
