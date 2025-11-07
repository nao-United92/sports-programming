/**
 * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons.
 * The order of result values is determined by the order they occur in the array.
 *
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 */
export const unique = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return [...new Set(array)];
};
