import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Lock, 
  Award, 
  ArrowUp, 
  MessageCircle, 
  Instagram, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  HeartPulse
} from 'lucide-react';
import { CLOUD_CONFIG } from '../config/cloud';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <footer id="main-footer" className="bg-[#050608] text-[#9CA3AF] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#22C55E]/5 blur-[160px] -z-0"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Trust Pillars Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16 border-b border-white/10"
        >
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0D1013] border border-white/5 hover:border-[#22C55E]/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0 shadow-[0_0_12px_rgba(34,197,94,0.15)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Registro Profissional</h4>
              <p className="text-xs text-[#9CA3AF] mt-0.5 leading-relaxed">Em conformidade com CFN e CRN-3 para atendimento clínico e online.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0D1013] border border-white/5 hover:border-[#22C55E]/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0 shadow-[0_0_12px_rgba(34,197,94,0.15)]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Base Científica</h4>
              <p className="text-xs text-[#9CA3AF] mt-0.5 leading-relaxed">Condutas pautadas em literatura médica, sem modismos ou terrorismo.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0D1013] border border-white/5 hover:border-[#22C55E]/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0 shadow-[0_0_12px_rgba(34,197,94,0.15)]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Sigilo e LGPD</h4>
              <p className="text-xs text-[#9CA3AF] mt-0.5 leading-relaxed">Prontuários e dados de saúde com criptografia e privacidade total.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0D1013] border border-white/5 hover:border-[#22C55E]/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0 shadow-[0_0_12px_rgba(34,197,94,0.15)]">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Atendimento Global</h4>
              <p className="text-xs text-[#9CA3AF] mt-0.5 leading-relaxed">Consultas por teleatendimento no Brasil e para residentes no exterior.</p>
            </div>
          </div>
        </motion.div>

        {/* Main 4-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 border-b border-white/10">
          
          {/* Col 1: Institutional & Brand (5 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="inline-flex items-center gap-2 text-white font-black text-2xl tracking-[0.25em] group"
              aria-label="CLOUD Home"
            >
              <span className="group-hover:text-[#22C55E] transition-colors">CLOUD</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E]" />
            </a>

            <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-[10px] font-extrabold uppercase tracking-widest">
              Nutrição Clínica & Comportamental
            </div>

            <p className="text-xs text-[#9CA3AF] mt-4 leading-relaxed max-w-sm">
              Metodologia contemporânea que une ciência da nutrição, bioquímica metabólica e acompanhamento humano contínuo. Sem cardápios engessados, sem culpa e com resultados que perduram pela vida toda.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={CLOUD_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da CLOUD"
                className="w-9 h-9 rounded-xl bg-[#121518] border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-[#22C55E] hover:border-[#22C55E]/50 hover:shadow-[0_0_12px_rgba(34,197,94,0.2)] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLOUD_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da CLOUD"
                className="w-9 h-9 rounded-xl bg-[#121518] border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-[#22C55E] hover:border-[#22C55E]/50 hover:shadow-[0_0_12px_rgba(34,197,94,0.2)] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@cloudnutricao.com.br"
                aria-label="E-mail da CLOUD"
                className="w-9 h-9 rounded-xl bg-[#121518] border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-[#22C55E] hover:border-[#22C55E]/50 hover:shadow-[0_0_12px_rgba(34,197,94,0.2)] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2.5 Cols) */}
          <div className="lg:col-span-2 sm:col-span-1 text-left">
            <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
              Navegação
            </h5>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a
                  href="#hero-section"
                  onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                  className="hover:text-[#22C55E] transition-colors inline-block py-0.5"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#quebrar-objecao"
                  onClick={(e) => scrollToSection(e, '#quebrar-objecao')}
                  className="hover:text-[#22C55E] transition-colors inline-block py-0.5"
                >
                  Além da Balança
                </a>
              </li>
              <li>
                <a
                  href="#metodo"
                  onClick={(e) => scrollToSection(e, '#metodo')}
                  className="hover:text-[#22C55E] transition-colors inline-block py-0.5"
                >
                  O Método (4 Etapas)
                </a>
              </li>
              <li>
                <a
                  href="#experiencia"
                  onClick={(e) => scrollToSection(e, '#experiencia')}
                  className="hover:text-[#22C55E] transition-colors inline-block py-0.5"
                >
                  A Experiência (6 Pilares)
                </a>
              </li>
              <li>
                <a
                  href="#para-quem"
                  onClick={(e) => scrollToSection(e, '#para-quem')}
                  className="hover:text-[#22C55E] transition-colors inline-block py-0.5"
                >
                  Para Quem É
                </a>
              </li>
              <li>
                <a
                  href="#resultados"
                  onClick={(e) => scrollToSection(e, '#resultados')}
                  className="hover:text-[#22C55E] transition-colors inline-block py-0.5"
                >
                  Resultados & Casos
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  onClick={(e) => scrollToSection(e, '#depoimentos')}
                  className="hover:text-[#22C55E] transition-colors inline-block py-0.5"
                >
                  Depoimentos Reais
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => scrollToSection(e, '#faq')}
                  className="hover:text-[#22C55E] transition-colors inline-block py-0.5"
                >
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus & Services (2.5 Cols) */}
          <div className="lg:col-span-3 sm:col-span-1 text-left">
            <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
              Áreas de Atuação
            </h5>
            <ul className="space-y-2.5 text-xs font-medium text-[#9CA3AF]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span>Emagrecimento Saudável e Sustentável</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span>Reeducação Alimentar sem Terrorismo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span>Hipertrofia e Desempenho Esportivo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span>Saúde Intestinal, Microbiota & Inflamação</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span>Exames Bioquímicos e Suplementação Fiel</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span>Acompanhamento Contínuo via WhatsApp</span>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                <Clock className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span>Seg a Sex: 08h às 20h | Sáb: 08h às 13h</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter & Priority Channel (3 Cols) */}
          <div className="lg:col-span-3 text-left">
            <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
              Nutrição Descomplicada
            </h5>
            <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
              Receba orientações práticas de alimentação, receitas fáceis e desmistificação científica diretamente no seu e-mail:
            </p>

            {newsletterSuccess ? (
              <div className="p-3 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Inscrição confirmada! Boas-vindas à comunidade.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Seu melhor e-mail"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0E1114] border border-[#242A31] text-xs text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#080A0C] bg-[#22C55E] hover:bg-[#4ADE80] transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Receber Dicas Sem Custo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Direct Consultation Action */}
            <div className="mt-6 pt-5 border-t border-white/5">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#14181D] hover:bg-[#1A2027] border border-[#22C55E]/30 hover:border-[#22C55E] transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span className="group-hover:text-[#22C55E] transition-colors">Agendar Consulta</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#22C55E] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Medical & Legal Disclaimer Banner (Essential for Healthcare Compliance) */}
        <div className="py-6 border-b border-white/5 text-[11px] text-[#6B7280] leading-relaxed text-left">
          <p>
            <strong className="text-white/80 uppercase font-semibold mr-1">Aviso Médico & Nutricional Obrigatório:</strong>
            As informações disponibilizadas neste portal possuem caráter estritamente educativo, informativo e de divulgação científica. Não substituem o diagnóstico, acompanhamento, conduta ou prescrição médica e nutricional individualizada após anamnese clínica completa. Cada organismo possui particularidades genéticas, metabólicas e rotinas distintas. Para alterações significativas na sua dieta, consulte sempre um nutricionista habilitado.
          </p>
        </div>

        {/* Sub-Footer: Copyright, Ethics, Legal links and Back-to-Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#6B7280]">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} CLOUD Nutrição Integrada. Todos os direitos reservados.</p>
            <span className="hidden sm:inline text-white/10">•</span>
            <p className="text-[#9CA3AF]">
              Responsável Técnico: <span className="text-white/80 font-medium">Nutricionista Clínica • CRN-3 / CFN Vigente</span>
            </p>
          </div>

          {/* Quick Legal & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-[11px]">
              <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="hover:text-[#22C55E] transition-colors">Termos</a>
              <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="hover:text-[#22C55E] transition-colors">Privacidade</a>
              <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="hover:text-[#22C55E] transition-colors">Código de Ética</a>
            </div>

            {/* Back to Top Button with Neon Glow */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao início da página"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121518] hover:bg-[#181D22] border border-white/10 hover:border-[#22C55E]/50 text-white text-xs font-semibold hover:text-[#22C55E] transition-all cursor-pointer group shadow-sm hover:shadow-[0_0_12px_rgba(34,197,94,0.25)]"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

