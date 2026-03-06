/**
 * Finds all indices of elements in an array that satisfy the provided testing function.
 * @param {Array} arr - The array to search through.
 * @param {Function} predicate - Function to execute on each value in the array.
 * @returns {Array<number>} An array of indices that satisfy the predicate.
 */
function findAllIndices(arr, predicate) {
  return arr.reduce((indices, element, index) => {
    if (predicate(element, index, arr)) {
      indices.push(index);
    }
    return indices;
  }, []);
}

module.exports = findAllIndices;
