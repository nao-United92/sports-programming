/**
 * Recursively flattens an array.
 *
 * @param {Array<any>} arr The array to flatten.
 * @returns {Array<any>} Returns the new flattened array.
 */
function flattenDeepRecursive(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...flattenDeepRecursive(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

module.exports = flattenDeepRecursive;
