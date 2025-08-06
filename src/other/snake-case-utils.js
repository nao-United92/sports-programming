/**
 * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 */
export function snakeCase(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .split(/[\s_-]+/)
    .map(word => word.toLowerCase())
    .join('_');
}