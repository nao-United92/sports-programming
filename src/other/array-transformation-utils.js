// src/other/array-transformation-utils.js

/**
 * Maps an array of objects to a new array of objects, applying a transformation function to each object.
 *
 * @param {Array<Object>} arr The array of objects to transform.
 * @param {Function} transformFn The function to apply to each object. It receives the object and its index.
 * @returns {Array<Object>} A new array with the transformed objects.
 */
const mapObject = (arr, transformFn) => {
  if (!Array.isArray(arr) || typeof transformFn !== 'function') {
    return [];
  }
  return arr.map((obj, index) => transformFn(obj, index));
};

module.exports = {
  mapObject,
};
