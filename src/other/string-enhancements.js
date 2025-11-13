/**
 * Converts a string to camelCase.
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
const camelCase = (str) => {
  if (str == null) {
    return '';
  }
  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
    .replace(/[^A-Za-z0-9]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a} ${b}`)
    .toLowerCase()
    .replace(/ (\w)/g, (m, w) => w.toUpperCase());
};

/**
 * Converts a string to kebab-case.
 * @param {string} str The string to convert.
 * @returns {string} The kebab-cased string.
 */
const kebabCase = (str) => {
    if (str == null) {
    return '';
  }
  const matched = String(str).match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
  if (!matched) {
    return '';
  }
  return matched
    .map(x => x.toLowerCase())
    .join('-');
};


/**
 * Truncates a string up to a specified length.
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the string.
 * @param {string} [omission='...'] The string to append to the truncated string.
 * @returns {string} The truncated string.
 */
const truncate = (str, length, omission = '...') => {
  if (str == null) {
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
};

module.exports = { camelCase, kebabCase, truncate };
