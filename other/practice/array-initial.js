/**
 * Gets all but the last element of an array.
 *
 * @param {Array} arr - The array to query.
 * @returns {Array} The initial elements of the array.
 */
export const initial = (arr) => {
  return (arr && arr.length) ? arr.slice(0, -1) : [];
};
