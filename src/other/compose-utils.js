const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)));

const pipe = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)));

module.exports = { compose, pipe };
