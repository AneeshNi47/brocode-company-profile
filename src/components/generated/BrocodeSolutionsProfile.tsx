import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Globe2, CheckCircle2, BadgeCheck, Phone, Mail, Globe, Building2, Factory, Wrench, Truck, ShoppingCart, ChefHat, Wheat, FlaskConical, Pill, HeartPulse, Cpu, Radio, Clapperboard, Banknote, Building, Plane, GraduationCap, Shield, HandHeart, Cloud, Smartphone, Layout, Settings, Rocket } from 'lucide-react';
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
  x: 590,
  y: 230
}, {
  name: 'India',
  x: 660,
  y: 260
}, {
  name: 'Saudi Arabia',
  x: 580,
  y: 250
}, {
  name: 'Australia',
  x: 880,
  y: 360
}, {
  name: 'Egypt',
  x: 540,
  y: 230
}, {
  name: 'Oman',
  x: 610,
  y: 250
}, {
  name: 'South Africa',
  x: 540,
  y: 390
}, {
  name: 'Djibouti',
  x: 555,
  y: 260
}, {
  name: 'Dominican Republic',
  x: 270,
  y: 250
}, {
  name: 'Switzerland',
  x: 500,
  y: 185
}, {
  name: 'France',
  x: 490,
  y: 190
}, {
  name: 'USA',
  x: 170,
  y: 220
}, {
  name: 'Canada',
  x: 170,
  y: 170
}, {
  name: 'Sweden',
  x: 515,
  y: 150
}, {
  name: 'Germany',
  x: 510,
  y: 185
}, {
  name: 'United Kingdom',
  x: 475,
  y: 175
}, {
  name: 'Qatar',
  x: 595,
  y: 245
}];

// Non-exported helpers
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
}) => <section className={cn('w-full max-w-7xl px-4 md:px-6 mx-auto', className)} data-magicpath-id="0" data-magicpath-path="BrocodeSolutionsProfile.tsx">
    <div className="flex items-center gap-3 mb-6" data-magicpath-id="1" data-magicpath-path="BrocodeSolutionsProfile.tsx">
      {Icon ? <span className="inline-flex items-center justify-center size-9 rounded-lg bg-primary/5 text-primary" data-magicpath-id="2" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <Icon className="size-5" data-magicpath-id="3" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
        </span> : null}
      <div data-magicpath-id="4" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" data-magicpath-id="5" data-magicpath-path="BrocodeSolutionsProfile.tsx">{title}</h2>
        {subtitle ? <p className="text-sm md:text-base text-muted-foreground mt-1" data-magicpath-id="6" data-magicpath-path="BrocodeSolutionsProfile.tsx">{subtitle}</p> : null}
      </div>
    </div>
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
}) => <div className="rounded-xl border bg-card text-card-foreground p-5 md:p-6 shadow-sm" data-magicpath-id="7" data-magicpath-path="BrocodeSolutionsProfile.tsx">
    <p className="text-sm text-muted-foreground" data-magicpath-id="8" data-magicpath-path="BrocodeSolutionsProfile.tsx">{label}</p>
    <p className="text-2xl md:text-3xl font-semibold mt-1" data-magicpath-id="9" data-magicpath-path="BrocodeSolutionsProfile.tsx">{value}</p>
  </div>;
