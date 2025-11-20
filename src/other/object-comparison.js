/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param {*} a The first value to compare.
 * @param {*} b The second value to compare.
 * @returns {boolean} Returns `true` if the values are deeply equal, `false` otherwise.
 */
export function deepEqual(a, b) {
  if (a === b) return true;

  if (a && typeof a == 'object' && b && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    let length = Object.keys(a).length;
    if (length !== Object.keys(b).length) return false;

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
}
