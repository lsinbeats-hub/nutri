import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CLOUD_CONFIG } from '../config/cloud';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GOALS = [
  'Emagrecer de verdade sem passar fome',
  'Quebrar o ciclo do efeito sanfona',
  'Rotina corrida e falta de organização no prato',
  'Mais disposição, energia e saúde preventiva',
];

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedGoal, setSelectedGoal] = useState(GOALS[0]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const encodedMsg = encodeURIComponent(
      `Olá! Quero transformar minha alimentação com a CLOUD.\nNome: ${name || 'Interessado(a)'}\nWhatsApp: ${phone}\nPrincipal foco: "${selectedGoal}"\nGostaria de verificar as vagas para acompanhamento.`
    );
    
    setTimeout(() => {
      const waUrl = `https://wa.me/${CLOUD_CONFIG.contact.whatsappNumber}?text=${encodedMsg}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 1200);
  };

  const handleDirectWhatsApp = () => {
    window.open(CLOUD_CONFIG.contact.whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative w-full max-w-lg rounded-3xl bg-[#121518] border border-[#22C55E]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(34,197,94,0.1)] p-7 sm:p-9 z-10 my-auto text-left text-white"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-xl text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_0_10px_rgba(34,197,94,0.15)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_6px_#22C55E]" />
                    <span>Início do Acompanhamento</span>
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white">
                    SUA TRANSFORMAÇÃO COMEÇA AQUI.{' '}
                    <span className="text-[#22C55E] drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">SEM DIETAS DE GAVETA.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 leading-relaxed">
                    Preencha seus dados para receber os valores, horários e iniciar seu atendimento direto no WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-1.5"
                    >
                      Seu Nome Completo
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Como podemos te chamar?"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#080A0C] border border-[#2B323A] text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-colors"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-1.5"
                    >
                      WhatsApp com DDD
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#080A0C] border border-[#2B323A] text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-colors"
                    />
                  </div>

                  {/* Main Goal Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-2">
                      Qual é o seu principal objetivo agora?
                    </label>
                    <div className="space-y-2">
                      {GOALS.map((goal) => (
                        <label
                          key={goal}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all ${
                            selectedGoal === goal
                              ? 'bg-[#14181D] border-[#22C55E] text-white font-medium shadow-[0_0_12px_rgba(34,197,94,0.15)]'
                              : 'bg-[#080A0C] border-white/5 text-[#9CA3AF] hover:border-white/20'
                          }`}
                        >
                          <input
                            type="radio"
                            name="goal"
                            checked={selectedGoal === goal}
                            onChange={() => setSelectedGoal(goal)}
                            className="accent-[#22C55E] focus:ring-0"
                          />
                          <span>{goal}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 space-y-2.5">
                    <button
                      type="submit"
                      id="submit-consultation-btn"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-xs sm:text-sm font-extrabold tracking-wider uppercase text-white bg-[#16A34A] hover:bg-[#22C55E] shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_35px_rgba(34,197,94,0.7)] active:scale-[0.99] transition-all cursor-pointer"
                    >
                      <span>Continuar no WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectWhatsApp}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-[#9CA3AF] hover:text-[#22C55E] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#22C55E]" />
                      <span>Prefiro abrir mensagem direta agora</span>
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto mb-4 border border-[#22C55E]/40 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 uppercase">
                  Redirecionando para o WhatsApp...
                </h4>
                <p className="text-sm text-[#9CA3AF] max-w-sm mx-auto mb-6">
                  Estamos abrindo seu canal exclusivo com a equipe CLOUD com seus dados já preparados.
                </p>
                <div className="w-6 h-6 border-2 border-[#22C55E] border-t-transparent rounded-full animate-spin mx-auto shadow-[0_0_10px_#22C55E]" />
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
