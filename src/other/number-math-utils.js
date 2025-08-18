/**
 * Clamps a number within the inclusive lower and upper bounds.
 *
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export const clamp = (number, lower, upper) => {
  return Math.max(lower, Math.min(number, upper));
};

/**
 * Linearly interpolates between two numbers.
 *
 * @param {number} start The start number.
 * @param {number} end The end number.
 * @param {number} amount The interpolation amount (usually between 0 and 1).
 * @returns {number} Returns the interpolated number.
 */
export const lerp = (start, end, amount) => {
  return (1 - amount) * start + amount * end;
};
