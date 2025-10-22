import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Globe2, CheckCircle2, BadgeCheck, Phone, Mail, Globe, Building2, Factory, Wrench, Truck, ShoppingCart, ChefHat, Wheat, FlaskConical, Pill, HeartPulse, Cpu, Radio, Clapperboard, Banknote, Building, Plane, GraduationCap, Shield, HandHeart, Cloud, Smartphone, Layout, Settings, Rocket, Sparkles, Zap, TrendingUp, Users, Award, Target, Briefcase } from 'lucide-react';
import { cn } from '../../lib/utils';
type BrocodeSolutionsProfileProps = {
  className?: string;
};

// Data sources
const services = [{
  title: 'ERPNext Implementation',
  description: 'Seamless integration to streamline and unify your operations.',
  icon: Settings
}, {
  title: 'ERPNext Customization',
  description: 'Tailored modules and workflows aligned to your business.',
  icon: Wrench
}, {
  title: 'ERPNext Support',
  description: 'Responsive maintenance and performance optimization.',
  icon: CheckCircle2
}, {
  title: 'Mobile App Development',
  description: 'Intuitive mobile experiences that engage your users.',
  icon: Smartphone
}, {
  title: 'Website Development',
  description: 'High-performance, robust websites for your brand.',
  icon: Layout
}, {
  title: 'Digital Marketing',
  description: 'End-to-end strategies to boost visibility and growth.',
  icon: Rocket
}, {
  title: 'Cloud Solutions',
  description: 'Secure, scalable infrastructure and collaboration.',
  icon: Cloud
}];
const projects = [{
  client: 'Al Noor Foods',
  title: 'ERPNext Rollout',
  industry: 'Food & Beverage'
}, {
  client: 'SkyTrack Logistics',
  title: 'Fleet & 3PL Suite',
  industry: 'Transportation & Logistics'
}, {
  client: 'BlueSteel Manufacturing',
  title: 'MRP & QA Stack',
  industry: 'Manufacturing'
}, {
  client: 'MedicoPlus',
  title: 'Pharma Compliance',
  industry: 'Pharmaceuticals'
}, {
  client: 'AeroTech Systems',
  title: 'MRO Suite',
  industry: 'Aerospace'
}, {
  client: 'GreenAgro',
  title: 'Farm-to-Shelf',
  industry: 'Agriculture'
}, {
  client: 'UrbanBuild',
  title: 'Project Control',
  industry: 'Construction & Contracting'
}, {
  client: 'RetailHub',
  title: 'Omnichannel POS',
  industry: 'Retail & eCommerce'
}];
const erpModules: {
  title: string;
  description: string;
}[] = [{
  title: 'Accounting',
  description: 'Chart of Accounts, invoicing, GL, AP/AR, bank/cash handling, aging and detailed reporting.'
}, {
  title: 'CRM',
  description: 'Leads, opportunities, campaigns, appointments and email management across the lifecycle.'
}, {
  title: 'Sales & Purchasing',
  description: 'End-to-end flows from quotations to orders and invoices, supplier management and RFQs.'
}, {
  title: 'Inventory/Stock',
  description: 'Multi-warehouse tracking, barcodes/serials, batch management and real-time valuation.'
}, {
  title: 'Manufacturing',
  description: 'BOMs, MPS/MRP planning, job cards, routing, work-in-progress and capacity planning.'
}, {
  title: 'HR & Payroll',
  description: 'Employee master, attendance/leave, expenses, payroll runs and recruitment via ATS.'
}, {
  title: 'Asset Management',
  description: 'Lifecycle tracking, depreciation scheduling, maintenance, locations and assignments.'
}, {
  title: 'Project Management',
  description: 'Tasks, progress tracking, timesheets, cost monitoring and resource allocation.'
}, {
  title: 'Point of Sale (POS)',
  description: 'Retail-ready, inventory- and accounting-integrated billing with promotions and returns.'
}, {
  title: 'Helpdesk Services',
  description: 'Ticketing, SLAs, knowledge base and client portal integrations.'
}, {
  title: 'Quality Management',
  description: 'Incoming/in-process inspections, nonconformance and CAPA tracking.'
}, {
  title: 'Website/eCommerce',
  description: 'CMS and storefront management with products, carts and payments.'
}, {
  title: 'Loans Management',
  description: 'Applications, disbursements, schedules and employee/external loans.'
}, {
  title: 'Property Management (PropMS)',
  description: 'Property, tenants, leases, rent cycles and maintenance requests.'
}, {
  title: 'Fleet Management',
  description: 'Vehicle tracking, routes, maintenance and fuel/expense management.'
}, {
  title: 'Rental Management',
  description: 'Equipment rental tracking, contracts, billing and returns.'
}, {
  title: 'Expense Management+',
  description: 'Grouped claims with multi-level approval workflows and policies.'
}, {
  title: 'Learning Management (LMS)',
  description: 'Courses, enrollments, progress, assessments and certifications.'
}, {
  title: 'Analytics/BI',
  description: 'Dashboards and deep reporting for data-driven decision-making.'
}, {
  title: 'Custom Applications',
  description: 'Bespoke Frappe apps tailored precisely to your needs.'
}];
const industries = [{
  name: 'Manufacturing',
  icon: Factory
}, {
  name: 'Construction & Contracting',
  icon: Building2
}, {
  name: 'Energy & Utilities',
  icon: Radio
}, {
  name: 'Oil & Gas',
  icon: FlaskConical
}, {
  name: 'Mining & Metals',
  icon: FlaskConical
}, {
  name: 'Transportation & Logistics/3PL',
  icon: Truck
}, {
  name: 'Automotive & Aerospace',
  icon: Factory
}, {
  name: 'Wholesale & Distribution',
  icon: ShoppingCart
}, {
  name: 'Retail & eCommerce',
  icon: ShoppingCart
}, {
  name: 'Food & Beverage/FMCG',
  icon: ChefHat
}, {
  name: 'Agriculture',
  icon: Wheat
}, {
  name: 'Chemicals & Plastics',
  icon: FlaskConical
}, {
  name: 'Pharmaceuticals',
  icon: Pill
}, {
  name: 'Healthcare',
  icon: HeartPulse
}, {
  name: 'Technology & Software',
  icon: Cpu
}, {
  name: 'Telecommunications',
  icon: Radio
}, {
  name: 'Media & Entertainment',
  icon: Clapperboard
}, {
  name: 'Financial Services',
  icon: Banknote
}, {
  name: 'Real Estate',
  icon: Building
}, {
  name: 'Hospitality & Travel',
  icon: Plane
}, {
  name: 'Education',
  icon: GraduationCap
}, {
  name: 'Public Sector & Defense',
  icon: Shield
}, {
  name: 'Non-Profit Organizations (NGOs)',
  icon: HandHeart
}];
const countries = [{
  name: 'United Arab Emirates',
  x: 59,
  y: 46,
  region: 'Middle East'
}, {
  name: 'India',
  x: 66,
  y: 52,
  region: 'Asia'
}, {
  name: 'Saudi Arabia',
  x: 58,
  y: 50,
  region: 'Middle East'
}, {
  name: 'Australia',
  x: 88,
  y: 72,
  region: 'Oceania'
}, {
  name: 'Egypt',
  x: 54,
  y: 46,
  region: 'Africa'
}, {
  name: 'Oman',
  x: 61,
  y: 50,
  region: 'Middle East'
}, {
  name: 'South Africa',
  x: 54,
  y: 78,
  region: 'Africa'
}, {
  name: 'Djibouti',
  x: 55.5,
  y: 52,
  region: 'Africa'
}, {
  name: 'Dominican Republic',
  x: 27,
  y: 50,
  region: 'North America'
}, {
  name: 'Switzerland',
  x: 50,
  y: 37,
  region: 'Europe'
}, {
  name: 'France',
  x: 49,
  y: 38,
  region: 'Europe'
}, {
  name: 'USA',
  x: 17,
  y: 44,
  region: 'North America'
}, {
  name: 'Canada',
  x: 17,
  y: 34,
  region: 'North America'
}, {
  name: 'Sweden',
  x: 51.5,
  y: 30,
  region: 'Europe'
}, {
  name: 'Germany',
  x: 51,
  y: 37,
  region: 'Europe'
}, {
  name: 'United Kingdom',
  x: 47.5,
  y: 35,
  region: 'Europe'
}, {
  name: 'Qatar',
  x: 59.5,
  y: 49,
  region: 'Middle East'
}];

