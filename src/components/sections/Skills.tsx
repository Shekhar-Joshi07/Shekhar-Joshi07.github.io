import { motion } from 'framer-motion';
import { BadgeCheck, Cpu, Layers } from 'lucide-react';
import { motionDurations, motionEasing } from '../../theme/tokens';

const narrativeClusters = [
  {
    id: 'erp',
    title: 'Global ERP & ops systems',
    summary:
      'React + Node stacks powering instant bookings, inventory, and reporting for Doha-based clinics and conservation teams.',
    stack: ['React', 'Node.js', 'MongoDB', 'AWS'],
    metric: { label: 'Booking efficiency gain', value: '60%' },
    icon: Layers,
    accent: 'from-blush/50 via-white/5 to-transparent',
  },
  {
    id: 'health',
    title: 'Healthcare & wearable apps',
    summary:
      'Led GoKidney (AIIMS Delhi) using Ionic + Samsung Health to help dialysis patients track vitals, exercise, and meals offline.',
    stack: ['Ionic', 'TypeScript', 'Samsung Health', 'Capacitor'],
    metric: { label: 'Patients supported', value: '1000+' },
    icon: Cpu,
    accent: 'from-cobalt/40 via-white/5 to-transparent',
  },
  {
    id: 'launch',
    title: 'Cross-platform launches',
    summary:
      'Workdone marketplace (AU) plus Electron/Tauri research tools for IUCN Asia with shared logic across web, mobile, and desktop.',
    stack: ['Electron', 'Tauri', 'Ionic', 'Vite'],
    metric: { label: 'Platforms shipped', value: '5' },
    icon: BadgeCheck,
    accent: 'from-moss/40 via-white/5 to-transparent',
  },
];

// const experienceMilestones = [
//   {
//     title: 'One Big Bit - Full Stack Developer',
//     duration: 'Jun 2023 - Present',
//     detail: 'ERP, healthcare, and marketplace builds for Doha, AIIMS Delhi, Australia, and Bangkok.',
//   },
//   {
//     title: 'AI & Automation | ERP Solutions',
//     duration: '2 yrs',
//     detail: 'GoKidney (AIIMS) / IUCN Asia offline desktop / Samsung wearable integrations.',
//   },
//   {
//     title: 'Cross-platform shipping',
//     duration: '5 releases',
//     detail: 'Web, Ionic, Electron, and Tauri launches with shared TypeScript core.',
//   },
// ];

const toolbelt = [
  'Next.js',
  'React',
  'Node.js',
  'TypeScript',
  // 'Python',
  // 'LangChain',
  // 'AutoGPT',
  'OpenAI API',
  'AWS',
  'MongoDB',
  'PostgreSQL',
  'Docker',
  'Electron',
  'Tauri',
  'Ionic',
  'Tailwind CSS',
  'GraphQL',
  'Git',
];

const impactStats = [
  { label: 'Booking speed gain', value: '60%', description: 'Instant scheduling for Doha clinics' },
  { label: 'API response boost', value: '73%', description: 'MongoDB aggregation + profiling' },
  { label: 'Platforms shipped', value: '5', description: 'Web, mobile, and desktop parity' },
];

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden px-4 py-20 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-midnight to-ink" />
      <div className="absolute inset-0 bg-noise-texture opacity-20" />
      <div className="absolute -right-20 top-32 h-64 w-64 rounded-full bg-blush/30 blur-[160px]" />
      <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-cobalt/25 blur-[140px]" />

      <div className="relative z-[1] mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.relaxed, ease: motionEasing.entrance }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-8"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-fog/70">Capabilities</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foam md:text-5xl">
              Engineering depth with product taste.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-fog/80">
              I treat skills as stories: each one tied to a measurable outcome, from shaving seconds
              off data workflows to launching multi-platform experiences rooted in real user needs.
            </p>
          </div>

          <div className="card-surface rounded-[28px] p-6 shadow-inner-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-fog/60">Core stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {toolbelt.map((tool) => (
                <span key={tool} className="card-chip rounded-full px-4 py-1.5 text-sm text-foam/80">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* <div className="card-surface rounded-3xl p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fog/60">
              Years in the craft
            </p>
            <div className="mt-4 space-y-5">
              {experienceMilestones.map((milestone) => (
                <div key={milestone.title} className="flex items-start gap-4">
                  <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
                  <div>
                    <div className="flex items-center gap-2 text-foam">
                      <span className="font-semibold">{milestone.title}</span>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-fog/80">
                        {milestone.duration}
                      </span>
                    </div>
                    <p className="text-sm text-fog/70">{milestone.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.relaxed, ease: motionEasing.entrance, delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6"
        >
          {narrativeClusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <motion.div
                key={cluster.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: motionEasing.entrance }}
                className="card-surface relative overflow-hidden rounded-[30px] p-6 shadow-aurora"
              >
                <div className={`absolute inset-0 bg-gradient-to-tr ${cluster.accent} opacity-40`} />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-foam">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-fog/70">
                          {cluster.id}
                        </p>
                        <h3 className="text-2xl font-semibold text-foam">{cluster.title}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.4em] text-fog/60">
                        {cluster.metric.label}
                      </p>
                      <p className="text-2xl font-semibold text-foam">{cluster.metric.value}</p>
                    </div>
                  </div>
                  <p className="text-base text-fog/80">{cluster.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {cluster.stack.map((item) => (
                      <span key={item} className="card-chip rounded-full px-3 py-1 text-xs text-foam/80">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-white/10">
                    <motion.span
                      className="block h-full rounded-full bg-gradient-to-r from-blush to-cobalt"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: motionEasing.entrance }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}

          <div className="grid gap-4 md:grid-cols-3">
            {impactStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="card-surface-alt rounded-3xl p-4 text-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-3xl font-semibold text-foam">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-fog/60">{stat.label}</p>
                <p className="mt-2 text-sm text-fog/80">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative mt-16 flex items-center justify-center text-center text-xs uppercase tracking-[0.45em] text-fog/60">
        <span className="h-px w-10 bg-white/20" />
        <span className="mx-4">Tools evolve. Principles stay.</span>
        <span className="h-px w-10 bg-white/20" />
      </div>
    </section>
  );
};

export default Skills;
