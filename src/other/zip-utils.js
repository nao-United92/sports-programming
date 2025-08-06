/**
 * Creates an array of grouped elements, the first of which contains the first elements of the input arrays,
 * the second of which contains the second elements of the input arrays, and so on.
 *
 * @param {...Array} [arrays] The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 */
export function zip(...arrays) {
  if (!arrays || arrays.length === 0) {
    return [];
  }

  const maxLength = Math.max(...arrays.map(arr => (Array.isArray(arr) ? arr.length : 0)));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map(arr => (Array.isArray(arr) ? arr[i] : undefined)));
  }

  return result;
}