const wordSeparators = /[^a-zA-Z0-9]+(.)?|([a-z])([A-Z])/g;
const upperCase = /[A-Z]/;

const toWords = (str) => {
  const words = [];
  str.replace(wordSeparators, (match, chr, lower, upper) => {
    if (lower) {
      words.push(lower);
    }
    if (chr) {
      words.push(chr.toUpperCase());
    } else if (upper) {
      words.push(upper.toLowerCase());
    }
  });
  return words;
};

/**
 * Converts `string` to camelCase.
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 */
export const camelCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) return '';
  const words = toWords(str);
  return words.map((word, index) => 
    index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('');
};

/**
 * Converts `string` to kebab-case.
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 */
export const kebabCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) return '';
  return toWords(str).map(word => word.toLowerCase()).join('-');
};

/**
 * Converts `string` to snake_case.
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 */
export const snakeCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) return '';
  return toWords(str).map(word => word.toLowerCase()).join('_');
};

/**
 * Converts `string` to Start Case.
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the start cased string.
 */
export const startCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) return '';
  return toWords(str).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};
