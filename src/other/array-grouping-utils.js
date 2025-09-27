export const groupBy = (arr, criterion) => {
  return arr.reduce((acc, item) => {
    const key = typeof criterion === 'function' ? criterion(item) : item[criterion];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

export const partition = (arr, predicate) => {
  return arr.reduce(
    (acc, item) => {
      acc[predicate(item) ? 0 : 1].push(item);
      return acc;
    },
    [[], []]
  );
};

export const countBy = (arr, criterion) => {
  return arr.reduce((acc, item) => {
    const key = typeof criterion === 'function' ? criterion(item) : item[criterion];
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
};
