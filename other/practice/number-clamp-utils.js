const clamp = (number, lower, upper) => {
  if (number === undefined) {
    return;
  }
  if (number >= lower && number <= upper) {
    return number;
  }
  if (number < lower) {
    return lower;
  }
  return upper;
};

module.exports = { clamp };