/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of compacted values.
 */
export const compact = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.filter(Boolean);
};