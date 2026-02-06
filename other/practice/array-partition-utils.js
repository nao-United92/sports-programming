/**
 * Partitions an array into two groups: one whose elements satisfy the predicate,
 * and one whose elements do not.
 * @param {Array<any>} arr The array to partition.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array<Array<any>>} A new array containing two arrays: [elementsThatPass, elementsThatFail].
 */
function partition(arr, predicate) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the second argument (predicate)');
  }

  const pass = [];
  const fail = [];
  arr.forEach(item => {
    if (predicate(item)) {
      pass.push(item);
    } else {
      fail.push(item);
    }
  });
  return [pass, fail];
}

module.exports = partition;
