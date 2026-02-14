const findLast = (arr, predicate) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Predicate must be a function');
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};

module.exports = { findLast };
