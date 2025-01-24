/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1060px',
      xl: '1250px',
    },
    extend: {
      colors: {
        primary: '#493f3c',
        secondary: '#ebe1cc',
        accent: {
          DEFAULT: '#f7a55a',
          hover: '#f78a19',
        },
      },
    },
  },
  plugins: [],
};
