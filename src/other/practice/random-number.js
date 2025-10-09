/**
 * Returns a random number between `min` and `max` (inclusive).
 *
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {number} Returns the random number.
 */
export const randomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};
