/**
 * Finds the minimum value in an array of numbers.
 *
 * @param {Array<number>} array The array of numbers.
 * @returns {number | undefined} The minimum value, or undefined if the array is empty.
 */
const arrayFindMin = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  return Math.min(...array);
};

export default arrayFindMin;
