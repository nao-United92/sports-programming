/**
 * Creates an array of elements split into two groups, one of which contains
 * elements `predicate` returns truthy for, and one of which contains elements
 * `predicate` returns falsey for. The predicate is invoked with three arguments:
 * (value, index, array).
 *
 * @param {Array} arr The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new array of partitioned elements.
 */
function partition(arr, predicate) {
  if (!Array.isArray(arr) || typeof predicate !== 'function') {
    return [[], []];
  }

  const truthy = [];
  const falsey = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (predicate(item, i, arr)) {
      truthy.push(item);
    } else {
      falsey.push(item);
    }
  }

  return [truthy, falsey];
}

export { partition };
