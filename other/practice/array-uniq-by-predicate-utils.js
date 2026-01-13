
export const uniqByPredicate = (arr, predicate) => {
  const seen = new Set();
  return arr.filter(item => {
    const key = predicate(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};
