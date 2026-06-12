/** @type {import('tailwindcss').Config} */
// Design tokens lifted directly from the Figma file:
//  - palette: the 5 brand swatches on the "Wirk Brand Identity" board
//  - type scale + spacing: the design-spec text node (Hero 56/64, Section 32/40,
//    Subheading 24/32, Body 16/24, Caption 14/20, page margin 80, section gap 96,
//    card padding 24–32, card radius 16–24, button height 48, button px 24)
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14091F',
        plum: { DEFAULT: '#2C243A', deep: '#1A1224' },
        rose: { DEFAULT: '#BE2E5C', wine: '#9B1E40', hot: '#FF004F' },
        pink: { DEFAULT: '#F0B8CC', soft: '#EFC9D3', wash: '#FBEEF4' },
        cloud: '#E9E9E9',
        bone: '#F3F2F0',
      },
      fontFamily: {
        // Original portfolio fonts (from wirked.html)
        display: ['"Roboto Condensed"', 'system-ui', 'sans-serif'],
        cond: ['"League Spartan"', 'system-ui', 'sans-serif'],
        body: ['"Libre Baskerville"', 'Georgia', 'serif'],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        script: ['"Delicious Handrawn"', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
        nunito: ['Nunito', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['56px', { lineHeight: '64px', fontWeight: '700' }],
        'section-title': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        subheading: ['24px', { lineHeight: '32px', fontWeight: '600' }],
        body: ['16px', { lineHeight: '24px' }],
        caption: ['14px', { lineHeight: '20px' }],
      },
      spacing: {
        margin: '80px',
        section: '96px',
        card: '28px',
      },
      borderRadius: {
        card: '20px',
        'card-lg': '24px',
      },
      maxWidth: {
        content: '1120px',
        prose: '760px',
      },
      boxShadow: {
        phone: '0 24px 60px -12px rgba(20,9,31,0.45)',
        'phone-hover': '0 40px 90px -16px rgba(190,46,92,0.45)',
        card: '0 12px 40px -10px rgba(20,9,31,0.18)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
