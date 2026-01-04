const isObject = (obj) => obj != null && typeof obj === 'object';

const deepEqual = (a, b) => {
  if (a === b) return true;

  if (isObject(a) && isObject(b)) {
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i])) return false;
      }
      return true;
    }

    if (Array.isArray(a) !== Array.isArray(b)) return false; // One is array, other is object

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }

  return false;
};

const arrayEquals = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false; // Or handle non-array inputs differently if needed
  }
  return deepEqual(arr1, arr2);
};

module.exports = { arrayEquals };