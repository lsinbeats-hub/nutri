import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Sparkles, Star } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../config/cloud';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? DEMO_TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === DEMO_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = DEMO_TESTIMONIALS[currentIndex];

  return (
    <section id="depoimentos" className="py-24 sm:py-32 bg-[#0E1114] text-[#F3F4F6] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(34,197,94,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Relatos & Vivências</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight"
          >
            O QUE NOSSOS ALUNOS DIZEM QUANDO{' '}
            <span className="text-[#22C55E] drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">A DIETA PARA DE DOER.</span>
          </motion.h2>

          <p className="text-xs text-[#6B7280] mt-3">
            * Depoimentos demonstrativos para estruturação visual da landing page. Substituir por autorizações reais de clientes.
          </p>
        </div>

        {/* Testimonial Stage Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative bg-[#121518] rounded-3xl border border-[#22C55E]/30 p-8 sm:p-14 shadow-[0_15px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(34,197,94,0.1)] min-h-[340px] flex flex-col justify-between"
        >
          
          {/* Subtle Quote Icon Watermark */}
          <div className="absolute top-8 right-8 sm:top-12 sm:right-12 text-[#22C55E]/5 pointer-events-none">
            <Quote className="w-20 h-20 opacity-40 stroke-[1]" />
          </div>

          {/* Animated Quote Content */}
          <div className="relative z-10 my-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {/* 5 Stars + Tag pill */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="flex items-center space-x-1 text-[#22C55E] drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_6px_#22C55E]" />
                    <span>{current.tag}</span>
                  </div>
                </div>

                {/* Quote Body */}
                <blockquote className="text-xl sm:text-2xl md:text-3xl leading-[1.4] text-white font-normal tracking-tight max-w-3xl mb-8">
                  "{current.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#22C55E] text-[#080A0C] font-black text-base flex items-center justify-center shadow-[0_0_15px_#22C55E]">
                    {current.author.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-white block text-base sm:text-lg">
                      {current.author}
                    </cite>
                    <span className="text-xs text-[#9CA3AF]">
                      {current.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Controls Bar */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/10 relative z-10">
            {/* Direct Tab Selectors */}
            <div className="flex items-center space-x-2">
              {DEMO_TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#22C55E] shadow-[0_0_10px_#22C55E]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ver depoimento de ${item.author}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-11 h-11 rounded-xl border border-white/10 bg-[#161A1F] flex items-center justify-center text-white hover:bg-[#22C55E] hover:text-[#080A0C] hover:shadow-[0_0_15px_#22C55E] active:scale-95 transition-all cursor-pointer"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 rounded-xl border border-white/10 bg-[#161A1F] flex items-center justify-center text-white hover:bg-[#22C55E] hover:text-[#080A0C] hover:shadow-[0_0_15px_#22C55E] active:scale-95 transition-all cursor-pointer"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
