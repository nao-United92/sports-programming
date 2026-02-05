const flatten = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.flat();
};

module.exports = { flatten };
