/**
 * Filters an array of objects by a key-value pair.
 *
 * @param {Array<object>} array The array to filter.
 * @param {string} key The key to filter by.
 * @param {any} value The value to filter for.
 * @returns {Array<object>} The filtered array.
 */
export const filterBy = (array, key, value) => {
  return array.filter(item => item[key] === value);
};

/**
 * Filters an array of objects by a search query.
 * The query is matched against all string values in each object.
 *
 * @param {Array<object>} array The array to filter.
 * @param {string} query The search query.
 * @returns {Array<object>} The filtered array.
 */
export const filterByQuery = (array, query) => {
  const lowerCaseQuery = query.toLowerCase();
  return array.filter(item => {
    for (const key in item) {
      if (typeof item[key] === 'string' && item[key].toLowerCase().includes(lowerCaseQuery)) {
        return true;
      }
    }
    return false;
  });
};
