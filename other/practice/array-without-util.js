const without = (arr, ...args) => {
  const argSet = new Set(args);
  return arr.filter(x => !argSet.has(x));
};

module.exports = without;
