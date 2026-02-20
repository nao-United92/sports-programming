/**
 * Gets all but the first element of an array.
 *
 * @param {Array} arr - The array to query.
 * @returns {Array} The tail of the array.
 */
export const tail = (arr) => {
  const [, ...rest] = arr || [];
  return rest;
};
