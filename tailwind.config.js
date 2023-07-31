/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#86895D",
        secondGreen: "#54582F",
        bgPage: "#BDAFAA",
        grayBase: "#AFAFAF",
        darkGray: "#616370",
        black: "#000",
        white: "#fff",
        screen: "#6B5D04",
        aBButton: "#6D1841"
      },
      fontFamily:{
        inter: ['var(--font-inter)'],
        smooch: ['var(--font-smooch)'],
        gwendolyn: ['var(--font-gwendolyn)'],
        poppins: ['var(--font-poppins)'],
        pressStart2P: ['var(--font-pressStart2P)'],
      }
    },
  },
  plugins: [],
}
