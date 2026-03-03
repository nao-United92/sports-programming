/**
 * Iterates over elements of an array from right to left and returns the first 
 * element that the predicate returns truthy for.
 * 
 * @param {Array} array - The array to inspect.
 * @param {Function} predicate - The function invoked per iteration.
 * @returns {*} Returns the matched element, else undefined.
 */
export const findLast = (array, predicate) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
};