const ProjectLogo = ({
  name
}: {
  name: string;
}) => {
  const initials = name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  return <div aria-label={`${name} logo placeholder`} className="size-12 rounded-md bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex items-center justify-center font-semibold" data-magicpath-id="10" data-magicpath-path="BrocodeSolutionsProfile.tsx">
      {initials}
    </div>;
};
const MapBackdrop = ({
  width = 1000,
  height = 500
}: {
  width?: number;
  height?: number;
}) => {
  // Stylized abstract world map using soft blobs for continents
  return <svg viewBox="0 0 1000 500" width={width} height={height} role="img" aria-label="World map showing operational footprint" className="w-full h-auto" data-magicpath-id="11" data-magicpath-path="BrocodeSolutionsProfile.tsx">
      <defs data-magicpath-id="12" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <linearGradient id="mapGrad" x1="0" x2="1" y1="0" y2="1" data-magicpath-id="13" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <stop offset="0%" stopColor="oklch(0.97 0 0)" />
          <stop offset="100%" stopColor="oklch(0.92 0 0)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1000" height="500" fill="transparent" data-magicpath-id="14" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
      {/* Rough continent silhouettes */}
      <path d="M75,210 C140,170 240,160 300,190 C360,220 380,260 330,290 C280,320 180,320 120,290 C90,275 60,250 75,210Z" fill="url(#mapGrad)" opacity="0.7" data-magicpath-id="15" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
      <path d="M360,170 C430,130 520,120 580,140 C640,160 660,200 620,230 C580,260 490,270 430,250 C390,235 350,210 360,170Z" fill="url(#mapGrad)" opacity="0.7" data-magicpath-id="16" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
      <path d="M650,200 C710,180 790,190 830,220 C870,250 880,290 850,310 C820,330 750,330 700,310 C670,297 635,265 650,200Z" fill="url(#mapGrad)" opacity="0.7" data-magicpath-id="17" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
      <path d="M780,330 C820,325 880,340 910,365 C940,390 945,420 925,430 C905,440 860,440 830,425 C810,415 775,380 780,330Z" fill="url(#mapGrad)" opacity="0.7" data-magicpath-id="18" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
      <path d="M520,340 C560,320 620,325 650,345 C680,365 680,390 650,400 C620,410 565,410 535,395 C520,387 505,365 520,340Z" fill="url(#mapGrad)" opacity="0.7" data-magicpath-id="19" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
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
  useAutoScrollEmbla(servicesEmbla, 'rtl', 2200);
  useAutoScrollEmbla(projectsEmbla, 'ltr', 2600);

  // @return
  return <div className={cn('w-full min-h-dvh bg-background text-foreground', className)} data-magicpath-id="20" data-magicpath-path="BrocodeSolutionsProfile.tsx">
      {/* Banner */}
      <header className="relative overflow-hidden" data-magicpath-id="21" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="absolute inset-0 pointer-events-none" data-magicpath-id="22" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <div className="absolute -top-24 -right-24 size-[36rem] rounded-full bg-primary/5 blur-3xl" data-magicpath-id="23" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
          <div className="absolute -bottom-24 -left-24 size-[30rem] rounded-full bg-primary/10 blur-3xl" data-magicpath-id="24" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-10 md:pb-16" data-magicpath-id="25" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <motion.div initial={{
          opacity: 0,
          y: 12
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.6
        }} className="space-y-4" data-magicpath-id="26" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 bg-card shadow-sm" data-magicpath-id="27" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <Globe2 className="size-4 text-primary" data-magicpath-id="28" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
              <span className="text-xs font-medium tracking-wide text-muted-foreground" data-magicpath-id="29" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                Since 2020
              </span>
              <BadgeCheck className="size-4 text-primary" data-magicpath-id="30" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight" data-magicpath-id="31" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              Empowering Businesses to Unlock Their Full Potential Since 2020
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl" data-magicpath-id="32" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              Brocode Solutions specializes in delivering comprehensive ERP solutions and innovative
              product engineering services. Our primary focus is to empower our clients to
              efficiently and effectively realize their business objectives, driving growth and
              optimizing operations.
            </p>
          </motion.div>
        </div>
      </header>

      {/* About Us */}
      <Section title="About Us" subtitle="Who we are and what we stand for" icon={Building2} data-magicpath-id="33" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" data-magicpath-id="34" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <StatCard label="Founded" value="2020" data-magicpath-id="35" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
          <StatCard label="Projects Completed" value="100+ across industries" data-magicpath-id="36" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
          <StatCard label="Team Size" value="40+ experienced professionals" data-magicpath-id="37" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
          <StatCard label="Partnerships" value="Frappe & ERPNext" data-magicpath-id="38" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
        </div>
      </Section>

      {/* Global Reach */}
      <Section title="Global Customer Reach" subtitle="We support a diverse customer base across multiple continents." icon={Globe} className="mt-10" data-magicpath-id="39" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="grid lg:grid-cols-3 gap-8 items-center" data-magicpath-id="40" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <div className="lg:col-span-1 space-y-4" data-magicpath-id="41" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <p className="text-muted-foreground" data-magicpath-id="42" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              Our operational footprint spans key regions across the globe. We partner with clients
              in the Middle East, Asia, Africa, Europe, North America and Oceania to deliver
              outcomes that scale.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm" data-magicpath-id="43" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              {countries.map(c => <li key={c.name} className="inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2" data-magicpath-id="44" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <span className="size-2 rounded-full bg-primary" data-magicpath-id="45" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  {c.name}
                </li>)}
            </ul>
          </div>
          <div className="lg:col-span-2" data-magicpath-id="46" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <div className="relative rounded-xl border bg-card shadow-sm overflow-hidden" data-magicpath-id="47" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <MapBackdrop data-magicpath-id="48" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
              {/* Pins */}
              <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" data-magicpath-id="49" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                {countries.map(c => <g key={c.name} transform={`translate(${c.x}, ${c.y})`} data-magicpath-id="50" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                    <circle r="6" fill="oklch(0.488 0.243 264.376)" opacity="0.9" data-magicpath-id="51" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                    <circle r="10" fill="oklch(0.488 0.243 264.376)" opacity="0.18" data-magicpath-id="52" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  </g>)}
              </svg>
              <div className="absolute bottom-4 right-4 rounded-full bg-background/80 backdrop-blur px-3 py-1.5 border text-xs text-muted-foreground" data-magicpath-id="53" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                Footprint highlights are approximate
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Carousel */}
      <Section title="Our Services" subtitle="A comprehensive portfolio tailored to your objectives" icon={Settings} className="mt-12" data-magicpath-id="54" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="relative" data-magicpath-id="55" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <div className="overflow-hidden" ref={servicesRef} data-magicpath-id="56" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <div className="flex" data-magicpath-id="57" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              {[...services, ...services].map((svc, idx) => {
              const Icon = svc.icon;
              return <div key={`${svc.title}-${idx}`} className="min-w-0 shrink-0 grow-0 basis-[80%] sm:basis-[55%] md:basis-[40%] lg:basis-[30%] xl:basis-[25%] pr-4" data-magicpath-id="58" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                    <div className="h-full rounded-xl border bg-card p-5 md:p-6 shadow-sm flex flex-col" data-magicpath-id="59" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                      <div className="flex items-center gap-3" data-magicpath-id="60" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                        <span className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary" data-magicpath-id="61" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                          <Icon className="size-5" data-magicpath-id="62" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                        </span>
                        <h3 className="text-lg font-semibold leading-tight" data-magicpath-id="63" data-magicpath-path="BrocodeSolutionsProfile.tsx">{svc.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3" data-magicpath-id="64" data-magicpath-path="BrocodeSolutionsProfile.tsx">{svc.description}</p>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </div>
      </Section>

      {/* Key Projects Carousel */}
      <Section title="Key Projects" subtitle="Select collaborations that showcase our breadth and depth" icon={BadgeCheck} className="mt-12" data-magicpath-id="65" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="relative" data-magicpath-id="66" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <div className="overflow-hidden" ref={projectsRef} data-magicpath-id="67" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <div className="flex" data-magicpath-id="68" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              {[...projects, ...projects].map((proj, idx) => <div key={`${proj.client}-${idx}`} className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[55%] md:basis-[45%] lg:basis-[30%] xl:basis-[22%] pr-4" data-magicpath-id="69" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <div className="h-full rounded-xl border bg-card p-5 md:p-6 shadow-sm flex flex-col" data-magicpath-id="70" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                    <div className="flex items-center gap-3" data-magicpath-id="71" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                      <ProjectLogo name={proj.client} data-magicpath-id="72" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                      <div data-magicpath-id="73" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                        <h4 className="text-base font-semibold leading-tight" data-magicpath-id="74" data-magicpath-path="BrocodeSolutionsProfile.tsx">{proj.title}</h4>
                        <p className="text-xs text-muted-foreground" data-magicpath-id="75" data-magicpath-path="BrocodeSolutionsProfile.tsx">{proj.client}</p>
                      </div>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground" data-magicpath-id="76" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                      <span className="size-1.5 rounded-full bg-primary" data-magicpath-id="77" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                      {proj.industry}
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          <p className="sr-only" data-magicpath-id="78" data-magicpath-path="BrocodeSolutionsProfile.tsx">Carousel displays 4 to 5 project cards depending on screen size.</p>
        </div>
      </Section>

      {/* ERPNext Modules */}
      <Section title="ERPNext Modules We Work With" subtitle="From core finance to advanced vertical solutions" icon={Settings} className="mt-12" data-magicpath-id="79" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" data-magicpath-id="80" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          {erpModules.map(m => <div key={m.title} className="rounded-xl border bg-card p-5 md:p-6 shadow-sm" data-magicpath-id="81" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <h4 className="text-base md:text-lg font-semibold" data-magicpath-id="82" data-magicpath-path="BrocodeSolutionsProfile.tsx">{m.title}</h4>
              <p className="text-sm text-muted-foreground mt-2" data-magicpath-id="83" data-magicpath-path="BrocodeSolutionsProfile.tsx">{m.description}</p>
            </div>)}
        </div>
      </Section>

      {/* Industries */}
      <Section title="Top Industries We Serve" subtitle="Cross-industry experience, domain depth" icon={Factory} className="mt-12" data-magicpath-id="84" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4" data-magicpath-id="85" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          {industries.map(ind => {
          const Icon = ind.icon;
          return <div key={ind.name} className="flex items-center gap-3 rounded-lg border bg-card p-3 md:p-4 hover:bg-accent transition-colors" data-magicpath-id="86" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <span className="inline-flex items-center justify-center size-9 rounded-md bg-primary/10 text-primary" data-magicpath-id="87" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <Icon className="size-5" data-magicpath-id="88" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                </span>
                <span className="text-sm font-medium" data-magicpath-id="89" data-magicpath-path="BrocodeSolutionsProfile.tsx">{ind.name}</span>
              </div>;
        })}
        </div>
      </Section>

      {/* Engagement Models */}
      <Section title="Engagement Models" subtitle="Flexible models tailored to your delivery needs" icon={HandHeart} className="mt-12" data-magicpath-id="90" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6" data-magicpath-id="91" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <div className="rounded-xl border bg-card p-5 md:p-6 shadow-sm" data-magicpath-id="92" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <h4 className="text-lg font-semibold" data-magicpath-id="93" data-magicpath-path="BrocodeSolutionsProfile.tsx">Fixed Cost</h4>
            <p className="text-sm text-muted-foreground mt-2" data-magicpath-id="94" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              Ideal for well-defined requirements. Enjoy budget predictability with a fixed price
              and clear milestones.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5 md:p-6 shadow-sm" data-magicpath-id="95" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <h4 className="text-lg font-semibold" data-magicpath-id="96" data-magicpath-path="BrocodeSolutionsProfile.tsx">Time and Material</h4>
            <p className="text-sm text-muted-foreground mt-2" data-magicpath-id="97" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              Adaptable to evolving scope. Pay for actual time and resources while we iterate with
              agility.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5 md:p-6 shadow-sm" data-magicpath-id="98" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <h4 className="text-lg font-semibold" data-magicpath-id="99" data-magicpath-path="BrocodeSolutionsProfile.tsx">Dedicated Teams</h4>
            <p className="text-sm text-muted-foreground mt-2" data-magicpath-id="100" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              A focused team aligned to your roadmap, perfect for long-term initiatives and ongoing
              development.
            </p>
          </div>
        </div>
      </Section>

      {/* Closing Section */}
      <footer className="mt-16 md:mt-20 border-t" data-magicpath-id="101" data-magicpath-path="BrocodeSolutionsProfile.tsx">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14" data-magicpath-id="102" data-magicpath-path="BrocodeSolutionsProfile.tsx">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start" data-magicpath-id="103" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            <div className="md:col-span-2 space-y-3" data-magicpath-id="104" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <h3 className="text-2xl font-semibold" data-magicpath-id="105" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                Thank You for Considering Brocode Solutions!
              </h3>
              <p className="text-sm text-muted-foreground" data-magicpath-id="106" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                We’re excited to partner with you to deliver outcomes that matter—faster,
                smarter and at scale.
              </p>
            </div>
            <div className="space-y-3" data-magicpath-id="107" data-magicpath-path="BrocodeSolutionsProfile.tsx">
              <div className="text-sm" data-magicpath-id="108" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <p className="font-medium" data-magicpath-id="109" data-magicpath-path="BrocodeSolutionsProfile.tsx">Address</p>
                <p className="text-muted-foreground" data-magicpath-id="110" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  2FDBC0036, Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al
                  Khaimah, UAE
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-magicpath-id="111" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                <a href="tel:+971507612213" className="inline-flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-sm hover:bg-accent transition-colors" data-magicpath-id="112" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <Phone className="size-4 text-primary" data-magicpath-id="113" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  +971 507612213
                </a>
                <a href="mailto:hello@brocodesolutions.com" className="inline-flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-sm hover:bg-accent transition-colors" data-magicpath-id="114" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <Mail className="size-4 text-primary" data-magicpath-id="115" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  hello@brocodesolutions.com
                </a>
                <a href="http://brocodesolutions.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-sm hover:bg-accent transition-colors" data-magicpath-id="116" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <Globe className="size-4 text-primary" data-magicpath-id="117" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  brocodesolutions.com
                </a>
                <div className="inline-flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-sm" data-magicpath-id="118" data-magicpath-path="BrocodeSolutionsProfile.tsx">
                  <BadgeCheck className="size-4 text-primary" data-magicpath-id="119" data-magicpath-path="BrocodeSolutionsProfile.tsx" />
                  Frappe & ERPNext Partner
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-muted-foreground" data-magicpath-id="120" data-magicpath-path="BrocodeSolutionsProfile.tsx">
            © {new Date().getFullYear()} Brocode Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};