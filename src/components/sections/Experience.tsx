import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  Briefcase,
  CalendarDays,
  Globe2,
  Layers,
  MapPin,
  ServerCog,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import experiences from '../../Jsons/Experience.json';
import { motionDurations, motionEasing } from '../../theme/tokens';

const impactStats = [
  { label: 'Booking efficiency', value: '60%', detail: 'Faster clinic scheduling' },
  { label: 'API response boost', value: '73%', detail: 'Optimized database queries' },
  { label: 'Platforms shipped', value: '5', detail: 'Web, mobile, and desktop' },
];

const Experience = () => {
  const prefersReducedMotion = useReducedMotion();
  const [primaryRole] = experiences;

  const highlightSeeds = [
    {
      icon: Layers,
      title: 'Web Apps',
      description: primaryRole?.achievements[0],
    },
    {
      icon: Activity,
      title: 'GoKidney for AIIMS',
      description: primaryRole?.achievements[1],
    },
    {
      icon: Smartphone,
      title: 'Marketplace',
      description: primaryRole?.achievements[2],
    },
    {
      icon: ServerCog,
      title: 'Research Tools',
      description: primaryRole?.achievements[3],
    },
    {
      icon: Globe2,
      title: 'API Performance',
      description: primaryRole?.achievements[4],
    },
    {
      icon: Briefcase,
      title: 'Workdone Launches',
      description: primaryRole?.achievements[5],
    },
  ];

  const highlightCards = highlightSeeds.filter((card) => Boolean(card.description));

  return (
    <section id="experience" className="relative overflow-hidden px-4 py-20 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-graphite to-ink" />
      <div className="absolute inset-0 bg-noise-texture opacity-15" />
      <motion.div
        className="absolute left-6 top-1/4 h-72 w-72 rounded-full bg-moss/25 blur-[160px] will-change-transform"
        animate={
          prefersReducedMotion
            ? {}
            : { opacity: [0.2, 0.45, 0.2], scale: [0.95, 1.08, 0.98], x: [0, 16, -10] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cobalt/25 blur-[160px] will-change-transform"
        animate={
          prefersReducedMotion
            ? {}
            : { opacity: [0.25, 0.5, 0.25], scale: [1, 0.92, 1.05], y: [0, -12, 6] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-[1] mx-auto max-w-6xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.relaxed, ease: motionEasing.entrance }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center space-y-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-fog/70">
            <Sparkles className="h-4 w-4 text-moss" />
            Work
          </span>
          <h2 className="font-serif text-4xl text-foam md:text-5xl">
            My Experience
          </h2>
          <p className="text-lg text-fog/80">
            I have worked on various projects including healthcare apps, marketplaces, and data tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.base, ease: motionEasing.entrance, delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-4 rounded-[32px] card-surface p-6 text-center md:grid-cols-3"
        >
          {impactStats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-3xl font-semibold text-foam">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.4em] text-fog/60">{stat.label}</p>
              <p className="text-sm text-fog/70">{stat.detail}</p>
            </div>
          ))}
        </motion.div>

        {primaryRole && (
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.article
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: motionDurations.relaxed, ease: motionEasing.entrance }}
              viewport={{ once: true, amount: 0.5 }}
              className="card-surface relative overflow-hidden rounded-[36px] p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-foam">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foam">{primaryRole.title}</h3>
                      <p className="text-moss text-lg font-medium">{primaryRole.company}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-fog/80">{primaryRole.description}</p>
                </div>
                <div className="text-sm text-fog/70">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-blush" />
                    {primaryRole.period}
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-cobalt" />
                    {primaryRole.location}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {primaryRole?.achievements?.map((achievement) => (
                  <div
                    key={achievement}
                    className="card-surface-alt rounded-3xl px-4 py-3 text-sm text-fog/85"
                  >
                    {achievement}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {primaryRole?.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="card-chip rounded-full px-3 py-1 text-xs text-foam/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: motionDurations.base, ease: motionEasing.entrance, delay: 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-4"
            >
              {highlightCards.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={`${highlight.title}-${index}`}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="card-surface-alt rounded-[28px] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-foam">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-semibold text-foam">{highlight.title}</h4>
                    </div>
                    <p className="mt-2 text-sm text-fog/80">{highlight.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
