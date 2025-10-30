/**
 * Converts an object into an array of [key, value] pairs.
 *
 * @param {object} obj The object to convert.
 * @returns {Array<Array<any>>} Returns the new array of key-value pairs.
 */
function toPairs(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return [];
  }
  return Object.entries(obj);
}

module.exports = { toPairs };