/**
 * Returns an array with only unique elements.
 * @param {Array} arr
 * @returns {Array}
 */
export const unique = (arr) => {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
};
