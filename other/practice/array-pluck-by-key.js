const pluck = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (typeof key !== 'string' && typeof key !== 'number' && typeof key !== 'symbol') {
    throw new TypeError('Expected key to be a string, number, or symbol');
  }
  return arr.map(item => item && typeof item === 'object' ? item[key] : undefined);
};

module.exports = { pluck };
