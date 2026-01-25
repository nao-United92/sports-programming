const uniqueBy = (arr, fn) => {
  const seen = new Set();
  return arr.filter((el) => {
    const applied = fn(el);
    if (seen.has(applied)) {
      return false;
    }
    seen.add(applied);
    return true;
  });
};

module.exports = { uniqueBy };
