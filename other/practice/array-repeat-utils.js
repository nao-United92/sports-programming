/**
 * Creates a new array by repeating the elements of the given array `n` times.
 *
 * @param {Array} array The array to repeat.
 * @param {number} n The number of times to repeat the array.
 * @returns {Array} Returns the new array with repeated elements.
 * @example
 *
 * repeat([1, 2], 3);
 * // => [1, 2, 1, 2, 1, 2]
 *
 * repeat(['a'], 2);
 * // => ['a', 'a']
 *
 * repeat([], 5);
 * // => []
 *
 * repeat([1, 2], 0);
 * // => []
 */
function repeat(array, n) {
  if (!Array.isArray(array) || n <= 0) {
    return [];
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    result = result.concat(array);
  }
  return result;
}

export default repeat;