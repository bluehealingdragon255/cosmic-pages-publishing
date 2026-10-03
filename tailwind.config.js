module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050816',
        eclipse: '#0d1223',
        nebula: '#8d7dff',
        aurora: '#74f0d8',
        comet: '#ffb4d9',
        moon: '#e7ebff'
      },
      boxShadow: {
        glow: '0 0 30px rgba(141, 125, 255, 0.35)',
        panel: '0 20px 60px rgba(5, 8, 22, 0.65)'
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace']
      }
    }
  },
  plugins: []
};
