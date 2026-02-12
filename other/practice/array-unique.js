/**
 * Creates a duplicate-free version of an array.
 *
 * @param {Array} arr The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 */
function unique(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return [...new Set(arr)];
}

export { unique };
