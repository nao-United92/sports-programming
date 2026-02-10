/**
 * Returns a new array with unique elements from the input array.
 *
 * @param {Array<any>} array The array to process.
 * @returns {Array<any>} A new array containing only the unique elements.
 */
const arrayUnique = (array) => {
  return [...new Set(array)];
};

export default arrayUnique;
