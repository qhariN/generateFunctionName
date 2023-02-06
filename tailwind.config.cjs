/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        text: 'text 15s ease infinite',
        blink: 'blink 1.4s infinite both'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        blink: {
          '0%': {
            opacity: '0.2',
          },
          '20%': {
            opacity: '1',
          },
          '100%': {
            opacity: ' 0.2'
          }
        }
      }
    }
  },
  plugins: [
    plugin(({ matchUtilities, addComponents, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => ({
            'animation-delay': value
          })
        },
        {
          values: theme('transitionDelay')
        }
      ),
      addComponents({
        '.blob1': {
          width: '332.3399658203125px',
          height: '258.9972229003906px',
          backgroundImage: 'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22432.34%22 height=%22358.997%22 viewBox=%22336.171 231.228 432.34 358.997%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M660.5 574Q415 648 348 384.5t245.5-74Q906 500 660.5 574Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23fb7185%22 d=%22M660.5 574Q415 648 348 384.5t245.5-74Q906 500 660.5 574Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")'
        },
        '.blob2': {
          width: '348.44647216796875px',
          height: '237.813720703125px',
          backgroundImage: 'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22348.446%22 height=%22237.814%22 viewBox=%22396.777 399.749 348.446 237.814%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M622.5 601q-238.5 101-225-77T636 423q225 77-13.5 178Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23d946ef%22 d=%22M622.5 601q-238.5 101-225-77T636 423q225 77-13.5 178Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")'
        }
      })
    })
  ]
}
