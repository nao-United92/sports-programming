
// This implementation is inspired by lodash, for robust word detection.
const words = (str) => str.match(/[A-Z]{2,}(?=[A-Z][a-z]+|[0-9])|[A-Z]?[a-z]+|[A-Z]+|[0-9]+/g) || [];

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/Camel_case).
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 */
export const toCamelCase = (string = '') => {
    if (string === null || string === undefined) return '';
    const w = words(String(string));
    return w.reduce((result, word, index) => {
        word = word.toLowerCase();
        return result + (index ? word.charAt(0).toUpperCase() + word.slice(1) : word);
    }, '');
}
