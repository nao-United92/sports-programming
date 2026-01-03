const clamp = (num, lower, upper) => {
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper);
  return Math.min(Math.max(num, min), max);
};

module.exports = clamp;