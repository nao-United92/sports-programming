/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @param {Array} arr The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 */
function compact(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(Boolean);
}

export { compact };
