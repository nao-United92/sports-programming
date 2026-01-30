// other/practice/string-kebab-case.js
/**
 * Converts a string to kebab case.
 *
 * @param {string} str The string to convert.
 * @returns {string} The kebab cased string.
 * @example
 *
 * stringKebabCase('hello world');
 * // => 'hello-world'
 *
 * stringKebabCase('fooBar');
 * // => 'foo-bar'
 *
 * stringKebabCase('baz_qux');
 * // => 'baz-qux'
 *
 * stringKebabCase('--Foo-Bar--');
 * // => 'foo-bar'
 *
 * stringKebabCase('some-html-DOM-element');
 * // => 'some-html-dom-element'
 *
 * stringKebabCase('HTML DOM Element');
 * // => 'html-dom-element'
 *
 * stringKebabCase('myHTMLComponent');
 * // => 'my-html-component'
 *
 * stringKebabCase('123FooBar');
 * // => '123-foo-bar'
 */
function stringKebabCase(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }

  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Insert hyphen between a lowercase/number and an uppercase
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // Handle acronyms like HTMLDOM -> HTML-DOM
    .replace(/[^a-zA-Z0-9]+/g, '-') // Replace non-alphanumeric with hyphen
    .toLowerCase()
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

module.exports = stringKebabCase;
