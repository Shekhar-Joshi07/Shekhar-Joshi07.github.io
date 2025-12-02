import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';
import projects from '../../Jsons/Project.json';
import { motionDurations, motionEasing } from '../../theme/tokens';

const featuredProjects = projects.slice(0, 3);
const supportingProjects = projects.slice(3);

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = featuredProjects[activeIndex] ?? featuredProjects[0];

  return (
    <section id="projects" className="relative overflow-hidden px-4 py-20 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-midnight to-ink" />
      <div className="absolute inset-0 bg-noise-texture opacity-15" />
      <motion.div
        className="absolute left-10 top-1/4 h-72 w-72 rounded-full bg-cobalt/25 blur-[160px] will-change-transform"
        animate={
          prefersReducedMotion
            ? {}
            : { opacity: [0.2, 0.5, 0.2], scale: [0.95, 1.08, 0.98], x: [0, 12, -8] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blush/20 blur-[160px] will-change-transform"
        animate={
          prefersReducedMotion
            ? {}
            : { opacity: [0.25, 0.45, 0.25], scale: [1, 0.92, 1.05], y: [0, -10, 6] }
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
            Project stories
          </span>
          <h2 className="font-serif text-4xl text-foam md:text-5xl">
            My Projects
          </h2>
          <p className="text-lg text-fog/80">
            Here are some of the projects I've worked on.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: motionDurations.base, ease: motionEasing.entrance }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-4"
          >
            {featuredProjects.map((project, index) => (
              <button
                key={project.title}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-[28px] border px-4 py-3 text-left transition-all ${
                  activeIndex === index
                    ? 'card-surface text-foam shadow-aurora'
                    : 'card-surface-alt text-fog/70 hover:border-white/30'
                }`}
                aria-pressed={activeIndex === index}
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-fog/60">{project.category}</p>
                        <p className="text-lg font-semibold text-foam">{project.title}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-fog/60" />
                    </div>
                    <p className="mt-1 text-sm text-fog/80 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: motionDurations.base, ease: motionEasing.entrance, delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="card-surface relative overflow-hidden rounded-[40px] p-6 shadow-aurora"
          >
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="lg:w-1/2">
                <motion.div
                  key={activeProject?.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: motionDurations.base, ease: motionEasing.entrance }}
                  className="relative overflow-hidden rounded-[28px]"
                >
                  <img
                    src={activeProject?.image}
                    alt={activeProject?.title}
                    className="h-64 w-full rounded-[28px] object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white">
                    <Layers className="h-3.5 w-3.5" />
                    {activeProject?.category}
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col gap-4 lg:w-1/2">
                <h3 className="text-2xl font-semibold text-foam">{activeProject?.title}</h3>
                <p className="text-sm text-fog/80">{activeProject?.description}</p>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-fog/60">Highlights</p>
                  <ul className="space-y-2 text-sm text-foam/90">
                    {activeProject?.highlights?.map((item) => (
                      <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-fog/60">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject?.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foam/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDurations.base, ease: motionEasing.entrance }}
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {supportingProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: motionDurations.base, ease: motionEasing.entrance }}
                className="card-surface-alt group rounded-[28px] p-5"
              >
                <div className="mb-4 overflow-hidden rounded-[24px] border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-fog/60">{project.category}</p>
                    <h4 className="text-xl font-semibold text-foam">{project.title}</h4>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-fog/60 transition group-hover:text-foam" />
                </div>
                <p className="mt-3 text-sm text-fog/80 line-clamp-3">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-fog/70">
                  {project.features?.slice(0, 3).map((feature) => (
                    <span key={feature} className="card-chip rounded-full px-3 py-1">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
