/**
 * Checks if all elements in an array are unique.
 *
 * @param {Array} arr The array to check.
 * @returns {boolean} Returns `true` if all elements are unique, `false` otherwise.
 */
const isUnique = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  return new Set(arr).size === arr.length;
};

export default isUnique;
