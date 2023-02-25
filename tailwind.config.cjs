/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '18px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['32px', '40px'],
      '3xl': ['48px', '56px']
    },
    extend: {
      colors: {
        roxo: {
          900: '#32075E'
        }
      }
    },
  },
  plugins: [],
}
