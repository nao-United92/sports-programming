/**
 * Iterates over elements of `arr` from right to left, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three arguments:
 * (value, index, array).
 *
 * @param {Array<any>} arr The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {any|undefined} Returns the matched element, else `undefined`.
 */
function findLast(arr, predicate) {
  if (!Array.isArray(arr) || typeof predicate !== 'function') {
    return undefined;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}

module.exports = findLast;