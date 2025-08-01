/**
 * Checks if two arrays are equal (same elements in the same order).
 * Supports primitive values and shallow comparison of objects.
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {boolean} True if the arrays are equal, false otherwise.
 */
export function areArraysEqual(arr1, arr2) {
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
 * Checks if two arrays are equal, ignoring the order of elements.
 * Supports primitive values and shallow comparison of objects.
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {boolean} True if the arrays contain the same elements regardless of order, false otherwise.
 */
export function areArraysEqualUnordered(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }

  const map1 = new Map();
  const map2 = new Map();

  for (const item of arr1) {
    const key = typeof item === 'object' && item !== null ? JSON.stringify(item) : item;
    map1.set(key, (map1.get(key) || 0) + 1);
  }

  for (const item of arr2) {
    const key = typeof item === 'object' && item !== null ? JSON.stringify(item) : item;
    map2.set(key, (map2.get(key) || 0) + 1);
  }

  if (map1.size !== map2.size) {
    return false;
  }

  for (const [key, count] of map1) {
    if (map2.get(key) !== count) {
      return false;
    }
  }

  return true;
}
