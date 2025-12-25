const pipe = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)), arg => arg);

module.exports = { pipe };