import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@kobalte/tailwindcss'),
  ],
} satisfies Config

