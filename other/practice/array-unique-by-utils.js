export const uniqueBy = (array, iteratee) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }
  if (typeof iteratee !== 'function' && typeof iteratee !== 'string') {
    throw new TypeError('Expected an iteratee function or string');
  }

  const seen = new Set();
  const result = [];

  for (const item of array) {
    const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
};
