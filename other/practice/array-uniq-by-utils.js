const uniqBy = (arr, iteratee) => {
  if (!Array.isArray(arr)) {
    return [];
  }

  const seen = new Set();
  const result = [];

  for (const item of arr) {
    const computed = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    if (!seen.has(computed)) {
      seen.add(computed);
      result.push(item);
    }
  }

  return result;
};

module.exports = uniqBy;
