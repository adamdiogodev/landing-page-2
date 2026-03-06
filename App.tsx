
import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight,
  Users,
  Star,
  CheckCircle,
  Play,
  ArrowRight,
  Zap,
  Target,
  ShieldCheck,
  ClipboardList,
  UserSearch,
  Handshake,
  MessageSquare,
  FileSearch,
  Check,
  PlusCircle,
  Search,
  UserCheck,
  Globe,
  Filter,
  TrendingDown,
  Sparkles,
  MapPin,
  Shield,
  Clock,
  Eye,
  Code,
  Palette,
  Database,
  BarChart3,
  Megaphone,
  HeartHandshake,
  BadgeDollarSign,
  Coins,
  ReceiptText,
  UserPlus,
  Verified,
  Workflow,
  Quote,
  Calendar,
  Rocket,
  Briefcase,
  Award,
  Wallet,
  Monitor,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CALENDLY_URL = 'https://calendly.com/gabriel-trytalently/30-minute-demo';
const TALENTLY_APP_LOGIN_PT = 'https://app.talently.com.br/login';
const TALENTLY_APP_LOGIN_EN = 'https://app.trytalently.com/login';

// --- Shared Components ---

const Logo = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} className="flex items-center hover:opacity-80 transition-opacity">
    <img src="/logo.png" alt="Talently" className="h-8 w-auto object-contain" />
  </button>
);

const PlatformFloatingCard = ({ title, company, bounty, activeHires, img, className, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -15, 0],
      rotate: [0, 0.5, 0]
    }}
    transition={{ 
      duration: 8, 
      repeat: Infinity, 
      delay,
      opacity: { duration: 1 }
    }}
    className={`floating-card w-72 absolute hidden xl:block z-20 overflow-hidden !p-0 ${className}`}
  >
    <div className="relative h-24">
      <img src={img} className="w-full h-full object-cover grayscale-[0.2] opacity-90" alt={title} />
      <div className="absolute top-2 left-2 flex flex-col gap-1.5">
        <div className="bg-white/95 backdrop-blur px-2.5 py-1 rounded-lg border border-slate-100 flex items-center gap-1.5 shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
          <span className="text-[9px] font-bold text-slate-600 uppercase tracking-tight">VAGAS: {activeHires}</span>
        </div>
        <div className="bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded-lg text-white flex items-center gap-1.5 shadow-sm">
          <span className="text-[9px] font-medium uppercase tracking-widest">🎁 ${bounty}</span>
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-[10px] font-medium text-slate-400 border border-slate-100 uppercase">
          {company.substring(0, 2)}
        </div>
        <span className="text-[10px] font-medium text-slate-400">{company}</span>
      </div>
      <h4 className="text-[14px] font-semibold text-slate-800 leading-tight tracking-tight">{title}</h4>
    </div>
  </motion.div>
);

const TeamWorkingCard = ({ className, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, 15, 0],
      rotate: [0, -1, 0]
    }}
    transition={{ 
      duration: 10, 
      repeat: Infinity, 
      delay,
      opacity: { duration: 1 }
    }}
    className={`floating-card w-72 absolute hidden xl:block z-20 overflow-hidden !p-0 ${className}`}
  >
    <div className="relative h-36">
      <img 
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
        className="w-full h-full object-cover" 
        alt="Team Working" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
        <div className="flex items-center gap-2 text-white">
          <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
            <Users className="w-3 h-3" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">Expert Team Pool</span>
        </div>
      </div>
    </div>
    <div className="p-4 bg-white">
      <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
        Nossa rede de recrutadores filtra os melhores talentos para sua empresa em tempo recorde.
      </p>
    </div>
  </motion.div>
);

const FloatingProfile = ({ name, info, date, img, className, delay = 0 }: any) => (
  <motion.div 
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
    className={`floating-card flex items-center gap-4 absolute hidden xl:flex z-20 min-w-[280px] ${className}`}
  >
    <img src={img} className="w-12 h-12 rounded-full border-2 border-purple-50" />
    <div>
      <div className="text-[14px] font-semibold text-slate-800 leading-none mb-1">{name}</div>
      <div className="text-[11px] font-medium text-slate-400 leading-none">{info}</div>
      <div className="text-[10px] font-semibold text-purple-600 mt-1.5 uppercase tracking-[0.15em]">{date}</div>
    </div>
  </motion.div>
);

const FloatingBadge = ({ text, color, className, delay = 0, icon: Icon }: any) => (
  <motion.div 
    animate={{ scale: [1, 1.02, 1], y: [0, -8, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay }}
    className={`absolute px-5 py-3 rounded-full text-white text-[12px] font-medium shadow-lg z-20 hidden xl:flex items-center gap-3 ${color} ${className}`}
  >
    {Icon && <Icon className="w-4 h-4 opacity-90" />}
    {text}
  </motion.div>
);

const TaglineFeature = ({ icon: Icon, text }: any) => (
  <div className="flex items-center gap-3 bg-white/40 backdrop-blur-md border border-slate-100 px-5 py-2.5 rounded-full shadow-sm hover:bg-white transition-all group cursor-default">
    <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
      <Icon className="w-4 h-4 text-purple-600 group-hover:text-white transition-colors" />
    </div>
    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.15em] leading-none">{text}</span>
  </div>
);

