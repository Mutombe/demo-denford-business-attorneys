import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('DBA error boundary:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-bone-50">
          <div className="text-center max-w-md">
            <p className="index-label">Error · 500</p>
            <h1 className="mt-3 font-display font-black text-4xl md:text-5xl text-navy-900 display-tight">
              A clause has misfired.
            </h1>
            <p className="mt-5 font-serif text-ink-500 text-lg leading-relaxed">
              Something on our side broke. Refresh the page — if it persists, a quick message on WhatsApp will reach a partner directly.
            </p>
            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-7 py-4 bg-navy-700 text-white text-[0.7rem] tracking-[0.22em] uppercase font-display font-semibold hover:bg-navy-900 transition-colors"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-7 py-4 border border-navy-700 text-navy-700 text-[0.7rem] tracking-[0.22em] uppercase font-display font-semibold hover:bg-navy-700 hover:text-white transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
