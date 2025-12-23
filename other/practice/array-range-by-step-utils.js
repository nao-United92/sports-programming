/**
 * Creates an array of numbers (positive and/or negative) progressing from `start` up to,
 * but not including, `end`. A `step` of `-1` is used if a negative `start` is specified
 * without an `end` or `step`.
 *
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array<number>} Returns the new array of numbers.
 */
function range(start = 0, end, step = 1) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  // Handle step for negative ranges if not explicitly provided
  if (step === 1 && start > end) {
    step = -1;
  }

  const result = [];
  if (step === 0) {
      return [];
  }
  if (step > 0) {
    if (start >= end) { // If start is already past or equal to end for positive step
        return [];
    }
    // New check: if adding step to start immediately exceeds end, it means no numbers can be generated.
    if (start + step > end && start < end) {
        return [];
    }
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else if (step < 0) {
    if (start <= end) { // If start is already past or equal to end for negative step
        return [];
    }
    // New check: if adding step to start immediately falls below end, it means no numbers can be generated.
    if (start + step < end && start > end) {
        return [];
    }
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }
  return result;
}

module.exports = range;
