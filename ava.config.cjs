module.exports = () => {
  return {
    require: ['@babel/register', './test/helpers/ava.setup.js'],
    ignoredByWatcher: ['!**/*.{js,vue}'],
    tap: true,
    verbose: true,
    color: true,
  }
}
