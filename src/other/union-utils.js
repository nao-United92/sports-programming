/**
 * Creates an array of unique values, in order, from all given arrays.
 *
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 */
export function union(...arrays) {
  const result = [];
  const seen = new Set();

  for (const array of arrays) {
    if (Array.isArray(array)) {
      for (const item of array) {
        if (!seen.has(item)) {
          seen.add(item);
          result.push(item);
        }
      }
    }
  }

  return result;
}