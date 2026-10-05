/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          light: '#FF9E2C',
          dark: '#B36200',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          light: '#10B981',
          dark: '#046837',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        dark: {
          DEFAULT: 'var(--dark)',
          card: '#131F33',
          border: '#1E2D4A',
        },
        light: {
          DEFAULT: 'var(--light)',
          card: '#FFFFFF',
          muted: '#E2E8F0',
        }
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(224, 122, 0, 0.4)' },
          '50%': { boxShadow: '0 0 28px rgba(224, 122, 0, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
