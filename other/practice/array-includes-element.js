const includes = (arr, value) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.includes(value);
};

module.exports = { includes };
