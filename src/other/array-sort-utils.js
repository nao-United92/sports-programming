/**
 * Sorts an array of objects by a specified key.
 * @param {Array} arr The array to sort.
 * @param {string} key The key to sort by.
 * @param {string} [order='asc'] The sort order ('asc' or 'desc').
 * @returns {Array} The sorted array.
 */
export const sortBy = (arr, key, order = 'asc') => {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) {
      return order === 'asc' ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
};
