
/**
 * Swaps elements at index i and j in the array.
 * @param {Array} array The array to modify.
 * @param {number} i The first index.
 * @param {number} j The second index.
 * @returns {Array} Returns the array.
 */
function swap(array, i, j) {
  if (!array) return array;
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

module.exports = swap;
