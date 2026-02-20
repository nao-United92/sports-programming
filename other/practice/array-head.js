/**
 * Gets the first element of an array.
 *
 * @param {Array} arr - The array to query.
 * @returns {*} The first element of the array.
 */
export const head = (arr) => {
  return (arr && arr.length) ? arr[0] : undefined;
};
