
const uniqBy = (array, iteratee) => {
  const seen = new Set();
  return array.filter((x) => {
    const key = typeof iteratee === 'function' ? iteratee(x) : x[iteratee];
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

module.exports = uniqBy;
