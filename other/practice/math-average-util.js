const average = (...args) => {
  if (args.length === 0) return 0;
  return args.reduce((acc, val) => acc + val, 0) / args.length;
};

module.exports = average;
