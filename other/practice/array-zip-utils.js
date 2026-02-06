/**
 * Creates an array of grouped elements, the first of which contains the first elements
 * of the given arrays, the second of which contains the second elements, and so on.
 * @param {...Array<any>} arrays The arrays to process.
 * @returns {Array<Array<any>>} A new array of grouped elements.
 */
function zip(...arrays) {
  if (arrays.some(arr => !Array.isArray(arr))) {
    throw new TypeError('Expected all arguments to be arrays');
  }
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  return Array.from({ length: maxLength }, (_, i) => arrays.map(arr => arr[i]));
}

module.exports = zip;
