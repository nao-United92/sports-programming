// Recursively flattens an array.
export const flattenDeep = (arr) => {
  return arr.reduce((acc, val) => (Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)), []);
};