const NetworkBackground = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute top-[5%] left-[10%] w-[50rem] h-[50rem] bg-purple-50/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-[10%] right-[10%] w-[40rem] h-[40rem] bg-emerald-50/30 rounded-full blur-[100px]" />
    <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" className="opacity-[0.45]">
      <defs>
        <marker id="arrowhead" markerWidth="12" markerHeight="9" refX="0" refY="4.5" orient="auto">
          <polygon points="0 0, 12 4.5, 0 9" fill="currentColor" className="text-slate-400" />
        </marker>
      </defs>
      <motion.path d="M150 100 L 150 350 Q 150 400 200 400 L 800 400" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-slate-400" marker-end="url(#arrowhead)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3 }} />
      <motion.path d="M850 150 L 850 750" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-slate-400" marker-end="url(#arrowhead)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.5 }} />
      <motion.path d="M100 850 L 100 250" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-purple-400" marker-end="url(#arrowhead)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1 }} />
      <circle cx="150" cy="100" r="4" fill="currentColor" className="text-purple-500" />
      <circle cx="850" cy="150" r="4" fill="currentColor" className="text-purple-500" />
      <circle cx="100" cy="850" r="4" fill="currentColor" className="text-purple-500" />
      {Array.from({ length: 10 }).map((_, i) => (
        Array.from({ length: 10 }).map((_, j) => (
          <rect key={`${i}-${j}`} x={i * 120} y={j * 120} width="1.2" height="1.2" fill="currentColor" className="text-slate-200" />
        ))
      ))}
    </svg>
  </div>
);

// --- Home Components ---

const ProblemSection = ({ lang }: { lang: 'pt' | 'en' }) => {
  const isPT = lang === 'pt';
  return (
    <section className="relative py-48 px-6 overflow-hidden bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative z-10">
            {isPT ? (
              <>
                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                  Feito para as vagas que <span className="text-purple-600">mais importam.</span>
                </h2>
                <p className="text-2xl text-slate-500 leading-relaxed font-normal max-w-xl">Um parceiro de contratação tão seletivo quanto você.</p>
              </>
            ) : (
              <>
                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                  Brazil has great talent, but <span className="text-purple-600">finding them</span> is the hard part.
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed font-normal max-w-2xl">If you’re hiring from outside Brazil, it’s easy to waste weeks screening applicants. Talently solves that with local reach and recruiter-driven sourcing.</p>
              </>
            )}
          </motion.div>
          <div className="relative h-[700px] flex items-center justify-center">
            <div className="absolute w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px]" />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="absolute z-10 w-[420px] h-[520px] rounded-[40px] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_rgba(0,0,0,0.12)]">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Main Team Working" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} animate={{ y: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-4 -right-12 z-20 w-48 h-60 rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Expert Recruiter" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} animate={{ y: [0, 15, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-10 -left-16 z-20 w-52 h-44 rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Vetting Specialist" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = ({ lang }: { lang: 'pt' | 'en' }) => {
  const isPT = lang === 'pt';
  const items = isPT ? [
    { title: "Publique a vaga", desc: "Inicie o processo em minutos com nosso formulário inteligente ou agende uma call rápida.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", icon: PlusCircle, step: "01" },
    { title: "Busca ativa e triagem", desc: "Nossa rede outbound local encontra talentos passivos e qualifica cada um para o seu fit.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600", icon: Search, step: "02" },
    { title: "Você entrevista e contrata", desc: "Fale apenas com candidatos de alto sinal. Sem spam, sem flood de currículos.", img: "https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=600", icon: UserCheck, step: "03" }
  ] : [
    { title: "Share your role", desc: "Book a quick call or post the role in minutes. Clear requirements start here.", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600", icon: ClipboardList, step: "01" },
    { title: "Local experts source + vet", desc: "Recruiters in Brazil find relevant talent — Talently filters for technical and cultural fit.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600", icon: UserSearch, step: "02" },
    { title: "You interview and hire", desc: "You meet only high-signal candidates. No resume flood, just direct path to your next hire.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600", icon: Handshake, step: "03" }
  ];
  return (
    <section className="relative py-32 px-6 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-32 text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Workflows</motion.div>
          <motion.h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">{isPT ? "Como funciona" : "How Talently works"}</motion.h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {items.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }} className="relative flex flex-col items-center text-center">
              <div className="mb-10 relative">
                <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-[#fafafa] z-20 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center z-30">{item.step}</div>
              </div>
              <div className="bg-white rounded-[44px] p-10 pt-12 border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] flex flex-col h-full w-full">
                <div className="h-48 rounded-[32px] overflow-hidden mb-8"><img src={item.img} className="w-full h-full object-cover grayscale-[0.3]" /></div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 font-medium text-[15px]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = ({ lang }: { lang: 'pt' | 'en' }) => {
  const isPT = lang === 'pt';
  const benefits = isPT ? [
    { title: "Candidatos pré-qualificados", desc: "Menos entrevistas improdutivas. Mais conversas com fit real.", icon: Users, badge: "85% Filter Rate" },
    { title: "Busca ativa para perfis acima da média", desc: "Os melhores candidatos nem sempre estão aplicando em vagas.", icon: Target, badge: "Passive Talent Focus" },
    { title: "Processo simples e alinhado ao hire", desc: "Sem taxa fixa. Sem retainer. Só paga quando contrata.", icon: Zap, badge: "Success-Based ROI" }
  ] : [
    { title: "Local reach", desc: "Get access to Brazilian talent you won’t reach through job boards.", icon: Globe, badge: "LATAM Expertise" },
    { title: "Less noise", desc: "Skip hundreds of inbound applications and focus on the shortlist.", icon: Filter, badge: "Shortlist Focused" },
    { title: "Lower risk", desc: "Hire fees are billed as monthly subscriptions that cancel if the employee leaves. Zero upfront \"shocks\" and no legal guarantee traps.", icon: TrendingDown, badge: "HIRE SUBSCRIPTION" }
  ];
  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tight mb-24">{isPT ? "O que você recebe" : "Built for high-signal hiring"}</h2>
        <div className="grid lg:grid-cols-3 gap-10">
          {benefits.map((benefit, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="p-12 rounded-[48px] border border-slate-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] h-full">
              <div className="w-16 h-16 rounded-[24px] bg-slate-900 flex items-center justify-center text-white mb-10"><benefit.icon className="w-8 h-8" /></div>
              <div className="inline-block px-3 py-1 rounded-full bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">{benefit.badge}</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">{benefit.title}</h3>
              <p className="text-slate-500 font-medium text-[17px]">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyOrRolesSection = ({ lang }: { lang: 'pt' | 'en' }) => {
  const isPT = lang === 'pt';
  const whyPT = [
    { title: "Rede seletiva", desc: "Trabalhamos com recrutadores selecionados e incentivos alinhados à qualidade.", icon: Shield },
    { title: "Menos desperdício de tempo", desc: "Você não precisa filtrar volume nem conduzir triagens iniciais.", icon: Clock },
    { title: "Transparência", desc: "Modelo simples, direto e sem custo antecipado.", icon: Eye }
  ];
  const rolesEN = [
    { name: "Software Engineering", icon: Code, desc: "From Backend to DevOps" },
    { name: "Product & Design", icon: Palette, desc: "UI/UX & Product Strategy" },
    { name: "Data & AI", icon: Database, desc: "ML Ops & Data Science" },
    { name: "Sales (GTM)", icon: BarChart3, desc: "Account Execs & SDRs" },
    { name: "Marketing", icon: Megaphone, desc: "Growth & Performance" },
    { name: "Customer Success", icon: HeartHandshake, desc: "Retention & Support" }
  ];
  return (
    <section className="relative py-48 px-6 bg-slate-950 text-white overflow-hidden" id="roles-section">
      <div className="max-w-7xl mx-auto relative z-10">
        {isPT ? (
          <>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Por que <span className="text-purple-500 italic">Talently</span></h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {whyPT.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[32px]">
                  <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-400 mb-8"><item.icon className="w-7 h-7" /></div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Roles we support</h2>
              <p className="text-xl text-slate-400 font-medium mb-12">Talently is built for high-impact roles where signal matters.</p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {rolesEN.map((role, idx) => (
                <div key={idx} className="p-6 bg-white/5 border border-white/5 rounded-3xl flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-900 flex items-center justify-center text-purple-400"><role.icon className="w-5 h-5" /></div>
                  <div><div className="font-bold text-lg mb-1">{role.name}</div><div className="text-[12px] text-slate-500 font-medium">{role.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const PricingSection = ({ lang }: { lang: 'pt' | 'en' }) => {
  const isPT = lang === 'pt';
  
  if (!isPT) {
    return (
      <section className="relative py-32 px-6 bg-white overflow-hidden" id="pricing-section">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">Pricing Plans</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Choose the model that best fits your hiring needs.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 1. On-Demand */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">On-Demand</h3>
                <p className="text-slate-500 text-sm font-medium">Best for occasional or urgent hires.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-slate-600 font-medium"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Single role</li>
                <li className="flex gap-3 text-sm text-slate-600 font-medium"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Fully sourced + screened candidates</li>
                <li className="flex gap-3 text-sm text-slate-600 font-medium"><Check className="w-4 h-4 text-purple-600 shrink-0" /> 20% success fee (based on first-year salary)</li>
                <li className="flex gap-3 text-sm text-slate-500 text-xs pl-7 italic">Paid in 3 monthly installments starting on the hire’s start date</li>
                <li className="flex gap-3 text-sm text-slate-600 font-medium"><Check className="w-4 h-4 text-purple-600 shrink-0" /> 90-day replacement guarantee</li>
                <li className="flex gap-3 text-sm text-slate-500 text-xs pl-7 italic">If the hire leaves, we replace them at no cost.</li>
              </ul>
              <div className="pt-6 border-t border-slate-50">
                <p className="text-slate-900 font-bold text-sm mb-6">No upfront fees. No commitment.</p>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-get-started w-full py-4 rounded-xl text-sm inline-block text-center">Get Started</a>
              </div>
            </motion.div>

            {/* 2. Talent Credits */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 rounded-[40px] p-8 shadow-xl flex flex-col text-white relative overflow-hidden"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">Talent Credits</h3>
                <p className="text-slate-400 text-sm font-medium">Best for teams hiring 3+ people</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$7,500</span>
                  <span className="text-slate-400 text-sm">/credit</span>
                </div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Minimum 3 credits • 6-month payment plan available</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-slate-300 font-medium"><Check className="w-4 h-4 text-purple-400 shrink-0" /> Credit usage:</li>
                <li className="pl-7 text-xs text-slate-400">Junior / Mid = 0.5 credits</li>
                <li className="pl-7 text-xs text-slate-400">Senior = 1 credit</li>
                <li className="pl-7 text-xs text-slate-400">Executive = 2 credits</li>
                <li className="flex gap-3 text-sm text-slate-300 font-medium"><Check className="w-4 h-4 text-purple-400 shrink-0" /> 180-day credit-back guarantee</li>
                <li className="pl-7 text-xs text-slate-400 italic">If a hire leaves within 180 days, you get your credit back</li>
                <li className="flex gap-3 text-sm text-slate-300 font-medium"><Check className="w-4 h-4 text-purple-400 shrink-0" /> Credits never expire.</li>
              </ul>
              <div className="pt-6 border-t border-white/10">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors text-sm inline-block text-center">Buy Credits</a>
              </div>
            </motion.div>

            {/* 3. Compare Your Cost */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-purple-50 rounded-[40px] border border-purple-100 p-8 flex flex-col justify-center items-center text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Compare Your Cost</h3>
              <p className="text-slate-600 font-medium mb-8">Planning multiple hires?<br/>Use our calculator to see your projected savings.</p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-learn-more w-full py-4 rounded-xl text-sm bg-slate-900 text-white inline-block text-center">Calculate My Savings</a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden" id="pricing-section">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">Planos para o seu negócio</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">Escolha o modelo que melhor se adapta ao seu momento de contratação.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Plano Sob Demanda */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[48px] border border-slate-100 p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col"
          >
            <div className="mb-8">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Plano Sob Demanda</h3>
              <p className="text-slate-500 font-medium">Para contratações pontuais</p>
            </div>
            
            <ul className="space-y-5 mb-10 flex-grow">
              {[
                { title: "Publicação na Rede Talently", desc: "Sua vaga é publicada diretamente para nossa rede de recrutadores especializados." },
                { title: "Candidatos Pré-selecionados", desc: "Receba apenas talentos que já passaram por uma triagem inicial." },
                { title: "Validação de Senioridade", desc: "Proteção contra currículos \"maquiados\". Cada candidato passa por uma análise de senioridade real." },
                { title: "Taxa de Sucesso", desc: "1,5x o primeiro salário mensal do candidato contratado." },
                { title: "Pagamento Facilitado", desc: "Parcelado em até 3x mensais, começando apenas no primeiro dia de trabalho." },
                { title: "Garantia", desc: "90 dias de reposição gratuita em caso de desligamento." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{item.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="pt-8 border-t border-slate-50">
              <div className="mb-6">
                <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Vantagem</span>
                <p className="text-slate-700 font-medium text-sm">Sem custos fixos ou mensais. Você só paga se contratar.</p>
              </div>
              <a href={TALENTLY_APP_LOGIN_PT} target="_blank" rel="noopener noreferrer" className="btn-get-started w-full py-5 rounded-2xl inline-block text-center">Começar agora</a>
            </div>
          </motion.div>

          {/* Plano Scale */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 rounded-[48px] p-10 shadow-2xl flex flex-col text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <div className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Recomendado</div>
            </div>
            
            <div className="mb-8">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Plano Scale</h3>
              <p className="text-slate-400 font-medium">Para empresas em crescimento</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">R$ 599</span>
                <span className="text-slate-400 text-sm">/mês</span>
              </div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Assinatura de 12 meses</p>
            </div>
            
            <ul className="space-y-5 mb-10 flex-grow">
              {[
                { title: "Candidatos Qualificados", desc: "Acesso a profissionais identificados e pré-selecionados prontos para entrevista." },
                { title: "Taxas de Sucesso Fixas", desc: "Pleno: R$ 5k | Sênior: R$ 10k | Executivo: R$ 20k." },
                { title: "Modelo de Risco Compartilhado", desc: "Taxa de contratação parcelada em até 12x mensais." },
                { title: "Garantia de Retenção Ativa", desc: "Se o profissional sair, as parcelas futuras são canceladas imediatamente." },
                { title: "Previsibilidade", desc: "Custos fixos que facilitam seu planejamento financeiro." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white text-sm">{item.title}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="pt-8 border-t border-white/10">
              <div className="mb-6">
                <span className="text-purple-400 font-bold text-sm uppercase tracking-wider">Foco</span>
                <p className="text-slate-300 font-medium text-sm">Pague pelo tempo que o talento gerou valor real.</p>
              </div>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="w-full py-5 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors inline-block text-center">Falar com consultor</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ lang }: { lang: 'pt' | 'en' }) => {
  const isPT = lang === 'pt';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = isPT ? [
    {
      question: "Como a Talently é diferente das agências de recrutamento?",
      answer: "A Talently é um marketplace que conecta sua empresa a vários recrutadores em um só lugar, ajudando você a encontrar e contratar a pessoa certa. Isso amplia muito o alcance da sua busca, mantendo o nível de qualidade que você precisa. Você tem acesso a uma rede de recrutadores sem precisar contratá-los ou gerenciá-los diretamente."
    },
    {
      question: "Como funciona o preço?",
      answer: "O modelo é 100% baseado em sucesso. Não há taxa inicial nem mensalidade. Você só paga quando encontra a pessoa certa e ela realmente entra para o seu time. Se você não contratar, não paga nada."
    },
    {
      question: "E se a contratação não der certo?",
      answer: "Todas as contratações têm garantia de 90 dias. Se a pessoa sair nos primeiros três meses, encontramos um substituto para você ou devolvemos o seu dinheiro."
    }
  ] : [
    {
      question: "How is Talently different than agencies?",
      answer: "Talently's marketplace platform allows you to work with multiple Brazilian recruiters all in one place, expanding the surface area of your search while meeting your quality bar. You get the power of a recruitment network without the overhead of managing them directly."
    },
    {
      question: "What is the pricing?",
      answer: "It’s strictly success-only. No upfront fees and no monthly retainers. You only pay when you find the right person and they actually join your team. We only win if you get the right fit."
    },
    {
      question: "What if the hire doesn’t work out?",
      answer: "Every hire is backed by a 90-day guarantee. If they leave within the first three months, we’ll find you a replacement or your money back."
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-slate-50/50 overflow-hidden" id="faq-section">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <MessageSquare className="w-3 h-3" />
            <span>Support</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            {isPT ? "Perguntas Frequentes" : "Frequently asked questions"}
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto">
            {isPT 
              ? "Tudo o que você precisa saber sobre como contratar os melhores talentos do Brasil." 
              : "Everything you need to know about hiring the best talent from Brazil."}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group rounded-3xl border transition-all duration-500 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-purple-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]' 
                    : 'bg-white/40 border-slate-100 hover:border-slate-200'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left"
                >
                  <span className={`text-xl font-bold transition-colors duration-300 ${
                    isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isOpen ? 'bg-purple-600 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8">
                        <div className="w-full h-px bg-slate-50 mb-8" />
                        <p className="text-lg text-slate-500 leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-10 rounded-[40px] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">{isPT ? "Ainda tem dúvidas?" : "Still have questions?"}</h3>
            <p className="text-slate-400 font-medium">{isPT ? "Nossa equipe está pronta para ajudar você." : "Our team is ready to help you."}</p>
          </div>
          <button className="btn-get-started px-10 py-4 rounded-2xl whitespace-nowrap">
            {isPT ? "Falar com especialista" : "Talk to a specialist"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const AboutUsSection = ({ lang }: { lang: 'pt' | 'en' }) => {
  const isPT = lang === 'pt';
  return (
    <section className="relative py-32 px-6 bg-[#fafafa] overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-10">{isPT ? "Sobre a Talently" : "About Talently"}</h2>
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-slate-600 font-medium">{isPT ? "Talently é um hiring marketplace focado em qualidade." : "Talently is a quality-focused hiring marketplace."}</p>
            <p className="text-lg md:text-xl text-slate-500 font-normal">{isPT ? "Recrutadores selecionados fazem busca ativa e triagem, para que sua empresa fale apenas com candidatos realmente alinhados." : "Vetted recruiters perform active sourcing and screening, ensuring your company only speaks with truly aligned candidates."}</p>
          </div>
        </div>
        <div className="relative h-[600px] flex items-center justify-center order-1 lg:order-2">
          <div className="w-full h-full relative">
            <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-[50px] overflow-hidden shadow-2xl border-[10px] border-white"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" /></div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = ({ lang }: { lang: 'pt' | 'en' }) => {
  const isPT = lang === 'pt';
  const testimonials = [
    { name: "Suzanna", role: "Co-founder, Zold Brasil", quote: isPT ? "“A maior diferença da Talently foi a qualidade. Recebemos candidatos que realmente faziam sentido para o time.”" : "“The biggest difference with Talently was the quality. We received candidates that actually made sense.”", color: "border-purple-200" },
    { name: "Peter Godoi", role: "Co-founder, Let’s Vou", quote: isPT ? "“A Talently nos ajudou a contratar com velocidade e consistência. O processo foi simples e eficiente.”" : "“Talently helped us hire with speed and consistency. The process was simple and efficient.”", color: "border-emerald-200" },
    { name: "Danilo Mendes", role: "Partner, MartelloEF", quote: isPT ? "“A contratação veio muito alinhada. Hoje consigo executar com consistência com alguém que realmente encaixou.”" : "“The hire was perfectly aligned. Today I can execute consistently with someone who truly fits.”", color: "border-blue-200" }
  ];
  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">{isPT ? "O que nossos clientes dizem" : "What our clients say"}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div key={idx} whileHover={{ y: -12 }} className={`relative bg-white border ${t.color} p-12 rounded-[48px] shadow-sm group transition-all`}>
              <div className="absolute -top-6 left-12 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-slate-50 text-purple-600"><Quote className="w-6 h-6" /></div>
              <p className="text-2xl font-medium text-slate-800 mb-12 italic">{t.quote}</p>
              <div className="pt-8 border-t border-slate-50">
                <div className="font-bold text-slate-900 text-lg">{t.name}</div>
                <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTASection = ({ lang }: { lang: 'pt' | 'en' }) => {
  const isPT = lang === 'pt';
  return (
    <section className="relative py-32 px-6 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[160px]" />
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-12 border border-white/10 backdrop-blur-sm">
          <Rocket className="w-4 h-4 text-purple-400" /> Start Hiring
        </motion.div>
        
        {isPT ? (
          <>
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-none">Smarter hiring <br/><span className="text-purple-400">starts here.</span></h2>
            <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">Agende uma conversa e veja como a Talently ajuda sua empresa a contratar com mais qualidade.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-get-started px-16 py-6 text-lg rounded-2xl flex items-center justify-center gap-3 inline-flex">Agendar demo <Calendar className="w-5 h-5" /></a>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-none">Ready to hire <br/><span className="text-purple-400">in Brazil?</span></h2>
            <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">Book a demo to see how Talently works — and how fast you can start receiving recruiter-sourced candidates.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-get-started px-12 py-6 text-lg rounded-2xl inline-block text-center">Book a demo</a>
              <a href={TALENTLY_APP_LOGIN_EN} target="_blank" rel="noopener noreferrer" className="btn-learn-more px-12 py-6 text-lg rounded-2xl bg-white text-slate-900 hover:bg-slate-100 inline-block text-center">Post a role</a>
            </div>
            <p className="mt-10 text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Success-fee only • No upfront fees • Built for global teams</p>
          </>
        )}
      </div>
    </section>
  );
};

// --- Recruiter View Component ---

const RecruiterView = ({ lang }: { lang: 'pt' | 'en' }) => {
  const isPT = lang === 'pt';
  const steps = isPT ? [
    { title: "Crie sua conta de recrutador", desc: "Tenha acesso a vagas abertas contratando do Brasil.", icon: UserPlus },
    { title: "Escolha vagas que combinam com sua rede", desc: "Trabalhe apenas nas vagas que você quiser.", icon: Briefcase },
    { title: "Envie candidatos", desc: "Envie candidatos fortes através da Talently.", icon: UserCheck },
    { title: "Receba o pagamento", desc: "Ganhe o bounty quando seu candidato for contratado.", icon: Wallet }
  ] : [
    { title: "Create your recruiter account", desc: "Get access to open roles hiring from Brazil.", icon: UserPlus },
    { title: "Choose roles that match your network", desc: "Work only on roles you want.", icon: Briefcase },
    { title: "Submit candidates", desc: "Send strong candidates through Talently.", icon: UserCheck },
    { title: "Get paid", desc: "Earn the bounty when your candidate is hired.", icon: Wallet }
  ];

  const qualityPoints = isPT ? [
    { title: "Candidatos relevantes", desc: "Devem ser estritamente alinhados à vaga.", icon: Target },
    { title: "Triagem obrigatória", desc: "Exigimos filtro prévio antes do envio.", icon: Filter },
    { title: "Comunicação rápida", desc: "Interação ágil com as empresas.", icon: MessageSquare }
  ] : [
    { title: "Relevant candidates", desc: "Candidates should be strictly relevant to the role.", icon: Target },
    { title: "Screening required", desc: "Screening required before submission.", icon: Filter },
    { title: "Fast communication", desc: "Responsive interaction with companies.", icon: MessageSquare }
  ];

  return (
    <div className="flex-grow">
      <section className="relative pt-32 pb-24 px-6 overflow-visible">
        <NetworkBackground />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-[0.25em] mb-12 border border-emerald-100 shadow-sm">
            <Coins className="w-3.5 h-3.5" /> For Talent Sourcers
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="headline-main mb-12 max-w-4xl mx-auto">
            {isPT ? "Junte-se à Talently como recrutador" : "Join Talently as a recruiter"}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-16 leading-relaxed">
            {isPT 
              ? "Receba por alocar talentos brasileiros em empresas globais. Ganhe um bounty quando seu candidato for contratado."
              : "Get paid for placing Brazilian talent with global companies. Earn a bounty when your candidate gets hired."}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-get-started px-14 py-6 text-lg rounded-2xl inline-block text-center">{isPT ? "Explorar vagas" : "Browse roles"}</a>
          </motion.div>
          <p className="mt-8 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            {isPT ? "Pago por contratação • Sem exclusividade • Trabalhe onde quiser" : "Paid per hire • No exclusivity • Work on roles you choose"}
          </p>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -top-10 -right-20 hidden xl:flex bg-white p-6 rounded-[32px] shadow-2xl border border-slate-50 z-20">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><Wallet className="w-6 h-6"/></div>
               <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900">$2,500+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Typical Bounty</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-32 px-6 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
              {isPT ? "Como a Talently funciona para recrutadores" : "How Talently works for recruiters"}
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-10">
            {steps.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="relative bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-3xl bg-purple-50 flex items-center justify-center text-purple-600 mb-8"><step.icon className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-500 font-medium">{step.desc}</p>
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">{idx + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Standards</div>
            <h2 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tight mb-10">{isPT ? "Qualidade em primeiro lugar" : "Quality first"}</h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-12">{isPT ? "A Talently é feita para recrutadores que enviam candidatos fortes — não volume." : "Talently is built for recruiters who send strong candidates — not volume."}</p>
          </div>
          <div className="lg:w-1/2 grid gap-6">
            {qualityPoints.map((point, idx) => (
              <div key={idx} className="flex gap-6 p-8 rounded-[32px] border border-slate-100 bg-[#fafafa]">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-purple-600 shrink-0 shadow-sm"><point.icon className="w-5 h-5"/></div>
                <div><h4 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h4><p className="text-slate-500 font-medium">{point.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 px-6 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-12">{isPT ? "Pronto para começar?" : "Ready to start?"}</h2>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-get-started px-16 py-8 text-xl rounded-3xl bg-white text-slate-900 mx-auto flex items-center gap-4 inline-flex w-fit">{isPT ? "Criar conta de recrutador" : "Create recruiter account"} <ArrowRight className="w-6 h-6" /></a>
        </div>
      </section>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>(process.env.DEFAULT_LANG as any || 'en');
  const [view, setView] = useState<'home' | 'recruiter'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const activeContent = lang === 'pt' ? {
    hero: {
      headline: <>Onde empresas contratam seus <span className="text-purple-600 italic font-bold">melhores talentos.</span></>,
      subheadline: "Otimize seu processo seletivo com a Talently. Somos um marketplace de recrutamento que une tecnologia e especialistas para realizar buscas ativas e triagens precisas. Com a gente, você pula a fase de currículos genéricos e foca apenas nos candidatos ideais, garantindo agilidade e máxima qualidade na contratação.",
      tags: [{ icon: Zap, text: "Qualidade acima de volume" }, { icon: Target, text: "Busca ativa + triagem" }, { icon: ShieldCheck, text: "Só paga se contratar" }],
      primaryCTA: "Publicar vaga",
      secondaryCTA: "Agendar demo"
    }
  } : {
    hero: {
      headline: <>Build your world-class team in <span className="text-purple-600 italic font-bold underline decoration-purple-200 underline-offset-8">Brazil</span> for 50% less.</>,
      subheadline: "Top talent. Your time zone. Zero risk. Talently is a hiring marketplace where recruiters vet and deliver candidates in days.",
      tags: [{ icon: Zap, text: "Remote-ready talent" }, { icon: Target, text: "US/Europe Overlap" }, { icon: ShieldCheck, text: "English vetted" }],
      primaryCTA: "Post a role",
      secondaryCTA: "Book a demo"
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const HomeViewContent = () => (
    <>
      <main className="pt-40 pb-32 flex-grow relative overflow-visible">
        <NetworkBackground />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-14 inline-flex items-center gap-3 bg-white/50 backdrop-blur-md px-5 py-2 rounded-full border border-slate-100 shadow-sm">
             <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
             <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.25em]">Hiring Reinvented</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="headline-main mb-14 max-w-5xl mx-auto">
            {activeContent.hero.headline}
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-wrap justify-center gap-5 mb-14 max-w-4xl mx-auto">
            {activeContent.hero.tags.map((tag, i) => (
              <TaglineFeature key={i} icon={tag.icon} text={tag.text} />
            ))}
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-[21px] text-slate-400 max-w-2xl mx-auto mb-16 font-normal leading-relaxed">
            {activeContent.hero.subheadline}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row justify-center gap-8">
            <a href={lang === 'pt' ? TALENTLY_APP_LOGIN_PT : TALENTLY_APP_LOGIN_EN} target="_blank" rel="noopener noreferrer" className="btn-get-started text-lg px-14 inline-block text-center"> {activeContent.hero.primaryCTA} </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-learn-more text-lg px-14 inline-block text-center"> {activeContent.hero.secondaryCTA} </a>
          </motion.div>
        </div>
      </main>

      <HowItWorksSection lang={lang} />
      <BenefitsSection lang={lang} />
      <WhyOrRolesSection lang={lang} />
      <FAQSection lang={lang} />
      <AboutUsSection lang={lang} />
      <TestimonialsSection lang={lang} />
      <FinalCTASection lang={lang} />
    </>
  );

  return (
    <div className="min-h-screen relative flex flex-col">
      <nav className={`fixed top-0 left-0 w-full flex justify-center z-50 transition-all duration-500 ${isScrolled ? 'pt-2' : 'pt-6'}`}>
        <div className={`w-[95%] max-w-7xl flex justify-between items-center px-10 py-3 rounded-2xl transition-all ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-2xl border border-slate-100' : 'bg-transparent'}`}>
          <Logo onClick={() => { setView('home'); window.scrollTo(0, 0); }} />
          <div className="hidden md:flex items-center gap-10 text-[11px] font-semibold text-slate-500 uppercase tracking-[0.15em]">
            <button onClick={() => { setView('home'); window.scrollTo(0, 0); }} className={`${view === 'home' ? 'text-purple-600 font-bold' : 'hover:text-black transition-colors'}`}>{lang === 'pt' ? 'Início' : 'Home'}</button>
            <button 
              onClick={() => { setView('recruiter'); window.scrollTo(0, 0); }}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${view === 'recruiter' ? 'bg-purple-600 text-white shadow-lg' : 'bg-slate-50 border border-slate-200 text-slate-900 hover:bg-slate-100'}`}
            >
              <Monitor className="w-3.5 h-3.5" />
              {lang === 'pt' ? 'Para Recrutadores' : 'For Recruiters'}
            </button>
            <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} className="text-purple-600 font-bold ml-4">{lang === 'pt' ? 'EN' : 'PT'}</button>
          </div>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-talk inline-flex items-center gap-2">{lang === 'pt' ? 'Fale Conosco' : 'Let\'s Talk'} <ArrowUpRight className="w-4 h-4" /></a>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          {view === 'home' ? <HomeViewContent /> : <RecruiterView lang={lang} />}
        </motion.div>
      </AnimatePresence>

      <footer className="px-10 py-24 bg-white border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xs">
            <Logo onClick={() => { setView('home'); window.scrollTo(0, 0); }} />
            <p className="mt-8 text-slate-400 font-medium text-[13px] uppercase tracking-[0.15em] leading-relaxed">
              {lang === 'pt' ? 'O marketplace de recrutamento seletivo nº 1 do Brasil focado em alto desempenho.' : 'The #1 selective recruitment marketplace in Brazil focused on high performance.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-24">
            <div className="flex flex-col gap-8">
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-[0.3em]">{lang === 'pt' ? 'Navegação' : 'Navigation'}</span>
              <ul className="flex flex-col gap-5 text-sm font-medium text-slate-500">
                <li className="cursor-pointer hover:text-black transition-colors">{lang === 'pt' ? 'Como funciona' : 'How it works'}</li>
                <li className="cursor-pointer hover:text-black transition-colors">{lang === 'pt' ? 'Preços' : 'Pricing'}</li>
                <li className="cursor-pointer hover:text-black transition-colors">{lang === 'pt' ? 'Vagas' : 'Roles'}</li>
                <li><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">{lang === 'pt' ? 'Contato' : 'Contact'}</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-[0.3em]">{lang === 'pt' ? 'Recrutadores' : 'Recruiters'}</span>
              <ul className="flex flex-col gap-5 text-sm font-medium text-slate-500">
                <li><a href={'http://app.trytalently.com'} target="_blank" rel="noopener noreferrer" className="text-purple-600 font-bold hover:text-purple-800 transition-colors">
                  {lang === 'pt' ? 'Você é um recrutador? Junte-se à Talently' : 'Are you a recruiter? Join Talently'}
                </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-slate-50 text-[10px] font-medium text-slate-300 uppercase tracking-[0.4em] flex justify-between items-center">
          <p>© 2026 Talently Network Inc.</p>
        </div>
      </footer>
    </div>
  );
}
