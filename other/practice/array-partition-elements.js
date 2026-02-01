/**
 * Partitions an array into two new arrays: one with elements for which the predicate
 * function returns true, and one with elements for which it returns false.
 *
 * @param {Array<any>} arr The input array to partition.
 * @param {Function} predicate The function to test each element. It receives the element, its index, and the original array.
 * @returns {[Array<any>, Array<any>]} An array containing two arrays: the first with elements that satisfy the predicate, and the second with elements that do not.
 */
function arrayPartitionElements(arr, predicate) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the second argument (predicate).');
  }

  const truthy = [];
  const falsy = [];

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      truthy.push(arr[i]);
    } else {
      falsy.push(arr[i]);
    }
  }

  return [truthy, falsy];
}

module.exports = arrayPartitionElements;
