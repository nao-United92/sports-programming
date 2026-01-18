// other/practice/array-zip-utils.js

/**
 * Creates an array of grouped elements, the first of which contains the first
 * elements of the given arrays, the second of which contains the second
 * elements of the given arrays, and so on.
 *
 * @param {...Array} arrays The arrays to process.
 * @returns {Array<Array>} Returns the new array of grouped elements.
 */
function arrayZip(...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  // Find the shortest array to determine the number of "zipped" elements
  const minLength = Math.min(...arrays.map(arr => arr.length));

  const result = [];
  for (let i = 0; i < minLength; i++) {
    const currentGroup = [];
    for (let j = 0; j < arrays.length; j++) {
      currentGroup.push(arrays[j][i]);
    }
    result.push(currentGroup);
  }

  return result;
}

module.exports = arrayZip;
