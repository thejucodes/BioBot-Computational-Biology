import React, { useState, useEffect } from 'react';
import { Dna, MessageSquare, BookOpen, Award, Info, Menu, X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [apiStatus, setApiStatus] = useState({ online: true, mode: 'Checking...' });

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setApiStatus({
          online: data.status === 'online',
          mode: data.hasApiKey ? 'Gemini AI Active' : 'Demo Knowledge Engine'
        });
      })
      .catch(() => {
        setApiStatus({ online: true, mode: 'Offline Knowledge Engine' });
      });
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Dna },
    { id: 'chat', label: 'AI Chatbot', icon: MessageSquare, badge: 'AI' },
    { id: 'concepts', label: 'Learn Concepts', icon: BookOpen },
    { id: 'quiz', label: 'Quiz Zone', icon: Award },
    { id: 'about', label: 'About Project', icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sage/30 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-forest to-emerald flex items-center justify-center text-white shadow-md shadow-emerald/20 group-hover:scale-105 transition-all">
            <Dna className="w-6 h-6 animate-pulse-subtle" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-forest-dark">Bio</span>
              <span className="text-xl font-extrabold tracking-tight text-emerald">Bot</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-mint text-forest ml-1">v2.0</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">Computational Biology Assistant</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-mint/80 text-forest shadow-sm'
                    : 'text-slate-600 hover:text-forest hover:bg-offwhite'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.2 bg-emerald text-white text-[10px] font-bold rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right status badge + Start Chat CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-offwhite border border-sage/40 text-forest-dark">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
            <span className="text-[11px] font-semibold">{apiStatus.mode}</span>
          </div>

          {activePage !== 'chat' && (
            <button
              onClick={() => setActivePage('chat')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald hover:bg-emerald-dark text-white rounded-xl text-xs font-bold shadow-md shadow-emerald/25 transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Start Chatting
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-mint/50 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-forest" /> : <Menu className="w-6 h-6 text-forest" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-sage/40 px-4 pt-2 pb-5 space-y-1 shadow-lg animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  isActive
                    ? 'bg-mint text-forest'
                    : 'text-slate-700 hover:bg-offwhite'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-emerald' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 bg-emerald text-white text-[10px] font-bold rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between px-2">
            <span className="text-xs text-slate-500 font-medium">System Status:</span>
            <span className="text-xs text-emerald font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> {apiStatus.mode}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
