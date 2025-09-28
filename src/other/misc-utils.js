/**
 * Truncates a string if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with an omission string.
 *
 * @param {string} str The string to truncate.
 * @param {number} length The maximum string length.
 * @param {string} [omission='...'] The string to indicate text is omitted.
 * @returns {string} Returns the truncated string.
 */
export function truncate(str, length, omission = '...') {
  if (str === null || str === undefined) {
    return '';
  }
  const strLength = String(str).length;
  const omissionLength = String(omission).length;

  if (length >= strLength) {
    return String(str);
  }

  if (length <= omissionLength) {
    return omission;
  }

  return String(str).slice(0, length - omissionLength) + omission;
}

/**
 * Creates an object with keys and values inverted.
 *
 * @param {object} obj The object to invert.
 * @returns {object} Returns the new inverted object.
 */
export function invert(obj) {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
}
