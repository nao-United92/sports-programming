export const groupBy = (arr, fn) => {
  if (!Array.isArray(arr)) {
    return {};
  }
  const iteratee = typeof fn === 'function' ? fn : (val) => val[fn];
  return arr.reduce((acc, val) => {
    const key = iteratee(val);
    acc[key] = acc[key] || [];
    acc[key].push(val);
    return acc;
  }, {});
};
