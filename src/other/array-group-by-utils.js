
export const groupBy = (arr, iteratee) => {
  return arr.reduce((acc, val) => {
    const key = typeof iteratee === 'function' ? iteratee(val) : val[iteratee];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(val);
    return acc;
  }, {});
};
