import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, ArrowRight, MagnifyingGlass, WhatsappLogo } from '@phosphor-icons/react';
import { firm } from '../data/siteData';

const WA_MSG = "Hi DBA, I'd like to discuss a matter with one of your attorneys.";

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/firm', label: 'The Firm' },
  { to: '/practice-areas', label: 'Practice' },
  { to: '/attorneys', label: 'Attorneys' },
  { to: '/clients', label: 'Clients' },
  { to: '/insights', label: 'Insights' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const waHref = `https://wa.me/${(firm.whatsapp || firm.phone || '').replace(/\D/g, '')}?text=${encodeURIComponent(WA_MSG)}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const overlayMode = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bone-50/95 backdrop-blur-lg border-b border-steel-200 shadow-sm'
            : isHome
            ? 'bg-transparent'
            : 'bg-bone-50 border-b border-steel-200'
        }`}
      >
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between h-[72px] md:h-[84px]">
            {/* Logo mark + wordmark */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="DBA Home">
              <img
                src="/logo.png"
                alt="Denford Business Attorneys"
                width="48"
                height="48"
                className={`h-10 md:h-12 w-auto object-contain transition-opacity ${overlayMode ? 'brightness-0 invert' : ''}`}
                loading="eager"
                fetchpriority="high"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className={`hidden md:flex flex-col leading-none ${overlayMode ? 'text-white' : 'text-navy-900'}`}>
                <span className="font-display font-black text-[0.95rem] tracking-[0.08em]">DENFORD BUSINESS</span>
                <span className="font-display font-black text-[0.95rem] tracking-[0.08em]">ATTORNEYS</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-9">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `font-display text-[0.78rem] tracking-[0.18em] uppercase font-medium link-reveal transition-colors ${
                      overlayMode
                        ? isActive ? 'text-white' : 'text-white/80 hover:text-white'
                        : isActive ? 'text-navy-900' : 'text-ink-500 hover:text-navy-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA & mobile menu */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Search */}
              <button
                onClick={() => onOpenSearch && onOpenSearch()}
                aria-label="Open search"
                className={`p-2.5 transition-colors ${
                  overlayMode ? 'text-white hover:text-gold-400' : 'text-navy-900 hover:text-gold-500'
                }`}
              >
                <MagnifyingGlass size={20} weight="regular" />
              </button>

              {/* WhatsApp pill — desktop */}
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message DBA on WhatsApp"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 font-display text-[0.68rem] tracking-[0.22em] uppercase font-semibold text-white transition-all duration-300 hover:brightness-110"
                style={{ backgroundColor: '#25D366' }}
              >
                <WhatsappLogo size={14} weight="fill" />
                WhatsApp
              </a>

              <Link
                to="/contact"
                className={`hidden md:inline-flex items-center gap-2 px-5 py-3 text-[0.7rem] tracking-[0.22em] uppercase font-display font-semibold transition-all duration-300 ${
                  overlayMode
                    ? 'bg-white text-navy-900 hover:bg-gold-400 hover:text-navy-900'
                    : 'bg-navy-700 text-white hover:bg-navy-900'
                }`}
              >
                Consultation
                <ArrowRight size={14} weight="bold" />
              </Link>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className={`lg:hidden p-2 ${overlayMode ? 'text-white' : 'text-navy-900'}`}
              >
                <List size={26} weight="regular" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-navy-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between px-5 md:px-10 h-[72px] md:h-[84px] border-b border-white/10">
                <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                  <img src="/logo.png" alt="Denford Business Attorneys" width="40" height="40" className="h-10 w-auto object-contain brightness-0 invert" decoding="async" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <span className="text-white font-display font-black tracking-[0.08em] text-sm">DBA</span>
                </Link>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white p-2">
                  <X size={28} weight="regular" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-12">
                {/* Mobile search trigger */}
                <button
                  onClick={() => { setOpen(false); onOpenSearch && onOpenSearch(); }}
                  className="w-full flex items-center gap-3 px-4 py-4 border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-colors mb-8"
                >
                  <MagnifyingGlass size={18} weight="regular" />
                  <span className="font-display text-[0.72rem] tracking-[0.22em] uppercase">Search DBA</span>
                </button>

                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.4 }}
                    >
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block font-display font-black text-4xl display-tight ${isActive ? 'text-gold-400' : 'text-white'}`
                        }
                      >
                        <span className="index-label mr-3 inline-block align-middle">0{i + 1}</span>
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>
              </div>
              <div className="px-6 py-8 border-t border-white/10 text-white/70 text-sm font-serif">
                <p className="text-white font-display tracking-[0.22em] uppercase text-[0.65rem] mb-2">Contact</p>
                <p className="leading-relaxed">{firm.address}</p>
                <p className="mt-1">{firm.phoneDisplay}</p>
                <p className="mt-1">{firm.email}</p>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-5 py-3 font-display text-[0.68rem] tracking-[0.22em] uppercase font-semibold text-white"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <WhatsappLogo size={14} weight="fill" />
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
