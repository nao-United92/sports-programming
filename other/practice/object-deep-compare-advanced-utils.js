const isDeepEqual = (a, b) => {
  if (a === b) return true;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    if (a.constructor !== b.constructor) return false;

    if (a instanceof Map) {
      if (a.size !== b.size) return false;
      for (const [key, val] of a) {
        if (!b.has(key) || !isDeepEqual(val, b.get(key))) {
          return false;
        }
      }
      return true;
    }

    if (a instanceof Set) {
      if (a.size !== b.size) return false;
      const bArray = Array.from(b);
      for (const valA of a) {
        let found = false;
        for (let i = 0; i < bArray.length; i++) {
          if (isDeepEqual(valA, bArray[i])) {
            bArray.splice(i, 1); // Remove found element to prevent re-matching
            found = true;
            break;
          }
        }
        if (!found) return false;
      }
      return true;
    }

    if (Array.isArray(a)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!isDeepEqual(a[i], b[i])) return false;
      }
      return true;
    }

    // Handle plain objects
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key) || !isDeepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b; // Handle NaN
};

module.exports = { isDeepEqual };
