// other/practice/array-difference-symmetric-utils.js

function deepEquals(a, b) {
  if (a === b) return true;

  if (a && typeof a === 'object' && b && typeof b === 'object') {
    if (Array.isArray(a) !== Array.isArray(b)) return false;

    if (Array.isArray(a)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!deepEquals(a[i], b[i])) return false;
      }
      return true;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEquals(a[key], b[key])) return false;
    }
    return true;
  }

  return false;
}


/**
 * Computes the symmetric difference of two arrays, i.e., the elements that
 * are in either `arr1` or `arr2` but not in both, using deep comparison for objects.
 *
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {Array} Returns the new array of symmetric difference.
 */
function arrayDifferenceSymmetric(arr1, arr2) {
  const result = [];

  arr1.forEach(item1 => {
    if (!arr2.some(item2 => deepEquals(item1, item2))) {
      result.push(item1);
    }
  });

  arr2.forEach(item2 => {
    if (!arr1.some(item1 => deepEquals(item2, item1))) {
      result.push(item2);
    }
  });

  return result;
}

module.exports = arrayDifferenceSymmetric;
