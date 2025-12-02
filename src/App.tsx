import { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Education = lazy(() => import('./components/sections/Education'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MIN_DISPLAY = 3500;
    const start = performance.now();
    let releaseTimeout: number | null = null;

    const finish = () => {
      if (releaseTimeout) return;
      const elapsed = performance.now() - start;
      const remaining = Math.max(MIN_DISPLAY - elapsed, 0);
      releaseTimeout = window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    const hardStop = window.setTimeout(finish, MIN_DISPLAY + 800);

    return () => {
      window.removeEventListener('load', finish);
      if (releaseTimeout) window.clearTimeout(releaseTimeout);
      window.clearTimeout(hardStop);
    };
  }, []);

  return (
    <>
      <ParticlesBackground />
      <Preloader isLoading={isLoading} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: isLoading ? 0.2 : 0 }}
        className={isLoading ? 'pointer-events-none select-none' : ''}
        style={{ filter: isLoading ? 'blur(4px) brightness(0.7)' : 'none' }}
      >
        <Navigation />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <About />
            <Skills />
            <Experience />
            <Projects />
            {/* <Education /> */}
            <Contact />
          </Suspense>
        </main>
      </motion.div>
    </>
  );
}

export default App;
