/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        library: {
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
}
