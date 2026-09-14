import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Instagram, MessageCircle, ShieldCheck, Sparkles, User, Mail, Phone } from 'lucide-react';
import { CLOUD_CONFIG } from '../config/cloud';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = encodeURIComponent(
      `Olá! Vim pelo site da CLOUD e quero transformar minha alimentação.\nNome: ${name || 'Interessado(a)'}\nContato: ${contact || 'Não informado'}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const waUrl = `https://wa.me/${CLOUD_CONFIG.contact.whatsappNumber}?text=${message}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 900);
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center bg-[#0B0D0F] text-[#F3F4F6] overflow-hidden"
    >
      {/* Background Atmosphere Lights with Neon Green identity */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-12 right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#22C55E]/20 via-[#10B981]/15 to-transparent blur-[140px] -z-0" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 left-[-10%] w-[550px] h-[550px] rounded-full bg-[#22C55E]/10 blur-[150px] -z-0" 
      />

      {/* Floating Ambient Produce Elements with Neon Glow */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:block pointer-events-none absolute top-24 left-[44%] w-12 h-12 rounded-full bg-[#22C55E]/40 blur-[2px] shadow-[0_0_25px_#22C55E] -z-0 opacity-70"
      />
      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:block pointer-events-none absolute bottom-32 left-[48%] w-10 h-10 rounded-full bg-[#10B981]/40 blur-[2px] shadow-[0_0_20px_#10B981] -z-0 opacity-80"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct-Response Offer & Direct Lead Capture Form */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-20">
            
            {/* Top Brand Tag / Logo badge with Neon Accent */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="px-3.5 py-1.5 rounded-lg bg-[#121518] border border-[#22C55E]/40 flex items-center gap-2.5 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                <span className="font-extrabold tracking-[0.25em] text-white text-base font-sans">
                  CLOUD
                </span>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#22C55E] px-2 py-0.5 rounded bg-[#22C55E]/15 border border-[#22C55E]/30">
                  NUTRIÇÃO REAL
                </span>
              </div>
            </motion.div>

            {/* Neon Green Headline (Replacing orange with high-energy nutrition green) */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="hero-headline"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#22C55E] drop-shadow-[0_0_25px_rgba(34,197,94,0.35)] leading-[1.18] mb-4"
            >
              CHEGA DE FAZER DIETA NA SUA VIDA.{' '}
              <span className="block text-white mt-1 text-2xl sm:text-3xl md:text-4xl">
                DESCUBRA A FORMA DE TER UMA ALIMENTAÇÃO SAUDÁVEL E SABOROSA.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="hero-subtitle"
              className="text-sm sm:text-base text-[#D1D5DB] leading-[1.65] max-w-[50ch] mb-8 font-normal"
            >
              Saia de uma vez por todas desse ciclo de perder e ganhar peso. Comece hoje um estilo de vida
              <strong className="text-white font-semibold"> acessível para a sua rotina real</strong>, com comida de verdade, sem passar fome e sem cortar tudo o que você ama.
            </motion.p>

            {/* Lead Capture Form directly in the Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-md"
            >
              <div className="p-5 sm:p-6 rounded-2xl bg-[#121518]/95 backdrop-blur-md border border-[#22C55E]/30 shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(34,197,94,0.15)]">
                <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                  {/* Name Input */}
                  <div className="relative">
                    <User className="w-4 h-4 text-[#9CA3AF] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#080A0C] border border-[#22C55E]/20 text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-all"
                    />
                  </div>

                  {/* Contact / WhatsApp Input */}
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#9CA3AF] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp (ex: 11 99999-9999)"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#080A0C] border border-[#22C55E]/20 text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-all"
                    />
                  </div>

                  {/* Big Vibrant Neon Green CTA Button */}
                  <button
                    type="submit"
                    id="hero-primary-cta"
                    disabled={isSubmitting}
                    className="w-full group relative flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white bg-[#16A34A] hover:bg-[#22C55E] active:scale-[0.98] shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_35px_rgba(34,197,94,0.7)] transition-all duration-300 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Iniciando...
                      </span>
                    ) : (
                      <>
                        <span>QUERO APRENDER A EMAGRECER DE VERDADE</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>

                {/* Sub-form Social Proof with Neon indicator */}
                <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#9CA3AF]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E] animate-pulse" />
                    <span className="text-white font-medium">Vagas abertas para esta semana</span>
                  </div>

                  <a
                    href={CLOUD_CONFIG.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#D1D5DB] hover:text-[#22C55E] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#22C55E]" />
                    <span>{CLOUD_CONFIG.contact.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Figure with Giant Background Typography "CLOUD" + Food Elements */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Giant Background Typography "CLOUD" */}
            <div 
              aria-hidden="true" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[90px] sm:text-[140px] md:text-[180px] lg:text-[200px] font-black tracking-tighter text-[#22C55E]/[0.08] select-none pointer-events-none z-0 uppercase font-display leading-none whitespace-nowrap"
            >
              CLOUD
            </div>

            {/* Glowing amplified neon green halo behind figure */}
            <div 
              aria-hidden="true" 
              className="absolute w-[440px] h-[440px] sm:w-[580px] sm:h-[580px] rounded-full bg-gradient-to-tr from-[#22C55E]/40 via-[#10B981]/35 to-[#4ADE80]/20 blur-[110px] -z-0 shadow-[0_0_120px_rgba(34,197,94,0.45)]"
            />

            {/* Nutritionist Photo Card with Neon Green Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative z-10 w-full max-w-[440px] sm:max-w-[480px]"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#22C55E]/50 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(34,197,94,0.35)] bg-[#121518]">
                <img
                  src={CLOUD_CONFIG.images.heroNutritionist}
                  alt="Nutricionista especialista do método CLOUD com fita métrica e alimentos saudáveis"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-center filter contrast-[1.05] saturate-[1.08]"
                  loading="eager"
                />

                {/* Subtle vignette gradient */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-gradient-to-t from-[#080A0C] via-transparent to-transparent opacity-75" 
                />

                {/* Badge Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0B0E11]/90 backdrop-blur-md border border-[#22C55E]/30 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#22C55E] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E]" />
                        Acompanhamento 100% Individual
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                        Sem dietas genéricas de gaveta. Feito para você.
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center shrink-0 text-[#22C55E] shadow-[0_0_12px_rgba(34,197,94,0.4)]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Real Food Preview Tag */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{ marginTop: -28, marginBottom: -14 }}
                className="absolute -bottom-6 -left-4 sm:-left-8 z-30 flex items-center gap-3 p-2.5 pr-4 rounded-2xl bg-[#0D1013]/95 backdrop-blur-md border border-[#22C55E]/50 shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(34,197,94,0.25)] -mt-7 -mb-3.5"
              >
                <img
                  src={CLOUD_CONFIG.images.freshBowl}
                  alt="Prato colorido e nutritivo do método CLOUD"
                  className="w-12 h-12 rounded-xl object-cover border border-[#22C55E]/40 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                />
                <div>
                  <span className="flex items-center gap-1.5 text-[10px] uppercase font-extrabold tracking-wider text-[#22C55E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_6px_#22C55E]" />
                    Alimentação Viva
                  </span>
                  <p className="text-xs font-bold text-white leading-tight">
                    Pratos Gostosos & Nutritivos
                  </p>
                </div>
              </motion.div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
