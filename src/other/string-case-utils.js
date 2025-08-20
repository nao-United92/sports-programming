/**
 * Converts a string to snake_case.
 * @param {string} str The string to convert.
 * @returns {string} The snake_cased string.
 */
export function toSnakeCase(str) {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  const match = str.match(/[A-Z]/);
  if (!match) {
    return str;
  }
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

/**
 * Converts a string to kebab-case.
 * @param {string} str The string to convert.
 * @returns {string} The kebab-cased string.
 */
export function toKebabCase(str) {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  const match = str.match(/[A-Z]/);
  if (!match) {
    return str;
  }
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}