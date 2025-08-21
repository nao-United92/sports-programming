/**
 * Creates an array of grouped elements, the first of which contains the
 * first elements of the given arrays, the second of which contains the
 * second elements, and so on.
 *
 * @param {...Array} arrays The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 */
export const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map(arr => arr[i]));
  }

  return result;
};
