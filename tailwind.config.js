module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
      extend: {
        width: {
          '30rem': '30rem',
        },
      },
    },
    variants: {},
    plugins: [require('@tailwindcss/forms'),],
  }