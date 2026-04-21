import React, { useState } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import { firm } from '../data/siteData';

const DEFAULT_MSG = "Hi DBA, I'd like to discuss a matter with one of your attorneys.";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const number = (firm.whatsapp || firm.phone || '').replace(/\D/g, '');
  const href = `https://wa.me/${number}?text=${encodeURIComponent(DEFAULT_MSG)}`;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center gap-3">
      {/* Desktop hover label */}
      <span
        className={`hidden md:inline-block bg-navy-900 text-white font-display text-[0.68rem] tracking-[0.2em] uppercase font-semibold px-4 py-2.5 shadow-lg transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        Message our chambers
      </span>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message DBA on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative h-14 w-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-105"
        style={{ backgroundColor: '#25D366' }}
      >
        {/* Pulse ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full animate-ping opacity-40"
          style={{ backgroundColor: '#25D366' }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full opacity-70"
          style={{ boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' }}
        />
        <WhatsappLogo size={28} weight="fill" color="#ffffff" className="relative z-10" />
      </a>
    </div>
  );
}
