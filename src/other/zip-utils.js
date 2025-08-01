
/**
 * Creates an array of grouped elements, the first of which contains the first
 * elements of the given arrays, the second of which contains the second
 * elements of the given arrays, and so on.
 *
 * @param {...Array} [arrays] The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 */
export function zip(...arrays) {
  if (arrays.length === 0) {
    return [];
  }
  const maxLength = Math.max(...arrays.map(arr => (Array.isArray(arr) ? arr.length : 0)));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map(arr => (Array.isArray(arr) ? arr[i] : undefined)));
  }

  return result;
}

/**
 * This method is like `zip` except that it accepts an array of grouped
 * elements and creates an array regrouping the elements to their pre-zip
 * configuration.
 *
 * @param {Array} array The array of grouped elements to process.
 * @returns {Array} Returns the new array of regrouped elements.
 */
export function unzip(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }
    // This is essentially the same operation as zip
    return zip(...array);
}