// Animated Grid Background Component
const AnimatedGrid = () => {
  return <div className="absolute inset-0 overflow-hidden pointer-events-none" data-magicpath-id="0" data-magicpath-path="BrocodeSolutionsProfile.tsx">
      <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" data-magicpath-id="1" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <defs data-magicpath-id="2" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse" data-magicpath-id="3" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/30" data-magicpath-id="4" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
          </pattern>
          <linearGradient id="gridFade" x1="0%" y1="0%" x2="0%" y2="100%" data-magicpath-id="5" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" data-magicpath-id="6" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
        <rect width="100%" height="100%" fill="url(#gridFade)" data-magicpath-id="7" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
      </svg>
      <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" animate={{
      backgroundPosition: ['0% 0%', '100% 100%']
    }} transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: 'reverse'
    }} data-magicpath-id="8" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
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
}) => <section className={cn('w-full max-w-7xl px-4 md:px-6 mx-auto relative', className)} data-magicpath-id="9" data-magicpath-path="BrocodeSolutionsProfile.tsx">
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
  }} className="flex items-center gap-4 mb-8" data-magicpath-id="10" data-magicpath-path="BrocodeSolutionsProfile.tsx">
      {Icon ? <motion.div whileHover={{
      scale: 1.1,
      rotate: 5
    }} className="relative inline-flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm" data-magicpath-id="11" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <Icon className="size-6 text-cyan-400" data-magicpath-id="12" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
          <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 blur-md" data-magicpath-id="13" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
        </motion.div> : null}
      <div className="flex-1" data-magicpath-id="14" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" data-magicpath-id="15" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          {title}
        </h2>
        {subtitle ? <p className="text-sm md:text-base text-muted-foreground/80 mt-1" data-magicpath-id="16" data-magicpath-path="BrocodeSolutionsProfile.tsx">{subtitle}</p> : null}
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
}} className="group relative rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-cyan-500/20 backdrop-blur-xl p-6 md:p-7 overflow-hidden" data-magicpath-id="17" data-magicpath-path="BrocodeSolutionsProfile.tsx">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" data-magicpath-id="18" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
    <div className="absolute -top-8 -right-8 size-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" data-magicpath-id="19" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
    <div className="relative z-10" data-magicpath-id="20" data-magicpath-path="BrocodeSolutionsProfile.tsx">
      <p className="text-xs md:text-sm text-cyan-400/70 font-medium tracking-wider uppercase" data-magicpath-id="21" data-magicpath-path="BrocodeSolutionsProfile.tsx">{label}</p>
      <p className="text-xl md:text-3xl font-bold mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" data-magicpath-id="22" data-magicpath-path="BrocodeSolutionsProfile.tsx">
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
  return <div aria-label={`${name} logo placeholder`} className="size-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center font-bold text-cyan-400" data-magicpath-id="23" data-magicpath-path="BrocodeSolutionsProfile.tsx">
      {initials}
    </div>;
};

