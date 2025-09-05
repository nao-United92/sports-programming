/**
 * Generates a simple hash from a string using the DJB2 algorithm.
 * This is a non-cryptographic hash function suitable for tasks like
 * generating unique IDs or simple caching keys.
 *
 * @param {string} str The input string to hash.
 * @returns {number} The generated hash as a 32-bit integer.
 */
export function stringToHash(str) {
  let hash = 5381;
  let i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations on 32-bit signed integers.
   * Therefore, the result of the operation is always between -(2^31) and 2^31 - 1.
   * To get a positive 32-bit integer, we can use the bitwise OR operator with 0.
   */
  return hash >>> 0;
}
