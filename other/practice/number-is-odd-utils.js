const isOdd = (num) => {
  return typeof num === 'number' && Number.isFinite(num) && Number.isInteger(num) && num % 2 !== 0;
};

module.exports = isOdd;