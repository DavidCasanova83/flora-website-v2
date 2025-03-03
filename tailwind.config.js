/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  safelist: [
    'left-0',
    '-left-[300px]'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      lineHeight: {
        '120': '120%',
      },
      colors: {
        'primary': '#242a2b',
        'secondary': '#808080',
        accent: {
          DEFAULT: '#e2bb9e',
          secondary: '#FFFFFF',
          tertiary: '#F5C39E',
        },
        grey: '#EEEAE6',
      },
      fontFamily: {
        primary: 'Poppins',
      },
      boxShadow: {
        custom1: '0 2px 40px 0 rgba(8, 70, 78, 0.08)',
        custom2: '0 0px 30px 0 rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: { 
        services: "url('./assets/img/services/bg.svg')",
        testimonials: "url('./assets/img/testimonials/bg.svg')",
        departments: "url('./assets/img/departments/bg.svg')",
        quoteLeft: "url('./assets/img/testimonials/quote-left.svg')",
        quoteRight: "url('./assets/img/testimonials/quote-right.svg')",
      },
    },
  },
  plugins: [],
};