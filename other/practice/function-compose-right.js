const functionComposeRight = (...fns) => {
  return fns.reduce((f, g) => (...args) => g(f(...args)));
};

module.exports = functionComposeRight;
