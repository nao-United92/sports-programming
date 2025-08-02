/**
 * Generates a unique ID string.
 * @param {string} [prefix=''] The prefix to prepend to the ID.
 * @returns {string} The unique ID string.
 */
let idCounter = 0;
export function uniqueId(prefix = '') {
  idCounter++;
  return `${prefix}${idCounter}`;
}
