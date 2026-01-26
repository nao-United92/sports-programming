const groupBy = (arr, keyOrIterator) => {
  if (!Array.isArray(arr)) {
    return {};
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
