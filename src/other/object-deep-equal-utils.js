/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param {*} a The first value to compare.
 * @param {*} b The second value to compare.
 * @returns {boolean} Returns `true` if the values are deeply equal, `false` otherwise.
 */
export function deepEqual(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    let length = Object.keys(a).length;
    if (length != Object.keys(b).length) return false;

    if (a instanceof Map) {
      if (a.size !== b.size) return false;
      for (let [key, val] of a) {
        if (!b.has(key) || !deepEqual(val, b.get(key))) {
          return false;
        }
      }
      return true;
    }

    if (a instanceof Set) {
      if (a.size !== b.size) return false;
      for (let val of a) {
        if (!b.has(val)) {
          return false;
        }
      }
      return true;
    }

    if (Array.isArray(a)) {
      if (length != b.length) return false;
      for (let i = length; i-- > 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }

    if (a instanceof Date) {
      if (a.getTime() !== b.getTime()) return false;
    }

    if (a instanceof RegExp) {
      if (a.source !== b.source || a.flags !== b.flags) return false;
    }

    for (let key in a) {
      if (Object.prototype.hasOwnProperty.call(a, key)) {
        if (!Object.prototype.hasOwnProperty.call(b, key) || !deepEqual(a[key], b[key])) {
          return false;
        }
      }
    }

    return true;
  }

  // Handle NaN === NaN
  if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) {
    return true;
  }

  return a !== a && b !== b;
}
