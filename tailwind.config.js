/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],

  theme: {
    extend: {
      fontFamily:{
        'custom':["Fascinate Inline", 'system-ui'],
        'hand-write':["Nanum Pen Script", 'cursive'],
        'hand-write-2':["Pacifico", 'cursive']
      },
      dropShadow:{
        'light': '0 0px 10px rgb(255, 248, 232)',
        'dark': '0px 0px 5px rgba(0, 0, 0, 0.7)'

      }
    },
  },
  plugins: [],
}

