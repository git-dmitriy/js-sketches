module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        blob: 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'scale(1)',
          },
          '33%': {
            transform: 'scale(1.2)',
          },
          '66%': {
            transform: 'scale(0.8)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
