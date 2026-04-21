import React from 'react';

export default function ClientLogo({ name, variant = 'dark' }) {
  const textColor = variant === 'light' ? 'text-white/60 hover:text-white' : 'text-steel-400 hover:text-navy-900';
  return (
    <div className={`group flex items-center justify-center p-5 md:p-7 border border-current/10 transition-colors ${textColor}`}>
      <span className="font-display font-bold text-center text-[0.82rem] md:text-[0.92rem] tracking-[0.12em] uppercase leading-tight">
        {name}
      </span>
    </div>
  );
}
