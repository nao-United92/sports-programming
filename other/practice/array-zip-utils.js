/**
 * Creates an array of grouped elements, the first of which contains the first elements
 * of the given arrays, the second of which contains the second elements of the given arrays, and so on.
 *
 * @param {...Array} arrays The arrays to process.
 * @returns {Array<Array>} Returns the new array of grouped elements.
 */
function arrayZip(...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  // Check if all arguments are arrays
  for (const arr of arrays) {
    if (!Array.isArray(arr)) {
      throw new TypeError('Expected all arguments to be arrays.');
    }
  }

  const maxLength = Math.max(...arrays.map(arr => arr.length));
  const result = Array.from({ length: maxLength }, () => []);

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < arrays.length; j++) {
      result[i].push(arrays[j][i]);
    }
  }

  return result;
}

module.exports = arrayZip;