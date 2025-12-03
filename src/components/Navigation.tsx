import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.85]);
  const navBackground = useTransform(backgroundOpacity, (value) => `rgba(5, 6, 11, ${value})`);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    // { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        style={{ backgroundColor: navBackground }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => scrollToSection('home')}
            className="text-2xl font-semibold tracking-[0.4em] text-foam hover:text-fog/80"
          >
            SJ
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 text-sm text-foam lg:flex"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 transition ${
                  activeSection === item.id ? 'bg-white/20 text-foam shadow-aurora' : 'text-fog/70 hover:text-foam'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : '100%',
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-20 right-0 bottom-0 w-64 card-surface-alt backdrop-blur-xl border-l border-white/10 z-40 lg:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2 p-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : 50,
              }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => scrollToSection(item.id)}
              className={`rounded-2xl px-4 py-3 text-left font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-white/20 text-foam shadow-aurora'
                  : 'text-fog/70 hover:text-foam hover:bg-white/10'
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
        />
      )}

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: scrollY.get() > 400 ? 1 : 0,
          scale: scrollY.get() > 400 ? 1 : 0.9,
        }}
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 z-50 rounded-full border border-white/20 bg-white/10 p-4 text-foam shadow-aurora transition hover:bg-white/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </>
  );
};

export default Navigation;
