import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { SITUATIONS } from '../config/cloud';

interface ForWhomProps {
  onOpenConsultation: () => void;
}

export const ForWhomSection: React.FC<ForWhomProps> = ({ onOpenConsultation }) => {
  const [selectedSituations, setSelectedSituations] = useState<Record<string, boolean>>({
    'sit-1': true,
    'sit-3': true,
  });

  const toggleSituation = (id: string) => {
    setSelectedSituations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedCount = Object.values(selectedSituations).filter(Boolean).length;

  return (
    <section id="para-quem" className="py-24 sm:py-32 bg-[#0E1114] text-[#F3F4F6] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(34,197,94,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Identificação Real</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight"
          >
            A CLOUD É PARA VOCÊ SE VOCÊ{' '}
            <span className="text-[#22C55E] drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">SE IDENTIFICAR COM ISSO:</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-sm sm:text-base text-[#9CA3AF] mt-4"
          >
            Clique nas frases abaixo que mais refletem a sua relação atual com a dieta:
          </motion.p>
        </div>

        {/* Conversational Situations List */}
        <div className="space-y-4 mb-14">
          {SITUATIONS.map((item, idx) => {
            const isSelected = !!selectedSituations[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 0.45, 
                  delay: idx * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                whileHover={{ scale: 1.01 }}
                onClick={() => toggleSituation(item.id)}
                className={`group p-5 sm:p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex items-start gap-4 sm:gap-5 ${
                  isSelected
                    ? 'bg-[#14181D] border-[#22C55E] shadow-[0_0_25px_rgba(34,197,94,0.18)]'
                    : 'bg-[#121518] border-white/5 hover:border-white/20'
                }`}
              >
                {/* Checkbox indicator with Neon Glow */}
                <div
                  className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#22C55E] border-[#22C55E] text-[#080A0C] shadow-[0_0_12px_#22C55E] scale-110'
                      : 'border-white/20 bg-transparent group-hover:border-[#22C55E]/50'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p
                    className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-200 ${
                      isSelected ? 'text-white' : 'text-[#D1D5DB]'
                    }`}
                  >
                    "{item.quote}"
                  </p>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 leading-relaxed">
                    {item.context}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* High Conversion Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-[#161B20] to-[#0E1114] border border-[#22C55E]/40 text-center flex flex-col items-center shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(34,197,94,0.15)]"
        >
          <p className="text-xl sm:text-2xl font-extrabold uppercase text-white tracking-tight mb-3">
            SE VOCÊ MARCOU AO MENOS UM PONTO,{' '}
            <span className="text-[#22C55E] drop-shadow-[0_0_18px_rgba(34,197,94,0.35)]">PODEMOS TE AJUDAR HOJE.</span>
          </p>

          <p className="text-xs sm:text-sm text-[#D1D5DB] max-w-lg mb-8">
            {selectedCount > 0
              ? `Você identificou ${selectedCount} ${selectedCount === 1 ? 'dificuldade real' : 'dificuldades reais'}. Chega de sofrer com métodos que não foram feitos para você.`
              : 'Clique nos itens acima ou converse diretamente conosco no WhatsApp.'}
          </p>

          <button
            type="button"
            id="forwhom-cta"
            onClick={onOpenConsultation}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-xs sm:text-sm font-extrabold tracking-wider uppercase text-white bg-[#16A34A] hover:bg-[#22C55E] active:scale-[0.98] shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_35px_rgba(34,197,94,0.7)] transition-all duration-300 cursor-pointer"
          >
            <span>QUERO CONVERSAR COM A EQUIPE CLOUD</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
