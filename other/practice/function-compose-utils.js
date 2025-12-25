const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)), arg => arg);

module.exports = { compose };