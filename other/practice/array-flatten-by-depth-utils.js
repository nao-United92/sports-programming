export const flattenByDepth = (arr, depth = 1) => {
  if (!Array.isArray(arr) || depth < 1) {
    return arr;
  }
  return arr.reduce((acc, val) => {
    return acc.concat(depth > 1 && Array.isArray(val) ? flattenByDepth(val, depth - 1) : val);
  }, []);
};
