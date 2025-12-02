const noiseTexture =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22%3E%3Crect width=%2240%22 height=%2240%22 fill=%22rgba(0,0,0,0)%22/%3E%3Cg fill=%22rgba(255,255,255,0.04)%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%220.8%22/%3E%3Ccircle cx=%2215%22 cy=%229%22 r=%220.6%22/%3E%3Ccircle cx=%2226%22 cy=%222%22 r=%220.5%22/%3E%3Ccircle cx=%220%22 cy=%2218%22 r=%220.7%22/%3E%3Ccircle cx=%2219%22 cy=%2224%22 r=%220.9%22/%3E%3Ccircle cx=%2233%22 cy=%2217%22 r=%220.8%22/%3E%3Ccircle cx=%228%22 cy=%2232%22 r=%220.6%22/%3E%3Ccircle cx=%2231%22 cy=%2235%22 r=%220.5%22/%3E%3Ccircle cx=%221%22 cy=%2237%22 r=%220.7%22/%3E%3C/g%3E%3C/svg%3E')";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#60A5FA',
        midnight: '#05060b',
        ink: '#0b0f19',
        charcoal: '#151a24',
        graphite: '#272d3d',
        fog: '#9fb2c6',
        foam: '#f5f3ef',
        blush: '#f8c8d8',
        moss: '#72dfb1',
        amber: '#f2a65a',
        cobalt: '#7dd3fc',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', '"Playfair Display"', 'serif'],
      },
      borderRadius: {
        '5xl': '2.75rem',
      },
      backgroundImage: {
        'spotlight-soft':
          'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 55%)',
        'spotlight-strong':
          'radial-gradient(circle at 80% 0%, rgba(120, 250, 214, 0.25), transparent 60%)',
        'noisy-gradient':
          'linear-gradient(130deg, rgba(121,40,202,0.25), rgba(26,128,207,0.2))',
        'noise-texture': noiseTexture,
      },
      boxShadow: {
        aurora: '0 35px 80px rgba(5, 6, 11, 0.65)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'soft-border': '0 0 0 1px rgba(255,255,255,0.04)',
      },
      dropShadow: {
        glow: '0 10px 25px rgba(125, 211, 252, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'soft-pulse': 'softPulse 8s ease-in-out infinite',
        'orb-drift': 'orbDrift 14s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        softPulse: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.05)' },
        },
        orbDrift: {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(15px, -25px, 0) scale(1.05)' },
          '66%': { transform: 'translate3d(-15px, 20px, 0) scale(0.95)' },
          '100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '48px',
      },
      transitionTimingFunction: {
        'gentle-spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
