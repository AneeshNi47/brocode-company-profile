import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Globe2, CheckCircle2, BadgeCheck, Phone, Mail, Globe, Building2, Factory, Wrench, Truck, ShoppingCart, ChefHat, Wheat, FlaskConical, Pill, HeartPulse, Cpu, Radio, Clapperboard, Banknote, Building, Plane, GraduationCap, Shield, HandHeart, Cloud, Smartphone, Layout, Settings, Rocket, Sparkles, Zap, TrendingUp, Users, Award, Target, Briefcase, MapPin, ArrowRight, Calculator, UserCircle2, ShoppingBag, Package, Cog, UserCheck, Home, FolderKanban, CreditCard, Headphones, ClipboardCheck, Store, DollarSign, Key, CarFront, PackageCheck, Receipt, BookOpen, BarChart3, Code2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import ContactFormModal from './ContactFormModal';
import { services, projects, erpModules, industries, regions } from '@/data_source/data_creator';


type BrocodeSolutionsProfileProps = {
  className?: string;
};

// Animated Grid Background Component
const AnimatedGrid = () => {
  return <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/30" />
          </pattern>
          <linearGradient id="gridFade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#gridFade)" />
      </svg>
      <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" animate={{
      backgroundPosition: ['0% 0%', '100% 100%']
    }} transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: 'reverse'
    }} />
    </div>;
};

// Section Component with futuristic styling
const Section = ({
  title,
  subtitle,
  icon: Icon,
  children,
  className
}: {
  title: string;
  subtitle?: string;
  icon?: React.ComponentType<{
    className?: string;
  }>;
  children: React.ReactNode;
  className?: string;
}) => <section className={cn('w-full max-w-7xl px-4 md:px-6 mx-auto relative', className)}>
    <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    amount: 0.3
  }} transition={{
    duration: 0.6
  }} className="flex items-center gap-4 mb-8">
      {Icon ? <motion.div whileHover={{
      scale: 1.1,
      rotate: 5
    }} className="relative inline-flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm">
          <Icon className="size-6 text-cyan-400" />
          <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 blur-md" />
        </motion.div> : null}
      <div className="flex-1">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h2>
        {subtitle ? <p className="text-sm md:text-base text-muted-foreground/80 mt-1">{subtitle}</p> : null}
      </div>
    </motion.div>
    {children}
  </section>;
const useAutoScrollEmbla = (emblaApi: ReturnType<typeof useEmblaCarousel>[1], direction: 'ltr' | 'rtl', speedMs = 3000) => {
  React.useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (direction === 'rtl') {
        if (emblaApi.canScrollPrev()) emblaApi.scrollPrev();else emblaApi.scrollTo(emblaApi.slideNodes().length - 1);
      } else {
        if (emblaApi.canScrollNext()) emblaApi.scrollNext();else emblaApi.scrollTo(0);
      }
    }, speedMs);
    return () => clearInterval(id);
  }, [emblaApi, direction, speedMs]);
};
const StatCard = ({
  label,
  value
}: {
  label: string;
  value: string;
}) => <motion.div whileHover={{
  scale: 1.05,
  y: -5
}} className="group relative rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-cyan-500/20 backdrop-blur-xl p-6 md:p-7 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
    <div className="absolute -top-8 -right-8 size-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
    <div className="relative z-10">
      <p className="text-xs md:text-sm text-cyan-400/70 font-medium tracking-wider uppercase">{label}</p>
      <p className="text-xl md:text-3xl font-bold mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        {value}
      </p>
    </div>
  </motion.div>;
const ProjectLogo = ({
  name
}: {
  name: string;
}) => {
  const initials = name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  return <div aria-label={`${name} logo placeholder`} className="size-20 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center font-bold text-cyan-400 text-xl">
      {initials}
    </div>;
};

