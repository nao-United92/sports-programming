
/**
 * Flattens an array up to the specified depth.
 *
 * @param {Array} arr The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} The new flattened array.
 */
export const flatten = (arr, depth = 1) => {
  if (!Array.isArray(arr) || depth < 0) {
    return [];
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result = result.concat(flatten(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Creates an array with all falsey values removed.
 * The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @param {Array} arr The array to compact.
 * @returns {Array} Returns the new array of compacted values.
 */
export const compact = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(Boolean);
};
