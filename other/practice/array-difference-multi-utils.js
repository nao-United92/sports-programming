/**
 * Computes the difference of multiple arrays, returning all elements that appear in the first array
 * but not in any of the subsequent arrays.
 * @param {Array<any>} arr The primary array.
 * @param {...Array<any>} others The other arrays to compare against.
 * @returns {Array<any>} A new array containing the difference.
 */
function differenceMulti(arr, ...others) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected the first argument to be an array');
  }
  if (others.some(otherArr => !Array.isArray(otherArr))) {
    throw new TypeError('Expected all subsequent arguments to be arrays');
  }

  const otherElements = new Set(others.flat());
  return arr.filter(item => !otherElements.has(item));
}

module.exports = differenceMulti;
