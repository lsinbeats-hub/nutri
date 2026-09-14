import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { METHOD_STEPS } from '../config/cloud';

export const MethodSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="metodo" className="py-24 sm:py-32 bg-[#0E1114] text-[#F3F4F6] relative overflow-hidden border-t border-white/5">
      {/* Subtle Neon Green Background Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-[#22C55E]/5 rounded-full blur-[140px] -z-0" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(34,197,94,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>O Método CLOUD</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight"
          >
            QUATRO ETAPAS PARA UMA NUTRIÇÃO{' '}
            <span className="text-[#22C55E] drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">POSSÍVEL NA VIDA REAL.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-sm sm:text-base text-[#9CA3AF] mt-4 leading-relaxed max-w-2xl"
          >
            Esqueça o roteiro de regras inatingíveis. O acompanhamento se desenrola em um fluxo contínuo
            e adaptativo, respeitando a forma como você verdadeiramente vive.
          </motion.p>
        </div>

        {/* Steps Grid with Animated Scroll Reveal */}
        <div className="relative z-10">
          {/* Subtle Desktop Connecting Guide Line */}
          <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-[2px] bg-gradient-to-r from-[#22C55E]/10 via-[#22C55E]/30 to-[#22C55E]/10 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {METHOD_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.55, 
                    delay: idx * 0.12,
                    ease: [0.21, 0.47, 0.32, 0.98] 
                  }}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative flex flex-col p-6 sm:p-7 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#12161A] border-[#22C55E] shadow-[0_0_30px_rgba(34,197,94,0.2)] -translate-y-2'
                      : 'bg-[#0E1114] border-white/5 hover:border-white/20 hover:-translate-y-1'
                  }`}
                >
                  {/* Step Big Number */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`text-4xl sm:text-5xl font-extrabold tracking-tight transition-colors duration-300 font-display ${
                        isSelected ? 'text-[#22C55E] drop-shadow-[0_0_12px_rgba(34,197,94,0.4)]' : 'text-white/20 group-hover:text-white/40'
                      }`}
                    >
                      {step.number}
                    </span>

                    {/* Indicator Dot with Neon Glow */}
                    <div
                      className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#22C55E] shadow-[0_0_14px_#22C55E] scale-125'
                          : 'bg-white/10 group-hover:bg-[#22C55E]/40'
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-[#22C55E] transition-colors">
                    {step.title}
                  </h3>

                  {/* Main Concise Description */}
                  <p className="text-sm font-medium text-[#D1D5DB] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Extended Context Detail */}
                  <p className="text-xs text-[#9CA3AF] leading-relaxed mt-auto pt-3 border-t border-white/10">
                    {step.details}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
