/**
 * Recursively flattens an array.
 *
 * @param {Array} arr The array to flatten.
 * @returns {Array} The new flattened array.
 */
function flattenDeep(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenDeep(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

export { flattenDeep };
