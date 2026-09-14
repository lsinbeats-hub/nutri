import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CLOUD_CONFIG } from '../config/cloud';
import scaleTrapImg from '../assets/images/scale_trap_1789217025715.jpg';

interface ObjectionBreakerProps {
  onOpenConsultation: () => void;
}

export const ObjectionBreaker: React.FC<ObjectionBreakerProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="quebrar-objecao"
      className="py-24 sm:py-32 bg-[#0B0D0F] text-[#F3F4F6] relative overflow-hidden border-t border-white/5"
    >
      {/* Neon Green Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#22C55E]/10 rounded-full blur-[150px] -z-0" 
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Centered Top Headlines matching Reference with Neon Green */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#22C55E] drop-shadow-[0_0_20px_rgba(34,197,94,0.3)] leading-tight mb-3"
          >
            NÃO EXISTE UMA FÓRMULA MÁGICA PARA PERDER PESO
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white"
          >
            MAS SIM A FORMA CORRETA DE COMEÇAR UM NOVO ESTILO DE VIDA
          </motion.p>
        </div>

        {/* Two-Column Story Breakdown matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          
          {/* Left Column: Arched Neon Green Frame with Scale & "Help!" stickers */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Arched Container with Neon Green Border & Glow */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-t-[140px] rounded-b-3xl bg-gradient-to-b from-[#22C55E] via-[#10B981] to-[#065F46] p-3.5 sm:p-4 shadow-[0_0_40px_rgba(34,197,94,0.25)] border border-[#22C55E]/60">
              
              <div className="relative rounded-t-[130px] rounded-b-2xl overflow-hidden bg-[#0D1013]">
                <img
                  id="objection-scale-img"
                  src={scaleTrapImg}
                  alt="Pés amarrados com fita métrica sobre balança simbolizando a prisão das dietas"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center filter contrast-[1.05]"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = '1';
                      target.src = '/images/scale_trap_1789217025715.jpg';
                    } else if (target.dataset.fallback === '1') {
                      target.dataset.fallback = '2';
                      target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop';
                    }
                  }}
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-center">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-white">
                    A PRISÃO DO EFEITO SANFONA
                  </p>
                  <p className="text-[11px] text-[#D1D5DB] mt-0.5">
                    O ciclo de cortar tudo, sofrer e desistir termina aqui.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Empathetic & Personal Narrative matching Reference text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* White Title matching reference */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
              É exatamente isso que eu vou te ensinar
            </h3>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#D1D5DB] leading-[1.7] max-w-[62ch]">
              <p>
                Talvez você já tenha tentado dezenas de dietas da moda: cortar carboidrato, jejuar até desmaiar de dor de cabeça, ou seguir uma folha de papel rígida que não combinava com o seu almoço de trabalho.
              </p>
              
              <p>
                Durante muito tempo, você foi levado(a) a acreditar que a culpa era da sua falta de disciplina. Mas a verdade é simples: <strong className="text-white font-semibold">uma estratégia que te faz sofrer e te isola do mundo social não foi feita para durar.</strong>
              </p>

              <p>
                A CLOUD nasceu para acabar com essa relação tóxica com a balança. Você não precisa passar fome, cortar o arroz, nem dizer não para o jantar em família no sábado.
              </p>
            </div>

            {/* Final Punchline quote with neon green styling */}
            <div className="mt-8 p-5 rounded-2xl bg-[#121518] border border-[#22C55E]/40 shadow-[0_0_20px_rgba(34,197,94,0.12)] w-full max-w-xl">
              <p className="text-base font-bold text-[#22C55E]">
                "Se eu e centenas de alunos conseguimos quebrar esse ciclo, você também vai conseguir!"
              </p>
              <p className="text-xs text-[#9CA3AF] mt-1">
                Uma metodologia humana, acolhedora e baseada na ciência do comportamento alimentar.
              </p>
            </div>

            {/* CTA Button with Neon Glow */}
            <div className="mt-8">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white bg-[#16A34A] hover:bg-[#22C55E] active:scale-[0.98] shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_35px_rgba(34,197,94,0.7)] transition-all duration-300 cursor-pointer"
              >
                <span>QUERO QUEBRAR ESSE CICLO AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

        </div>

        {/* Real Food Showcase Ribbon: Adding more vibrant food photography directly */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#121518] border border-[#22C55E]/30 p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-extrabold tracking-widest uppercase shadow-[0_0_12px_rgba(34,197,94,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_6px_#22C55E]" />
                Nutrição de Verdade
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white mt-2 uppercase tracking-tight">
                O que você come na prática: <span className="text-[#22C55E] drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">comida com sabor e cor</span>
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-md">
              Chega de frango seco com batata doce sem tempero. O plano alimentar inclui receitas práticas, alimentos vivos e refeições apetitosas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Food Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#0A0D0F] border border-white/10 hover:border-[#22C55E]/50 transition-all duration-300"
            >
              <img
                id="food-showcase-bowl-img"
                src={CLOUD_CONFIG.images.freshBowl}
                alt="Bowl nutritivo com abacate, sementes e salmão"
                referrerPolicy="no-referrer"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = '1';
                    target.src = '/images/vibrant_fresh_bowl_1789217718721.jpg';
                  } else if (target.dataset.fallback === '1') {
                    target.dataset.fallback = '2';
                    target.src = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop';
                  }
                }}
              />
              <div className="p-4 bg-gradient-to-t from-[#0B0E11] to-[#0B0E11]/90">
                <span className="text-[10px] font-bold text-[#22C55E] uppercase tracking-wider block mb-1">
                  Saciedade & Energia
                </span>
                <p className="text-sm font-bold text-white">Bowls Completos e Balanceados</p>
                <p className="text-xs text-[#9CA3AF] mt-1">Gorduras boas, fibras e micronutrientes sem monotonia.</p>
              </div>
            </motion.div>

            {/* Food Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-[#0A0D0F] border border-white/10 hover:border-[#22C55E]/50 transition-all duration-300"
            >
              <img
                id="food-showcase-produce-img"
                src={CLOUD_CONFIG.images.floatingProduce}
                alt="Frutas cítricas, maçãs verdes e compostos bioativos"
                referrerPolicy="no-referrer"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = '1';
                    target.src = '/images/floating_green_produce_1789217730317.jpg';
                  } else if (target.dataset.fallback === '1') {
                    target.dataset.fallback = '2';
                    target.src = 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop';
                  }
                }}
              />
              <div className="p-4 bg-gradient-to-t from-[#0B0E11] to-[#0B0E11]/90">
                <span className="text-[10px] font-bold text-[#22C55E] uppercase tracking-wider block mb-1">
                  Poder Anti-inflamatório
                </span>
                <p className="text-sm font-bold text-white">Ingredientes Vivos & Frescos</p>
                <p className="text-xs text-[#9CA3AF] mt-1">Cores vivas que melhoram a digestão, o intestino e a disposição.</p>
              </div>
            </motion.div>

            {/* Food Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative rounded-2xl overflow-hidden bg-[#0A0D0F] border border-white/10 hover:border-[#22C55E]/50 transition-all duration-300 sm:col-span-2 lg:col-span-1"
            >
              <img
                id="food-showcase-dish-img"
                src={CLOUD_CONFIG.images.gourmetDish}
                alt="Toast artesanal com ovos pochê, azeite e ervas frescas"
                referrerPolicy="no-referrer"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = '1';
                    target.src = '/images/healthy_gourmet_dish_1789217742611.jpg';
                  } else if (target.dataset.fallback === '1') {
                    target.dataset.fallback = '2';
                    target.src = 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop';
                  }
                }}
              />
              <div className="p-4 bg-gradient-to-t from-[#0B0E11] to-[#0B0E11]/90">
                <span className="text-[10px] font-bold text-[#22C55E] uppercase tracking-wider block mb-1">
                  Gastronomia Saudável
                </span>
                <p className="text-sm font-bold text-white">Pratos Rápidos & Saborosos</p>
                <p className="text-xs text-[#9CA3AF] mt-1">Cafés da manhã e lanches que dão água na boca na sua rotina.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
