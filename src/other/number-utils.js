// src/other/number-utils.js

/**
 * Clamps a number within an inclusive range.
 *
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound of the range.
 * @param {number} upper The upper bound of the range.
 * @returns {number} The clamped number.
 */
const clamp = (number, lower, upper) => {
  if (typeof number !== 'number' || typeof lower !== 'number' || typeof upper !== 'number') {
    return NaN; // Or throw an error, depending on desired behavior for invalid input
  }
  return Math.max(lower, Math.min(number, upper));
};

module.exports = {
  clamp,
};