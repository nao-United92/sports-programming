/**
 * Generates a random floating-point number within a specified range.
 * @param {number} [min=0] The minimum value (inclusive).
 * @param {number} [max=1] The maximum value (exclusive).
 * @returns {number} The random number.
 */
export function random(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}

/**
 * Generates a random integer within a specified range.
 * @param {number} min The minimum value (inclusive).
 * @param {number} max The maximum value (inclusive).
 * @returns {number} The random integer.
 */
export function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
