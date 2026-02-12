/**
 * This function is like `pull` except that it accepts an array of values to remove.
 * Note: This function mutates `array`.
 *
 * @param {Array} arr The array to modify.
 * @param {Array} values The values to remove.
 * @returns {Array} Returns `array`.
 */
function pullAll(arr, values) {
  if (!Array.isArray(arr) || !Array.isArray(values)) {
    return arr;
  }

  const valuesToRemove = new Set(values);
  let i = 0;
  while (i < arr.length) {
    if (valuesToRemove.has(arr[i])) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
}

export { pullAll };
