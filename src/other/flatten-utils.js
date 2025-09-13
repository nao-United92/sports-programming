/**
 * Flattens a nested array into a single-level array.
 *
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
export function flatten(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}