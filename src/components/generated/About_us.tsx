import { motion, } from 'framer-motion';
import { Section, StatCard } from "@/utils/component_utils";
import { Globe2, CheckCircle2, BadgeCheck, Phone, Mail, Globe, Building2, Factory, Wrench, Truck, ShoppingCart, ChefHat, Wheat, FlaskConical, Pill, HeartPulse, Cpu, Radio, Clapperboard, Banknote, Building, Plane, GraduationCap, Shield, HandHeart, Cloud, Smartphone, Layout, Settings, Rocket, Sparkles, Zap, TrendingUp, Users, Award, Target, Briefcase, MapPin, ArrowRight, Calculator, UserCircle2, ShoppingBag, Package, Cog, UserCheck, Home, FolderKanban, CreditCard, Headphones, ClipboardCheck, Store, DollarSign, Key, CarFront, PackageCheck, Receipt, BookOpen, BarChart3, Code2 } from 'lucide-react';


const About_us = () => (

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
);

export default About_us;