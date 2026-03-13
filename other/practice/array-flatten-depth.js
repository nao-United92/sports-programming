export const flattenDepth = (arr, depth = 1) =>
  depth > 0
    ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenDepth(val, depth - 1) : val), [])
    : [...arr];