// Enhanced World Map with better visibility
const EnhancedWorldMap = () => {
  return <svg viewBox="0 0 1000 500" className="w-full h-auto" preserveAspectRatio="xMidYMid meet" data-magicpath-id="24" data-magicpath-path="BrocodeSolutionsProfile.tsx">
      <defs data-magicpath-id="25" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-magicpath-id="26" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
          <stop offset="50%" stopColor="rgba(168, 85, 247, 0.3)" />
          <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
        </linearGradient>
        <filter id="glow" data-magicpath-id="27" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" data-magicpath-id="28" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
          <feMerge data-magicpath-id="29" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <feMergeNode in="coloredBlur" data-magicpath-id="30" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
            <feMergeNode in="SourceGraphic" data-magicpath-id="31" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Background */}
      <rect x="0" y="0" width="1000" height="500" fill="rgba(15, 23, 42, 0.5)" data-magicpath-id="32" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
      
      {/* Grid lines for reference */}
      <g opacity="0.15" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="0.5" fill="none" data-magicpath-id="33" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        {[...Array(11)].map((_, i) => <line key={`h-${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} />)}
        {[...Array(21)].map((_, i) => <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" />)}
      </g>

      {/* North America */}
      <path d="M 80 150 Q 90 120 110 130 L 130 120 Q 150 110 170 115 L 190 110 Q 210 100 230 110 L 250 120 Q 270 130 265 150 L 260 180 Q 250 210 230 220 L 210 230 Q 190 240 170 235 L 150 240 Q 130 250 120 270 L 130 310 Q 140 330 160 340 L 180 350 Q 200 360 220 350 L 250 330 Q 270 310 290 320 L 300 350 Q 310 380 290 400 L 260 420 Q 240 430 220 420 L 190 410 Q 170 400 150 410 L 120 430 Q 100 440 80 430 L 60 410 Q 40 390 50 370 L 70 350 Q 80 330 70 310 L 60 280 Q 50 250 60 230 L 80 210 Q 90 190 80 170 Z" fill="url(#mapGradient)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" filter="url(#glow)" data-magicpath-id="34" data-magicpath-path="BrocodeSolutionsProfile.tsx" />

      {/* South America */}
      <path d="M 220 440 Q 240 420 260 430 L 280 450 Q 300 470 290 490 L 280 520 Q 270 550 250 570 L 230 590 Q 210 610 190 600 L 170 580 Q 150 560 160 540 L 180 520 Q 190 500 180 480 L 160 460 Q 150 440 170 430 Z" fill="url(#mapGradient)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" filter="url(#glow)" data-magicpath-id="35" data-magicpath-path="BrocodeSolutionsProfile.tsx" />

      {/* Europe */}
      <path d="M 440 140 Q 460 120 480 130 L 500 145 Q 520 160 510 180 L 490 200 Q 480 220 500 230 L 520 240 Q 540 250 530 270 L 510 280 Q 490 290 470 280 L 450 270 Q 430 260 420 240 L 410 210 Q 400 190 420 180 L 440 165 Q 450 150 440 140 Z" fill="url(#mapGradient)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" filter="url(#glow)" data-magicpath-id="36" data-magicpath-path="BrocodeSolutionsProfile.tsx" />

      {/* Africa */}
      <path d="M 480 270 Q 500 250 520 260 L 540 280 Q 560 300 550 320 L 540 350 Q 530 380 540 400 L 550 430 Q 560 460 540 480 L 520 510 Q 500 530 480 520 L 460 500 Q 440 480 450 460 L 470 430 Q 480 410 470 390 L 450 370 Q 430 350 440 330 L 460 310 Q 470 290 480 270 Z" fill="url(#mapGradient)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" filter="url(#glow)" data-magicpath-id="37" data-magicpath-path="BrocodeSolutionsProfile.tsx" />

      {/* Asia */}
      <path d="M 540 120 Q 560 100 580 110 L 600 125 Q 620 140 640 135 L 670 130 Q 700 120 720 135 L 740 150 Q 760 165 750 185 L 730 210 Q 710 230 690 225 L 670 220 Q 650 215 640 230 L 630 250 Q 620 275 600 285 L 580 295 Q 560 305 550 320 L 560 345 Q 570 365 590 375 L 610 385 Q 630 395 650 390 L 680 380 Q 700 370 720 380 L 730 410 Q 740 430 720 440 L 690 450 Q 670 460 650 450 L 620 440 Q 600 430 580 440 L 560 455 Q 540 465 520 455 L 500 440 Q 480 420 490 400 L 510 375 Q 520 355 510 335 L 490 315 Q 480 295 500 285 L 520 270 Q 530 250 520 230 L 500 210 Q 490 190 510 180 L 530 165 Q 540 145 540 125 Z" fill="url(#mapGradient)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" filter="url(#glow)" data-magicpath-id="38" data-magicpath-path="BrocodeSolutionsProfile.tsx" />

      {/* Australia */}
      <path d="M 780 460 Q 800 440 820 450 L 850 470 Q 880 490 870 510 L 850 540 Q 830 560 810 550 L 780 530 Q 760 510 770 490 Z" fill="url(#mapGradient)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" filter="url(#glow)" data-magicpath-id="39" data-magicpath-path="BrocodeSolutionsProfile.tsx" />

      {/* Connection lines between continents (subtle) */}
      <g opacity="0.1" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1" strokeDasharray="5,5" fill="none" data-magicpath-id="40" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <path d="M 265 150 Q 350 140 440 145" data-magicpath-id="41" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
        <path d="M 510 180 Q 520 220 480 270" data-magicpath-id="42" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
        <path d="M 720 380 Q 800 420 780 460" data-magicpath-id="43" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
      </g>
    </svg>;
};

// @component: BrocodeSolutionsProfile
export const BrocodeSolutionsProfile = ({
  className
}: BrocodeSolutionsProfileProps) => {
  const [servicesRef, servicesEmbla] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true
  });
  const [projectsRef, projectsEmbla] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true
  });
  const {
    scrollYProgress
  } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  useAutoScrollEmbla(servicesEmbla, 'rtl', 2200);
  useAutoScrollEmbla(projectsEmbla, 'ltr', 2600);
  return <div className={cn('w-full min-h-dvh bg-slate-950 text-foreground relative overflow-hidden', className)} data-magicpath-id="44" data-magicpath-path="BrocodeSolutionsProfile.tsx">
      <AnimatedGrid data-magicpath-id="45" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
      
      {/* Hero Banner with Parallax */}
      <header className="relative overflow-hidden min-h-[85vh] flex items-center" data-magicpath-id="46" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <motion.div style={{
        opacity
      }} className="absolute inset-0 pointer-events-none" data-magicpath-id="47" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <div className="absolute top-1/4 -right-1/4 size-[50rem] rounded-full bg-cyan-500/20 blur-[120px]" data-magicpath-id="48" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
          <div className="absolute bottom-1/4 -left-1/4 size-[45rem] rounded-full bg-purple-500/20 blur-[120px]" data-magicpath-id="49" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[35rem] rounded-full bg-pink-500/10 blur-[100px]" data-magicpath-id="50" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full" data-magicpath-id="51" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="space-y-6" data-magicpath-id="52" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 px-4 py-2 bg-slate-900/50 backdrop-blur-xl" data-magicpath-id="53" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <Sparkles className="size-4 text-cyan-400" />
              <span className="text-xs md:text-sm font-medium tracking-wider text-cyan-400 uppercase" data-magicpath-id="54" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                Since 2020
              </span>
              <div className="size-1 rounded-full bg-cyan-400 animate-pulse" data-magicpath-id="55" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
              <BadgeCheck className="size-4 text-purple-400" data-magicpath-id="56" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
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
          }} className="text-4xl md:text-7xl font-bold leading-tight max-w-5xl" data-magicpath-id="57" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" data-magicpath-id="58" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                Empowering Businesses
              </span>
              <br data-magicpath-id="59" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
              <span className="text-white" data-magicpath-id="60" data-magicpath-path="BrocodeSolutionsProfile.tsx">
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
          }} className="text-base md:text-xl text-slate-300 max-w-3xl leading-relaxed" data-magicpath-id="61" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              Brocode Solutions specializes in delivering <span className="text-cyan-400 font-semibold" data-magicpath-id="62" data-magicpath-path="BrocodeSolutionsProfile.tsx">comprehensive ERP solutions</span> and <span className="text-purple-400 font-semibold" data-magicpath-id="63" data-magicpath-path="BrocodeSolutionsProfile.tsx">innovative product engineering services</span>. Our primary focus is to empower our clients to efficiently and effectively realize their business objectives, driving growth and optimizing operations.
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
          }} className="flex flex-wrap gap-4 pt-4" data-magicpath-id="64" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all" data-magicpath-id="65" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <span className="flex items-center gap-2" data-magicpath-id="66" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <Zap className="size-5" data-magicpath-id="67" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  <span data-magicpath-id="68" data-magicpath-path="BrocodeSolutionsProfile.tsx">Explore Solutions</span>
                </span>
              </motion.button>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 rounded-xl border border-cyan-500/30 bg-slate-900/50 backdrop-blur-xl text-cyan-400 font-semibold hover:bg-slate-900/70 transition-all" data-magicpath-id="69" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <span className="flex items-center gap-2" data-magicpath-id="70" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <TrendingUp className="size-5" data-magicpath-id="71" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  <span data-magicpath-id="72" data-magicpath-path="BrocodeSolutionsProfile.tsx">View Case Studies</span>
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
      }} className="absolute top-1/4 right-[10%] size-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-xl hidden lg:block" data-magicpath-id="73" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
        <motion.div animate={{
        y: [0, 20, 0],
        rotate: [0, -5, 0]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute bottom-1/3 left-[8%] size-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-xl hidden lg:block" data-magicpath-id="74" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
      </header>

      {/* About Us Enhanced */}
      <Section title="About Us" subtitle="Driving innovation at the intersection of technology and business" icon={Building2} className="mt-16 md:mt-24" data-magicpath-id="75" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="space-y-8" data-magicpath-id="76" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" data-magicpath-id="77" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <StatCard label="Founded" value="2020" data-magicpath-id="78" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
            <StatCard label="Projects" value="100+" data-magicpath-id="79" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
            <StatCard label="Team Members" value="40+" data-magicpath-id="80" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
            <StatCard label="Partners" value="Frappe & ERPNext" data-magicpath-id="81" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
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
        }} className="grid md:grid-cols-2 gap-6 mt-8" data-magicpath-id="82" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl p-6 md:p-8" data-magicpath-id="83" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <div className="flex items-center gap-3 mb-4" data-magicpath-id="84" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30" data-magicpath-id="85" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <Target className="size-6 text-cyan-400" data-magicpath-id="86" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white" data-magicpath-id="87" data-magicpath-path="BrocodeSolutionsProfile.tsx">Our Mission</h3>
              </div>
              <p className="text-slate-300 leading-relaxed" data-magicpath-id="88" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                To empower organizations worldwide with transformative technology solutions that drive operational excellence, foster innovation, and unlock sustainable growth. We believe in creating lasting partnerships built on trust, transparency, and measurable results.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl p-6 md:p-8" data-magicpath-id="89" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <div className="flex items-center gap-3 mb-4" data-magicpath-id="90" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30" data-magicpath-id="91" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <Award className="size-6 text-purple-400" data-magicpath-id="92" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white" data-magicpath-id="93" data-magicpath-path="BrocodeSolutionsProfile.tsx">Why Choose Us</h3>
              </div>
              <p className="text-slate-300 leading-relaxed" data-magicpath-id="94" data-magicpath-path="BrocodeSolutionsProfile.tsx">
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
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6" data-magicpath-id="95" data-magicpath-path="BrocodeSolutionsProfile.tsx">
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
            }} className="rounded-xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm p-5 text-center" data-magicpath-id="96" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <div className="inline-flex items-center justify-center size-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-3" data-magicpath-id="97" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                    <Icon className="size-7 text-cyan-400" data-magicpath-id="98" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1" data-magicpath-id="99" data-magicpath-path="BrocodeSolutionsProfile.tsx">{value.label}</h4>
                  <p className="text-xs text-slate-400" data-magicpath-id="100" data-magicpath-path="BrocodeSolutionsProfile.tsx">{value.desc}</p>
                </motion.div>;
          })}
          </motion.div>
        </div>
      </Section>

      {/* Global Reach with Enhanced Map */}
      <Section title="Global Customer Reach" subtitle="Delivering excellence across 5 continents and 17 countries" icon={Globe} className="mt-16 md:mt-24" data-magicpath-id="101" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="grid lg:grid-cols-5 gap-8" data-magicpath-id="102" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          {/* Map */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="lg:col-span-3" data-magicpath-id="103" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <div className="relative rounded-2xl border border-cyan-500/20 bg-slate-900/50 backdrop-blur-xl overflow-hidden p-6" data-magicpath-id="104" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <EnhancedWorldMap data-magicpath-id="105" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
              
              {/* Client location markers */}
              <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none p-6" data-magicpath-id="106" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                {countries.map((c, idx) => <motion.g key={c.name} transform={`translate(${c.x * 10}, ${c.y * 10})`} initial={{
                scale: 0,
                opacity: 0
              }} animate={{
                scale: 1,
                opacity: 1
              }} transition={{
                delay: 0.5 + idx * 0.05,
                duration: 0.5
              }} data-magicpath-id="107" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                    <motion.circle r="8" fill="rgba(6, 182, 212, 0.9)" animate={{
                  scale: [1, 1.4, 1]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: idx * 0.15
                }} data-magicpath-id="108" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                    <circle r="14" fill="rgba(6, 182, 212, 0.3)" data-magicpath-id="109" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                    <circle r="20" fill="rgba(6, 182, 212, 0.15)" data-magicpath-id="110" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  </motion.g>)}
              </svg>

              <div className="absolute bottom-10 right-10 rounded-full bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 px-5 py-2.5 text-sm text-cyan-400 font-semibold shadow-lg" data-magicpath-id="111" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                17 Countries • 5 Continents
              </div>
            </div>
          </motion.div>

          {/* Country List */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="lg:col-span-2 space-y-4" data-magicpath-id="112" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-xl p-6" data-magicpath-id="113" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2" data-magicpath-id="114" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <Globe2 className="size-5 text-cyan-400" data-magicpath-id="115" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                <span data-magicpath-id="116" data-magicpath-path="BrocodeSolutionsProfile.tsx">Active Markets</span>
              </h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed" data-magicpath-id="117" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                Our operational footprint spans key regions across <span className="text-cyan-400 font-semibold" data-magicpath-id="118" data-magicpath-path="BrocodeSolutionsProfile.tsx">Middle East</span>, <span className="text-purple-400 font-semibold" data-magicpath-id="119" data-magicpath-path="BrocodeSolutionsProfile.tsx">Asia</span>, <span className="text-pink-400 font-semibold" data-magicpath-id="120" data-magicpath-path="BrocodeSolutionsProfile.tsx">Africa</span>, Europe, North America, and Oceania.
              </p>
              
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar" data-magicpath-id="121" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                {countries.map(c => <motion.div key={c.name} whileHover={{
                x: 5
              }} className="flex items-center justify-between gap-3 rounded-lg border border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm px-4 py-2.5" data-magicpath-id="122" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                    <div className="flex items-center gap-3 flex-1" data-magicpath-id="123" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                      <span className="size-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse" data-magicpath-id="124" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                      <span className="text-sm text-slate-200" data-magicpath-id="125" data-magicpath-path="BrocodeSolutionsProfile.tsx">{c.name}</span>
                    </div>
                    <span className="text-xs text-cyan-400/70 font-medium" data-magicpath-id="126" data-magicpath-path="BrocodeSolutionsProfile.tsx">{c.region}</span>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Services Carousel */}
      <Section title="Our Services" subtitle="Comprehensive solutions powered by cutting-edge technology" icon={Settings} className="mt-16 md:mt-24" data-magicpath-id="127" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="relative" data-magicpath-id="128" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <div className="overflow-hidden" ref={servicesRef} data-magicpath-id="129" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <div className="flex" data-magicpath-id="130" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              {[...services, ...services].map((svc, idx) => {
              const Icon = svc.icon;
              return <div key={`${svc.title}-${idx}`} className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[33%] xl:basis-[28%] pr-4" data-magicpath-id="131" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                    <motion.div whileHover={{
                  y: -10,
                  scale: 1.02
                }} className="group h-full rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl p-6 overflow-hidden relative" data-magicpath-id="132" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" data-magicpath-id="133" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                      <div className="absolute -top-8 -right-8 size-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" data-magicpath-id="134" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                      
                      <div className="relative z-10 space-y-4" data-magicpath-id="135" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                        <div className="flex items-start justify-between" data-magicpath-id="136" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                          <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30" data-magicpath-id="137" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                            <Icon className="size-6 text-cyan-400" data-magicpath-id="138" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                          </div>
                          <Sparkles className="size-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="text-lg font-bold text-white leading-tight" data-magicpath-id="139" data-magicpath-path="BrocodeSolutionsProfile.tsx">{svc.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed" data-magicpath-id="140" data-magicpath-path="BrocodeSolutionsProfile.tsx">{svc.description}</p>
                      </div>
                    </motion.div>
                  </div>;
            })}
            </div>
          </div>
        </div>
      </Section>

      {/* Key Projects Carousel */}
      <Section title="Key Projects" subtitle="Transformative partnerships across industries" icon={BadgeCheck} className="mt-16 md:mt-24" data-magicpath-id="141" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="relative" data-magicpath-id="142" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <div className="overflow-hidden" ref={projectsRef} data-magicpath-id="143" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <div className="flex" data-magicpath-id="144" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              {[...projects, ...projects].map((proj, idx) => <div key={`${proj.client}-${idx}`} className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[55%] md:basis-[45%] lg:basis-[30%] xl:basis-[24%] pr-4" data-magicpath-id="145" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <motion.div whileHover={{
                y: -8
              }} className="group h-full rounded-2xl border border-cyan-500/20 bg-slate-900/40 backdrop-blur-xl p-6 relative overflow-hidden" data-magicpath-id="146" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500" data-magicpath-id="147" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                    
                    <div className="relative z-10 space-y-4" data-magicpath-id="148" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                      <div className="flex items-center gap-3" data-magicpath-id="149" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                        <ProjectLogo name={proj.client} data-magicpath-id="150" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                        <div className="flex-1" data-magicpath-id="151" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                          <h4 className="text-base font-bold text-white leading-tight" data-magicpath-id="152" data-magicpath-path="BrocodeSolutionsProfile.tsx">{proj.title}</h4>
                          <p className="text-xs text-slate-400 mt-1" data-magicpath-id="153" data-magicpath-path="BrocodeSolutionsProfile.tsx">{proj.client}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs" data-magicpath-id="154" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                        <span className="size-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" data-magicpath-id="155" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                        <span className="text-cyan-400" data-magicpath-id="156" data-magicpath-path="BrocodeSolutionsProfile.tsx">{proj.industry}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>)}
            </div>
          </div>
        </div>
      </Section>

      {/* ERPNext Modules */}
      <Section title="ERPNext Modules" subtitle="Comprehensive business solutions from core to vertical" icon={Settings} className="mt-16 md:mt-24" data-magicpath-id="157" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-magicpath-id="158" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          {erpModules.map((m, idx) => <motion.div key={m.title} initial={{
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
        }} className="group rounded-2xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-xl p-6 relative overflow-hidden" data-magicpath-id="159" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500" data-magicpath-id="160" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
              <div className="relative z-10" data-magicpath-id="161" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <h4 className="text-base md:text-lg font-bold text-white mb-2" data-magicpath-id="162" data-magicpath-path="BrocodeSolutionsProfile.tsx">{m.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed" data-magicpath-id="163" data-magicpath-path="BrocodeSolutionsProfile.tsx">{m.description}</p>
              </div>
            </motion.div>)}
        </div>
      </Section>

      {/* Industries */}
      <Section title="Industries We Serve" subtitle="Deep expertise across diverse sectors" icon={Factory} className="mt-16 md:mt-24" data-magicpath-id="164" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3" data-magicpath-id="165" data-magicpath-path="BrocodeSolutionsProfile.tsx">
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
          }} className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm p-4 hover:bg-slate-900/50 transition-all" data-magicpath-id="166" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <span className="inline-flex items-center justify-center size-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30" data-magicpath-id="167" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <Icon className="size-5 text-cyan-400" data-magicpath-id="168" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                </span>
                <span className="text-sm font-medium text-slate-200" data-magicpath-id="169" data-magicpath-path="BrocodeSolutionsProfile.tsx">{ind.name}</span>
              </motion.div>;
        })}
        </div>
      </Section>

      {/* Engagement Models */}
      <Section title="Engagement Models" subtitle="Flexible approaches tailored to your needs" icon={HandHeart} className="mt-16 md:mt-24" data-magicpath-id="170" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-magicpath-id="171" data-magicpath-path="BrocodeSolutionsProfile.tsx">
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
          }} className="group relative rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl p-8 overflow-hidden" data-magicpath-id="172" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" data-magicpath-id="173" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                <div className="absolute -top-12 -right-12 size-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" data-magicpath-id="174" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                
                <div className="relative z-10 space-y-4" data-magicpath-id="175" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <div className="inline-flex items-center justify-center size-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30" data-magicpath-id="176" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                    <Icon className="size-7 text-cyan-400" data-magicpath-id="177" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  </div>
                  <h4 className="text-xl font-bold text-white" data-magicpath-id="178" data-magicpath-path="BrocodeSolutionsProfile.tsx">{model.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed" data-magicpath-id="179" data-magicpath-path="BrocodeSolutionsProfile.tsx">{model.description}</p>
                </div>
              </motion.div>;
        })}
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-24 md:mt-32 border-t border-cyan-500/20 relative overflow-hidden" data-magicpath-id="180" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent pointer-events-none" data-magicpath-id="181" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10" data-magicpath-id="182" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start" data-magicpath-id="183" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <div className="md:col-span-2 space-y-4" data-magicpath-id="184" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" data-magicpath-id="185" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                Thank You for Considering Brocode Solutions!
              </h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed" data-magicpath-id="186" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                We're excited to partner with you to deliver outcomes that matter—faster, smarter and at scale. Let's build the future together.
              </p>
            </div>

            <div className="space-y-4" data-magicpath-id="187" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <div className="text-sm" data-magicpath-id="188" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <p className="font-semibold text-cyan-400 mb-2" data-magicpath-id="189" data-magicpath-path="BrocodeSolutionsProfile.tsx">Address</p>
                <p className="text-slate-400 leading-relaxed" data-magicpath-id="190" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  2FDBC0036, Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2" data-magicpath-id="191" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <motion.a whileHover={{
                scale: 1.02,
                x: 5
              }} href="tel:+971507612213" className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm px-4 py-3 text-sm hover:bg-slate-900/50 transition-all" data-magicpath-id="192" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <Phone className="size-4 text-cyan-400" data-magicpath-id="193" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  <span className="text-slate-300" data-magicpath-id="194" data-magicpath-path="BrocodeSolutionsProfile.tsx">+971 507612213</span>
                </motion.a>

                <motion.a whileHover={{
                scale: 1.02,
                x: 5
              }} href="mailto:hello@brocodesolutions.com" className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm px-4 py-3 text-sm hover:bg-slate-900/50 transition-all" data-magicpath-id="195" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <Mail className="size-4 text-cyan-400" data-magicpath-id="196" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  <span className="text-slate-300" data-magicpath-id="197" data-magicpath-path="BrocodeSolutionsProfile.tsx">hello@brocodesolutions.com</span>
                </motion.a>

                <motion.a whileHover={{
                scale: 1.02,
                x: 5
              }} href="http://brocodesolutions.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-sm px-4 py-3 text-sm hover:bg-slate-900/50 transition-all" data-magicpath-id="198" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <Globe className="size-4 text-cyan-400" data-magicpath-id="199" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  <span className="text-slate-300" data-magicpath-id="200" data-magicpath-path="BrocodeSolutionsProfile.tsx">brocodesolutions.com</span>
                </motion.a>

                <div className="flex items-center gap-3 rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm px-4 py-3 text-sm" data-magicpath-id="201" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <BadgeCheck className="size-4 text-purple-400" data-magicpath-id="202" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  <span className="text-slate-300 font-medium" data-magicpath-id="203" data-magicpath-path="BrocodeSolutionsProfile.tsx">Frappe & ERPNext Partner</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-cyan-500/10 flex flex-col md:flex-row items-center justify-between gap-4" data-magicpath-id="204" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <p className="text-xs text-slate-500" data-magicpath-id="205" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              © {new Date().getFullYear()} Brocode Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-2" data-magicpath-id="206" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <span className="size-2 rounded-full bg-green-400 animate-pulse" data-magicpath-id="207" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
              <span className="text-xs text-slate-500" data-magicpath-id="208" data-magicpath-path="BrocodeSolutionsProfile.tsx">Systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};