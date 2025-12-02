/**
 * Calculates the median of an array of numbers.
 * @param {number[]} arr The array of numbers.
 * @returns {number | null} The median of the array, or null if the array is empty.
 */
export const median = (arr) => {
  if (!arr || arr.length === 0) {
    return null;
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
};