// @component: BrocodeSolutionsProfile
export const BrocodeSolutionsProfile = ({
  className
}: BrocodeSolutionsProfileProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [projectsRef, projectsEmbla] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true
  });
  const [servicesRef, servicesEmbla] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true
  });
  const {
    scrollYProgress
  } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  useAutoScrollEmbla(projectsEmbla, 'ltr', 2600);
  useAutoScrollEmbla(servicesEmbla, 'rtl', 2400);
  return <div className={cn('w-full min-h-dvh bg-slate-950 text-foreground relative overflow-hidden', className)}>
      <AnimatedGrid />
      
      {/* Hero Banner with Parallax */}
      <header className="relative overflow-hidden min-h-[85vh] flex items-center">
        <motion.div style={{
        opacity
      }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-1/4 size-[50rem] rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute bottom-1/4 -left-1/4 size-[45rem] rounded-full bg-purple-500/20 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[35rem] rounded-full bg-pink-500/10 blur-[100px]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="space-y-6">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 px-4 py-2 bg-slate-900/50 backdrop-blur-xl">
              <Sparkles className="size-4 text-cyan-400" />
              <span className="text-xs md:text-sm font-medium tracking-wider text-cyan-400 uppercase">
                Since 2020
              </span>
              <div className="size-1 rounded-full bg-cyan-400 animate-pulse" />
              <BadgeCheck className="size-4 text-purple-400" />
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }} className="text-4xl md:text-7xl font-bold leading-tight max-w-5xl">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Empowering Businesses
              </span>
              <br />
              <span className="text-white">
                to Unlock Their Full Potential
              </span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }} className="text-base md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              Brocode Solutions specializes in delivering <span className="text-cyan-400 font-semibold">comprehensive ERP solutions</span> and <span className="text-purple-400 font-semibold">innovative product engineering services</span>. Our primary focus is to empower our clients to efficiently and effectively realize their business objectives, driving growth and optimizing operations.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7,
            duration: 0.8
          }} className="flex flex-wrap gap-4 pt-4">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} onClick={() => setIsModalOpen(true)} className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">
                <span className="flex items-center gap-2">
                  <Zap className="size-5" />
                  <span>Explore Solutions</span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute top-1/4 right-[10%] size-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-xl hidden lg:block" />
        <motion.div animate={{
        y: [0, 20, 0],
        rotate: [0, -5, 0]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute bottom-1/3 left-[8%] size-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-xl hidden lg:block" />
      </header>

      {/* About Us Enhanced */}
      <Section title="About Us" subtitle="Driving innovation at the intersection of technology and business" icon={Building2} className="mt-16 md:mt-24">
        <div className="space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard label="Founded" value="2020" />
            <StatCard label="Projects" value="100+" />
            <StatCard label="Team Members" value="40+" />
            <StatCard label="Partners" value="Frappe & ERPNext" />
          </div>

          {/* Mission & Values */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                  <Target className="size-6 text-cyan-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To empower organizations worldwide with transformative technology solutions that drive operational excellence, foster innovation, and unlock sustainable growth. We believe in creating lasting partnerships built on trust, transparency, and measurable results.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                  <Award className="size-6 text-purple-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Why Choose Us</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                As certified Frappe and ERPNext partners, we combine deep technical expertise with industry knowledge to deliver solutions that matter. Our agile approach, dedicated support, and commitment to excellence ensure your success at every stage of your digital transformation journey.
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[{
            icon: Users,
            label: 'Client-Centric',
            desc: 'Your success is our priority'
          }, {
            icon: Rocket,
            label: 'Innovation',
            desc: 'Cutting-edge solutions'
          }, {
            icon: Award,
            label: 'Excellence',
            desc: 'Quality in every delivery'
          }, {
            icon: Briefcase,
            label: 'Integrity',
            desc: 'Transparent partnerships'
          }].map(value => {
            const Icon = value.icon;
            return <motion.div key={value.label} whileHover={{
              y: -5,
              scale: 1.03
            }} className="rounded-xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm p-5 text-center">
                  <div className="inline-flex items-center justify-center size-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-3">
                    <Icon className="size-7 text-cyan-400" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{value.label}</h4>
                  <p className="text-xs text-slate-400">{value.desc}</p>
                </motion.div>;
          })}
          </motion.div>
        </div>
      </Section>

      {/* Global Reach - Compact Design */}
      <Section title="Global Customer Reach" subtitle="Serving clients across 17 countries and 5 continents" icon={Globe} className="mt-16 md:mt-24">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl p-6 md:p-8 overflow-hidden relative">
          <div className="absolute -top-20 -right-20 size-64 bg-purple-500/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            {/* Stats Row */}
            <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
              <div className="text-center">
                <div className="inline-flex items-center justify-center size-12 md:size-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-2">
                  <Globe2 className="size-6 md:size-7 text-cyan-400" />
                </div>
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  17
                </p>
                <p className="text-xs text-slate-500 mt-1">Countries</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center size-12 md:size-14 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-2">
                  <MapPin className="size-6 md:size-7 text-purple-400" />
                </div>
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  5
                </p>
                <p className="text-xs text-slate-500 mt-1">Continents</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center size-12 md:size-14 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/30 mb-2">
                  <Building2 className="size-6 md:size-7 text-pink-400" />
                </div>
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                  100+
                </p>
                <p className="text-xs text-slate-500 mt-1">Projects</p>
              </div>
            </div>

            {/* Regions Compact List */}
            <div className="pt-4 border-t border-cyan-500/10">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {regions.map((region, idx) => <motion.div key={region.name} initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: idx * 0.05,
                duration: 0.4
              }} whileHover={{
                scale: 1.05,
                y: -2
              }} className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm px-4 py-2 hover:bg-slate-900/50 transition-all">
                    <span className="text-lg">{region.icon}</span>
                    <span className="text-sm font-medium text-slate-300">{region.name}</span>
                    <span className={cn("size-1.5 rounded-full bg-gradient-to-r", region.color)} />
                  </motion.div>)}
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Services Section - Redesigned with First Row + Carousel */}
      <Section title="Our Services" subtitle="Comprehensive solutions powered by cutting-edge technology" icon={Settings} className="mt-16 md:mt-24">
        <div className="space-y-8">
          {/* Carousel - All Services */}
          <div className="relative">
            <div className="overflow-hidden" ref={servicesRef}>
              <div className="flex">
                {[...services, ...services].map((svc, idx) => {
                const Icon = svc.icon;
                return <div key={`${svc.title}-${idx}`} className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[33%] xl:basis-[30%] pr-6">
                      <motion.div whileHover={{
                    y: -10,
                    scale: 1.02
                  }} className="group h-full rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-xl p-8 overflow-hidden min-h-[380px] flex flex-col">
                        <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br", svc.gradient)} />
                        <div className="absolute -top-16 -right-16 size-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
                        
                        <div className="relative z-10 flex flex-col flex-1">
                          <motion.div whileHover={{
                        rotate: 360,
                        scale: 1.1
                      }} transition={{
                        duration: 0.6
                      }} className={cn("inline-flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br border-2 mb-4", `${svc.gradient} border-cyan-500/30`)}>
                            <Icon className="size-8 text-white" />
                          </motion.div>
                          
                          <div className="flex-1 space-y-3">
                            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                              {svc.title}
                            </h3>
                            <p className="text-sm md:text-base text-cyan-400 font-medium leading-relaxed">
                              {svc.description}
                            </p>
                          </div>
                          
                          <motion.div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" whileHover={{
                        x: 5
                      }}>
                            <span>Learn More</span>
                            <ArrowRight className="size-4" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>;
              })}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="mt-12 text-center">
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsModalOpen(true)} className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white text-lg font-bold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">
            <span className="flex items-center gap-3">
              <Rocket className="size-6" />
              <span>Start Your Digital Transformation</span>
              <ArrowRight className="size-6" />
            </span>
          </motion.button>
        </motion.div>
      </Section>

      {/* Key Projects Carousel */}
      <Section title="Key Projects" subtitle="Transformative partnerships across industries" icon={BadgeCheck} className="mt-16 md:mt-24">
        <div className="relative">
          <div className="overflow-hidden" ref={projectsRef}>
            <div className="flex">
              {[...projects, ...projects].map((proj, idx) => <div key={`${proj.client}-${idx}`} className="min-w-0 shrink-0 grow-0 basis-[90%] sm:basis-[65%] md:basis-[50%] lg:basis-[38%] xl:basis-[32%] pr-6">
                  <motion.div whileHover={{
                y: -8,
                scale: 1.02
              }} className="group h-full rounded-2xl border border-cyan-500/20 bg-slate-900/40 backdrop-blur-xl p-8 relative overflow-hidden min-h-[240px] flex flex-col items-center text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
                    <div className="absolute -top-16 -right-16 size-40 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-500" />
                    
                    <div className="relative z-10 flex flex-col items-center space-y-5 flex-1 justify-center">
                      <ProjectLogo name={proj.client} />
                      
                      <div className="space-y-3">
                        <h4 className="text-lg md:text-xl font-bold text-white leading-tight">{proj.title}</h4>
                        <p className="text-sm text-slate-400">{proj.client}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm pt-2">
                        <span className="size-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                        <span className="text-cyan-400">{proj.industry}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>)}
            </div>
          </div>
        </div>
      </Section>

      {/* ERPNext Modules */}
      <Section title="ERPNext Modules" subtitle="Comprehensive business solutions from core to vertical" icon={Settings} className="mt-16 md:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {erpModules.map((m, idx) => {
          const Icon = m.icon;
          return <motion.div key={m.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.02,
            duration: 0.5
          }} whileHover={{
            scale: 1.03,
            y: -5
          }} className="group rounded-2xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                  <Icon className="size-6 text-cyan-400" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-white">{m.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{m.description}</p>
              </div>
            </motion.div>;
        })}
        </div>
      </Section>

      {/* Industries */}
      <Section title="Industries We Serve" subtitle="Deep expertise across diverse sectors" icon={Factory} className="mt-16 md:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return <motion.div key={ind.name} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.02,
            duration: 0.4
          }} whileHover={{
            scale: 1.05,
            x: 5
          }} className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm p-4 hover:bg-slate-900/50 transition-all">
                <span className="inline-flex items-center justify-center size-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                  <Icon className="size-5 text-cyan-400" />
                </span>
                <span className="text-sm font-medium text-slate-200">{ind.name}</span>
              </motion.div>;
        })}
        </div>
      </Section>

      {/* Engagement Models */}
      <Section title="Engagement Models" subtitle="Flexible approaches tailored to your needs" icon={HandHeart} className="mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
          title: 'Fixed Cost',
          description: 'Ideal for well-defined requirements. Enjoy budget predictability with a fixed price and clear milestones.',
          icon: BadgeCheck
        }, {
          title: 'Time and Material',
          description: 'Adaptable to evolving scope. Pay for actual time and resources while we iterate with agility.',
          icon: Zap
        }, {
          title: 'Dedicated Teams',
          description: 'A focused team aligned to your roadmap, perfect for long-term initiatives and ongoing development.',
          icon: Rocket
        }].map((model, idx) => {
          const Icon = model.icon;
          return <motion.div key={model.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.15,
            duration: 0.6
          }} whileHover={{
            y: -10,
            scale: 1.02
          }} className="group relative rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                <div className="absolute -top-12 -right-12 size-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
                
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center justify-center size-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                    <Icon className="size-7 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{model.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{model.description}</p>
                </div>
              </motion.div>;
        })}
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-24 md:mt-32 border-t border-cyan-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Thank You for Considering Brocode Solutions!
              </h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                We're excited to partner with you to deliver outcomes that matter—faster, smarter and at scale. Let's build the future together.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-sm">
                <p className="font-semibold text-cyan-400 mb-2">Address</p>
                <p className="text-slate-400 leading-relaxed">
                  2FDBC0036, Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <motion.a whileHover={{
                scale: 1.02,
                x: 5
              }} href="tel:+971507612213" className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm px-4 py-3 text-sm hover:bg-slate-900/50 transition-all">
                  <Phone className="size-4 text-cyan-400" />
                  <span className="text-slate-300">+971 5076122213</span>
                </motion.a>

                <motion.a whileHover={{
                scale: 1.02,
                x: 5
              }} href="mailto:hello@brocodesolutions.com" className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm px-4 py-3 text-sm hover:bg-slate-900/50 transition-all">
                  <Mail className="size-4 text-cyan-400" />
                  <span className="text-slate-300">hello@brocodesolutions.com</span>
                </motion.a>

                <motion.a whileHover={{
                scale: 1.02,
                x: 5
              }} href="http://brocodesolutions.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm px-4 py-3 text-sm hover:bg-slate-900/50 transition-all">
                  <Globe className="size-4 text-cyan-400" />
                  <span className="text-slate-300">brocodesolutions.com</span>
                </motion.a>

                <div className="flex items-center gap-3 rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm px-4 py-3 text-sm">
                  <BadgeCheck className="size-4 text-purple-400" />
                  <span className="text-slate-300 font-medium">Frappe & ERPNext Partner</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-cyan-500/10 space-y-6">
            {/* CTA Button */}
            <div className="text-center">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} onClick={() => setIsModalOpen(true)} className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white text-lg font-bold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">
                <span className="flex items-center gap-3">
                  <Rocket className="size-6" />
                  <span>Get Started Today</span>
                  <ArrowRight className="size-6" />
                </span>
              </motion.button>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                <span>© {new Date().getFullYear()} Brocode Solutions. All rights reserved.</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-slate-500">Systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>;
};