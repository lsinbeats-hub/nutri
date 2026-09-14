import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ObjectionBreaker } from './components/ObjectionBreaker';
import { MethodSection } from './components/MethodSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ForWhomSection } from './components/ForWhomSection';
import { ResultsSection } from './components/ResultsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { GoogleDriveModal } from './components/GoogleDriveModal';
import { CLOUD_CONFIG } from './config/cloud';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isDriveModalOpen, setIsDriveModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll Progress Bar for rich scroll feedback
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080A0C] text-[#F3F4F6] selection:bg-[#22C55E] selection:text-[#080A0C] font-sans relative">
      {/* Top Neon Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#4ADE80] origin-left z-50 shadow-[0_0_12px_#22C55E]"
      />

      {/* Sticky Luxury Header */}
      <Header
        onOpenConsultation={handleOpenConsultation}
        onOpenDrive={() => setIsDriveModalOpen(true)}
      />


      <main>
        {/* Hero Section: High Impact Lead Capture & Visual matching Reference */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Section 02: Objection Breaker / Scale Trap vs Real Lifestyle matching Reference */}
        <ObjectionBreaker onOpenConsultation={handleOpenConsultation} />

        {/* Section 03: The CLOUD Method (01 Entender, 02 Estruturar, 03 Acompanhar, 04 Evoluir) */}
        <MethodSection />

        {/* Section 04: The CLOUD Experience (6 Pillars) */}
        <ExperienceSection onOpenDrive={() => setIsDriveModalOpen(true)} />

        {/* Section 05: For Whom is CLOUD (Conversational Situations + CTA) */}
        <ForWhomSection onOpenConsultation={handleOpenConsultation} />

        {/* Section 06: Transformation / Holistic Results + Demonstrative KPIs */}
        <ResultsSection />

        {/* Section 07: Real Testimonials Carousel */}
        <TestimonialsSection />

        {/* Section 08: Minimalist FAQ Accordion */}
        <FaqSection />

        {/* Section 09: Final High-Impact Dark Graphite CTA Area */}
        <FinalCtaSection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Floating Neon WhatsApp Action */}
      <a
        href={CLOUD_CONFIG.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com nutricionista no WhatsApp"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 px-4 py-3 rounded-full bg-[#121518]/90 backdrop-blur-md border border-[#22C55E]/50 shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:border-[#22C55E] hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] transition-all duration-300 active:scale-95"
      >
        <div className="relative">
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#22C55E] rounded-full animate-ping" />
          <div className="w-8 h-8 rounded-full bg-[#22C55E] flex items-center justify-center text-[#080A0C] font-black shadow-[0_0_12px_#22C55E]">
            <MessageCircle className="w-4 h-4" />
          </div>
        </div>
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[10px] uppercase font-bold text-[#22C55E] tracking-wider leading-tight flex items-center gap-1">
            Online Agora
          </span>
          <span className="text-xs font-bold text-white leading-tight">
            Tire suas dúvidas
          </span>
        </div>
      </a>

      {/* Floating Back to Top Button on Scroll */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-[#121518]/90 backdrop-blur-md border border-white/10 hover:border-[#22C55E]/60 text-white hover:text-[#22C55E] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 cursor-pointer active:scale-90"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>


      {/* Interactive Consultation / WhatsApp Lead Modal */}
      <ContactModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultation}
      />

      {/* Google Drive Workspace File Manager Modal */}
      <GoogleDriveModal
        isOpen={isDriveModalOpen}
        onClose={() => setIsDriveModalOpen(false)}
      />
    </div>
  );
}
