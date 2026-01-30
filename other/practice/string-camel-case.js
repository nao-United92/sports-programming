// other/practice/string-camel-case.js
/**
 * Converts a string to camel case.
 *
 * @param {string} str The string to convert.
 * @returns {string} The camel cased string.
 * @example
 *
 * stringCamelCase('hello world');
 * // => 'helloWorld'
 *
 * stringCamelCase('foo-bar');
 * // => 'fooBar'
 *
 * stringCamelCase('baz_qux');
 * // => 'bazQux'
 *
 * stringCamelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * stringCamelCase('foo bar baz');
 * // => 'fooBarBaz'
 *
 * stringCamelCase('alreadyCamelCase');
 * // => 'alreadyCamelCase'
 *
 * stringCamelCase('HTML DOM');
 * // => 'htmlDom'
 */
function stringCamelCase(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }

  return str.replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
            .replace(/^./, (match) => match.toLowerCase());
}

module.exports = stringCamelCase;
