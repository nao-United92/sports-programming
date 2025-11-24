/**
 * Converts a string to snake_case.
 * @param {string} str The string to convert.
 * @returns {string} The snake_cased string.
 */
export function snakeCase(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }

  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9_]+/g, '_')
    .replace(/^_+|_+$|(?<=_)(?=_+)/g, '');
}