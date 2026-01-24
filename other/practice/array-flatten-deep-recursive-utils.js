/**
 * Recursively flattens a nested array.
 *
 * @param {Array<any>} arr The array to flatten.
 * @returns {Array<any>} A new array with all sub-array elements concatenated into it recursively.
 */
function flattenDeepRecursive(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flattenDeepRecursive(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

export default flattenDeepRecursive;
