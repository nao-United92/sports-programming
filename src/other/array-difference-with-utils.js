
/**
 * Creates an array of `array` values not included in the other given arrays using a comparator function.
 * The comparator is invoked to compare elements of `array` to the elements of `other`.
 *
 * @param {Array} array The array to inspect.
 * @param {Array} other The array to exclude values from.
 * @param {Function} comparator The function invoked per iteration.
 * @returns {Array} Returns the new difference array.
 */
export const differenceWith = (array, other, comparator) => {
  if (!Array.isArray(array) || !Array.isArray(other) || typeof comparator !== 'function') {
    return [];
  }

  return array.filter(item => {
    return !other.some(otherItem => comparator(item, otherItem));
  });
};
