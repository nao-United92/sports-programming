
/**
 * Returns the index of the first element that is strictly greater than the target.
 * @param {Array} array Sorted array.
 * @param {number} target Value to search for.
 * @returns {number} Index.
 */
function upperBound(array, target) {
  let left = 0;
  let right = array.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

module.exports = upperBound;
