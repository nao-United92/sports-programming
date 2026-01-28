/**
 * Deeply flattens a nested array.
 *
 * @param {Array} array The array to flatten.
 * @returns {Array} The new flattened array.
 */
function deepFlatten(array) {
  if (!Array.isArray(array)) {
    return [array];
  }

  return array.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val), 
    []
  );
}

module.exports = {
  deepFlatten,
};
