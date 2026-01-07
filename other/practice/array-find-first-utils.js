const findFirst = (array, predicate) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the second argument.');
  }

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
};

module.exports = { findFirst };
