/**
 * Computes the union of multiple arrays, returning a new array
 * of unique elements that are present in at least one of the given arrays.
 *
 * @param {...Array<any>} arrays Any number of arrays to compute the union from.
 * @returns {Array<any>} A new array containing all unique elements from all input arrays.
 */
function arrayUnionElements(...arrays) {
  if (arrays.length === 0) {
    return [];
  }
  if (arrays.some(arr => !Array.isArray(arr))) {
    throw new TypeError('All arguments must be arrays.');
  }

  const resultSet = new Set();

  for (const arr of arrays) {
    for (const element of arr) {
      resultSet.add(element);
    }
  }

  return Array.from(resultSet);
}

module.exports = arrayUnionElements;
