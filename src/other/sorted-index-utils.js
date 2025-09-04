/**
 * Uses a binary search to determine the lowest index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */
function sortedIndex(array, value) {
  if (array == null) {
    return 0;
  }

  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return high;
}

export default sortedIndex;
