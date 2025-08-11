export const flatten = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.reduce((acc, val) => acc.concat(val), []);
};

export const flattenDepth = (array, depth = 1) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return depth > 0
    ? array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenDepth(val, depth - 1) : val), [])
    : array.slice();
};
