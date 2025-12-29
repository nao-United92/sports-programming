export const keyBy = (arr, iteratee) => {
  return arr.reduce((acc, item) => {
    const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    acc[key] = item;
    return acc;
  }, {});
};
