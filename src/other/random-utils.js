/**
 * Generates a random integer within a given range (inclusive).
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {number} A random integer between min and max.
 */
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Generates a random string of a given length from a specified set of characters.
 * @param {number} length The length of the string.
 * @param {string} [chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'] The characters to use.
 * @returns {string} The random string.
 */
const randomString = (length, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
  let result = '';
  const charactersLength = chars.length;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = { randomInteger, randomString };
