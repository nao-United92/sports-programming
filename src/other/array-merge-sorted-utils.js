/**
 * Merges two sorted arrays into a new sorted array.
 *
 * @param {Array} arr1 The first sorted array.
 * @param {Array} arr2 The second sorted array.
 * @returns {Array} The new merged and sorted array.
 */
function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1, if any
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2, if any
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

module.exports = { mergeSortedArrays };
