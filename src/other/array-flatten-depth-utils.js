
/**
 * Recursively flattens `array` up to `depth` times.
 *
 * @param {Array} array The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 */
export const flattenDepth = (array, depth = 1) => {
  if (!Array.isArray(array) || depth < 1) {
    return array;
  }

  let result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (Array.isArray(item) && depth > 0) {
      result.push(...flattenDepth(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
};
