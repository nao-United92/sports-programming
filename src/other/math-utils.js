/**
 * Clamps a value between an upper and lower bound.
 * @param {number} value The value to clamp.
 * @param {number} min The lower bound.
 * @param {number} max The upper bound.
 * @returns {number} The clamped value.
 */
export const clamp = (value, min, max) => {
  return Math.max(min, Math.min(value, max));
};

/**
 * Linearly interpolates between two values.
 * @param {number} start The start value.
 * @param {number} end The end value.
 * @param {number} amount The amount to interpolate (0.0 to 1.0).
 * @returns {number} The interpolated value.
 */
export const lerp = (start, end, amount) => {
  return start + (end - start) * amount;
};

/**
 * Calculates the sum of the given numbers.
 * @param {...number} nums The numbers to sum.
 * @returns {number} The sum of the numbers.
 */
export const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);

/**
 * Calculates the average of the given numbers.
 * @param {...number} nums The numbers to average.
 * @returns {number} The average of the numbers.
 */
export const average = (...nums) => {
  if (nums.length === 0) {
    return 0;
  }
  return sum(...nums) / nums.length;
};