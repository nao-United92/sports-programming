
/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param {*} a The first value to compare.
 * @param {*} b The second value to compare.
 * @returns {boolean} Returns `true` if the values are deeply equal, `false` otherwise.
 */
export function deepEqual(a, b, visited = new WeakSet()) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (visited.has(a) || visited.has(b)) {
      // Circular reference detected, and we've already seen this pair
      return true;
    }
    visited.add(a);
    visited.add(b);

    if (a.constructor !== b.constructor) return false;

    let length = Object.keys(a).length;
    if (length != Object.keys(b).length) return false;

    if (a instanceof Map) {
      if (a.size !== b.size) return false;
      for (let [key, value] of a) {
        if (!b.has(key) || !deepEqual(value, b.get(key), visited)) {
          return false;
        }
      }
      return true;
    }

    if (a instanceof Set) {
      if (a.size !== b.size) return false;
      for (let value of a) {
        let found = false;
        for (let bValue of b) {
          if (deepEqual(value, bValue)) {
            found = true;
            break;
          }
        }
        if (!found) return false;
      }
      return true;
    }

    if (Array.isArray(a)) {
      if (length !== b.length) return false;
      for (let i = 0; i < length; i++) {
        if (!deepEqual(a[i], b[i], visited)) return false;
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
        if (!Object.prototype.hasOwnProperty.call(b, key) || !deepEqual(a[key], b[key], visited)) {
          return false;
        }
      }
    }

    return true;
  }

  return a !== a && b !== b;
}
