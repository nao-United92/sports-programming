
/**
 * Converts `string` to kebab case.
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 */
export function kebabCase(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase();
}
