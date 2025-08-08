export const deepEqual = (a, b) => {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    let length = Object.keys(a).length;
    if (length != Object.keys(b).length) return false;

    for (const key in a) {
      if (Object.prototype.hasOwnProperty.call(a, key)) {
        if (!Object.prototype.hasOwnProperty.call(b, key) || !deepEqual(a[key], b[key])) {
          return false;
        }
      }
    }

    return true;
  }

  return a !== a && b !== b; // Handle NaN
};
