const groupBy = (arr, keyOrFn) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument');
  }
  const getKey = typeof keyOrFn === 'function' ? keyOrFn : (item) => item[keyOrFn];

  return arr.reduce((acc, item) => {
    const key = getKey(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

module.exports = { groupBy };
