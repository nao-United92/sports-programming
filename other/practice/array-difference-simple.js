/**
 * Computes the difference between two arrays.
 * Returns a new array containing elements that are in `arr1` but not in `arr2`.
 *
 * @param {Array<any>} arr1 The array to inspect.
 * @param {Array<any>} arr2 The array to compare against.
 * @returns {Array<any>} A new array of filtered values.
 */
const arrayDifferenceSimple = (arr1, arr2) => {
  const set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
};

export default arrayDifferenceSimple;