const filter = (array, predicate) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the second argument.');
  }
  return array.filter(predicate);
};

module.exports = { filter };
