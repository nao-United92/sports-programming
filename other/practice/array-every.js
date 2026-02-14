const arrayEvery = (arr, predicate) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the second argument');
  }

  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

module.exports = { arrayEvery };
