const drop = (arr, n = 1) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.slice(n);
};

module.exports = { drop };
