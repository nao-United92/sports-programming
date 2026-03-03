/**
 * Retrieves the value of a specified property from all elements in an array.
 * 
 * @param {Array<Object>} array - The array of objects to pluck from.
 * @param {string} key - The property name to pluck.
 * @returns {Array} Returns the array of property values.
 */
export const pluck = (array, key) => {
  return array.map(item => item[key]);
};
