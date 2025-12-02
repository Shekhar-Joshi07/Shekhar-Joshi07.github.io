
import {
  Activity,
  ArrowUpRight,
  Download,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { motionDurations, motionEasing } from '../theme/tokens';


const capabilityStories = [
  {
    title: 'AI Agents',
    description: 'Autonomous agents for workflow automation and data analysis.',
    tools: 'n8n /AutoGPT / Python',
    metric: 'Automated workflows',
    progress: 85,
    icon: Sparkles,
  },
  {
    title: 'Generative UI',
    description: 'Dynamic user interfaces generated on the fly based on user intent.',
    tools: 'React / OpenAI / Vercel AI / Gemini',
    metric: 'Adaptive interfaces',
    progress: 75,
    icon: Layers,
  },
  // {
  //   title: 'Smart Platforms',
  //   description: 'Integrating LLMs into existing platforms for enhanced intelligence.',
  //   tools: 'Vector DBs / Embeddings',
  //   metric: 'Intelligent search',
  //   progress: 90,
  //   icon: Activity,
  // },
];

const socialLinks = [
  {
    href: 'https://github.com/Shekhar-Joshi07',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://linkedin.com/in/ShekharJoshi07',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'tel:+918368297680',
    label: 'Call',
    icon: Phone,
  },
];

const Hero = () => {
  const reducer = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: reducer ? 0 : 0.2,
      },
    },
  };

  const copyVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionDurations.base,
        ease: motionEasing.entrance,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: motionDurations.relaxed,
        ease: motionEasing.entrance,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-4 py-20 md:px-10 lg:px-16 lg:py-32"
    >




      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-ink to-midnight" />
      <div className="absolute inset-0 opacity-40 bg-noisy-gradient" />
      <motion.div
        className="absolute -top-32 right-10 h-64 w-64 rounded-full bg-cobalt/10 blur-3xl will-change-transform"
        animate={
          reducer
            ? {}
            : {
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.6, 0.35],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-blush/15 blur-[140px] will-change-transform"
        animate={
          reducer
            ? {}
            : {
                scale: [1.1, 0.95, 1.1],
                opacity: [0.25, 0.4, 0.25],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-[1] mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <motion.div variants={copyVariants} className="space-y-6">
          <span className="card-chip inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm text-foam backdrop-blur">
            <Sparkles className="h-4 w-4 text-blush" />
            Building web and mobile applications
          </span>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-fog/70">Chandra Shekhar Joshi</p>
            <h1 className="font-serif text-[clamp(2.8rem,5vw,4.75rem)] leading-tight text-foam">
              Building reliable web and mobile applications.
            </h1>
          </div>
          <p className="max-w-2xl text-lg text-fog/80">
            Full-stack developer with 3+ years of experience building web and mobile applications. 
            I specialize in React, Node.js, and creating user-friendly experiences.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-fog/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blush" />
              Dehradun, Uttarakhand / open to remote
            </div>
            <div className="hidden h-3 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-cobalt" />
              3+ years of full-stack delivery
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <motion.a
              href="mailto:shekharjoshi@zohomail.in"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-foam shadow-aurora transition hover:bg-white/20"
              whileHover={reducer ? undefined : { y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="h-4 w-4" />
              Say hello
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href="/src/resume/Chandra-Shekhar-Joshi-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-foam/80 transition hover:text-foam"
              whileHover={reducer ? undefined : { y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="h-4 w-4" />
              Download resume
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foam transition hover:border-white/30 hover:bg-white/15"
                  whileHover={reducer ? undefined : { y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={cardVariants} className="relative">
          <div className="glass-panel relative rounded-[32px] border border-white/10 p-8">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foam">
              Open to Full-time Roles
            </div>

            {/* Header Section */}
            <div className="mb-8 space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-fog/60">Current focus</p>
              <h3 className="font-serif text-3xl leading-tight text-foam">
                Agentic & Generative AI Solutions
              </h3>
              <p className="text-base leading-relaxed text-fog/80">
                Building autonomous agents, RAG pipelines, and generative UI experiences.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="space-y-5">
              {capabilityStories.map((capability) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={capability.title}
                    className="card-surface-alt rounded-3xl p-5 transition-all hover:bg-white/[0.08]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                        <Icon className="h-5 w-5 text-foam" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-fog/70">
                            {capability.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-foam">
                            {capability.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-xs text-fog/60">
                          <span>{capability.tools}</span>
                          <span>{capability.metric}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/10">
                          <motion.span
                            className="block h-full rounded-full bg-gradient-to-r from-blush to-cobalt"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${capability.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: motionEasing.entrance }}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="card-chip mt-8 flex items-center justify-between rounded-3xl px-5 py-3.5 text-sm text-fog/80">
              <span>Responds within 24h / Remote-friendly</span>
              <div className="hidden h-2 w-2 rounded-full bg-moss sm:block" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
        animate={
          reducer
            ? {}
            : {
                y: [0, -8, 0],
              }
        }
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-fog/60">
          <span className="h-px w-12 bg-white/20" />
          Scroll to explore
          <span className="h-px w-12 bg-white/20" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
