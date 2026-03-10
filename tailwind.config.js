/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C5A059", // Richer, more refined metallic luxury gold
        secondary: "#000000", // Return to pure black as requested
        accent: "#F6F5F2", // Premium alabaster/cream for elegant contrasting sections
        white: "#FCFBF8", // Redefine base white to a luxurious warm pearl white
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        cursive: ["Dancing Script", "cursive"],
      }
    },
  },
  plugins: [],
}

