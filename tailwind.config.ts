import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: '#f2f3f5',
      'gray-line': '#dcdde0',
      text: '#666',
      'text-highlight': '#b3b9ff',
      title: '#2e384d',
      red: '#e83f5b',
      green: '#4cd62b',
      blue: '#5965e0',
      'blue-dark': '#4953b8',
      'blue-twitter': '#2aa9e0',
      white: '#ffffff',
    },
    extend: {
      fontFamily: {
        rajdhani: ['var(--font-rajdhani)'],
      },
    },
  },
  plugins: [],
}
export default config
