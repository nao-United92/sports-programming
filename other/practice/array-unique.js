const unique = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return [...new Set(arr)];
};

module.exports = { unique };
