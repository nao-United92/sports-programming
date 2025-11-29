// src/other/array-filtering-utils.js

/**
 * Filters an array of objects based on a specific property's value.
 *
 * @param {Array<Object>} arr The array of objects to filter.
 * @param {string} property The name of the property to check.
 * @param {any} value The value to match against the property.
 * @returns {Array<Object>} A new array containing only the objects that match the criteria.
 */
const filterByProperty = (arr, property, value) => {
  if (!Array.isArray(arr) || typeof property !== 'string' || property === '') {
    return [];
  }
  return arr.filter(obj => obj && obj[property] === value);
};

module.exports = {
  filterByProperty,
};