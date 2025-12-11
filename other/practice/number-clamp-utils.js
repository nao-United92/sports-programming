const clamp = (number, lower, upper) => {
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper);
  return Math.min(Math.max(number, min), max);
};

module.exports = clamp;
