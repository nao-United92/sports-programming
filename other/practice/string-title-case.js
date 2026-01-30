// other/practice/string-title-case.js
/**
 * Converts a string to title case.
 * Capitalizes the first letter of each word in a string, and lowercases the rest of the word.
 * A "word" is defined as a sequence of alphanumeric characters.
 *
 * @param {string} str The string to convert.
 * @returns {string} The title cased string.
 * @example
 *
 * stringTitleCase('hello world');
 * // => 'Hello World'
 *
 * stringTitleCase('foo-bar baz');
 * // => 'Foo-Bar Baz'
 *
 * stringTitleCase('the quick brown fox');
 * // => 'The Quick Brown Fox'
 *
 * stringTitleCase('an_under_scored_string');
 * // => 'An_Under_Scored_String'
 *
 * stringTitleCase('HTML dom Element');
 * // => 'Html Dom Element'
 */
function stringTitleCase(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }

  // Use a regex to match each "word" (sequence of alphanumeric characters)
  // and apply a replacer function to it.
  return str.replace(/[a-zA-Z0-9]+/g, (word) => {
    // Capitalize the first letter and lowercase the rest of the word
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

module.exports = stringTitleCase;
