/**
 * Flattens an array up to a specified depth.
 * @param {Array<any>} arr The array to flatten.
 * @param {number} [depth=1] The maximum depth to flatten. Defaults to 1.
 * @returns {Array<any>} A new array with the elements flattened to the specified depth.
 */
function flattenWithDepth(arr, depth = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (typeof depth !== 'number' || depth < 0) {
    throw new TypeError('Expected depth to be a non-negative number');
  }

  if (depth === 0) {
    return arr.slice(); // Return a shallow copy if depth is 0
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result.push(...flattenWithDepth(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = flattenWithDepth;