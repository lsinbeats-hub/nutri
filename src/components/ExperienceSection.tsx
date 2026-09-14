import React from 'react';
import { motion } from 'motion/react';
import { 
  ClipboardCheck, 
  Sparkles, 
  MessageSquareHeart, 
  Compass, 
  BookOpenCheck, 
  Target 
} from 'lucide-react';
import { EXPERIENCE_PILLARS, CLOUD_CONFIG } from '../config/cloud';

const iconMap = {
  'clipboard-list': ClipboardCheck,
  'sparkles': Sparkles,
  'message-circle': MessageSquareHeart,
  'compass': Compass,
  'book-open': BookOpenCheck,
  'target': Target,
};

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-[#0B0D0F] text-[#F3F4F6] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(34,197,94,0.15)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Experiência CLOUD</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight"
            >
              MUITO MAIS QUE UMA FOLHA DE DIETA.{' '}
              <span className="text-[#22C55E] drop-shadow-[0_0_20px_rgba(34,197,94,0.3)] block mt-1">
                UMA PARCERIA DIÁRIA DE RESULTADOS.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed"
            >
              A consulta é somente o primeiro dia. Você conta com suporte contínuo para nunca mais se sentir
              desamparado(a) no meio de um jantar, viagem ou semana atípica.
            </motion.p>
          </div>
        </div>

        {/* 6 Pillars Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCE_PILLARS.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.iconName];

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                whileHover={{ y: -6 }}
                className="group p-7 sm:p-8 rounded-2xl bg-[#121518] border border-white/5 hover:border-[#22C55E]/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.18)] transition-colors duration-300 flex flex-col"
              >
                {/* Minimalist Icon Container with Neon hover */}
                <div className="w-12 h-12 rounded-xl bg-[#181D22] border border-white/10 flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-[#080A0C] group-hover:shadow-[0_0_20px_#22C55E] transition-all duration-300 mb-6">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-[#22C55E] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#9CA3AF] leading-[1.65] mt-auto">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner with Lifestyle Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl overflow-hidden bg-[#121518] border border-[#22C55E]/30 shadow-[0_0_25px_rgba(34,197,94,0.1)] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <img
              src={CLOUD_CONFIG.images.lifestyle}
              alt={CLOUD_CONFIG.images.lifestyleAlt}
              referrerPolicy="no-referrer"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-[#22C55E]/40 shadow-[0_0_12px_rgba(34,197,94,0.2)] shrink-0 filter contrast-[1.05]"
              loading="lazy"
            />
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#22C55E] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_6px_#22C55E]" />
                Presença e Humanização
              </p>
              <p className="text-sm sm:text-base font-semibold text-white mt-0.5 max-w-xl">
                Suporte de verdade via WhatsApp diretamente com sua nutricionista para ajustar refeições no dia a dia.
              </p>
            </div>
          </div>
          <div className="text-xs text-[#9CA3AF] shrink-0 text-left md:text-right">
            Disponibilidade contínua • Sem respostas robóticas genéricas
          </div>
        </motion.div>

      </div>
    </section>
  );
};
