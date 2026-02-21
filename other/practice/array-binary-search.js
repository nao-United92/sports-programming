
/**
 * Performs binary search on a sorted array.
 * @param {Array} array Sorted array.
 * @param {*} target Value to search for.
 * @returns {number} Index of the target or -1 if not found.
 */
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
