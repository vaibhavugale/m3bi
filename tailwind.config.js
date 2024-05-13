/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": '#063363', 
        "text-light-blue":"#67D0ED",// Your custom color
        "bg-light":"#E8F4FD",
        "b-blue":"#4CABF7"
      },
      
    },
  },
  plugins: [],
}