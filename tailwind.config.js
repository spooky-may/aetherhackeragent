/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#ffe6cb',
        godteal: '#1B3125', // Updated to an aesthetic dark forest/olive green
        'accent-teal': '#17a2a2',
        'divine-green': '#00dd66',
        'sacred-purple': '#b74a9e',
        'divine-gold': '#d4af37',
      },
      fontFamily: {
        expanded: ['var(--font-cinzel-decorative)', 'serif'],
        mondwest: ['var(--font-cormorant-garamond)', 'serif'],
        courier: ['var(--font-fira-code)', 'monospace'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
