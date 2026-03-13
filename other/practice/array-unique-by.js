export const uniqueBy = (arr, fn) => {
  const seen = new Set();
  return arr.filter((val) => {
    const key = typeof fn === 'function' ? fn(val) : val[fn];
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};
