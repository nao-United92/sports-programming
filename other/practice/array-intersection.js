/**
 * Returns an array of unique values that are included in all given arrays.
 * 
 * @param {...Array} arrays - The arrays to inspect.
 * @returns {Array} The new array of intersecting values.
 */
function intersection(...arrays) {
  if (arrays.length === 0) return [];
  return arrays.reduce((acc, array) => {
    const set = new Set(array);
    return acc.filter(item => set.has(item));
  });
}

module.exports = intersection;
