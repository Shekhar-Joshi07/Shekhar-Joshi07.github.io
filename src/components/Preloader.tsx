import { memo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Logo from './Logo';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (isLoading) {
      // Force scroll to top immediately
      window.scrollTo(0, 0);
      
      // Prevent scrolling via event listeners
      const preventDefault = (e: Event) => {
        e.preventDefault();
      };
      
      // Lock overflow
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100vh';
      
      // Prevent scroll events
      window.addEventListener('wheel', preventDefault, { passive: false });
      window.addEventListener('touchmove', preventDefault, { passive: false });
      
      return () => {
        // Restore
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.documentElement.style.overflow = '';
        document.documentElement.style.height = '';
        
        // Remove listeners
        window.removeEventListener('wheel', preventDefault);
        window.removeEventListener('touchmove', preventDefault);
      };
    }
  }, [isLoading]);

  const exitAnimation = prefersReducedMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        scale: 4,
        filter: 'blur(5px)',
      };

  return createPortal(
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={exitAnimation}
          transition={{ duration: 0.7, ease: [0.65, 0.05, 0.36, 1] }}
          className="bg-gradient-to-br from-midnight via-ink to-midnight touch-none select-none"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100dvh',
            margin: 0,
            padding: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            overscrollBehavior: 'none',
          }}
        >
          <span className="sr-only">Preparing experience…</span>
          <div style={{ margin: 0, padding: 0 }}>
            <Logo />
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default memo(Preloader);
