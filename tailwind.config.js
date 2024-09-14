/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ajuste de acordo com seus arquivos
  ],
  theme: {
    extend: {
      colors: {
        'base-blue': '#3294f8',
        'base-title': '#e7edf4',
        'base-subtitle': '#c4d4e3',
        'base-text': '#afc2d4',
        'base-span': '#7b96b2',
        'base-label': '#3a536b',
        'base-border': '#1c2f41',
        'base-post': '#112131',
        'base-profile': '#0b1b2b',
        'base-background': '#071422',
        'base-input': '#040f1a',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      lineHeight: {
        160: '160%',
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      boxShadow: {
        custom: '0 2px 28px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  // plugins: [require('@tailwindcss/line-clamp')],
};
