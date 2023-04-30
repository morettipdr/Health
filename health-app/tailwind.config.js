/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        landing: "#008E39",
        buttons: "#05751f",
        colorLogin: "#2B2B2B",
        whiteLogin: "#D9D9D9",
        userLogin: "#2C6238",
        googleSignIn: "#717171",
        bgGoogle: "#E3E3E3", 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
      spacing: {
        "loginInput": "2.5rem"
      }
    },
  },
  plugins: [],
}
