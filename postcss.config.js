module.exports = {
  plugins: [
    require('postcss-preset-env')({
      browsers: 'last 3 versions',
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
