const uniqBy = (arr, iteratee) => {
  const seen = new Set();
  return arr.filter(item => {
    const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};

module.exports = { uniqBy };
