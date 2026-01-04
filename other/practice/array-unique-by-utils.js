const uniqueBy = (arr, iteratee) => {
  const seen = new Set();
  return arr.filter((item) => {
    const key = iteratee(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};

module.exports = { uniqueBy };