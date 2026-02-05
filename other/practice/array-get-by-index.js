const get = (arr, index) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  const i = index < 0 ? arr.length + index : index;
  return i >= 0 && i < arr.length ? arr[i] : undefined;
};

module.exports = { get };
