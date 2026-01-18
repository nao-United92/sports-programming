// other/practice/array-partition-utils.js

/**
 * Partitions an array into two groups: one for elements that satisfy the predicate,
 * and one for elements that do not.
 *
 * @param {Array} arr The array to partition.
 * @param {Function} predicate The function to invoke per element to determine its group.
 *   The predicate is invoked with one argument: (value).
 * @returns {Array<Array>} Returns a two-element array, where the first element is the
 *   array of elements for which the predicate returned truthy, and the second element
 *   is the array of elements for which the predicate returned falsy.
 */
function arrayPartition(arr, predicate) {
  const truthy = [];
  const falsy = [];

  arr.forEach(item => {
    if (predicate(item)) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  });

  return [truthy, falsy];
}

module.exports = arrayPartition;
