/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        'custom-360': '0 0 20px 10px rgba(0, 0, 0, 0.2)', // 360-degree shadow effect
      },
      colors: {
        customColor: '#203641',
        customCol: '#17262A'
      },


    },
  },
  plugins: [],
}