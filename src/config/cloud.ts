import { MethodStep, ExperiencePillar, SituationItem, MetricItem, Testimonial, FaqItem } from '../types';
import heroNutritionistImg from '../assets/images/hero_nutritionist_1789217013580.jpg';
import scaleTrapImg from '../assets/images/scale_trap_1789217025715.jpg';
import freshBowlImg from '../assets/images/vibrant_fresh_bowl_1789217718721.jpg';
import floatingProduceImg from '../assets/images/floating_green_produce_1789217730317.jpg';
import gourmetDishImg from '../assets/images/healthy_gourmet_dish_1789217742611.jpg';

/**
 * CONFIGURAÇÃO DA MARCA CLOUD
 * Links de contato e placeholders facilmente editáveis.
 */
export const CLOUD_CONFIG = {
  brandName: 'CLOUD',
  tagline: 'Nutrição para a vida real',
  
  // Link e número de WhatsApp para conversão direta (substituir pelos dados reais da empresa)
  contact: {
    whatsappNumber: '5511999999999', // [EDITÁVEL] Exemplo: 5511999999999
    whatsappDefaultMessage: 'Olá! Conheci a CLOUD através do site e gostaria de entender como funciona o acompanhamento nutricional.',
    whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1!%20Conheci%20a%20CLOUD%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20acompanhamento.',
    instagramHandle: '@cloud.nutricao',
    instagramUrl: 'https://instagram.com',
    email: 'contato@cloudnutricao.com.br',
    location: 'Atendimento Online (Brasil & Exterior) e Presencial',
  },

  // Imagens da landing page correspondentes à referência visual e fotografia de alimentos
  images: {
    heroNutritionist: heroNutritionistImg,
    scaleTrap: scaleTrapImg,
    freshBowl: freshBowlImg,
    floatingProduce: floatingProduceImg,
    gourmetDish: gourmetDishImg,
    hero: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1400&auto=format&fit=crop',
    heroAlt: 'Nutricionista especialista CLOUD',
    lifestyle: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
    lifestyleAlt: 'Preparação consciente de alimentos frescos e coloridos em ambiente acolhedor',
    ambience: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1200&auto=format&fit=crop',
    ambienceAlt: 'Momento de tranquilidade com alimentação acolhedora',
  }
};

export interface FoodShowcaseItem {
  id: string;
  name: string;
  tag: string;
  image: string;
  description: string;
}

export const REAL_FOOD_SHOWCASE: FoodShowcaseItem[] = [
  {
    id: 'food-1',
    name: 'Bowls Nutritivos & Coloridos',
    tag: 'Energia & Saciedade',
    image: freshBowlImg,
    description: 'Abacate fresco, sementes, espinafre e proteínas de alto valor biológico sem miséria calórica.',
  },
  {
    id: 'food-2',
    name: 'Ingredientes Vivos & Frescos',
    tag: 'Anti-inflamatório',
    image: floatingProduceImg,
    description: 'Frutas cítricas, maçãs verdes crocantes, hortelã e compostos bioativos que desinflamam o corpo.',
  },
  {
    id: 'food-3',
    name: 'Gastronomia Saudável na Prática',
    tag: 'Sabor de Verdade',
    image: gourmetDishImg,
    description: 'Toast artesanal, ovos pochê, azeite extravirgem e temperos naturais. Prazer real à mesa.',
  },
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: '01',
    title: 'Entender',
    description: 'Conhecemos sua rotina, objetivos, preferências e histórico.',
    details: 'Mapeamos suas refeições habituais, horários de trabalho, momentos de maior fome, relação emocional com a comida e preferências individuais. Nada é imposto sem contexto.',
  },
  {
    number: '02',
    title: 'Estruturar',
    description: 'Criamos uma estratégia alimentar personalizada e possível de seguir.',
    details: 'Construímos opções viáveis para a sua rotina semanal. Cardápio flexível, substituições inteligentes e porcionamentos adequados sem listas de proibições desnecessárias.',
  },
  {
    number: '03',
    title: 'Acompanhar',
    description: 'Você não fica sozinho depois da consulta. O acompanhamento faz parte do processo.',
    details: 'Canal de suporte próximo para dúvidas do dia a dia, viagens, eventos sociais e adaptações pontuais. O sucesso acontece na manutenção diária.',
  },
  {
    number: '04',
    title: 'Evoluir',
    description: 'A estratégia é ajustada conforme seu corpo, sua rotina e seus resultados mudam.',
    details: 'Conforme sua rotina oscila ou novos objetivos surgem, refinamos o plano. Uma nutrição dinâmica que amadurece junto com você.',
  },
];

