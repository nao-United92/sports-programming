/**
 * Creates an array of numbers (positive and/or negative) progressing from `start` up to, but not including, `end`.
 * A `step` of `-1` is used if a negative `step` is specified and `start` is greater than `end`.
 * If `end` is not specified, `start` is set to `0` with `end` then set to the specified `start`.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {number[]} Returns the new array of numbers.
 */
export const range = (start = 0, end, step = 1) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const result = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }
  return result;
};

/**
 * Creates an array of `size` with each element initialized to `value`.
 * @param {number} size The number of elements in the array.
 * @param {*} value The value to fill the array with.
 * @returns {Array} Returns the new filled array.
 */
export const fill = (size, value) => {
  return Array(size).fill(value);
};
