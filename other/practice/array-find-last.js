/**
 * This function is like `find` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @param {Array} arr The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {*} Returns the matched element, else `undefined`.
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

export { findLast };
