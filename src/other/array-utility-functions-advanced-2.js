// src/other/array-utility-functions-advanced-2.js

/**
 * Creates an array of unique values that is the symmetric difference of the two given arrays.
 * The order of result values is determined by the order of the first array.
 *
 * @param {Array} arr1 The first array to inspect.
 * @param {Array} arr2 The second array to inspect.
 * @returns {Array} Returns the new array of filtered values.
 */
const difference = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const diff1 = arr1.filter(item => !set2.has(item));
  const diff2 = arr2.filter(item => !set1.has(item));

  return [...new Set([...diff1, ...diff2])];
};

module.exports = {
  difference,
};
