/**
 * Converts a string to camelCase.
 *
 * @param {string} str The string to convert.
 * @returns {string} The camelCase string.
 */
export const toCamelCase = (str) => {
  if (!str) return "";
  // snake_case or kebab-case to camelCase
  let s = str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
  // remove leading/trailing separators
  s = s.replace(/^[-_]+|[-_]+$/g, '');
  // ensure first character is lowercase
  return s.charAt(0).toLowerCase() + s.slice(1);
};
