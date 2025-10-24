// Data sources

import {  CheckCircle2, Building2, Factory, Wrench, Truck, ShoppingCart, ChefHat, Wheat, FlaskConical, Pill, HeartPulse, Cpu, Radio, Clapperboard, Banknote, Building, Plane, GraduationCap, Shield, HandHeart, Cloud, Smartphone, Layout, Settings, Rocket, Calculator, UserCircle2, ShoppingBag, Package, Cog, UserCheck, Home, FolderKanban, CreditCard, Headphones, ClipboardCheck, Store, DollarSign, Key, CarFront, PackageCheck, Receipt, BookOpen, BarChart3, Code2 } from 'lucide-react';
export const services = [{
  title: 'ERPNext Implementation',
  description: 'Seamless integration to streamline and unify your operations.',
  details: 'End-to-end deployment with minimal disruption, data migration, and comprehensive user training.',
  icon: Settings,
  gradient: 'from-cyan-500 to-blue-500'
}, {
  title: 'ERPNext Customization',
  description: 'Tailored modules and workflows aligned to your business.',
  details: 'Custom fields, forms, reports, and workflows designed specifically for your unique requirements.',
  icon: Wrench,
  gradient: 'from-purple-500 to-pink-500'
}, {
  title: 'ERPNext Support',
  description: 'Responsive maintenance and performance optimization.',
  details: '24/7 technical support, system upgrades, bug fixes, and continuous performance monitoring.',
  icon: CheckCircle2,
  gradient: 'from-blue-500 to-indigo-500'
}, {
  title: 'Mobile App Development',
  description: 'Intuitive mobile experiences that engage your users.',
  details: 'Native iOS and Android apps with seamless ERP integration and offline capabilities.',
  icon: Smartphone,
  gradient: 'from-green-500 to-emerald-500'
}, {
  title: 'Website Development',
  description: 'High-performance, robust websites for your brand.',
  details: 'Modern, responsive websites with CMS integration, SEO optimization, and e-commerce capabilities.',
  icon: Layout,
  gradient: 'from-orange-500 to-red-500'
}, {
  title: 'Digital Marketing',
  description: 'End-to-end strategies to boost visibility and growth.',
  details: 'SEO, social media marketing, content strategy, and data-driven campaign management.',
  icon: Rocket,
  gradient: 'from-pink-500 to-rose-500'
}, {
  title: 'Cloud Solutions',
  description: 'Secure, scalable infrastructure and collaboration.',
  details: 'Cloud migration, hosting, DevOps automation, and enterprise-grade security solutions.',
  icon: Cloud,
  gradient: 'from-teal-500 to-cyan-500'
}];
export const projects = [{
  client: 'Al Noor Foods',
  image_src: "./PNG/ABS.png",
  title: 'ERPNext Rollout',
  industry: 'Food & Beverage'
}, {
  client: 'SkyTrack Logistics',
  title: 'Fleet & 3PL Suite',
  image_src: "./PNG/ABS.png",
  industry: 'Transportation & Logistics'
}, {
  client: 'BlueSteel Manufacturing',
  image_src: "./PNG/ABS.png",
  title: 'MRP & QA Stack',
  industry: 'Manufacturing'
}, {
  client: 'MedicoPlus',
  image_src: "./PNG/ABS.png",
  title: 'Pharma Compliance',
  industry: 'Pharmaceuticals'
}, {
  client: 'AeroTech Systems',
  image_src: "./PNG/ABS.png",
  title: 'MRO Suite',
  industry: 'Aerospace'
}, {
  client: 'GreenAgro',
  image_src: "./JPEG/SBS.jpg",
  title: 'Farm-to-Shelf',
  industry: 'Agriculture'
}, {
  client: 'UrbanBuild',
  image_src: "./PNG/ABS.png",
  title: 'Project Control',
  industry: 'Construction & Contracting'
}, {
  client: 'RetailHub',
  image_src: "./PNG/ABS.png",
  title: 'Omnichannel POS',
  industry: 'Retail & eCommerce'
}];
export const erpModules: {
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}[] = [{
  title: 'Accounting',
  description: 'Chart of Accounts, invoicing, GL, AP/AR, bank/cash handling, aging and detailed reporting.',
  icon: Calculator
}, {
  title: 'CRM',
  description: 'Leads, opportunities, campaigns, appointments and email management across the lifecycle.',
  icon: UserCircle2
}, {
  title: 'Sales & Purchasing',
  description: 'End-to-end flows from quotations to orders and invoices, supplier management and RFQs.',
  icon: ShoppingBag
}, {
  title: 'Inventory/Stock',
  description: 'Multi-warehouse tracking, barcodes/serials, batch management and real-time valuation.',
  icon: Package
}, {
  title: 'Manufacturing',
  description: 'BOMs, MPS/MRP planning, job cards, routing, work-in-progress and capacity planning.',
  icon: Cog
}, {
  title: 'HR & Payroll',
  description: 'Employee master, attendance/leave, expenses, payroll runs and recruitment via ATS.',
  icon: UserCheck
}, {
  title: 'Asset Management',
  description: 'Lifecycle tracking, depreciation scheduling, maintenance, locations and assignments.',
  icon: Home
}, {
  title: 'Project Management',
  description: 'Tasks, progress tracking, timesheets, cost monitoring and resource allocation.',
  icon: FolderKanban
}, {
  title: 'Point of Sale (POS)',
  description: 'Retail-ready, inventory- and accounting-integrated billing with promotions and returns.',
  icon: CreditCard
}, {
  title: 'Helpdesk Services',
  description: 'Ticketing, SLAs, knowledge base and client portal integrations.',
  icon: Headphones
}, {
  title: 'Quality Management',
  description: 'Incoming/in-process inspections, nonconformance and CAPA tracking.',
  icon: ClipboardCheck
}, {
  title: 'Website/eCommerce',
  description: 'CMS and storefront management with products, carts and payments.',
  icon: Store
}, {
  title: 'Loans Management',
  description: 'Applications, disbursements, schedules and employee/external loans.',
  icon: DollarSign
}, {
  title: 'Property Management (PropMS)',
  description: 'Property, tenants, leases, rent cycles and maintenance requests.',
  icon: Key
}, {
  title: 'Fleet Management',
  description: 'Vehicle tracking, routes, maintenance and fuel/expense management.',
  icon: CarFront
}, {
  title: 'Rental Management',
  description: 'Equipment rental tracking, contracts, billing and returns.',
  icon: PackageCheck
}, {
  title: 'Expense Management+',
  description: 'Grouped claims with multi-level approval workflows and policies.',
  icon: Receipt
}, {
  title: 'Learning Management (LMS)',
  description: 'Courses, enrollments, progress, assessments and certifications.',
  icon: BookOpen
}, {
  title: 'Analytics/BI',
  description: 'Dashboards and deep reporting for data-driven decision-making.',
  icon: BarChart3
}, {
  title: 'Custom Applications',
  description: 'Bespoke Frappe apps tailored precisely to your needs.',
  icon: Code2
}];
export const industries = [{
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
export const regions = [{
  name: 'Middle East',
  countries: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman'],
  color: 'from-cyan-500 to-blue-500',
  icon: '🕌'
}, {
  name: 'Asia',
  countries: ['India'],
  color: 'from-purple-500 to-pink-500',
  icon: '🏯'
}, {
  name: 'Europe',
  countries: ['United Kingdom', 'Germany', 'France', 'Switzerland', 'Sweden'],
  color: 'from-blue-500 to-indigo-500',
  icon: '🏰'
}, {
  name: 'Africa',
  countries: ['Egypt', 'South Africa', 'Djibouti'],
  color: 'from-orange-500 to-red-500',
  icon: '🌍'
}, {
  name: 'North America',
  countries: ['USA', 'Canada', 'Dominican Republic'],
  color: 'from-green-500 to-emerald-500',
  icon: '🗽'
}, {
  name: 'Oceania',
  countries: ['Australia'],
  color: 'from-teal-500 to-cyan-500',
  icon: '🏖️'
}];