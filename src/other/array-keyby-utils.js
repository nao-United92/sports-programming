export const keyBy = (array, iteratee) => {
  return array.reduce((result, item) => {
    const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    result[key] = item;
    return result;
  }, {});
};
