/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: 'var(--tw-prose-body)',
              maxWidth: '100vw',
            }
          ]
        }
      })
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
