/**
 * Partitions an array into two groups: one whose elements satisfy `predicate` and one whose elements do not.
 *
 * @param {Array} array The array to partition.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array<Array>} Returns a two-element array, where the first element contains elements for which `predicate` returned truthy, and the second element contains elements for which `predicate` returned falsy.
 */
export function partition(array, predicate) {
  if (!Array.isArray(array)) {
    return [[], []];
  }

  const truthy = [];
  const falsy = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (predicate(item, i, array)) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  }

  return [truthy, falsy];
}
