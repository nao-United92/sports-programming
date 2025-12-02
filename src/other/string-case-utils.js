/**
 * Capitalizes the first letter of a string.
 * @param {string} str The string to capitalize.
 * @returns {string} The capitalized string.
 */
export const capitalize = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Converts a string to camelCase.
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
export const toCamelCase = (str) => {
  if (typeof str !== 'string' || !str) return '';
  let s =
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

/**
 * Converts a string to kebab-case.
 * @param {string} str The string to convert.
 * @returns {string} The kebab-cased string.
 */
export const toKebabCase = (str) => {
  if (typeof str !== 'string' || !str) return '';
  return (
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-')
  );
};

/**
 * Converts a string to snake_case.
 * @param {string} str The string to convert.
 * @returns {string} The snake_cased string.
 */
export const toSnakeCase = (str) => {
    if (typeof str !== 'string' || !str) return '';
    return (
      str &&
      str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_')
    );
};
