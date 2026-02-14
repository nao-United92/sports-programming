const groupBy = (arr, keyOrIterator) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument');
  }
  if (typeof keyOrIterator !== 'string' && typeof keyOrIterator !== 'function') {
    throw new TypeError('Expected a string or a function for the second argument');
  }

  return arr.reduce((acc, item) => {
    const key = typeof keyOrIterator === 'function' ? keyOrIterator(item) : item[keyOrIterator];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

module.exports = { groupBy };
