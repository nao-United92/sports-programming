/**
 * Converts a string to kebab-case.
 * @param {string} str The string to convert.
 * @returns {string} The kebab-cased string.
 */
export function kebabCase(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }

  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}