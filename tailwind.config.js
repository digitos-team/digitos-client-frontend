/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        accent: '#FFD700',
        light: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 25px 50px -20px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top, rgba(255,215,0,0.4), transparent 55%), linear-gradient(135deg, #fff 0%, #f7f7f0 100%)',
      },
    },
  },
  plugins: [],
}

