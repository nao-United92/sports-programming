const groupByPredicate = (arr, predicate) => {
  const result = {};
  arr.forEach((item) => {
    const key = predicate(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  });
  return result;
};

module.exports = { groupByPredicate };
