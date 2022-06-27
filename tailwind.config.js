/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 0px rgba(48, 49, 51, 0.04), 0px 4px 8px rgba(48, 49, 51, 0.08)'
      },
      backgroundColor: {
        custom: '#F5F5F5'
      },
      screens: {
        big: '1644px'
      }
    },
    // screens: {
      // big: '1644px'
    // }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
