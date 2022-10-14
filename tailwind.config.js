/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      display: ["group-hover"]
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
