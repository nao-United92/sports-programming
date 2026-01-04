const partitionByPredicate = (arr, predicate) => {
  const truthy = [];
  const falsy = [];
  arr.forEach(item => {
    if (predicate(item)) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  });
  return [truthy, falsy];
};

module.exports = { partitionByPredicate };
