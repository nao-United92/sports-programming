const round = (number, precision = 0) => {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

module.exports = { round };
