export const groupBy = (arr, fn) =>
  arr.reduce((acc, val) => {
    const key = typeof fn === 'function' ? fn(val) : val[fn];
    (acc[key] || (acc[key] = [])).push(val);
    return acc;
  }, {});
