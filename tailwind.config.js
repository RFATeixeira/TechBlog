/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {
      fontSize: {},
      colors: {
        brandcolor: "#846aff",
        brandcolortwo: "#765FE5",
        dark: "#121214",
        grayone: "#7c7c8a",
        graytwo: "#eaeaea",
        graythree: "#eeeeff",
        grayfour: "#f8f8ff",
      },
      spacing: {},
    },
  },
  plugins: [],
};
