import { motion, useReducedMotion } from 'framer-motion';
import { CalendarDays, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { motionDurations, motionEasing } from '../../theme/tokens';

const educationTimeline = [
  {
    degree: 'Full-Stack Development',
    school: 'Masai School',
    location: 'Bengaluru, Karnataka',
    period: 'May 2022 - April 2023',
    summary:
      'Seven-month intensive focused on React, Node.js, TypeScript, and product delivery rituals. Graduated after shipping full-stack capstones that mirrored live client briefs.',
    highlights: [
      'Pair-programming 6 days/week',
      'Production-grade React + Node builds',
      'Agile ceremonies & code reviews',
      'Demo days with industry mentors',
    ],
    accent: 'from-indigo-500/60 via-purple-500/40 to-transparent',
  },
  {
    degree: 'Higher Secondary (PCM)',
    school: 'Doon Laurels Academy (CBSE)',
    location: 'Dehradun, Uttarakhand',
    period: 'April 2018 - May 2019',
    summary:
      'Science curriculum with an emphasis on analytical reasoning and mathematics—skills I still lean on when architecting systems and data models.',
    highlights: ['Physics, Chemistry, Mathematics', 'Analytical project showcases', 'CBSE board'],
    accent: 'from-cobalt/40 via-blue-500/30 to-transparent',
  },
];

const Education = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="education" className="relative overflow-hidden px-4 py-20 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-midnight to-ink" />
      <div className="absolute inset-0 bg-noise-texture opacity-15" />
      <motion.div
        className="absolute left-0 top-24 h-72 w-72 rounded-full bg-indigo-500/25 blur-[160px] will-change-transform"
        animate={
          prefersReducedMotion
            ? {}
            : { opacity: [0.2, 0.45, 0.2], scale: [0.95, 1.1, 0.98], x: [0, 12, -6] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-3rem] bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[160px] will-change-transform"
        animate={
          prefersReducedMotion
            ? {}
            : { opacity: [0.25, 0.5, 0.25], scale: [1, 0.92, 1.05], y: [0, -10, 6] }
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
            <Sparkles className="h-4 w-4 text-cobalt" />
            Continuous learning
          </span>
          <h2 className="font-serif text-4xl text-foam md:text-5xl">Roots in craft & curiosity.</h2>
          <p className="text-lg text-fog/80">
            Every ERP, healthcare, and marketplace project I ship today is grounded in structured,
            hands-on learning from Masai School and the analytical foundation built in Dehradun.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: motionDurations.base, ease: motionEasing.entrance }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-8"
          >
            {educationTimeline.map((entry) => (
              <div
                key={entry.degree}
                className="card-surface relative overflow-hidden rounded-[32px] p-6 shadow-aurora"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${entry.accent} opacity-40`}
                />
                <div className="relative flex flex-col gap-4">
                  <div className="flex flex-wrap justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-foam">
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foam">{entry.degree}</h3>
                          <p className="text-sm uppercase tracking-[0.4em] text-fog/60">
                            {entry.school}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-fog/70">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-blush" />
                        {entry.period}
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-cobalt" />
                        {entry.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-base text-fog/80">{entry.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {entry.highlights.map((highlight) => (
                      <span key={highlight} className="card-chip rounded-full px-3 py-1 text-xs text-foam/80">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: motionDurations.base, ease: motionEasing.entrance, delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <div className="card-surface rounded-[32px] p-6 text-left">
              <p className="text-sm uppercase tracking-[0.4em] text-fog/70">Masai takeaways</p>
              <ul className="mt-4 space-y-3 text-sm text-fog/80">
                <li>• Daily stand-ups, build weeks, and demo days with product mentors.</li>
                <li>• Production-style Git workflows, code reviews, and CI habits.</li>
                <li>• Capstones covering authentication, dashboards, and API orchestration.</li>
              </ul>
            </div>
            <div className="card-surface rounded-[32px] p-6 text-left">
              <p className="text-sm uppercase tracking-[0.4em] text-fog/70">Why it matters</p>
              <p className="mt-4 text-base text-foam">
                The analytical rigor from PCM + Masai’s product-first bootcamp form the lens I bring
                to every ERP, healthcare, or marketplace engagement showcased here.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
