/**
 * Flattens an array a single level deep.
 *
 * @param {Array<any>} array The array to flatten.
 * @returns {Array<any>} Returns the new flattened array.
 */
function flattenShallow(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the input.');
  }

  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

export default flattenShallow;