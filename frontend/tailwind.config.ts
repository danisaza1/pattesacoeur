// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Esta es una forma más general de incluir todo en 'app'
    './components/**/*.{js,ts,jsx,tsx,mdx}', 
  
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fffaf7',
        secondary: '#ff6d38', 
        accent: '#7a78ff',
        heading: '#333333',
        light: '#f9f9f9',
        dark: '#333333',
        danger: '#e74c3c',
      },
      fontFamily: {
        heading: ['"Amatic SC"', 'sans-serif'],
        autres: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config