/**
 * Recursively flattens an array.
 * @param {Array<any>} arr The array to flatten.
 * @returns {Array<any>} A new array with all sub-array elements concatenated into it recursively.
 */
function flattenRecursive(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flattenRecursive(val)) : acc.concat(val),
    []
  );
}

module.exports = flattenRecursive;
