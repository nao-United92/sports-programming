/**
 * Removes all given values from `array`. Modifies the original array.
 * The order of removed elements is not guaranteed to be preserved relative to each other,
 * but the order of remaining elements is.
 *
 * @param {Array<any>} arr The array to modify.
 * @param {...any} values The values to remove.
 * @returns {Array<any>} The modified array.
 */
function arrayPullElements(arr, ...values) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }

  const valuesToRemove = new Set(values);
  let writeIndex = 0;

  for (let readIndex = 0; readIndex < arr.length; readIndex++) {
    if (!valuesToRemove.has(arr[readIndex])) {
      arr[writeIndex] = arr[readIndex];
      writeIndex++;
    }
  }

  // Truncate the array to its new length
  arr.length = writeIndex;

  return arr;
}

module.exports = arrayPullElements;
