import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../config/cloud';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0B0D0F] text-[#F3F4F6] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(34,197,94,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Esclarecimentos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight"
          >
            PERGUNTAS <span className="text-[#22C55E] drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">FREQUENTES.</span>
          </motion.h2>

          <p className="text-sm sm:text-base text-[#9CA3AF] mt-4">
            Tudo o que você precisa saber sobre o acompanhamento e a metodologia da CLOUD.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#14181D] border-[#22C55E]/50 shadow-[0_0_25px_rgba(34,197,94,0.12)]'
                    : 'bg-[#121518] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  id={`faq-trigger-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? 'bg-[#22C55E] text-[#080A0C] shadow-[0_0_12px_#22C55E]'
                        : 'bg-[#1C2126] text-[#9CA3AF]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[3]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-2 text-sm sm:text-base text-[#D1D5DB] leading-[1.7] border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
