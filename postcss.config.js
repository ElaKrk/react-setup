module.exports = () => ({
  plugins: {
    'autoprefixer': {
      browsers: ['last 2 versions', 'OperaMini >= 5', 'Android >= 4', 'Chrome >= 28', 'Safari >= 7', 'ie >= 10'],
      cascade: false
    }
  }
});
