/**
 * Performs a deep comparison between two arrays to determine if they are equivalent.
 * This function recursively compares nested arrays and objects.
 *
 * @param {Array} arr1 The first array to compare.
 * @param {Array} arr2 The second array to compare.
 * @returns {boolean} True if the arrays are deeply equal, false otherwise.
 */
function arrayDeepEquals(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Expected both arguments to be arrays.');
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    const val2 = arr2[i];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!arrayDeepEquals(val1, val2)) {
        return false;
      }
    } else if (typeof val1 === 'object' && val1 !== null && typeof val2 === 'object' && val2 !== null) {
      // Basic object comparison - not full deep comparison for objects, but sufficient for arrays of objects
      // For a more robust solution, a separate deepEqualObjects function would be needed.
      if (JSON.stringify(val1) !== JSON.stringify(val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
}

module.exports = arrayDeepEquals;
