const clamp = (number, lower, upper) => {
  return Math.min(Math.max(number, lower), upper);
};

module.exports = { clamp };