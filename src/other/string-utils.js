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
