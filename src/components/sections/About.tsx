import { motion } from 'framer-motion';
import {
  Award,
  Globe,
  HeartHandshake,
  Layers,
  Sparkles,
  Target,
} from 'lucide-react';
import { motionDurations, motionEasing } from '../../theme/tokens';

const storyBeats = [
  {
    heading: 'User-Focused',
    detail:
      'I focus on building software that is easy to use and solves real problems. I work closely with clients to understand their needs.',
  },
  {
    heading: 'Clean Code',
    detail:
      'I believe in writing clean, maintainable code. Whether it is a mobile app or a dashboard, I ensure the codebase is scalable.',
  },
  {
    heading: 'Real Results',
    detail:
      'I aim for measurable results in every project, improving performance and user satisfaction.',
  },
];

const highlightStats = [
  { label: 'Markets served', value: '4', detail: 'Doha • Bangkok • Delhi • Australia' },
  { label: 'Performance gains', value: '73%', detail: 'Faster APIs after optimization' },
  { label: 'Platforms launched', value: 'Web • Mobile • Desktop', detail: 'Cross-platform development' },
];

const focusAreas = [
  {
    icon: Layers,
    title: 'Web Development',
    description:
      'Building robust web applications and dashboards for various industries.',
  },
  {
    icon: Globe,
    title: 'Remote Collaboration',
    description:
      'Experienced in working remotely with teams across different time zones.',
  },
  {
    icon: Target,
    title: 'Modern Practices',
    description:
      'Using modern tools and practices like CI/CD to ensure smooth deployments.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-20 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-midnight to-ink" />
      <div className="absolute inset-0 bg-noise-texture opacity-30" />
      <motion.div
        className="absolute left-10 top-20 h-64 w-64 rounded-full bg-blush/25 blur-[140px] will-change-transform"
        animate={{
          scale: [1, 1.08, 0.95, 1],
          opacity: [0.35, 0.5, 0.3, 0.35],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cobalt/20 blur-[160px] will-change-transform"
        animate={{
          scale: [0.95, 1.05, 0.98],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-[1] mx-auto max-w-6xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.relaxed, ease: motionEasing.entrance }}
          viewport={{ once: true, amount: 0.5 }}
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.45em] text-fog/70">
              <Sparkles className="h-4 w-4 text-blush" />
              About Me
            </span>
            <div className="space-y-4">
              <h2 className="font-serif text-4xl leading-tight text-foam md:text-5xl">
                Hi, I'm Shekhar.
              </h2>
              <p className="text-lg text-fog/80">
                I’m a full-stack developer who loves building useful software. I enjoy working on both the backend logic and the frontend user experience.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-inner-glow">
              <div className="flex items-center gap-3">
                <HeartHandshake className="h-6 w-6 text-moss" />
                <h3 className="text-sm uppercase tracking-[0.3em] text-fog/70">
                  My Approach
                </h3>
              </div>
              <div className="mt-6 space-y-5">
                {storyBeats.map((beat) => (
                  <div key={beat.heading} className="border-l border-white/10 pl-4">
                    <p className="text-sm uppercase tracking-[0.4em] text-fog/60">{beat.heading}</p>
                    <p className="text-base text-foam">{beat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-6 shadow-aurora">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-cobalt" />
                <p className="text-sm uppercase tracking-[0.4em] text-fog/70">Snapshot stats</p>
              </div>
              <div className="mt-6 grid gap-4">
                {highlightStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fog/80"
                  >
                    <div className="flex items-center justify-between text-foam">
                      <span className="text-xs uppercase tracking-[0.3em]">{stat.label}</span>
                      <span className="text-lg font-semibold">{stat.value}</span>
                    </div>
                    <p className="text-xs text-fog/60">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.4em] text-fog/70">Focus areas</p>
              <div className="mt-5 space-y-4">
                {focusAreas.map((focus) => {
                  const Icon = focus.icon;
                  return (
                    <div
                      key={focus.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-4 hover:border-white/30"
                    >
                      <div className="flex items-center gap-3 text-foam">
                        <Icon className="h-5 w-5 text-blush" />
                        <h4 className="text-base font-semibold">{focus.title}</h4>
                      </div>
                      <p className="mt-2 text-sm text-fog/80">{focus.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.relaxed, ease: motionEasing.entrance, delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-[36px] border border-white/10 bg-white/5 p-8 text-center"
        >
          <p className="font-serif text-2xl text-foam">
            “I write code that is easy to read and maintain.”
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.4em] text-fog/60">Still curious? Scroll on.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
