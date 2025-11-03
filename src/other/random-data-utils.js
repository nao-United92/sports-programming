/**
 * Generates a random string of a specified length.
 * @param {number} length The desired length of the string.
 * @param {string} [chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'] The characters to use for the string.
 * @returns {string} The random string.
 */
export const randomString = (length, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Generates a random number within a specified range (inclusive).
 * @param {number} min The minimum value (inclusive).
 * @param {number} max The maximum value (inclusive).
 * @returns {number} A random number between min and max.
 */
export const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generates a random boolean value.
 * @returns {boolean} A random boolean (true or false).
 */
export const randomBoolean = () => {
  return Math.random() >= 0.5;
};
