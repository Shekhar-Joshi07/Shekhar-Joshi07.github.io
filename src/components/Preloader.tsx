import { memo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Logo from './Logo';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => {
  const prefersReducedMotion = useReducedMotion();

  const exitAnimation = prefersReducedMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        scale: 4,
        filter: 'blur(5px)',
      };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={exitAnimation}
          transition={{ duration: 0.7, ease: [0.65, 0.05, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-midnight via-ink to-midnight"
        >
          <span className="sr-only">Preparing experience…</span>
          <Logo />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(Preloader);
