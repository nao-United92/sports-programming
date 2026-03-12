const sum = (...args) => {
  return args.reduce((acc, val) => acc + val, 0);
};

module.exports = sum;
