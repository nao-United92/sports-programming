const arraySample = (arr, n = 1) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (n < 0) {
    throw new RangeError('Expected n to be a non-negative number.');
  }
  if (n === 0) {
    return [];
  }
  if (n >= arr.length) {
    return [...arr];
  }

  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

module.exports = arraySample;
