/**
 * Returns the last element in the array that satisfies the provided testing function.
 * If no elements satisfy the testing function, undefined is returned.
 *
 * @param {Array} arr - The array to search.
 * @param {Function} predicate - Function to execute on each value in the array.
 * @returns {*} The last element that passes the test, or undefined.
 */
export const findLast = (arr, predicate) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};
