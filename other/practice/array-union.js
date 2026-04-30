/**
 * Returns an array of unique values that are in one or more of the provided arrays.
 * 
 * @param {...Array} arrays - The arrays to inspect.
 * @returns {Array} The new array of combined unique values.
 */
function union(...arrays) {
  return [...new Set(arrays.flat())];
}

module.exports = union;
