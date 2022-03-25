module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-inline-svg': {
      paths: ['./src/assets'],
    },
    cssnano: {
      // https://cssnano.co/docs/what-are-optimisations/
      preset: 'default',
    },
  },
};
