import { memo, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Logo from './Logo';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isLoading]);

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
          className="fixed inset-0 z-[9999] flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-midnight via-ink to-midnight touch-none select-none overscroll-none pb-40 md:pb-0"
        >
          <span className="sr-only">Preparing experience…</span>
          <Logo />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(Preloader);
