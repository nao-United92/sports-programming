/**
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays, and so on.
 *
 * @param {...Array} arrays The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * zip(['a', 'b', 'c'], [1, 2]);
 * // => [['a', 1], ['b', 2]]
 */
function zip(...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  const lengths = arrays.map(arr => arr.length);
  const minLength = Math.min(...lengths);

  if (minLength === 0) {
    return [];
  }

  const result = new Array(minLength);
  for (let i = 0; i < minLength; i++) {
    result[i] = new Array(arrays.length);
    for (let j = 0; j < arrays.length; j++) {
      result[i][j] = arrays[j][i];
    }
  }
  return result;
}

export default zip;