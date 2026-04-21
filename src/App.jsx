import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import SearchModal from './components/SearchModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import Firm from './pages/Firm';
import PracticeAreas from './pages/PracticeAreas';
import PracticeAreaDetail from './pages/PracticeAreaDetail';
import Attorneys from './pages/Attorneys';
import AttorneyDetail from './pages/AttorneyDetail';
import Clients from './pages/Clients';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollReset() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, search]);
  return null;
}

export default function App() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <ScrollReset />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <main className="min-h-[60vh]">
        <ErrorBoundary>
          <AnimatePresence mode="popLayout" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/firm" element={<Firm />} />
              <Route path="/practice-areas" element={<PracticeAreas />} />
              <Route path="/practice-areas/:slug" element={<PracticeAreaDetail />} />
              <Route path="/attorneys" element={<Attorneys />} />
              <Route path="/attorneys/:slug" element={<AttorneyDetail />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <Toaster
        position="top-center"
        theme="light"
        closeButton
        toastOptions={{
          style: {
            fontFamily: 'Inter, system-ui, sans-serif',
            borderRadius: '0',
            border: '1px solid #D8CFB8',
          },
        }}
      />
    </>
  );
}
