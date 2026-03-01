const mathInRange = (num, a, b = 0) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return num >= min && num < max;
};

module.exports = mathInRange;
