module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sarilaya: {
          purple: '#8e24aa',
          purpleDark: '#7b1fa2',
        },
        minimal: {
          bg: '#f7f7fa',
          gray: '#888',
          border: '#d1c4e9',
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 