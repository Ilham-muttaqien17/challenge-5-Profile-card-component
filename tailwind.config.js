const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xs': '0.65rem'
      },
      fontFamily: {
        sans: ["Kumbh Sans"]
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 59%)",
        cyan: "hsl(185, 75%, 39%)",
        blue: {
          "100": "hsl(229, 23%, 23%)",
          "200": "hsl(227, 10%, 46%)"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({addUtilities}){
      const utilities = {
        ".bg-test": {
          "background-image": "url(/bg-pattern-top.svg), url(/bg-pattern-bottom.svg)",
          "bcakground-blend-mode": "normal",
          "background-color": "hsl(185, 75%, 39%)",
          "background-repeat": "no-repeat, no-repeat",
          "background-position": "bottom 50vh right 50vw, top 50vh left 50vw"
        },
        ".bg-bottom": {
          "background-image": "url(/bg-pattern-bottom.svg)",
          "background-repeat": "no-repeat",
          "background-position": "right bottom"
        },
        ".bg-card": {
          "background-image": "url(/bg-pattern-card.svg)"
        },
        ".bg-top": {
          "background-image": "url(/bg-pattern-top.svg)",
          "background-repeat": "no-repeat",
          "background-position": "left top",
          "width": "50px"
        }
      };
      addUtilities(utilities);
    })
  ],
}
