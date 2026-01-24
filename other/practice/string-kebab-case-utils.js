/**
 * Converts a string to kebab case.
 * Example: "Foo Bar" -> "foo-bar", "fooBar" -> "foo-bar", "__FOO_BAR__" -> "foo-bar"
 *
 * @param {string} str The string to convert.
 * @returns {string} The kebab-cased string.
 */
function kebabCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the input.');
  }
  if (str.length === 0) {
    return '';
  }

  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase -> camel-Case
    .replace(/([A-Z]{2,})([A-Z][a-z])/g, '$1-$2') // HTTPResponseCode -> HTTP-ResponseCode
    .replace(/[^a-zA-Z0-9]+/g, '-') // Replace non-alphanumeric (including spaces, underscores) with hyphen
    .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, '') // Trim leading/trailing hyphens
    .toLowerCase();
}

export default kebabCase;
