const dropRight = (arr, n = 1) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return n > 0 ? arr.slice(0, -n) : arr.slice();
};

module.exports = { dropRight };
