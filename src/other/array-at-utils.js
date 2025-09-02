/**
 * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
 *
 * @param {Array} array The array to query.
 * @param {number} index The index of the element to return.
 * @returns {*} Returns the element at index `n`.
 */
export const at = (array, index) => {
  if (!Array.isArray(array)) {
    return undefined;
  }
  const len = array.length;
  let effectiveIndex = Math.trunc(index) || 0;

  if (effectiveIndex < 0) {
    effectiveIndex += len;
  }

  if (effectiveIndex < 0 || effectiveIndex >= len) {
    return undefined;
  }

  return array[effectiveIndex];
};
