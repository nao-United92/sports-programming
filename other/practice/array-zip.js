/**
 * Creates an array of grouped elements, the first of which contains the first elements 
 * of the given arrays, the second of which contains the second elements of the given arrays, and so on.
 *
 * @param {...Array} arrays - The arrays to process.
 * @returns {Array} The new array of grouped elements.
 */
export const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return arrays.map(arr => arr[i]);
  });
};
