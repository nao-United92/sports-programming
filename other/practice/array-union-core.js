const union = (...arrays) => {
  if (arrays.some(arr => !Array.isArray(arr))) {
    throw new TypeError('All arguments must be arrays');
  }
  return [...new Set(arrays.flat())];
};

module.exports = { union };
