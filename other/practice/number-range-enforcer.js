const clamp = (number, lower, upper) => {
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper);
  return Math.max(min, Math.min(number, max));
};

module.exports = { clamp };
