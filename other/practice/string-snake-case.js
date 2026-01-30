// other/practice/string-snake-case.js
/**
 * Converts a string to snake case.
 *
 * @param {string} str The string to convert.
 * @returns {string} The snake cased string.
 * @example
 *
 * stringSnakeCase('hello world');
 * // => 'hello_world'
 *
 * stringSnakeCase('fooBar');
 * // => 'foo_bar'
 *
 * stringSnakeCase('baz-qux');
 * // => 'baz_qux'
 *
 * stringSnakeCase('--Foo_Bar--');
 * // => 'foo_bar'
 *
 * stringSnakeCase('some-html-DOM-element');
 * // => 'some_html_dom_element'
 *
 * stringSnakeCase('HTML DOM Element');
 * // => 'html_dom_element'
 */
function stringSnakeCase(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }

  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2') // Insert underscore between a lowercase/number and an uppercase
    .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2') // Handle acronyms like HTMLDOM -> HTML_DOM
    .replace(/[^a-zA-Z0-9]+/g, '_') // Replace non-alphanumeric with underscore
    .toLowerCase()
    .replace(/^_|_$/g, ''); // Remove leading/trailing underscores
}

module.exports = stringSnakeCase;
