const toWords = (str) => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // camelCase to "camel Case"
    .replace(/[^a-zA-Z0-9]+/g, ' ') // Replace non-alphanumeric with space
    .toLowerCase()
    .trim()
    .split(' ');
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

/**
 * Converts `string` to PascalCase.
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the Pascal cased string.
 */
export const pascalCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) return '';
  return toWords(str).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
};

/**
 * Converts `string` to toggle case.
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the toggle cased string.
 */
export const toggleCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) return '';
  return str.split('').map(char => {
    if (char >= 'a' && char <= 'z') {
      return char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      return char.toLowerCase();
    }
    return char;
  }).join('');
};

const pascalCaseToWords = (str) => {  return str    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')    .replace(/([a-z\d])([A-Z])/g, '$1 $2')    .toLowerCase()    .split(' ');};/** * Converts `string` from PascalCase to kebab-case. * @param {string} [str=''] The string to convert. * @returns {string} Returns the kebab-cased string. */export const pascalCaseToKebabCase = (str) => {  if (typeof str !== 'string' || str.length === 0) return '';  return pascalCaseToWords(str).join('-');};/** * Converts `string` from PascalCase to snake_case. * @param {string} [str=''] The string to convert. * @returns {string} Returns the snake_cased string. */export const pascalCaseToSnakeCase = (str) => {  if (typeof str !== 'string' || str.length === 0) return '';  return pascalCaseToWords(str).join('_');};

/**
 * Converts `string` to sentence case.
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the sentence cased string.
 */
export const sentenceCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) return '';
  const lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};
