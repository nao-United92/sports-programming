/**
 * Checks if two arrays are equal (contain the same elements in the same order).
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {boolean} True if the arrays are equal, false otherwise.
 */
export const isEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

/**
 * Checks if one array is a subset of another (all elements of the first array are present in the second).
 * @param {Array} subset The potential subset array.
 * @param {Array} superset The potential superset array.
 * @returns {boolean} True if the first array is a subset of the second, false otherwise.
 */
export const isSubset = (subset, superset) => {
  return subset.every(val => superset.includes(val));
};

// Helper for deep equality check
const _deepEqual = (a, b) => {
  if (a === b) return true;

  if (a && typeof a === 'object' && b && typeof b === 'object') {
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!_deepEqual(a[i], b[i])) return false;
      }
      return true;
    }

    if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
    }

    // For plain objects
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key) || !_deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }

  return false;
};

/**
 * Checks if two arrays are deeply equal (contain the same elements in the same order,
 * and nested objects/arrays are also deeply equal).
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {boolean} True if the arrays are deeply equal, false otherwise.
 */
export const isDeepEqual = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  return _deepEqual(arr1, arr2);
};