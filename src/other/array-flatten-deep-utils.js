/**
 * Recursively flattens a nested array.
 *
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
export function flattenDeep(array) {
  if (!Array.isArray(array)) {
    return [array];
  }

  return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
