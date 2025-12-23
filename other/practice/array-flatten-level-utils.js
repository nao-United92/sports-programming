/**
 * Recursively flattens an array up to the specified `depth`.
 *
 * @param {Array<any>} arr The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array<any>} Returns the new flattened array.
 */
function flattenWithDepth(arr, depth = 1) {
  if (!Array.isArray(arr) || depth < 0) {
    return [];
  }

  if (depth === 0) {
    return Array.isArray(arr) ? [...arr] : [];
  }

  const result = [];
  arr.forEach(item => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flattenWithDepth(item, depth - 1));
    } else {
      result.push(item);
    }
  });
  return result;
}

module.exports = flattenWithDepth;