/**
 * Checks if an array is sorted in ascending or descending order.
 * @param {Array<number|string>} arr The array to check.
 * @param {string} [direction='asc'] The sorting direction, 'asc' or 'desc'.
 * @returns {boolean} Returns true if the array is sorted, else false.
 */
const isSorted = (arr, direction = 'asc') => {
  if (!Array.isArray(arr)) {
    return false;
  }
  const comparer = direction === 'desc'
    ? (a, b) => a >= b
    : (a, b) => a <= b;

  for (let i = 1; i < arr.length; i++) {
    if (!comparer(arr[i - 1], arr[i])) {
      return false;
    }
  }
  return true;
};

module.exports = { isSorted };
