import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      container: {},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pinkish: {
          50: '#fff7f7',
          100: '#ffecec',
          200: '#ffcaca',
          300: '#ffaaaa',
          400: '#ff8a8a',
          500: '#ff8080',
          600: '#ff6666', // Cor mais vibrante
          700: '#cc5252',
          800: '#b33b3b',
          900: '#992d2d',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
