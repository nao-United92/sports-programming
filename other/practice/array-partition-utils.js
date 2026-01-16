/**
 * Divides an array into two arrays based on a predicate function.
 *
 * @param {Array} arr The array to partition.
 * @param {Function} predicate The function to execute on each value to determine if it belongs to the first or second array.
 * @returns {Array<Array>} A tuple where the first array contains elements for which the predicate returned true,
 *                          and the second array contains elements for which the predicate returned false.
 */
function arrayPartition(arr, predicate) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the second argument.');
  }

  const trueArr = [];
  const falseArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      trueArr.push(arr[i]);
    } else {
      falseArr.push(arr[i]);
    }
  }

  return [trueArr, falseArr];
}

module.exports = arrayPartition;