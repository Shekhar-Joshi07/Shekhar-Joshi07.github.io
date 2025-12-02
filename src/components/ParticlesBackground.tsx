import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const orbPresets = [
  {
    size: 420,
    top: '-10%',
    left: '8%',
    colors: 'from-cobalt/40 via-transparent to-transparent',
    duration: 24,
    delay: 0,
  },
  {
    size: 360,
    top: '15%',
    right: '5%',
    colors: 'from-blush/35 via-transparent to-transparent',
    duration: 28,
    delay: 4,
  },
  {
    size: 520,
    bottom: '-15%',
    left: '30%',
    colors: 'from-moss/25 via-transparent to-transparent',
    duration: 32,
    delay: 2,
  },
];

const ParticlesBackground = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-ink to-midnight" />
      <div className="absolute inset-0 bg-spotlight-soft opacity-20" />
      <div className="absolute inset-0 bg-noise-texture opacity-20" />

      {orbPresets.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[140px] bg-gradient-to-br will-change-transform ${orb.colors}`}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            opacity: 0.65,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [0.9, 1.08, 1],
                  x: [0, 25, -10],
                  y: [0, -20, 10],
                }
          }
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 will-change-[opacity]"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [0.25, 0.45, 0.25],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-y-0 left-10 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />
        <div className="absolute inset-y-0 right-16 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
      </motion.div>
    </div>
  );
};

export default memo(ParticlesBackground);
