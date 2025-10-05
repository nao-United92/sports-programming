/**
 * Recursively flattens a nested array.
 * @param {Array} arr The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
export const deepFlatten = (arr) => {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val), []);
};

/**
 * Creates an array of array values not included in the other given arrays.
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
export const difference = (array, values) => {
  const valuesSet = new Set(values);
  return array.filter(value => !valuesSet.has(value));
};
