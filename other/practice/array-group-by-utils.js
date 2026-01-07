const groupBy = (array, iteratee) => {
  if (!Array.isArray(array)) {
    return {};
  }

  const iterateeFunc = typeof iteratee === 'function'
    ? iteratee
    : (item) => item[iteratee];

  return array.reduce((result, item) => {
    const key = iterateeFunc(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
};

module.exports = { groupBy };
