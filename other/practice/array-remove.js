/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 * Note: This function mutates `array`.
 *
 * @param {Array} arr The array to modify.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 */
function remove(arr, predicate) {
  if (!Array.isArray(arr) || typeof predicate !== 'function') {
    return [];
  }

  const removedElements = [];
  let i = 0;
  while (i < arr.length) {
    if (predicate(arr[i], i, arr)) {
      removedElements.push(arr[i]);
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return removedElements;
}

export { remove };
