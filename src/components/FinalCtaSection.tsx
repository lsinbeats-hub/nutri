import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { CLOUD_CONFIG } from '../config/cloud';

interface FinalCtaProps {
  onOpenConsultation: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="contato"
      className="relative py-28 sm:py-36 bg-[#080A0C] text-[#FAF9F6] overflow-hidden border-t border-white/10"
    >
      {/* Dynamic Ambient Mist Animation in Background */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] rounded-full bg-gradient-to-tr from-[#22C55E]/20 via-[#10B981]/15 to-transparent blur-[140px] -z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Urgent Brand Pill with Neon green */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/40 text-[#22C55E] text-xs font-extrabold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E] animate-ping" />
          <span>Vagas Limitadas para Acompanhamento este Mês</span>
        </motion.div>

        {/* Compelling Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.15] tracking-tight max-w-3xl mb-6 text-white"
        >
          CHEGA DE ADIAR A SUA SAÚDE.{' '}
          <span className="text-[#22C55E] drop-shadow-[0_0_25px_rgba(34,197,94,0.35)] block mt-2">
            COMECE SUA TRANSFORMAÇÃO HOJE.
          </span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-[#D1D5DB] max-w-[54ch] leading-[1.7] mb-10 font-normal"
        >
          Seu próximo passo não é cortar mais alimentos nem sofrer na frente do prato.{' '}
          <strong className="text-white font-semibold">É ter uma estratégia personalizada com apoio diário.</strong>
        </motion.p>

        {/* High-Impact Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            type="button"
            id="final-cta-start-button"
            onClick={onOpenConsultation}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-xs sm:text-sm font-extrabold tracking-wider uppercase text-white bg-[#16A34A] hover:bg-[#22C55E] shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_35px_rgba(34,197,94,0.7)] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Direct WhatsApp Quick Link */}
          <a
            href={CLOUD_CONFIG.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-whatsapp-link"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#121518] hover:bg-[#181D22] border border-white/10 hover:border-[#22C55E]/40 hover:text-[#22C55E] transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-[#22C55E]" />
            <span>Falar no WhatsApp</span>
          </a>
        </motion.div>

        {/* Reassurance text */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-[#9CA3AF]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            Atendimento 100% individual
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            Sem robôs ou dietas de gaveta
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            Acompanhamento contínuo
          </span>
        </div>

      </div>
    </section>
  );
};
