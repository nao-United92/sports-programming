/**
 * Finds duplicate elements in an array.
 *
 * @param {Array<any>} arr The array to inspect.
 * @returns {Array<any>} Returns the new array of duplicate elements.
 */
function findDuplicates(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const seen = new Set();
  const duplicates = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  return Array.from(duplicates);
}

module.exports = findDuplicates;
