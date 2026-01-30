// other/practice/array-intersection.js
/**
 * Computes the intersection of two arrays.
 * The intersection contains elements that are common to both arrays.
 *
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {Array} Returns a new array of intersecting elements.
 * @example
 *
 * arrayIntersection([1, 2, 3], [3, 4, 5]);
 * // => [3]
 *
 * arrayIntersection([1, 2, 1], [1, 1, 2]);
 * // => [1, 2] (unique elements from intersection)
 */
function arrayIntersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }

  const set1 = new Set(arr1);
  const intersection = [];

  for (const item of arr2) {
    if (set1.has(item)) {
      intersection.push(item);
      set1.delete(item); // To handle duplicates correctly (e.g., [1,1,2] and [1,2,2] should yield [1,2])
    }
  }

  // Ensure unique elements in the final intersection result
  return [...new Set(intersection)];
}

module.exports = arrayIntersection;