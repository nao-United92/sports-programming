const groupBy = (array, iteratee) => {
  if (!Array.isArray(array)) {
    return {};
  }

  return array.reduce((acc, item) => {
    const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

module.exports = groupBy;
