/**
 * Computes the difference between two arrays, returning a new array
 * of elements from the first array that are not present in the second array.
 * The comparison is done using strict equality (===).
 *
 * @param {Array<any>} arr1 The first array.
 * @param {Array<any>} arr2 The second array.
 * @returns {Array<any>} A new array containing elements from arr1 not found in arr2.
 */
function arrayDifferenceSimple(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Both arguments must be arrays.');
  }

  const arr2Set = new Set(arr2);
  const result = [];

  for (const element of arr1) {
    if (!arr2Set.has(element)) {
      result.push(element);
    }
  }

  return result;
}

module.exports = arrayDifferenceSimple;
