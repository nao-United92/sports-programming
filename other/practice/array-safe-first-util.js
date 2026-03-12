const arraySafeFirst = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  return arr.length > 0 ? arr[0] : undefined;
};

module.exports = arraySafeFirst;
