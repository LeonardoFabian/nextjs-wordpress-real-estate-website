/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        // font-title font-heading font-body
        title: "var(--font-great-vibes)",
        heading: "var(--font-signika-negative)",
        body: "var(--font-biryani)",
      },
    },
  },
  plugins: [],
};
