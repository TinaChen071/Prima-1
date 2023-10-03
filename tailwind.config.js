/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}","*.html","./js/*.{html,js}","node_modules/preline/dist/*.js"],
  theme: {
    // screens: {
    //   'xs': '425px',
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
    extend: {
      colors: {
        'custom__primary': '#D02424',
        'custom__secondary': '#C6D292',
        'custom__third': '#F0F5E1',
        'custom__forth': '#D9ECB1',
        'custom__alert': '#D02424',
        'custom__brand': '#BB241D',
      },
      screens: {
        'xs': '480px'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '1/5': '20%',
        '4/5': '80%',
        '5/6': '83%',
        '6/5': '120%',
        '1/10': '10%',
        '1/20': '5%',
      },
      minHeight: {
        '1/2': '50%',
      },
      height: {
        'slider': '480px',
      },
      zIndex: {
        '100': '100',
      },
    },
    fontFamily: {
      num:['Water Brush']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('preline/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
  
}
