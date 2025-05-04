/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        gold: 'linear-gradient(103.01deg, #AE8625 1.55%, #F7EF8A 33%, #D2AC47 66.5%, #EDC967 100%)',
        gold2: 'linear-gradient(90.73deg, #DFBD69 2.16%, #926F34 99.44%)',
        'notification-gradient':
          'linear-gradient(90.73deg, #DFBD69 2.16%, #926F34 99.44%)',
      },
      fontFamily: {
        alexandria: ['Alexandria', 'sans-serif'],
      },
      colors: {
        customGray: '#D1D1D6',
      },
      fontWeight: {
        thin: '100',
        extraLight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
        black: '900',
      },
      boxShadow: {
        custom: '0px 4px 5px 2px #00000026',
      },
    },
  },
  plugins: [],
};
