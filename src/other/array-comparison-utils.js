// src/other/array-comparison-utils.js

/**
 * Performs a deep comparison between two arrays to determine if they are equal.
 * Checks for same elements in the same order, and deeply compares nested objects/arrays.
 *
 * @param {Array} arr1 The first array to compare.
 * @param {Array} arr2 The second array to compare.
 * @returns {boolean} True if the arrays are deeply equal, false otherwise.
 */
const isEqual = (arr1, arr2) => {
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
      if (!isEqual(val1, val2)) { // Recursive call for nested arrays
        return false;
      }
    } else if (typeof val1 === 'object' && val1 !== null &&
               typeof val2 === 'object' && val2 !== null) {
      // Simple object comparison (shallow for now, could be deep if needed)
      // For true deep object comparison, a separate deepEqual function for objects would be needed.
      if (JSON.stringify(val1) !== JSON.stringify(val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

module.exports = {
  isEqual,
};