export const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    id: 'avaliacao',
    title: 'Avaliação individual',
    description: 'Análise profunda dos seus hábitos, saúde metabólica, preferências gastronômicas e estilo de vida.',
    iconName: 'clipboard-list',
  },
  {
    id: 'estrategia',
    title: 'Estratégia personalizada',
    description: 'Um direcionamento prático e sustentável, desenhado sob medida para caber no seu tempo e no seu gosto.',
    iconName: 'sparkles',
  },
  {
    id: 'acompanhamento',
    title: 'Acompanhamento contínuo',
    description: 'Proximidade real entre as consultas para tirar dúvidas, orientar escolhas e manter o ritmo com leveza.',
    iconName: 'message-circle',
  },
  {
    id: 'ajustes',
    title: 'Ajustes de rota',
    description: 'Mudanças de rotina, viagens, imprevistos ou novas metas? O plano se adapta dinamicamente a você.',
    iconName: 'compass',
  },
  {
    id: 'educacao',
    title: 'Educação alimentar',
    description: 'Autonomia para fazer escolhas conscientes em qualquer restaurante, evento social ou supermercado.',
    iconName: 'book-open',
  },
  {
    id: 'longoprazo',
    title: 'Foco no longo prazo',
    description: 'Construção de hábitos consistentes que você consegue manter por anos, sem efeito sanfona ou frustração.',
    iconName: 'target',
  },
];

export const SITUATIONS: SituationItem[] = [
  {
    id: 'sit-1',
    quote: 'Você começa uma dieta e abandona algumas semanas depois.',
    context: 'Dietas hiper-restritivas esgotam sua força de vontade. A solução não é mais disciplina, é uma estratégia humana.',
  },
  {
    id: 'sit-2',
    quote: 'Você sabe o que deveria comer, mas não consegue encaixar isso na sua rotina.',
    context: 'Informação solta na internet não resolve sua quarta-feira corrida. Você precisa de praticidade adaptada ao seu relógio.',
  },
  {
    id: 'sit-3',
    quote: 'Você quer mudar seu corpo sem viver em função da dieta.',
    context: 'Sua vida é muito maior que calorias. O objetivo é integrar a alimentação com equilíbrio à sua vida social e profissional.',
  },
  {
    id: 'sit-4',
    quote: 'Você quer melhorar sua alimentação, mas está cansado de regras impossíveis.',
    context: 'Cardápios caros, ingredientes exóticos e proibições sem sentido não constroem saúde sustentável.',
  },
  {
    id: 'sit-5',
    quote: 'Você busca acompanhamento e não apenas uma folha de dieta impressa.',
    context: 'Uma folha não responde suas dúvidas no meio de um almoço de trabalho. O suporte contínuo é o que gera transformação.',
  },
];

export const HOLISTIC_RESULTS = [
  {
    title: 'Mais disposição diária',
    detail: 'Energia estável ao longo do dia, sem a clássica sonolência pós-almoço ou picos de cansaço extremo.',
  },
  {
    title: 'Melhor relação com a comida',
    detail: 'Fim do sentimento de culpa. Comer com prazer, consciência e sem ansiedade perante reuniões ou viagens.',
  },
  {
    title: 'Mais consistência e paz mental',
    detail: 'A segurança de seguir um plano que você não sente vontade de abandonar na sexta-feira à noite.',
  },
  {
    title: 'Organização alimentar descomplicada',
    detail: 'Clareza nas compras, preparos rápidos e decisões fluidas para a sua semana sem sobrecarregar sua mente.',
  },
  {
    title: 'Evolução física sustentável',
    detail: 'Composição corporal favorável alcançada com respeito à fisiologia e preservação do seu metabolismo.',
  },
  {
    title: 'Clareza sobre o que funciona para você',
    detail: 'Autonomia completa: entender seu próprio corpo e parar de ser refém da "dieta da moda" do momento.',
  },
];

/**
 * Indicadores quantitativos demonstrativos
 * ATENÇÃO: Estes dados são placeholders para demonstração de layout e devem ser
 * substituídos pelos números reais da CLOUD antes da publicação final.
 */
export const DEMONSTRATIVE_METRICS: MetricItem[] = [
  {
    value: '+500',
    label: 'clientes acompanhados',
    description: 'Pessoas que transformaram sua rotina alimentar com o método CLOUD.',
    isPlaceholder: true, // [PLACEHOLDER DEMONSTRATIVO: substituir por dado real]
  },
  {
    value: '94%',
    label: 'de adesão ao acompanhamento',
    description: 'Pacientes que mantêm a constância após os primeiros 3 meses.',
    isPlaceholder: true, // [PLACEHOLDER DEMONSTRATIVO: substituir por dado real]
  },
  {
    value: '6+ anos',
    label: 'de experiência clínica',
    description: 'Foco exclusivo em nutrição comportamental, clínica e preventiva.',
    isPlaceholder: true, // [PLACEHOLDER DEMONSTRATIVO: substituir por dado real]
  },
];

