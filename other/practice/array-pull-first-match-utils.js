/**
 * Removes the first occurrence of `value` from `arr`.
 *
 * @param {Array<any>} arr The array to modify.
 * @param {any} value The value to remove.
 * @returns {Array<any>} Returns the new array with the value removed.
 */
function pullFirstMatch(arr, value) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const index = arr.indexOf(value);
  if (index === -1) {
    return [...arr]; // Value not found, return shallow copy
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

module.exports = pullFirstMatch;
