// @type {import('tailwindcss').Config}

module.exports = {
  content: ["./src/**/*.{html,js;ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // you can either spread `colors` to apply all the colors
        red:"red",
        black: "black",
      }
    },
  },
  plugins: [],
}

