/**
 * Creates an array with all null and undefined values removed.
 * @param {Array<any>} arr The array to compact.
 * @returns {Array<any>} A new array without null or undefined values.
 */
function compactNullUndefined(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.filter(item => item !== null && item !== undefined);
}

module.exports = compactNullUndefined;
