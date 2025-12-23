/**
 * Removes the element at the specified index from an array.
 *
 * @param {Array<any>} arr The array to modify.
 * @param {number} index The index of the element to remove.
 * @returns {Array<any>} Returns the new array with the element removed.
 */
function removeNth(arr, index) {
  if (!Array.isArray(arr)) {
    return []; // Return an empty array if input is not an array
  }
  if (index < 0 || index >= arr.length) {
    return [...arr]; // Return a shallow copy if index is out of bounds
  }

  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

module.exports = removeNth;
