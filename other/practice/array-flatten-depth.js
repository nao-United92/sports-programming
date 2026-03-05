/**
 * Flattens an array up to the specified depth.
 * @param {Array} array - The array to flatten.
 * @param {number} [depth=1] - The maximum recursion depth.
 * @returns {Array} - The new flattened array.
 */
function flattenDepth(array, depth = 1) {
  if (!Array.isArray(array)) return [];
  if (depth < 1) return [...array];

  return array.reduce((acc, val) => {
    if (Array.isArray(val) && depth > 0) {
      acc.push(...flattenDepth(val, depth - 1));
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}

module.exports = flattenDepth;
