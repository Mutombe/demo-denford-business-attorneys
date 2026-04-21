import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowRight, Phone, Envelope, MapPin, Clock, WhatsappLogo, LinkedinLogo, FacebookLogo } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { firm, practiceAreas } from '../data/siteData';

const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0492!3d-17.8047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHarare%20North%2C%20Harare!5e0!3m2!1sen!2szw!4v1700000000000';

export default function Contact() {
  const [channel, setChannel] = useState('email');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', area: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in your name, email and message.');
      return;
    }
    const text = `Hello DBA,%0A%0AI'd like to request a strategic consultation.%0A%0AName: ${encodeURIComponent(form.name)}%0ACompany: ${encodeURIComponent(form.company)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone)}%0APractice area: ${encodeURIComponent(form.area || 'General')}%0A%0AMessage:%0A${encodeURIComponent(form.message)}`;

    if (channel === 'whatsapp') {
      window.open(`https://wa.me/${firm.whatsapp.replace(/\D/g, '')}?text=${text}`, '_blank');
      toast.success('Opening WhatsApp…');
    } else {
      const subject = encodeURIComponent(`Strategic Consultation — ${form.name}`);
      const body = text.replace(/%0A/g, '\n').replace(/%20/g, ' ');
      window.location.href = `mailto:${firm.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
      toast.success('Opening your email client…');
    }
  };

  return (
    <PageTransition>
      <SEO title="Contact — Denford Business Attorneys" description="Book a strategic consultation with DBA. Partner-led response within 4 business hours." />

      {/* Hero */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-20 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="flex items-center gap-3 mb-6 text-ink-400 text-[0.7rem] tracking-[0.22em] uppercase font-display">
            <Link to="/" className="link-reveal">Home</Link>
            <span>/</span>
            <span className="text-navy-900">Contact</span>
          </div>
          <span className="index-label">Let's Build Value Together</span>
          <h1 className="mt-4 font-display font-black text-5xl md:text-7xl lg:text-[7rem] text-navy-900 display-tight">
            Book your strategic <span className="italic font-semibold text-gold-500">consultation.</span>
          </h1>
          <p className="mt-8 font-serif text-ink-500 text-lg md:text-xl max-w-3xl leading-relaxed">
            A partner will respond within 4 business hours with a specific next step. For urgent matters, WhatsApp reaches a partner directly.
          </p>
        </div>
      </section>

      {/* Form + contact details */}
      <section className="pb-20 md:pb-28 bg-bone-50">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            {/* Form */}
            <div className="col-span-12 lg:col-span-7">
              <SectionReveal>
                <div className="bg-white border border-steel-200 p-7 md:p-10">
                  <h2 className="font-display font-black text-3xl md:text-4xl text-navy-900 display-tight">
                    Send us your brief.
                  </h2>

                  {/* Channel toggle */}
                  <div className="mt-6 flex items-center gap-2 p-1 bg-bone-100 border border-steel-200 w-fit">
                    <button
                      onClick={() => setChannel('email')}
                      className={`px-5 py-2.5 font-display text-[0.68rem] tracking-[0.2em] uppercase font-semibold transition-colors ${
                        channel === 'email' ? 'bg-navy-700 text-white' : 'text-ink-500 hover:text-navy-900'
                      }`}
                    >
                      <Envelope size={14} weight="regular" className="inline mr-2" />Email
                    </button>
                    <button
                      onClick={() => setChannel('whatsapp')}
                      className={`px-5 py-2.5 font-display text-[0.68rem] tracking-[0.2em] uppercase font-semibold transition-colors ${
                        channel === 'whatsapp' ? 'bg-gold-500 text-navy-900' : 'text-ink-500 hover:text-navy-900'
                      }`}
                    >
                      <WhatsappLogo size={14} weight="regular" className="inline mr-2" />WhatsApp
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-display text-[0.68rem] tracking-[0.22em] uppercase font-semibold text-ink-500 mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-steel-300 text-navy-900 text-base focus:border-navy-700 focus:outline-none font-body bg-bone-50"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-[0.68rem] tracking-[0.22em] uppercase font-semibold text-ink-500 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-steel-300 text-navy-900 text-base focus:border-navy-700 focus:outline-none font-body bg-bone-50"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-[0.68rem] tracking-[0.22em] uppercase font-semibold text-ink-500 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-steel-300 text-navy-900 text-base focus:border-navy-700 focus:outline-none font-body bg-bone-50"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-[0.68rem] tracking-[0.22em] uppercase font-semibold text-ink-500 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-steel-300 text-navy-900 text-base focus:border-navy-700 focus:outline-none font-body bg-bone-50"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block font-display text-[0.68rem] tracking-[0.22em] uppercase font-semibold text-ink-500 mb-2">Practice Area</label>
                      <select
                        name="area"
                        value={form.area}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-steel-300 text-navy-900 text-base focus:border-navy-700 focus:outline-none font-body bg-bone-50"
                      >
                        <option value="">Select an area (optional)</option>
                        {practiceAreas.map((p) => (
                          <option key={p.slug} value={p.name}>{p.name}</option>
                        ))}
                        <option value="Other">Other / General enquiry</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block font-display text-[0.68rem] tracking-[0.22em] uppercase font-semibold text-ink-500 mb-2">How can we help? *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3.5 border border-steel-300 text-navy-900 text-base focus:border-navy-700 focus:outline-none font-body resize-y bg-bone-50"
                        placeholder="Tell us briefly about your matter…"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className={`w-full inline-flex items-center justify-center gap-2 px-8 py-5 font-display text-[0.74rem] tracking-[0.22em] uppercase font-bold transition-colors ${
                          channel === 'whatsapp' ? 'bg-gold-500 text-navy-900 hover:bg-gold-400' : 'bg-navy-700 text-white hover:bg-navy-900'
                        }`}
                      >
                        Send via {channel === 'whatsapp' ? 'WhatsApp' : 'Email'}
                        <ArrowRight size={15} weight="bold" />
                      </button>
                      <p className="mt-3 text-center font-body text-[0.75rem] text-ink-400 italic">
                        By sending a message, no attorney–client relationship is formed until we've formally engaged.
                      </p>
                    </div>
                  </form>
                </div>
              </SectionReveal>
            </div>

            {/* Contact rails */}
            <div className="col-span-12 lg:col-span-5 space-y-6">
              <SectionReveal delay={120}>
                <div className="bg-navy-900 text-white p-8">
                  <span className="index-label text-gold-400">Contact</span>
                  <h3 className="mt-4 font-display font-black text-3xl display-tight">Directly.</h3>
                  <ul className="mt-8 space-y-6">
                    <li className="flex items-start gap-4">
                      <MapPin size={20} className="text-gold-400 mt-1 shrink-0" weight="regular" />
                      <div>
                        <p className="font-display text-[0.68rem] tracking-[0.22em] uppercase text-white/60">Chambers</p>
                        <p className="mt-1 font-serif text-white text-[0.95rem] leading-relaxed">{firm.address}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <Phone size={20} className="text-gold-400 mt-1 shrink-0" weight="regular" />
                      <div>
                        <p className="font-display text-[0.68rem] tracking-[0.22em] uppercase text-white/60">Telephone</p>
                        <a href={`tel:${firm.phone}`} className="mt-1 block font-serif text-white text-[0.95rem] hover:text-gold-400">
                          {firm.phoneDisplay}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <Envelope size={20} className="text-gold-400 mt-1 shrink-0" weight="regular" />
                      <div>
                        <p className="font-display text-[0.68rem] tracking-[0.22em] uppercase text-white/60">Email</p>
                        <a href={`mailto:${firm.email}`} className="mt-1 block font-serif text-white text-[0.95rem] hover:text-gold-400 break-all">
                          {firm.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <Clock size={20} className="text-gold-400 mt-1 shrink-0" weight="regular" />
                      <div>
                        <p className="font-display text-[0.68rem] tracking-[0.22em] uppercase text-white/60">Hours</p>
                        <p className="mt-1 font-serif text-white text-[0.95rem]">{firm.hours}</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-3">
                    <a href={firm.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-11 w-11 border border-white/30 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-navy-900 transition-colors">
                      <LinkedinLogo size={16} weight="regular" />
                    </a>
                    <a href={firm.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-11 w-11 border border-white/30 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-navy-900 transition-colors">
                      <FacebookLogo size={16} weight="regular" />
                    </a>
                    <a href={`https://wa.me/${firm.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="ml-auto inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-5 py-3 font-display text-[0.68rem] tracking-[0.22em] uppercase font-bold hover:bg-gold-400 transition-colors">
                      <WhatsappLogo size={14} weight="regular" />WhatsApp
                    </a>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={180}>
                <div className="bg-bone-100 border border-steel-200 p-8">
                  <span className="index-label">Matter Blueprint</span>
                  <p className="mt-4 font-serif text-ink-700 text-base leading-[1.65]">
                    Within 48 hours of engagement, a customised Matter Blueprint arrives on your desk — setting out milestones, timeline, team, communication protocol, and fees. You know exactly what to expect.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-bone-100 border-t border-steel-200">
        <div className="max-w-[1480px] mx-auto px-5 md:px-10 py-16">
          <div className="grid grid-cols-12 gap-8 items-start mb-10">
            <div className="col-span-12 md:col-span-4">
              <span className="index-label">Find Us</span>
              <h2 className="mt-4 font-display font-black text-3xl md:text-4xl text-navy-900 display-tight">Harare North chambers.</h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <p className="font-serif text-ink-500 text-base leading-relaxed">
                Our offices are in Harare North — strategically located for institutional clients in the northern suburbs. Parking is available on-site and scheduled appointments are preferred.
              </p>
            </div>
          </div>
          <div className="aspect-[21/9] overflow-hidden border border-steel-300 bg-steel-100">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DBA Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
