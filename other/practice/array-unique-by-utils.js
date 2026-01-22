export const uniqueBy = (arr, iteratee) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  const seen = new Set();
  return arr.filter(item => {
    const applied = iteratee(item);
    if (seen.has(applied)) {
      return false;
    } else {
      seen.add(applied);
      return true;
    }
  });
};