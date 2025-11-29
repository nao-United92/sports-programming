// src/other/array-utility-functions-advanced-3.js

/**
 * Creates an array of unique values that are included in all given arrays.
 * The order of result values is determined by the order of the first array.
 *
 * @param {...Array} arrays The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 */
const intersection = (...arrays) => {
  if (arrays.length === 0) {
    return [];
  }
  if (arrays.length === 1) {
    return [...new Set(arrays[0])];
  }

  const firstArray = arrays[0];
  const restArrays = arrays.slice(1);

  return [...new Set(firstArray.filter(item => {
    return restArrays.every(arr => Array.isArray(arr) && arr.includes(item));
  }))];
};

module.exports = {
  intersection,
};
