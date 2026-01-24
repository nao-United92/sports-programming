/**
 * Converts a string to camelCase.
 * Example: "Foo Bar" -> "fooBar", "foo-bar" -> "fooBar", "__FOO_BAR__" -> "fooBar"
 *
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
function camelCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the input.');
  }
  if (str.length === 0) {
    return '';
  }

  const words = str
    .replace(/[^a-zA-Z0-9]+(.)?/g, ' $1') // Replace non-alphanumeric separators with spaces, capturing next char
    .replace(/([A-Z])/g, ' $1')          // Add space before uppercase letters
    .split(/\s+/)                       // Split by multiple spaces
    .filter(Boolean);                   // Remove empty strings

  if (words.length === 0) {
    return '';
  }

  let result = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return result;
}

export default camelCase;