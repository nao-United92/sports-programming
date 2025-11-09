/**
 * Creates an array of numbers (positive and/or negative) progressing from `start` up to, but not including, `end`.
 * A `step` of `-1` is used if a negative `step` is specified and `start` is greater than `end`.
 * If `end` is not specified, it's set to `start` and `start` is then set to `0`.
 *
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array<number>} Returns the new array of numbers.
 */
const range = (start = 0, end, step = 1) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (step === 0) {
    return [];
  }

  const result = [];
  const isPositiveStep = step > 0;

  if (isPositiveStep) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }

  return result;
};

module.exports = { range };