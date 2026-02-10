/**
 * Calculates the average of numbers in an array.
 *
 * @param {Array<number>} array The array of numbers.
 * @returns {number | null} The average of the numbers, or null if the array is empty.
 */
const arrayAverageNumbers = (array) => {
  if (array.length === 0) {
    return null;
  }
  const sum = array.reduce((acc, current) => acc + current, 0);
  return sum / array.length;
};

export default arrayAverageNumbers;
