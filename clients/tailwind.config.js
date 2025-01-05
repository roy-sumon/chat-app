/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_text: 'white',
        secondary_text: '#EEEEEE',
        custom_bg_one: '#201E43', 
        custom_bg_two: '#134B70',
        custom_bg_three: '#508C9B',
      },
    },
  },
  plugins: [],
}

