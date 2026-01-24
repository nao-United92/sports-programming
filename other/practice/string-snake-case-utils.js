/**
 * Converts a string to snake_case.
 * Example: "foo bar" -> "foo_bar", "foo-bar" -> "foo_bar", "fooBar" -> "foo_bar"
 *
 * @param {string} str The string to convert.
 * @returns {string} The snake_cased string.
 */
function snakeCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the input.');
  }
  if (str.length === 0) {
    return '';
  }

  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2') // camelCase, PascalCase
    .replace(/[^a-zA-Z0-9]+/g, '_')     // spaces, hyphens and other non-alphanumeric to underscores
    .replace(/^_|_$/g, '')              // trim leading/trailing underscores
    .toLowerCase();
}

export default snakeCase;