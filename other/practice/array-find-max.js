/**
 * Finds the maximum value in an array of numbers.
 *
 * @param {Array<number>} array The array of numbers.
 * @returns {number | undefined} The maximum value, or undefined if the array is empty.
 */
const arrayFindMax = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  return Math.max(...array);
};

export default arrayFindMax;
