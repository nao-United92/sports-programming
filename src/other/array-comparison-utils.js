/**
 * Performs a shallow comparison between two arrays to determine if they have the same elements in the same order.
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {boolean} True if the arrays are shallowly equal, false otherwise.
 */
export function isEqualArray(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Performs a deep comparison between two arrays to determine if they have the same elements in the same order.
 * This function can handle nested arrays and objects.
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {boolean} True if the arrays are deeply equal, false otherwise.
 */
export function isEqualArrayDeep(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    const val2 = arr2[i];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!isEqualArrayDeep(val1, val2)) {
        return false;
      }
    } else if (typeof val1 === 'object' && val1 !== null && typeof val2 === 'object' && val2 !== null) {
      // Simple object deep comparison for now, can be expanded if needed
      const keys1 = Object.keys(val1);
      const keys2 = Object.keys(val2);

      if (keys1.length !== keys2.length) {
        return false;
      }

      for (const key of keys1) {
        if (!keys2.includes(key) || !isEqualArrayDeep([val1[key]], [val2[key]])) { // Recursively compare nested objects
          return false;
        }
      }
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
}