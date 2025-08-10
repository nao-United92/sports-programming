const identity = (x) => x;

export const countBy = (arr, iteratee = identity) => {
  if (!Array.isArray(arr)) {
    return {};
  }
  const callback = typeof iteratee === 'function' ? iteratee : (obj) => obj[iteratee];

  return arr.reduce((acc, item) => {
    const key = callback(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
};
