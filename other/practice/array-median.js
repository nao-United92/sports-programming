// other/practice/array-median.js
/**
 * Calculates the median of an array of numbers.
 * The median is the middle number in a sorted, ascending or descending, list of numbers.
 * If the list has an odd number of entries, the median is the middle entry.
 * If the list has an even number of entries, the median is the average of the two middle entries.
 *
 * @param {Array<number>} arr The array of numbers to calculate the median for.
 * @returns {number|undefined} Returns the median, or `undefined` if the array is empty or invalid (contains non-numbers).
 * @example
 *
 * arrayMedian([1, 2, 3, 4, 5]);
 * // => 3
 *
 * arrayMedian([1, 2, 3, 4]);
 * // => 2.5
 *
 * arrayMedian([]);
 * // => undefined
 *
 * arrayMedian([1, 'a', 3]);
 * // => undefined
 */
function arrayMedian(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  // Ensure all elements are actual numbers
  if (arr.some(item => typeof item !== 'number')) {
    return undefined;
  }

  const sortedArr = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    // Even number of elements
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  } else {
    // Odd number of elements
    return sortedArr[mid];
  }
}

module.exports = arrayMedian;
