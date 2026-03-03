/**
 * Gets all but the last element of an array.
 * 
 * @param {Array} array - The array to query.
 * @returns {Array} Returns the slice of array.
 */
export const initial = (array) => {
  if (!array || !array.length) return [];
  return array.slice(0, -1);
};
