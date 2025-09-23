/**
 * Generates a random integer within a specified range (inclusive).
 *
 * @param {number} min The minimum value (inclusive).
 * @param {number} max The maximum value (inclusive).
 * @returns {number} A random integer between min and max.
 * @throws {Error} If min or max are not numbers, or if min is greater than max.
 */
export function getRandomIntInRange(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Min and max must be numbers.');
  }
  if (min > max) {
    throw new Error('Min cannot be greater than max.');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
