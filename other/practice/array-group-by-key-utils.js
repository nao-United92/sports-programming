// other/practice/array-group-by-key-utils.js

/**
 * Groups the elements of an array into an object where the keys are
 * determined by a specified property of each element.
 *
 * @param {Array<Object>} arr The array of objects to group.
 * @param {string} key The property name to group by.
 * @returns {Object<string, Array<Object>>} An object where keys are the values
 *   of the specified property and values are arrays of objects belonging to that group.
 */
function arrayGroupByKey(arr, key) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof key !== 'string' || key.length === 0) {
    throw new TypeError('Expected a non-empty string for the second argument (key).');
  }

  return arr.reduce((acc, item) => {
    const keyValue = item[key];
    if (keyValue !== undefined) {
      if (!acc[keyValue]) {
        acc[keyValue] = [];
      }
      acc[keyValue].push(item);
    }
    return acc;
  }, {});
}

module.exports = arrayGroupByKey;