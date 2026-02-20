/**
 * Gets the last element of an array.
 *
 * @param {Array} arr - The array to query.
 * @returns {*} The last element of the array.
 */
export const last = (arr) => {
  const length = arr === null ? 0 : arr.length;
  return length ? arr[length - 1] : undefined;
};
