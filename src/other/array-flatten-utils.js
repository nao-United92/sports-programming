/**
 * Flattens a nested array one level deep.
 * @param {Array} arr The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
export const flatten = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  // The spread operator with concat is a simple way to flatten one level.
  return [].concat(...arr);
};

/**
 * Recursively flattens a nested array.
 * @param {Array} arr The array to flatten.
 * @returns {Array} Returns the new deeply flattened array.
 */
export const flattenDeep = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
};
