/**
 * Removes all given values from `array` using `SameValueZero` for equality comparisons.
 * Note: This function mutates `array`.
 *
 * @param {Array} arr The array to modify.
 * @param {...*} values The values to remove.
 * @returns {Array} Returns `array`.
 */
function pull(arr, ...values) {
  if (!Array.isArray(arr)) {
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

export { pull };
