/**
 * Gets all but the first element of an array.
 * 
 * @param {Array} array - The array to query.
 * @returns {Array} Returns the slice of array.
 */
export const tail = (array) => {
  const [ , ...rest] = array || [];
  return rest;
};
