/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'm-pink': '#EA7AF4',
        'm-magenta': '#B43E8F',
        'm-light-purple': '#6200B3',
        'm-violet': '#3B0086',
        'm-dark-purple': '#290628',
        'm-gray': '#F8F7FF',
      },
    },
  },
  plugins: [],
}