/**
 * Depoimentos de demonstração
 * ATENÇÃO: Textos fictícios/demonstrativos elaborados para estruturação visual.
 * Devem ser substituídos por depoimentos e autorizações de clientes reais da CLOUD antes da publicação.
 */
export const DEMO_TESTIMONIALS: Testimonial[] = [
  {
    id: 'dep-1',
    quote: 'Foi a primeira vez que consegui seguir uma estratégia alimentar sem sentir que estava vivendo de dieta. Minha rotina no escritório sempre foi caótica, e pela primeira vez o planejamento se adaptou a mim, não o contrário.',
    author: 'Mariana Duarte',
    role: 'Executiva de Finanças • 34 anos',
    tag: 'Rotina corporativa & constância',
    isPlaceholder: true, // [PLACEHOLDER: substituir por depoimento real]
  },
  {
    id: 'dep-2',
    quote: 'Eu já tinha passado por diversas nutricionistas que me entregavam três folhas de papel com alimentos que eu nunca comia. Na CLOUD, o acompanhamento pós-consulta fez toda a diferença para eu não desistir na segunda semana.',
    author: 'Rafael Mendonça',
    role: 'Arquiteto • 29 anos',
    tag: 'Saúde metabólica & acompanhamento',
    isPlaceholder: true, // [PLACEHOLDER: substituir por depoimento real]
  },
  {
    id: 'dep-3',
    quote: 'O que mais me impressionou foi a leveza. Não precisei cortar o jantar de fim de semana com meus amigos nem deixar de comer o que gosto. Perdi peso com disposição e, principalmente, em paz com a comida.',
    author: 'Beatriz Vasconcelos',
    role: 'Advogada • 41 anos',
    tag: 'Emagrecimento sem restrições extremas',
    isPlaceholder: true, // [PLACEHOLDER: substituir por depoimento real]
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona a primeira consulta?',
    answer: 'Nossa primeira sessão é um mergulho detalhado na sua vida real: horários, rotina de sono, histórico médico, preferências culinárias, experiências prévias com dietas e suas maiores dificuldades. A partir dessa conversa profunda, traçamos juntos as primeiras diretrizes estratégicas que farão parte do seu plano.',
  },
  {
    id: 'faq-2',
    question: 'O plano alimentar é totalmente personalizado?',
    answer: 'Sim, integralmente. Não trabalhamos com modelos pré-fabricados ou dietas de gaveta. Seu plano é calculado e estruturado exclusivamente para as suas necessidades nutricionais, horários de trabalho, facilidade no preparo e paladar pessoal.',
  },
  {
    id: 'faq-3',
    question: 'Preciso cortar todos os alimentos que gosto?',
    answer: 'De forma alguma. O princípio fundamental da CLOUD é a sustentabilidade. Alimentos que você ama têm espaço no planejamento através de equilíbrio quantitativo e contexto estratégico. Acreditamos que uma alimentação que te isola socialmente não pode ser considerada saudável.',
  },
  {
    id: 'faq-4',
    question: 'O acompanhamento acontece depois da consulta?',
    answer: 'Sim, e este é um dos grandes diferenciais da CLOUD. A consulta é apenas o ponto de partida. Você conta com canal direto de suporte entre os encontros para sanar dúvidas, adaptar refeições em dias atípicos, receber feedback e manter a motivação sem se sentir desamparado.',
  },
  {
    id: 'faq-5',
    question: 'Quanto tempo leva para perceber resultados?',
    answer: 'Resultados como melhora na digestão, aumento da disposição física, sono de melhor qualidade e redução do inchaço costumam ser percebidos já nas primeiras semanas. Mudanças sustentáveis de composição corporal e consolidação de hábitos acontecem com consistência e acompanhamento continuado.',
  },
  {
    id: 'faq-6',
    question: 'A CLOUD atende pessoas com diferentes objetivos?',
    answer: 'Sim. Atendemos desde quem busca emagrecimento sustentável e melhora na composição corporal, até indivíduos focados em ganho de massa, reeducação alimentar, saúde gastrointestinal, controle de marcadores clínicos ou que simplesmente desejam mais energia e organização no dia a dia.',
  },
];
