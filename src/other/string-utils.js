/**
 * Converts a string to snake_case.
 * @param {string} str The string to convert.
 * @returns {string} The snake_cased string.
 */
export function toSnakeCase(str) {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  const result = str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  return result.startsWith('_') ? result.substring(1) : result;
}

/**
 * Converts the first character of `string` to upper case and the remaining to lower case.
 *
 * @param {string} str The string to capitalize.
 * @returns {string} Returns the capitalized string.
 */
export function capitalize(str) {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Converts `string` to kebab case.
 *
 * @param {string} str The string to convert.
 * @returns {string} Returns the kebab cased string.
 */
export function kebabCase(str) {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Truncates a string to a specified length, appending a suffix if truncated.
 *
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the string.
 * @param {string} [suffix='...'] The suffix to append if the string is truncated.
 * @returns {string} The truncated string.
 */
export const truncate = (str, length, suffix = '...') => {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length - suffix.length) + suffix;
};

/**
 * Converts a string to a URL-friendly slug.
 *
 * @param {string} str The string to convert.
 * @returns {string} The slugified string.
 */
export const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};
