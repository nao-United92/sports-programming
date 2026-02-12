/**
 * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order of the
 * corresponding values in the `arrays`.
 *
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {Array} Returns the new array of filtered values.
 */
function difference(arr1, arr2) {
  if (!Array.isArray(arr1)) {
    return [];
  }
  if (!Array.isArray(arr2)) {
    return [...new Set(arr1)]; // If arr2 is not an array, return unique elements of arr1
  }

  const s2 = new Set(arr2);
  const result = arr1.filter(item => !s2.has(item));
  return [...new Set(result)]; // Ensure unique values in the result
}

export { difference };
