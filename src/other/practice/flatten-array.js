/**
 * Flattens a nested array.
 *
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
export const flatten = (array) => {
  if (!Array.isArray(array)) {
    return [array];
  }
  return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
};
