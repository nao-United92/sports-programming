/**
 * Creates a slice of array with n elements taken from the beginning.
 * 
 * @param {Array} array - The array to query.
 * @param {number} [n=1] - The number of elements to take.
 * @returns {Array} Returns the slice of array.
 */
export const take = (array, n = 1) => {
  return array.slice(0, n < 0 ? 0 : n);
};
