

import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../lib/utils';


export const StatCard = ({
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

// Section Component with futuristic styling
export const Section = ({
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



