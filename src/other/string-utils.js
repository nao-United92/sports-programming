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
