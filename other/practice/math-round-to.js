const roundTo = (n, decimals = 0) => {
  return Number(Math.round(n + "e" + decimals) + "e-" + decimals);
};
module.exports = roundTo;