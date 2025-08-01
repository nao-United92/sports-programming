
/**
 * Converts `string` to snake case.
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 */
export function snakeCase(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2')
    .toLowerCase();
}
