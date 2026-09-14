import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle } from 'lucide-react';
import { HOLISTIC_RESULTS, DEMONSTRATIVE_METRICS } from '../config/cloud';

export const ResultsSection: React.FC = () => {
  return (
    <section id="resultados" className="py-24 sm:py-32 bg-[#0B0D0F] text-[#F3F4F6] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(34,197,94,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Resultados Além da Balança</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight"
          >
            RESULTADO DE VERDADE É AQUELE QUE{' '}
            <span className="text-[#22C55E] drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">VOCÊ MANTÉM PELO RESTO DA VIDA.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-sm sm:text-base text-[#9CA3AF] mt-4 leading-relaxed max-w-2xl"
          >
            O peso no espelho é consequência do resgate da sua saúde metabólica, da energia ao acordar
            e da total ausência de culpa ao comer.
          </motion.p>
        </div>

        {/* 6 Holistic Benefit Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {HOLISTIC_RESULTS.map((res, idx) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl bg-[#121518] border border-white/5 hover:border-[#22C55E]/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.18)] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-[#22C55E] shadow-[0_0_8px_rgba(34,197,94,0.4)] shrink-0" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  {res.title}
                </h3>
              </div>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                {res.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Demonstrative Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="pt-12 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <span className="text-xs uppercase tracking-widest text-[#22C55E] font-extrabold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E]" />
              Indicadores de Experiência e Consistência
            </span>
            <span className="text-[11px] text-[#6B7280] mt-1 sm:mt-0">
              * Dados demonstrativos da metodologia CLOUD
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMONSTRATIVE_METRICS.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative p-6 sm:p-7 rounded-2xl bg-[#121518] border border-white/5 hover:border-[#22C55E]/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 font-display">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-[#22C55E] uppercase tracking-wider mb-2">
                  {metric.label}
                </div>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  {metric.description}
                </p>

                <span className="inline-block mt-3 px-2 py-0.5 rounded text-[10px] text-[#9CA3AF] bg-white/5">
                  Dado demonstrativo
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
