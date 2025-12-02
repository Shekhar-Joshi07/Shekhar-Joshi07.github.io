import type { Spring, Transition } from 'framer-motion';

export const motionDurations = {
  shortest: 0.2,
  short: 0.35,
  base: 0.6,
  relaxed: 0.9,
  long: 1.25,
} as const;

export const motionEasing: Record<string, Transition['ease']> = {
  entrance: [0.16, 1, 0.3, 1],
  exit: [0.4, 0, 0.2, 1],
  bounce: [0.34, 1.56, 0.64, 1],
};

export const springs: Record<string, Spring> = {
  gentle: { type: 'spring', stiffness: 120, damping: 20, mass: 0.8 },
  floating: { type: 'spring', stiffness: 65, damping: 16, mass: 1.1 },
  crisp: { type: 'spring', stiffness: 180, damping: 24, mass: 0.7 },
};

export const zLayers = {
  base: 0,
  content: 1,
  overlay: 5,
  navigation: 10,
  cursor: 40,
} as const;

export const layoutTokens = {
  maxWidth: '1200px',
  sectionPadding: { x: 'clamp(1.25rem, 4vw, 6rem)', y: 'clamp(4rem, 8vw, 7rem)' },
};
