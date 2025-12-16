/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // Fallback paths in case you aren't using src
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FE7743',   // Accent, Buttons
          offwhite: '#EFEEEA', // Text on dark backgrounds
          darkblue: '#273F4F', // Secondary backgrounds
          black: '#000000',    // Main background
        }
      }
    },
  },
  plugins: [],
}