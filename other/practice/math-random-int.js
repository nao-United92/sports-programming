/**
 * Generates a random integer between min (inclusive) and max (exclusive).
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} The random integer.
 */
export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
