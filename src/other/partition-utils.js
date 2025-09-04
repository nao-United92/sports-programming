/**
 * Creates an array of elements split into two groups, the first of which
 * contains elements `predicate` returns truthy for, the second of which
 * contains elements `predicate` returns falsy for.
 *
 * @param {Array} array The array to process.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the array of grouped elements.
 */
function partition(array, predicate) {
  const result = [[], []];

  if (array == null) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result[predicate(value, i, array) ? 0 : 1].push(value);
  }
  return result;
}

export default partition;
