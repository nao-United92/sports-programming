/**
 * Recursively flattens `array` up to `depth` times.
 *
 * @param {Array} array The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 */
export const flattenDepth = (array, depth = 1) => {
  if (!Array.isArray(array) || depth < 0) {
    return [];
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && depth > 0) {
      result = result.concat(flattenDepth(array[i], depth - 1));
    } else {
      result.push(array[i]);
    }
  }
  return result;
};