// Flattens an array up to a specified depth.
export const flattenNLevel = (arr, depth = 1) => {
  if (depth === 0) {
    return arr;
  }
  return arr.reduce((acc, val) => {
    if (Array.isArray(val) && depth > 0) {
      return acc.concat(flattenNLevel(val, depth - 1));
    }
    return acc.concat(val);
  }, []);
};