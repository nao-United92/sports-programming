/**
 * Recursively flattens an array deeply.
 * @param {Array<any>} arr The array to flatten.
 * @returns {Array<any>} The new deeply flattened array.
 */
function flattenDeepRecursiveV2(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  const result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...flattenDeepRecursiveV2(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

module.exports = flattenDeepRecursiveV2;
