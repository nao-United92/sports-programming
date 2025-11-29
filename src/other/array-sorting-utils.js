// src/other/array-sorting-utils.js

/**
 * Sorts an array of objects based on a specified property and order.
 *
 * @param {Array<Object>} arr The array of objects to sort.
 * @param {string} property The property name to sort by.
 * @param {'asc' | 'desc'} [order='asc'] The sort order ('asc' for ascending, 'desc' for descending).
 * @returns {Array<Object>} A new array with the sorted objects.
 */
const sortByProperty = (arr, property, order = 'asc') => {
  if (!Array.isArray(arr) || arr.length === 0 || typeof property !== 'string') {
    return [];
  }

  const sortedArr = [...arr]; // Create a shallow copy to avoid modifying the original array

  sortedArr.sort((a, b) => {
    const valA = a[property];
    const valB = b[property];

    if (valA < valB) {
      return order === 'asc' ? -1 : 1;
    }
    if (valA > valB) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return sortedArr;
};

module.exports = {
  sortByProperty,
};
