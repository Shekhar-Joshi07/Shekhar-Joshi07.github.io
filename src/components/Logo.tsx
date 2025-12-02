import { motion } from 'framer-motion';

const Logo = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-32 h-32 flex items-center justify-center"
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute w-full h-full fill-none stroke-[3]"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7de1c3" />
            <stop offset="50%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#f8c8d8" />
          </linearGradient>
        </defs>
        <motion.path
          d="M50 10 L90 50 L50 90 L10 50 Z"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          stroke="url(#logoGradient)"
        />
      </svg>
      <motion.h3
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-200 via-sky-200 to-rose-200 relative z-10"
      >
        SJ
      </motion.h3>
    </motion.div>
  );
};

export default Logo;
