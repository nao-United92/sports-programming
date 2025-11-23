/**
 * Creates an array of unique values that are included in either of the two given arrays, but not both.
 *
 * @param {Array} array The first array.
 * @param {Array} other The second array.
 * @returns {Array} Returns the new array of values.
 */
export const differenceSymmetric = (array, other) => {
  if (!Array.isArray(array) || !Array.isArray(other)) {
    return [];
  }
  const sA = new Set(array);
  const sB = new Set(other);
  return [...array.filter(x => !sB.has(x)), ...other.filter(x => !sA.has(x))];
};
