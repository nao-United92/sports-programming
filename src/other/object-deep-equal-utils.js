/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 * This function can compare primitives, arrays, and objects recursively.
 *
 * @param {*} a The first value to compare.
 * @param {*} b The second value to compare.
 * @returns {boolean} Returns `true` if the values are deeply equal, `false` otherwise.
 */
export const deepEqual = (a, b) => {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    let length = Object.keys(a).length;
    if (length !== Object.keys(b).length) return false;

    if (a instanceof Date) {
      if (b instanceof Date) {
        return a.getTime() === b.getTime();
      } else {
        return false;
      }
    }

    if (a instanceof RegExp) {
      if (b instanceof RegExp) {
        return a.source === b.source && a.flags === b.flags;
      } else {
        return false;
      }
    }

    if (Array.isArray(a)) {
      if (!Array.isArray(b)) return false;
      if (a.length !== b.length) return false;
      for (let i = 0; i < length; i++) {
        if (!deepEqual(a[i], b[i])) return false;
      }
      return true;
    }

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