/**
 * Calculates the median of an array of numbers.
 * The array is sorted in place.
 * @param {Array<number>} arr The array of numbers.
 * @returns {number} The median of the numbers.
 */
function median(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (arr.length === 0) {
    throw new Error('Median cannot be calculated for an empty array');
  }
  if (arr.some(isNaN)) {
    throw new TypeError('All elements in the array must be numbers');
  }

  const sortedArr = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);

  return sortedArr.length % 2 !== 0
    ? sortedArr[mid]
    : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
}

module.exports = median;
