const last = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
};

module.exports = { last };
