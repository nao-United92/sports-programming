const arrayPluck = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof key !== 'string' && typeof key !== 'symbol') {
    throw new TypeError('Expected key to be a string or symbol.');
  }

  return arr.map(item => (item && typeof item === 'object' && key in item) ? item[key] : undefined);
};

module.exports = arrayPluck;