/**
 * Flattens an array up to the specified depth.
 *
 * @param {Array} arr The array to flatten.
 * @param {number} [depth=1] The maximum depth to flatten.
 * @returns {Array} The new flattened array.
 */
const flattenDepth = (arr, depth = 1) => {
  if (depth === 0) {
    return arr;
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result.push(...flattenDepth(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

export default flattenDepth;