/**
 * Checks if an array is sorted according to a comparator function.
 * @param {any[]} arr - The input array.
 * @param {Function} comparator - (a, b) => number. Returns <= 0 if order is correct.
 * @returns {boolean} True if sorted.
 */
export const isSortedBy = (arr, comparator = (a, b) => a - b) => {
  for (let i = 1; i < arr.length; i++) {
    if (comparator(arr[i - 1], arr[i]) > 0) return false;
  }
  return true;
};
