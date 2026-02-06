/**
 * Generates an array of numbers in a specified range.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The step value. Defaults to 1.
 * @returns {Array<number>} An array of numbers within the specified range.
 */
function range(start, end, step = 1) {
  if (typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number') {
    throw new TypeError('Expected start, end, and step to be numbers');
  }
  if (step === 0) {
    throw new Error('Step cannot be zero');
  }
  if (step > 0 && start > end || step < 0 && start < end) {
    return [];
  }

  const result = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else { // step < 0
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

module.exports = range;
