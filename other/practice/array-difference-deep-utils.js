// other/practice/array-difference-deep-utils.js

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

function arrayDifferenceDeep(arr1, arr2) {
  const result = [];
  arr1.forEach(item1 => {
    if (!arr2.some(item2 => deepEquals(item1, item2))) {
      result.push(item1);
    }
  });
  return result;
}

module.exports = arrayDifferenceDeep;
