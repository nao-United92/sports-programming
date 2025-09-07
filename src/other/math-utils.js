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