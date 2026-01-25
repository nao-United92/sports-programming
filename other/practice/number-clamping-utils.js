const clamp = (num, lower, upper) => {
  return Math.min(Math.max(num, lower), upper);
};

module.exports = { clamp };
