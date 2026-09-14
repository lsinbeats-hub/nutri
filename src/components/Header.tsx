import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, HardDrive } from 'lucide-react';
import { CLOUD_CONFIG } from '../config/cloud';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenDrive: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenDrive }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Método', href: '#metodo' },
    { label: 'A Experiência', href: '#experiencia' },
    { label: 'Para Quem É', href: '#para-quem' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#0B0D0F]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo matching Reference with Neon Accent */}
        <a
          href="#"
          id="brand-logo"
          className="group flex items-center gap-2.5 tracking-[0.25em] text-white font-extrabold text-xl sm:text-2xl transition-opacity hover:opacity-90"
          aria-label="CLOUD Home"
        >
          <span>CLOUD</span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shadow-[0_0_14px_#22C55E]" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-white transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#22C55E] shadow-[0_0_8px_#22C55E] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Header Action Button (High conversion Neon Green CTA + Drive Access) */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            type="button"
            id="header-drive-button"
            onClick={onOpenDrive}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase text-gray-300 hover:text-white bg-[#121518] hover:bg-white/10 border border-white/10 hover:border-[#22C55E]/40 transition-all cursor-pointer"
          >
            <HardDrive className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Google Drive</span>
          </button>
          <button
            type="button"
            id="header-cta-button"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-[#16A34A] hover:bg-[#22C55E] active:scale-[0.98] shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:shadow-[0_0_28px_rgba(34,197,94,0.6)] transition-all duration-300 cursor-pointer"
          >
            <span>QUERO COMEÇAR</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            type="button"
            id="mobile-header-drive-cta"
            onClick={onOpenDrive}
            className="p-2 rounded-lg text-[#22C55E] bg-[#121518] border border-white/10"
            title="Google Drive"
          >
            <HardDrive className="w-4 h-4" />
          </button>
          <button
            type="button"
            id="mobile-header-quick-cta"
            onClick={onOpenConsultation}
            className="px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wider uppercase text-white bg-[#16A34A] shadow-[0_0_14px_rgba(34,197,94,0.4)]"
          >
            Começar
          </button>
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#22C55E] focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden px-6 pt-4 pb-8 bg-[#0E1114] border-b border-white/10 shadow-2xl animate-fadeIn"
        >
          <div className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base text-white font-medium py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDrive();
              }}
              className="flex items-center gap-2 text-base text-[#22C55E] font-medium py-2 border-b border-white/5"
            >
              <HardDrive className="w-4 h-4" />
              <span>Acessar Google Drive</span>
            </button>
            <div className="pt-4">
              <button
                type="button"
                id="mobile-menu-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-4 px-5 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-[#16A34A] shadow-[0_4px_16px_rgba(22,163,74,0.4)] active:bg-[#15803D]"
              >
                <span>QUERO COMEÇAR MINHA TRANSFORMAÇÃO</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
