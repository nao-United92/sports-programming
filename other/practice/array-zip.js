// other/practice/array-zip.js
/**
 * Creates an array of grouped elements, the first of which contains the first elements
 * of the given arrays, the second of which contains the second elements of the given arrays, and so on.
 *
 * @param {...Array} arrays The arrays to process.
 * @returns {Array<Array>} Returns the new array of grouped elements.
 * @example
 *
 * arrayZip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * arrayZip(['a', 'b', 'c'], [1, 2]);
 * // => [['a', 1, undefined], ['b', 2, undefined]]
 */
function arrayZip(...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  // Find the longest array to determine the number of resulting groups
  const maxLength = Math.max(...arrays.map(arr => (Array.isArray(arr) ? arr.length : 0)));

  const result = [];
  for (let i = 0; i < maxLength; i++) {
    const group = [];
    for (let j = 0; j < arrays.length; j++) {
      if (Array.isArray(arrays[j])) {
        group.push(arrays[j][i]);
      } else {
        group.push(undefined); // Handle non-array inputs for a specific position
      }
    }
    result.push(group);
  }

  return result;
}

module.exports = arrayZip;