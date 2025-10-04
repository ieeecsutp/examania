module.exports = ctx => ({
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    autoprefixer: {},
    cssnano:
      ctx.env === 'production'
        ? {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
                normalizeWhitespace: true,
              },
            ],
          }
        : false,
  },
});
