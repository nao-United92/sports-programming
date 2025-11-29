// src/other/array-utility-advanced-2.js

/**
 * Recursively flattens an array up to the specified depth.
 *
 * @param {Array} arr The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} The new flattened array.
 */
const flattenDeep = (arr, depth = 1) => {
  if (!Array.isArray(arr) || depth < 0) {
    return [];
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result = result.concat(flattenDeep(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

module.exports = {
  flattenDeep,
};
