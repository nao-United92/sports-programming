/**
 * Converts an array of objects into a dictionary (object) using a key.
 * @param {Object[]} arr - Array of objects.
 * @param {string} key - The property to use as key.
 * @returns {Object} The dictionary.
 */
export const toDictionary = (arr, key) => {
  return arr.reduce((acc, obj) => {
    acc[obj[key]] = obj;
    return acc;
  }, {});
};
