/**
 * Fills elements of `array` with `value` from `start` up to, but not
 * including, `end`.
 *
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns `array`.
 */
export const fill = (array, value, start = 0, end) => {
  if (!Array.isArray(array)) {
    return [];
  }
  const length = array.length;
  const actualStart = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  const actualEnd = end === undefined || end > length ? length : (end < 0 ? Math.max(length + end, 0) : Math.min(end, length));

  for (let i = actualStart; i < actualEnd; i++) {
    array[i] = value;
  }
  return array;
};
